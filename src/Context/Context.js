import { createContext, useEffect, useState } from "react"

export const CartContext = createContext({
    cart: [],
    totalQuantity: 0,
    total: 0
})

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])
    const [totalQuantity, setTotalQuantity] = useState(0)
    const [total, setTotal] = useState(0)

    console.log(cart)

    useEffect(() => {
        const totalQty = getQuantity()
        setTotalQuantity(totalQty) //eslint-disable-next-line
    }, [cart]) 

    useEffect(() => {
        const total = getTotal()
        setTotal(total) //eslint-disable-next-line
    }, [cart]) 
    
    
    const addProduct = (productToAdd, quantity) => {
        if(isInTheCart(productToAdd.id) === false){
            productToAdd.quantity = quantity
            setCart ([...cart, productToAdd])
        } else {
            const itemToUpdate = cart.map( prod => {
                if(prod.id === productToAdd.id) {
                    const productUpdated = {
                        ...prod, quantity: quantity
                    }
                    return productUpdated
                } else {
                    return prod
                }
            })
            setCart(itemToUpdate)
        }
    }
    
    const isInTheCart = (id) => {
        return cart.some(product => product.id === id)
    }

    const emptyCart = () => {
        setCart([])
    }

    const getQuantity = () => {
        let accu = 0

        cart.forEach(prod => {
            accu += prod.quantity
        })

        return accu
    }

    const getTotal = () => {
        let accu = 0

        cart.forEach(prod => {
            accu += prod.quantity * prod.price
        })
        return accu
    }

    const getQuantityOfProduct = (id) => {
        const product = cart.find(prod => prod.id === id)

        return product?.quantity
    }

    const removeItem = (id) => {
        const cartWhithoutProduct = cart.filter( prod => prod.id !== id )
            setCart(cartWhithoutProduct)
        }
    

    return (
        <CartContext.Provider value={{ cart, emptyCart, removeItem, addProduct, getQuantityOfProduct, totalQuantity, total }} >
            {children}
        </CartContext.Provider>
    )
}