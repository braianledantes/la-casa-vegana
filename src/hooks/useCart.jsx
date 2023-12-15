import { useState } from "react"
import { createOrder } from "../services/apiMenu"
import { getCurrentOrder, saveCurrentOrder, removeCurrentOrder } from "../data/local"

const INITIAL_QUANTITY = 1

export const useCart = () => {

    const [order, setOrder] = useState(getCurrentOrder())
    const [buyer, setBuyer] = useState(order.buyer)

    const [sendingOrder, setSendingOrder] = useState(false)
    const [sendingError, setError] = useState(false)

    const addItem = ({ product, cant }) => {
        let newItem = { product, cant }
        if (cant >= INITIAL_QUANTITY) {
            const arrItems = order.items

            const item = arrItems.find(i => i.product.id == product.id)

            if (item) {
                item.cant += cant
            } else {
                arrItems.push(newItem)
            }

            const newOrder = {
                ...order,
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
            .catch((err) => {
                console.error(err);
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
