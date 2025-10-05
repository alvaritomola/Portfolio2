function Experiencia({ proyectos }) {
  return (
    <section>
      <h2>Proyectos</h2>
      <div className="projects">
        {proyectos.map((proyecto, index) => (
          <div className="project-card" key={index}>
            <h3>{proyecto.titulo}</h3>
            <p>{proyecto.descripcion}</p>
          </div>
        ))}
      </div>
    </section>
    
  )
}
export default Experiencia     