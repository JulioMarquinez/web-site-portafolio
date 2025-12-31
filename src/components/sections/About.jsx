// Importamos logos específicos de marcas
import { FaJava, FaDocker, FaAws, FaReact, FaAngular, FaJenkins, FaGitAlt } from 'react-icons/fa';
import { SiSpringboot, SiHibernate, SiMysql, SiMongodb, SiPostgresql } from 'react-icons/si';
import backendBg from '../../assets/backend-bg.jpg';
const About = () => {

  return (
    <section id="about" className="min-h-screen w-full flex items-center justify-center snap-start relative">
      
      {/* 1. IMAGEN DE FONDO */}
      {/* Asegúrate de tener una imagen llamada 'backend-bg.jpg' en tu carpeta public */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: `url(${backendBg})` }} 
      >
        {/* Capa oscura para asegurar legibilidad (Overlay) */}
        <div className="absolute inset-0 bg-background/90 md:bg-background/85"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 py-20">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ingeniería Backend</h2>
          <div className="h-1 w-24 bg-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* COLUMNA IZQUIERDA: Texto Biográfico */}
          <div className="space-y-6 text-lg md:text-xl text-gray-300 leading-relaxed font-light">
            <p>
              Mi enfoque principal es el diseño y desarrollo de sistemas del lado del servidor. 
              Me apasiona construir la lógica que hace que las aplicaciones funcionen de manera 
              <span className="text-blue-400 font-medium"> segura, rápida y escalable</span>.
            </p>
            <p>
              Tengo experiencia sólida creando APIs RESTful y arquitecturas de microservicios utilizando 
              <strong className="text-white"> Java y Spring Boot</strong>. Me siento cómodo modelando datos complejos 
              tanto en bases relacionales (<strong className="text-white">MySQL</strong>) como NoSQL (<strong className="text-white">MongoDB</strong>).
            </p>
            <p>
              Aunque mi fuerte es el Backend, entiendo el ciclo completo del desarrollo, integrando 
              mis soluciones con interfaces modernas y automatizando despliegues en la nube.
            </p>
          </div>

          {/* COLUMNA DERECHA: Stack Tecnológico (Solo Logos) */}
          <div className="space-y-10">
            
            {/* Grupo 1: Backend Core (El más destacado) */}
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
              <h3 className="text-sm font-bold text-blue-400 uppercase tracking-wider mb-4 border-b border-white/10 pb-2">Backend Core</h3>
              <div className="flex flex-wrap gap-6 text-4xl text-gray-300">
                <FaJava className="hover:text-red-500 transition-colors transform hover:scale-110" title="Java 17+" />
                <SiSpringboot className="hover:text-green-500 transition-colors transform hover:scale-110" title="Spring Boot" />
                <SiHibernate className="hover:text-yellow-600 transition-colors transform hover:scale-110" title="Hibernate / JPA" />
                <SiMysql className="hover:text-blue-500 transition-colors transform hover:scale-110" title="MySQL" />
                <SiPostgresql className="hover:text-blue-300 transition-colors transform hover:scale-110" title="PostgreSQL" />
                <SiMongodb className="hover:text-green-400 transition-colors transform hover:scale-110" title="MongoDB" />
              </div>
            </div>

            {/* Grupo 2: Infra & DevOps */}
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
              <h3 className="text-sm font-bold text-purple-400 uppercase tracking-wider mb-4 border-b border-white/10 pb-2">Infraestructura & DevOps</h3>
              <div className="flex flex-wrap gap-6 text-4xl text-gray-300">
                <FaAws className="hover:text-orange-500 transition-colors transform hover:scale-110" title="AWS" />
                <FaDocker className="hover:text-blue-500 transition-colors transform hover:scale-110" title="Docker" />
                <FaJenkins className="hover:text-red-400 transition-colors transform hover:scale-110" title="CI/CD" />
                <FaGitAlt className="hover:text-red-500 transition-colors transform hover:scale-110" title="Git" />
              </div>
            </div>

            {/* Grupo 3: Frontend (Más pequeño) */}
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
              <h3 className="text-sm font-bold text-emerald-400 uppercase tracking-wider mb-4 border-b border-white/10 pb-2">Frontend & UI</h3>
              <div className="flex flex-wrap gap-6 text-3xl text-gray-400">
                <FaReact className="hover:text-cyan-400 transition-colors transform hover:scale-110" title="React" />
                <FaAngular className="hover:text-red-600 transition-colors transform hover:scale-110" title="Angular" />
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default About;