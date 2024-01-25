import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({id, nombre, img, category, description, precio, stockdisponible}) => {
  return (
    <article>
        <header>
            <h2>

            </h2>
        </header>
        <picture>
            <img src={img} alt={nombre}/>
        </picture>
        <section>
            <p>
                Categoria: {category}
            </p>
            <p>
                Descripcion: {Descripcion}
            </p>
            <p>
                Precio: ${price}
            </p>
        </section>
        <footer>
            <ItemCount inicial={1} stock={10} />
        </footer>
    </article>
  )
}

export default ItemDetail