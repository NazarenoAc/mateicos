

const Item = ({id, nombre, img, precio, stockdisponible}) => {
  return (
    <article>
        <header>
            <h2>
                {nombre}
            </h2>
        </header>
        <picture>
            <img src={img} alt={nombre} />
        </picture>
        <section>
            <p>
                Precio: ${precio}
            </p>
            <p>
                Stock disponible: {stockdisponible}
            </p>
            <footer>
                <link to={`/item/${id}`}>Ver Detalle</link>
            </footer>
        </section>
    </article>
  )
}

export default Item 