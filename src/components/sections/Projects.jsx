import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaJava, FaReact } from 'react-icons/fa';
import { SiMysql, SiSpringboot, SiTailwindcss, SiVite } from 'react-icons/si';

function Projects() {
  const [isFrontRevealed, setIsFrontRevealed] = useState(false);
  const [activeEndpoint, setActiveEndpoint] = useState(0);
  const [displayedCode, setDisplayedCode] = useState('');

  const techStack = [
    { Icon: FaReact, hoverColor: 'group-hover:text-cyan-400' },
    { Icon: SiTailwindcss, hoverColor: 'group-hover:text-teal-400' },
    { Icon: SiVite, hoverColor: 'group-hover:text-indigo-400' }
  ];

  const endpoints = [
    { method: 'GET', path: '/api/v1/users', code: '@GetMapping("/users")\npublic ResponseEntity<List<UserDto>> getAllUsers() {\n    log.info("Fetching all active users");\n    return ResponseEntity.ok(userService.findAll());\n}' },
    { method: 'POST', path: '/api/v1/auth', code: '@PostMapping("/auth")\npublic ResponseEntity<TokenResponse> login(@Valid @RequestBody LoginRequest req) {\n    Authentication auth = authManager.authenticate(\n        new UsernamePasswordAuthenticationToken(req.getEmail(), req.getPassword())\n    );\n    return ResponseEntity.ok(tokenProvider.generateToken(auth));\n}' },
    { method: 'PUT', path: '/api/v1/data/{id}', code: '@PutMapping("/data/{id}")\n@PreAuthorize("hasRole(\'ADMIN\')")\npublic ResponseEntity<DataDto> updateData(@PathVariable Long id, @RequestBody DataDto dto) {\n    return ResponseEntity.ok(dataService.update(id, dto));\n}' }
  ];

  useEffect(() => {
    const fullCode = endpoints[activeEndpoint].code;
    let currentIndex = 0;
    setDisplayedCode('');

    const typingInterval = setInterval(() => {
      if (currentIndex <= fullCode.length) {
        setDisplayedCode(fullCode.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        // Espera 2.5 segundos cuando termina de tipear antes de pasar al siguiente
        setTimeout(() => {
          setActiveEndpoint((prev) => (prev + 1) % endpoints.length);
        }, 2500);
      }
    }, 40); // Velocidad de tipeo en ms

    return () => clearInterval(typingInterval);
  }, [activeEndpoint]);

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

      <div className="relative w-full md:w-1/2 h-[50vh] md:h-screen bg-[#0d1117] flex flex-col border-t md:border-t-0 md:border-l border-white/10 overflow-hidden">
        
        {/* Fondo: Terminal de Código */}
        <div className="absolute inset-0 p-8 font-mono text-sm md:text-base text-green-400/70 opacity-50 whitespace-pre-wrap flex flex-col justify-center">
          {displayedCode}
          <span className="animate-pulse w-2 h-5 bg-green-400 inline-block ml-1 align-middle"></span>
        </div>

        {/* Frente: Interfaz */}
        <div className="relative z-10 w-full h-full p-8 flex flex-col">
          
          {/* Tarjetas de Endpoints (Simulador Postman) */}
          <div className="flex flex-col gap-3 mt-16 md:mt-24">
            {endpoints.map((ep, idx) => (
              <div 
                key={idx}
                className={`flex items-center gap-4 p-3 rounded-lg border transition-all duration-500 backdrop-blur-sm ${
                  activeEndpoint === idx 
                    ? 'bg-white/10 border-green-500/50 scale-[1.02] shadow-[0_0_15px_rgba(34,197,94,0.2)]' 
                    : 'bg-black/20 border-white/5 opacity-50'
                }`}
              >
                <span className={`font-bold text-xs px-2 py-1 rounded ${ep.method === 'GET' ? 'bg-blue-500/20 text-blue-400' : ep.method === 'POST' ? 'bg-green-500/20 text-green-400' : 'bg-orange-500/20 text-orange-400'}`}>
                  {ep.method}
                </span>
                <span className="font-mono text-sm text-gray-300">{ep.path}</span>
              </div>
            ))}
          </div>

          {/* Tarjeta de Descripción Backend */}
          <div className="mt-auto mb-6 p-6 bg-white/5 border border-white/10 rounded-xl backdrop-blur-md">
            <h3 className="text-xl font-bold text-white mb-2">Arquitectura Backend</h3>
            <p className="text-gray-400 text-sm">
              API RESTful robusta y escalable construida con Spring Boot. Implementación de seguridad con JWT, arquitectura multicapa y consultas optimizadas a base de datos relacional.
            </p>
          </div>

          {/* Tecnologías Backend */}
          <div className="flex gap-4">
            {[
              { Icon: FaJava, hoverColor: 'group-hover:text-orange-500' },
              { Icon: SiSpringboot, hoverColor: 'group-hover:text-green-500' },
              { Icon: SiMysql, hoverColor: 'group-hover:text-blue-500' }
            ].map((tech, index) => {
              const Icon = tech.Icon;
              return (
                <div key={index} className="p-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-white/30 hover:scale-110 transition-all duration-300 backdrop-blur-md flex items-center justify-center group cursor-default">
                  <Icon className={`text-gray-400 transition-colors text-2xl ${tech.hoverColor}`} />
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}

export default Projects;
