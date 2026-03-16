import { ArrowRight, FileText } from 'lucide-react';
import ScrollReveal from '../ui/ScrollReveal';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen w-full flex items-center justify-center pt-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center relative z-10">
        <div className="mb-6 inline-flex items-center px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium">
          <span className="flex h-2 w-2 rounded-full bg-blue-400 mr-2 animate-pulse"></span>
          Disponible para proyectos Backend
        </div>

        <ScrollReveal direction="down" delay={0.2} once={false}>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Julio Marquinez
          </h1>
        </ScrollReveal>

        <h2 className="text-3xl md:text-5xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
          Especialista en Backend & Arquitectura Cloud
        </h2>

        <ScrollReveal direction="up" delay={0.4} once={false}>
          <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-3xl leading-relaxed">
            Ayudo a empresas a escalar sus productos digitales mediante 
            <span className="text-white font-semibold"> Microservicios robustos</span> y despliegues en 
            <span className="text-white font-semibold"> Docker</span>.
          </p>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.6} once={false}>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#projects" 
              className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
            >
              Ver Arquitecturas
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            
            <a 
              href="/cv.pdf" 
              target="_blank"
              className="inline-flex items-center justify-center px-8 py-3 rounded-full border border-white/20 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
            >
              <FileText className="ml-2 h-5 w-5 mr-2" />
              Descargar CV
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Hero;