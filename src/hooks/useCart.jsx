import { useState } from "react"
import { createOrder } from "../services/apiMenu"
import { getCurrentOrder, saveCurrentOrder, removeCurrentOrder } from "../data/local"

const INITIAL_QUANTITY = 1

export const useCart = () => {

    const [order, setOrder] = useState(getCurrentOrder())
    const [buyer, setBuyer] = useState(order.buyer)

    const [sendingOrder, setSendingOrder] = useState(false)
    const [sendingError, setError] = useState(false)

    const addItem = ({ product, quantity }) => {
        // valor que se mostrara en el toast
        let quantityAdded = 0

        if (quantity >= INITIAL_QUANTITY) {
            let newItem = { product, quantity }

            const arrItems = order.items

            const item = arrItems.find(i => i.product.id == product.id)


            if (item) { // si ya esta el producto en el pedido
                // si la nueva cantidad supera el stock, solo deja la disponible
                if ((item.quantity + quantity) > product.stock) {
                    quantityAdded = product.stock - item.quantity
                    item.quantity = product.stock
                } else {
                    quantityAdded = quantity
                }
                item.quantity += quantityAdded
            } else { // si no esta el producto en el pedido
                // si la cantidad supera el stock se deja solo lo disponible
                if (quantity > product.stock) { 
                    quantityAdded = product.stock
                    newItem.quantity = quantityAdded
                } else {
                    quantityAdded = quantity
                }
                arrItems.push(newItem)
            }

            const newOrder = {
                ...order,
                total: order.total + (product.price * quantity),
                quantity: arrItems.reduce((acc, i) => acc + i.quantity, 0)
            }
            saveCurrentOrder(newOrder)
            setOrder(newOrder)
        }

        return quantityAdded
    }

    const sendOrder = () => {
        const newOrder = {
            ...order,
            buyer,
            state: "generada",
            date: new Date()
        }

        // se validan las condiciones y sube el pedido
        if (validateBuyer(buyer) && newOrder.items) {
            setSendingOrder(true)
            setError(false)

            createOrder({ order: newOrder })
                .then(() => {
                    removeCurrentOrder()
                    setOrder(getCurrentOrder())
                })
                .catch(() => {
                    setError(true)
                })
                .finally(() => {
                    setSendingOrder(false)
                })
        }
    }

    const setBuyerData = ({
        name = buyer.name,
        email = buyer.email,
        phone = buyer.phone
    }) => {
        setBuyer({ name, email, phone })

        const newOrder = {
            ...order,
            buyer: buyer
        }
        saveCurrentOrder(newOrder)
        setOrder(newOrder)
    }

    return { order, addItem, sendOrder, sendingError, sendingOrder, buyer, setBuyerData }
}

function validateBuyer({
    name,
    email,
    phone
}) {
    return name && email && phone
}
