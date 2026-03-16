import { FaJava, FaDocker, FaAws, FaReact, FaAngular, FaJenkins, FaGitAlt } from 'react-icons/fa';
import { SiSpringboot, SiHibernate, SiMysql, SiMongodb, SiPostgresql } from 'react-icons/si';
import ScrollReveal from '../ui/ScrollReveal';

const About = () => {
  const skillCards = [
    {
      title: 'Backend Core',
      titleClassName: 'text-blue-400',
      icons: [
        <FaJava key="java" className="hover:text-red-500 transition-colors transform hover:scale-110" title="Java 17+" />,
        <SiSpringboot key="spring" className="hover:text-green-500 transition-colors transform hover:scale-110" title="Spring Boot" />,
        <SiHibernate key="hibernate" className="hover:text-yellow-600 transition-colors transform hover:scale-110" title="Hibernate / JPA" />,
        <SiMysql key="mysql" className="hover:text-blue-500 transition-colors transform hover:scale-110" title="MySQL" />,
        <SiPostgresql key="postgres" className="hover:text-blue-300 transition-colors transform hover:scale-110" title="PostgreSQL" />,
        <SiMongodb key="mongo" className="hover:text-green-400 transition-colors transform hover:scale-110" title="MongoDB" />,
      ],
      iconsClassName: 'text-4xl text-gray-300',
    },
    {
      title: 'Infraestructura & DevOps',
      titleClassName: 'text-purple-400',
      icons: [
        <FaAws key="aws" className="hover:text-orange-500 transition-colors transform hover:scale-110" title="AWS" />,
        <FaDocker key="docker" className="hover:text-blue-500 transition-colors transform hover:scale-110" title="Docker" />,
        <FaJenkins key="jenkins" className="hover:text-red-400 transition-colors transform hover:scale-110" title="CI/CD" />,
        <FaGitAlt key="git" className="hover:text-red-500 transition-colors transform hover:scale-110" title="Git" />,
      ],
      iconsClassName: 'text-4xl text-gray-300',
    },
    {
      title: 'Frontend & UI',
      titleClassName: 'text-emerald-400',
      icons: [
        <FaReact key="react" className="hover:text-cyan-400 transition-colors transform hover:scale-110" title="React" />,
        <FaAngular key="angular" className="hover:text-red-600 transition-colors transform hover:scale-110" title="Angular" />,
      ],
      iconsClassName: 'text-3xl text-gray-400',
    },
  ];

  return (
    <section id="about" className="min-h-screen w-full flex items-center justify-center relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 py-20">
        <ScrollReveal direction="dynamic-y" once={false}>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ingeniería Backend</h2>
            <div className="h-1 w-24 bg-blue-500 mx-auto rounded-full"></div>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal direction="left" once={false}>
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
          </ScrollReveal>

          <div className="space-y-10">
            {skillCards.map((card, index) => (
              <ScrollReveal
                key={card.title}
                direction="right"
                delay={0.2 + (index * 0.15)}
                once={false}
              >
                <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
                  <h3 className={`text-sm font-bold ${card.titleClassName} uppercase tracking-wider mb-4`}>{card.title}</h3>
                  <div className={`flex flex-wrap gap-6 ${card.iconsClassName}`}>
                    {card.icons}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;