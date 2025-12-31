import { Github, Linkedin, Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation("global");
  const year = new Date().getFullYear();

  // Función para copiar al portapapeles
  const handleCopyEmail = () => {
    const email = "MTB.juliomarquinez@hotmail.com";
    navigator.clipboard.writeText(email);
    alert(`Email copiado: ${email}`);
  };

  return (
    <footer className="w-full py-8 bg-background border-t border-white/10 snap-align-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        
        <div className="text-gray-400 text-sm">
          © {year} Julio Marquinez. {t("footer.rights", "Todos los derechos reservados.")}
        </div>

        <div className="flex space-x-6 items-center">
          
          {/* GitHub */}
          <a 
            href="https://github.com/JulioMarquinez" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>

          {/* LinkedIn */}
          <a 
            href="https://www.linkedin.com/in/julio-marquinez/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>

          {/* Email (Botón de Copiar) */}
          <button 
            onClick={handleCopyEmail}
            className="text-gray-400 hover:text-red-400 transition-colors duration-300 transform hover:scale-110 focus:outline-none cursor-pointer"
            title="Copiar Email"
            aria-label="Copiar Email"
          >
            <Mail size={20} />
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;