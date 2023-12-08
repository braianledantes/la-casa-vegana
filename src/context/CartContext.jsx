import React from "react"
import { useCart } from "../hooks/useCart"
import PropTypes from "prop-types"

export const CartContext = React.createContext()

export function CartProvider({ children }) {

    CartProvider.propTypes = {
        children: PropTypes.node.isRequired
    }

    const { listItems, addItem, cantItems } = useCart()

    return (
        <CartContext.Provider value={{ listItems, addItem, cantItems }} >
            {children}
        </CartContext.Provider>
    )
}