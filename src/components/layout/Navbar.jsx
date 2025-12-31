import { useState } from 'react';
import { Menu, X, Github, Linkedin } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { t, i18n } = useTranslation("global");
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Función para cambiar idioma
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setIsOpen(false);
  };

  const navLinks = [
    { name: t("header.home"), href: "#home" },
    { name: t("header.about"), href: "#about" },
    { name: t("header.projects"), href: "#projects" },
    { name: t("header.contact"), href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo / Nombre */}
          <a 
            href="#home" 
            className="flex-shrink-0 font-bold text-xl tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 cursor-pointer hover:opacity-80 transition-opacity"
          >
            Julio Marquinez
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="hover:text-primary transition-colors duration-300 text-sm font-medium"
                >
                  {link.name}
                </a>
              ))}
              
              {/* Botones de Idioma */}
              <div className="flex space-x-2 border-l border-gray-700 pl-4">
                <button onClick={() => changeLanguage('es')} className={`text-sm ${i18n.language === 'es' ? 'text-primary font-bold' : 'text-gray-400 hover:text-white'}`}>ES</button>
                <button onClick={() => changeLanguage('en')} className={`text-sm ${i18n.language === 'en' ? 'text-primary font-bold' : 'text-gray-400 hover:text-white'}`}>EN</button>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Desplegable) */}
      {isOpen && (
        <div className="md:hidden bg-background border-b border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-800 hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="flex space-x-4 px-3 py-2 mt-2 border-t border-gray-700">
               <button onClick={() => changeLanguage('es')} className={i18n.language === 'es' ? 'text-primary' : 'text-gray-400'}>ES</button>
               <button onClick={() => changeLanguage('en')} className={i18n.language === 'en' ? 'text-primary' : 'text-gray-400'}>EN</button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;