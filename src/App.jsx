import Header from './components/Header.jsx'
import Nav from './components/Nav.jsx'
import SeccionTarjetas from './components/SeccionTarjetas.jsx'
import Footer from './components/Footer.jsx'
import SeccionProyectos from './components/SeccionProyectos.jsx'

function App() {
  const experiencia = [
    { titulo: "Comercial", detalle: "Inmobiliaria Alonso", extra: "2015–2019" },
    { titulo: "Auxiliar Administrativo", detalle: "European Aviation College S.A. (Adventia)", extra: "2021–Actualidad" },
    { titulo: "Consultor", detalle: "Protoinfo S.L.U. - Aelis Consulting", extra: "2021–Actualidad" }
  ]

  const proyectos = [
    {
      titulo: "📊 Gestor de gastos",
      descripcion: "App sencilla para registrar ingresos y gastos. HTML, CSS, JS."
    },
    {
      titulo: "📁 Mini ERP",
      descripcion: "Gestión básica de clientes y productos. React, Node.js, PostgreSQL."
    }
  ]

  return (
    <>
      <Header />
      <Nav />

      <SeccionTarjetas id="contacto" titulo="Contacto">
        <p>
          Email:{" "}
          <a href="mailto:alvarorodsan7@gmail.com">
            alvarorodsan7@gmail.com
          </a>
        </p>
        <p>
          GitHub:{" "}
          <a
            href="https://github.com/tuusuario"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/tuusuario
          </a>
        </p>
        <p>
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/%C3%A1lvaro-rodr%C3%ADguez-s%C3%A1nchez-315479249"
            target="_blank"
            rel="noopener noreferrer"
          >
            Álvaro Rodríguez Sánchez
          </a>
        </p>
      </SeccionTarjetas>

      <SeccionTarjetas
        id="sobre-mi"
        titulo="Sobre mí"
        parrafo="Soy una persona proactiva, con ganas de aprender y crecer profesionalmente. Me adapto fácilmente a los cambios y disfruto trabajando en equipo. Me apasiona la tecnología y siempre estoy buscando nuevas formas de mejorar mis habilidades y conocimientos."
      />

      <SeccionProyectos id="proyectos" proyectos={proyectos} />

      <SeccionTarjetas
        id="experiencia"
        titulo="Experiencia Profesional"
        subtitulo="Puestos más relevantes"
        lista={experiencia}
      />

      <SeccionTarjetas id="estudios" titulo="Formación Académica">
        <p><strong>E.S.O.</strong> (2010 – 2014) Colegio San Juan Bosco, Salamanca</p>
        <p><strong>Bachillerato</strong> (2014 – 2016) I.E.S. Fernando de Rojas, Salamanca</p>
        <p><strong>Grado Superior en Administración y Finanzas</strong> (2016 – 2018)</p>
        <p><strong>Grado Superior en Desarrollo Web</strong> (2020 – 2022)</p>
      </SeccionTarjetas>

      <SeccionTarjetas titulo="Formación Complementaria">
        <ul>
          <li>Azafato de ferias y congresos – Mh Azafatas</li>
          <li>Protocolo – Mh Azafatas</li>
          <li>Carnet de conducir (tipo B)</li>
        </ul>
      </SeccionTarjetas>

      <SeccionTarjetas titulo="Idiomas">
        <p>Inglés: Nivel medio; e inglés técnico de administración y finanzas.</p>
        <p>Inglés orientado a programación</p>
      </SeccionTarjetas>

      <SeccionTarjetas titulo="Informática">
        <p><strong>Programas y lenguajes:</strong></p>
        <ul>
          <li>Office completo: Word, Excel, Access, PowerPoint</li>
          <li>Sage 200 (consultor)</li>
          <li>PHP</li>
          <li>JavaScript</li>
          <li>HTML5</li>
          <li>CSS</li>
        </ul>
      </SeccionTarjetas>

      <Footer pie="© 2025 Álvaro Rodríguez Sánchez. Todos los derechos reservados." />
    </>
  )
}

export default App
