import Navbar from './components/layout/Navbar';
// Ya no necesitamos Lenis ni useEffects complejos

function App() {

  return (
    <div className="bg-background text-white">
      <Navbar />
      
      {/* CONTENEDOR PRINCIPAL (MAIN)
        - w-full: Ancho completo siempre.
        - lg:h-screen: SOLO en PC la altura es fija al 100% de la ventana.
        - lg:overflow-y-scroll: SOLO en PC permitimos scroll interno.
        - lg:snap-y lg:snap-mandatory: SOLO en PC activamos el efecto imán.
        - no-scrollbar: Clase que creamos en index.css para que se vea limpio.
      */}
      <main className="w-full lg:h-screen lg:overflow-y-scroll lg:snap-y lg:snap-mandatory scroll-smooth no-scrollbar">
        
        {/* SECCIÓN 1: INICIO */}
        {/* snap-start: Le dice al imán "frena aquí", solo funcionará cuando el padre tenga snap activo (en PC) */}
        <section id="home" className="min-h-screen w-full flex items-center justify-center border-b border-white/10 snap-start pt-16">
          <h1 className="text-4xl font-bold">Sección: Inicio</h1>
        </section>

        {/* SECCIÓN 2: SOBRE MÍ */}
        <section id="about" className="min-h-screen w-full flex items-center justify-center bg-surface border-b border-white/10 snap-start pt-16">
          <h1 className="text-4xl font-bold">Sección: Sobre Mí</h1>
        </section>

        {/* SECCIÓN 3: PROYECTOS */}
        <section id="projects" className="min-h-screen w-full flex items-center justify-center border-b border-white/10 snap-start pt-16">
          <h1 className="text-4xl font-bold">Sección: Proyectos</h1>
        </section>

        {/* SECCIÓN 4: CONTACTO */}
        <section id="contact" className="min-h-screen w-full flex items-center justify-center bg-surface snap-start pt-16">
          <h1 className="text-4xl font-bold">Sección: Contacto</h1>
        </section>

        {/* FOOTER */}
        {/* snap-align-none: El footer no atrapa el scroll, es libre */}
        <footer className="w-full py-8 text-center text-gray-400 border-t border-white/10 bg-background snap-align-none">
          <p>© 2024 Julio Marquinez. Todos los derechos reservados.</p>
        </footer>

      </main>
    </div>
  );
}

export default App;