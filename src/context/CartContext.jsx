import { createContext, useState } from "react";

//Creamos el contexto

export const CartContext = createContext()

//Crear nuestro proveedor

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    //agregar un item al carrito, no repetir y sumar cantidades
    const addItem = (item, cantidad) => {
        console.log(item, cantidad, 'desde el contexto')
        console.log({ ...item, quantity: cantidad }, 'desde el contexto')
        if (isInCart(item.id)) {
            //existe ese item en el carrito, tengo que sumar cantidades
            //logica de sumar cantidades
            const updateCart = cart.map((prod) => {
                if (prod.id === item.id) {
                    //sumar cantidades
                    return { ...prod, quantity: prod.quantity + cantidad }
                } else {
                    return prod
                }
            })
            //actualizo el carrito con su nuevo array
            setCart(updateCart)
            //DORMA CORTA
            //setCart(
            //    cart.map((prod) =>{
            //    if(prod.id === item.id){
            //        //sumar cantidades
            //        return {...prod, quantity: prod.quantity + cantidad}
            //    }else{
            //        return prod
            //    }
            //})
            //)

        } else {
            //se agrega el producto nuevo
            setCart([...cart, { ...item, quantity: cantidad }])
        }

    }

    //borrar el carrito
    const clear = () => {
        setCart([])
    }

    //eliminar un item del carrito
    const removeItem = (id) => {
        setCart(cart.filter((prod) => prod.id !== id))
    }

    //tiene que devolve un booleano si esta o no en el carrito
    const isInCart = (id) => {
        return cart.some((prod) => prod.id === id)
    }

    //cantidad de items en el carrito que la van a usar en cartWidget
    const cartQuantity = () => {
        return cart.reduce((acc, prod) => acc += prod.quantity, 0)
    }

    //total a pagar
    const cartTotal = () => {
        return cart.reduce((acc, prod) => acc += (prod.quantity * prod.price), 0)
    }

    //opcional, con impuestos
    //const cartTotalConImpuestos = () =>{
    //    return cart.reduce((acc, prod)=> acc += (prod.quantity * prod.price), 5)
    //}

    return (
        <CartContext.Provider value={{ cart, addItem, clear, removeItem, cartQuantity, cartTotal }}>
            {/* {props.children} */}
            {children}
        </CartContext.Provider>
    )
}
