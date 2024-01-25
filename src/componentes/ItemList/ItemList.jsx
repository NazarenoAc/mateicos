import React from 'react'

const ItemList = () => {
  return (
    <div className='ListGroup'>
        {productos.map(prod => <Item key={prod.id}{...prod} /> )}
    </div>
  )
}

export default ItemList