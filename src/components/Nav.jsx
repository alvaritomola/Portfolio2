import { useState } from "react"

function Nav() {
  const [menuAbierto, setMenuAbierto] = useState(false)

  return (
    <nav>
      <button
        className="nav-toggle"
        aria-label="Abrir menú"
        onClick={() => setMenuAbierto(!menuAbierto)}
      >
        ☰
      </button>

      <div className={`nav-links ${menuAbierto ? "show" : ""}`}>
        <a href="#sobre-mi">Sobre mí</a>
        <a href="#proyectos">Proyectos</a>
        <a href="#contacto">Contacto</a>
        <a href="#experiencia">Experiencia</a>
        <a href="#estudios">Estudios</a>
      </div>
    </nav>
  )
}

export default Nav
