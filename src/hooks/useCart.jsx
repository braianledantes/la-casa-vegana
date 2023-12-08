import { useState } from "react"

const INITIAL_QUANTITY = 1

export const useCart = () => {

    const [listItems, setListItems] = useState([])
    const [cantItems, setCantItems] = useState(INITIAL_QUANTITY)
    const [currentQuantity, setCurrentQuantity] = useState(1)

    const addItem = ({ product }) => {
        let newItem = { product, cant: currentQuantity }
        if (currentQuantity >= INITIAL_QUANTITY) {
            const newListItems = [...listItems, newItem]
            setListItems(newListItems)
            setCantItems(cantItems + currentQuantity)
        } else {
            newItem = undefined
        }
        setCurrentQuantity(INITIAL_QUANTITY)
        return newItem
    }

    const updateCurrentQuantity = (value) => {
        if (value < INITIAL_QUANTITY) setCurrentQuantity(INITIAL_QUANTITY)
        else setCurrentQuantity(Math.round(value))
    }

    return { listItems, addItem, cantItems, currentQuantity, updateCurrentQuantity }
}