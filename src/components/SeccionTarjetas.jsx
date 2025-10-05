function SeccionTarjetas({ id, titulo, subtitulo, parrafo, lista, children }) {
  const claseContenedor = lista ? "lista-tarjetas" : "tarjeta-clara"

  return (
    <section id={id}>
      {titulo && <h2>{titulo}</h2>}
      {subtitulo && <h3>{subtitulo}</h3>}
      {parrafo && <p>{parrafo}</p>}

      {lista ? (
        <ul className={claseContenedor}>
          {lista.map((item, index) => (
            <li key={index}>
              {item.titulo && <h3>{item.titulo}</h3>}
              {item.detalle && <p>{item.detalle}</p>}
              {item.extra && <p>{item.extra}</p>}
            </li>
          ))}
        </ul>
      ) : (
        <div className={claseContenedor}>{children}</div>
      )}
    </section>
  )
}
export default SeccionTarjetas  