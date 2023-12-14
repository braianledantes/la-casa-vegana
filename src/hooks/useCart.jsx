import { useState } from "react"
import { createOrder } from "../services/apiMenu"
import { getCurrentOrder, saveCurrentOrder, removeCurrentOrder } from "../data/local"

const INITIAL_QUANTITY = 1

export const useCart = () => {

    const [order, setOrder] = useState(getCurrentOrder())

    const [sendingOrder, setSendingOrder] = useState(false)
    const [sendingError, setError] = useState(false)

    const addItem = ({ product, cant }) => {
        let newItem = { product, cant }
        if (cant >= INITIAL_QUANTITY) {
            const newOrder = {
                ...order,
                items: [...order.items, newItem],
                total: order.total + (product.price * cant),
                cant: order.cant + cant
            }
            saveCurrentOrder(newOrder)
            setOrder(newOrder)
        } else {
            newItem = undefined
        }
        return newItem
    }

    const sendOrder = () => {
        const newOrder = { ...order, state: "generada" }

        setSendingOrder(true)
        setError(false)

        createOrder({ order: newOrder })
            .then(() => {
                removeCurrentOrder()
                setOrder(getCurrentOrder())
            })
            .catch((err) => {
                console.error(err);
                setError(true)
            })
            .finally(() => {
                setSendingOrder(false)
            })
    }

    return { order, addItem, sendOrder, sendingError, sendingOrder }
}
