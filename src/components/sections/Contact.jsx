import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import ScrollReveal from '../ui/ScrollReveal';

export default function Contact() {
  const socials = [
    { 
      name: 'Email', 
      icon: FaEnvelope, 
      url: 'mailto:MTB.JulioMarquinez@hotmail.com',
      color: 'group-hover:text-red-400' 
    },
    { 
      name: 'LinkedIn', 
      icon: FaLinkedin, 
      url: '[https://www.linkedin.com/in/julio-marquinez/](https://www.linkedin.com/in/julio-marquinez/)',
      color: 'group-hover:text-blue-400' 
    },
    { 
      name: 'GitHub', 
      icon: FaGithub, 
      url: '[https://github.com/JulioMarquinez](https://github.com/JulioMarquinez)',
      color: 'group-hover:text-gray-300' 
    }
  ];

  return (
    <section id="contact" className="min-h-screen w-full flex flex-col md:flex-row bg-transparent">
      
      {/* Lado Izquierdo (40%): Perfil y Redes */}
      <div className="w-full md:w-2/5 flex flex-col items-center justify-center p-8 relative overflow-hidden">
        {/* Decoración de fondo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-green-500/10 blur-[100px] rounded-full pointer-events-none"></div>
        
        <ScrollReveal direction="left" once={false} className="relative z-10 flex flex-col items-center md:pl-16">
          {/* Foto Circular */}
          <div className="w-40 h-40 md:w-56 md:h-56 rounded-full border-4 border-white/10 overflow-hidden mb-6 shadow-2xl">
            <img 
              src="[https://ui-avatars.com/api/?name=Julio+Marquinez&background=0D8B4E&color=fff&size=200](https://ui-avatars.com/api/?name=Julio+Marquinez&background=0D8B4E&color=fff&size=200)" 
              alt="Julio Marquinez" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Tarjetas de Redes (Fila horizontal, solo iconos) */}
          <div className="flex flex-row gap-4 justify-center">
            {socials.map((social, idx) => {
              const Icon = social.icon;
              return (
                <a 
                  key={idx} 
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="flex items-center justify-center w-14 h-14 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-white/30 hover:scale-110 transition-all duration-300 backdrop-blur-md group"
                >
                  <Icon className={`text-2xl text-gray-400 transition-colors ${social.color}`} />
                </a>
              );
            })}
          </div>
        </ScrollReveal>
      </div>

      {/* Lado Derecho (60%): Contenedor principal */}
      <div className="w-full md:w-3/5 flex flex-col justify-center items-center p-8 md:p-16 relative">
        
        {/* El Formulario ocupa el 60% de este lado derecho y está centrado */}
        <ScrollReveal direction="right" once={false} className="w-full md:w-[60%] flex flex-col">
          
          {/* Título */}
          <div className="mb-8 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-2 border-b-4 border-[#0f9d58] inline-block pb-2">Hablemos</h2>
            <p className="text-gray-400 text-sm">Si tenés un proyecto en mente o querés sumarme a tu equipo, escribime.</p>
          </div>

          {/* Formulario (UI) */}
          <form className="flex flex-col gap-5 bg-[#111827]/80 backdrop-blur-md p-6 rounded-2xl border border-white/5 shadow-2xl" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-bold text-gray-400 tracking-wider">NOMBRE</label>
              <input type="text" placeholder="Tu nombre" className="w-full bg-[#1F2937]/80 border border-white/10 rounded-lg p-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#0f9d58] focus:ring-1 focus:ring-[#0f9d58] transition-all" />
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-bold text-gray-400 tracking-wider">EMAIL</label>
              <input type="email" placeholder="tu@email.com" className="w-full bg-[#1F2937]/80 border border-white/10 rounded-lg p-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#0f9d58] focus:ring-1 focus:ring-[#0f9d58] transition-all" />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-bold text-gray-400 tracking-wider">ASUNTO</label>
              <input type="text" placeholder="Asunto del mensaje" className="w-full bg-[#1F2937]/80 border border-white/10 rounded-lg p-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#0f9d58] focus:ring-1 focus:ring-[#0f9d58] transition-all" />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-bold text-gray-400 tracking-wider">MENSAJE</label>
              <textarea placeholder="Escribe tu mensaje..." rows="3" className="w-full bg-[#1F2937]/80 border border-white/10 rounded-lg p-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#0f9d58] focus:ring-1 focus:ring-[#0f9d58] transition-all resize-none"></textarea>
            </div>

            <button type="submit" className="w-full bg-[#0f9d58] hover:bg-[#0b8043] text-white font-bold py-3 rounded-lg transition-colors mt-2 shadow-lg shadow-green-900/20 text-sm">
              Enviar Mensaje
            </button>
          </form>
        </ScrollReveal>
      </div>

    </section>
  );
}

