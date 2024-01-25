const productos = [
    {
        id: '1',
        name: 'Mate Camionero',
        price: 1000,
        category: 'mates',
        img: 'https://acdn.mitiendanube.com/stores/002/907/210/products/copia-de-img_3465-11-1fce0a0c394de3f04316777785952205-1024-1024.jpg',
        stock: '20',
        description: 'Descripcion de Mate Camionero',
    },
    {id: '2', name: 'Termo Stanley 1,5L', price: 5000, category:'termos', img:'https://eyava.com/61179-home_default/termo-stanley-classic-con-tapon-cebador-14-l.jpg'},
    {id: '3', name: 'Mate Ceramica', price: 2000, category: 'mates', img: 'https://geaarteceramico.com.ar/wp-content/uploads/2018/05/Mate-Bola-de-ceramica-artesanal-GEA-1-1-scaled.jpg'}
    
]

export const getProductos = () => {
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve(productos)
            
        }, 500)
    })
}

export const getProductoById = (productoId)  => {
    return new Promise((resolve) => {
        setTimeout (() => {
            resolve(productos.find(prod => prod.id === productoId))
        }, 500)
    })
}