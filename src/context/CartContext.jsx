import React from "react"
import { useCart } from "../hooks/useCart"
import PropTypes from "prop-types"

export const CartContext = React.createContext()

export function CartProvider({ children }) {

    CartProvider.propTypes = {
        children: PropTypes.node.isRequired
    }

    const cart = useCart()

    return (
        <CartContext.Provider value={cart} >
            {children}
        </CartContext.Provider>
    )
}