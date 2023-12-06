import React from "react"
import { useCart } from "../hooks/useCart"
import PropTypes from "prop-types"

export const CartContext = React.createContext()

export function CartProvider({ children }) {

    CartProvider.propTypes = {
        children: PropTypes.node.isRequired
    }

    const { listItems, addItem, cantItems, currentQuantity, updateCurrentQuantity } = useCart()

    return (
        <CartContext.Provider value={{ listItems, addItem, cantItems, currentQuantity, updateCurrentQuantity }} >
            {children}
        </CartContext.Provider>
    )
}