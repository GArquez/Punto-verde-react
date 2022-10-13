const products = [{
    id: '1',
    name: 'Cebolla',
    price: 150,
    category: 'verdura',
    img: '/images/Verdura-cebolla.jpg',
    description: 'Cebolla morada fresca. De primera calidad.'
},
{
    id: '2',
    name: 'Tomate',
    price: 100,
    category: 'verdura',
    img: '/images/Verdura-tomate.jpg',
    description: 'Tomate fresco redondo ideal para salsas o ensaladas.'
},
{
    id: '3',
    name: 'Zanahoria',
    price: 75,
    category: 'verdura',
    img: '/images/Verdura-zanahoria.jpg',
    description: 'Zanahorias grandes premium.'
},
{
    id: '4',
    name: 'Mango',
    price: 350,
    category: 'fruta',
    img: '/images/Fruta-mango.jpg',
    description: 'Mango delicioso de gran precio.'
},
{
    id: '5',
    name: 'Banana',
    price: 200,
    category: 'fruta',
    img: '/images/Fruta-banana.jpg',
    description: 'Bananas ecuatorianos de primera linea!'
},
{
    id: '6',
    name: 'Manzana',
    price: 160,
    category: 'fruta',
    img: '/images/Fruta-manzana.jpg',
    description: 'Manzanas rojas de excelente calidad.'
}]

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout (() => {
            resolve(products)
        }, 2000)
    })
}

export const getProductId = (id) => {
    return new Promise ((resolve) => {
        setTimeout (() => {
            resolve(
                products.find( (el) => el.id === id )
            )
        }, 1500)
    })
}

export const getProductsCategory = (category) => {
    return new Promise ((resolve) => {
        setTimeout (() => {
            resolve(
                products.filter( (el) => el.category === category )
            )
        }, 2000)
    })
}