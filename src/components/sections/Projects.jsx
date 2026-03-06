import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaReact } from 'react-icons/fa';
import { SiTailwindcss, SiVite } from 'react-icons/si';

function Projects() {
  const [isFrontRevealed, setIsFrontRevealed] = useState(false);

  const techStack = [
    { Icon: FaReact, hoverColor: 'group-hover:text-cyan-400' },
    { Icon: SiTailwindcss, hoverColor: 'group-hover:text-teal-400' },
    { Icon: SiVite, hoverColor: 'group-hover:text-indigo-400' }
  ];

  return (
    <section id="projects" className="min-h-screen w-full flex flex-col md:flex-row">
      <div className="relative w-full md:w-1/2 h-[50vh] md:h-screen overflow-hidden border-r border-white/10">
        <div
          className="absolute top-16 left-0 w-full h-32 z-50 cursor-pointer"
          onMouseEnter={() => setIsFrontRevealed(true)}
          onMouseLeave={() => setIsFrontRevealed(false)}
        />

        <motion.div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://picsum.photos/seed/frontend/1000/1200)' }}
          animate={{
            filter: isFrontRevealed ? 'blur(0px) brightness(1)' : 'blur(3px) brightness(0.4)',
            scale: isFrontRevealed ? 1.05 : 1,
          }}
          transition={{ duration: 0.6 }}
        />

        <motion.div className="absolute bottom-0 left-0 w-full p-8 z-40 flex flex-col justify-end" animate={{ opacity: isFrontRevealed ? 0 : 1, y: isFrontRevealed ? 20 : 0 }}>
          <h3 className="text-3xl font-bold">Arquitectura Frontend</h3>
          <p className="mt-3 text-white/80 max-w-md">
            Interfaces rápidas, accesibles y con un diseño limpio para una experiencia de
            usuario sólida y consistente.
          </p>

          <div className="flex gap-4 mt-6">
            {techStack.map((tech, index) => {
              // Es crucial desestructurar el componente con mayúscula inicial para que React lo reconozca
              const Icon = tech.Icon;
              return (
                <div 
                  key={index} 
                  className="p-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-blue-500/50 hover:scale-110 transition-all duration-300 backdrop-blur-md flex items-center justify-center group cursor-default"
                >
                  <Icon className={`text-gray-400 transition-colors text-2xl ${tech.hoverColor}`} />
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>

      <div className="relative w-full md:w-1/2 h-[50vh] md:h-screen bg-black/50 flex flex-col items-center justify-center">
        <p className="text-white/50">Sistema Backend (En construcción...)</p>
      </div>
    </section>
  );
}

export default Projects;
