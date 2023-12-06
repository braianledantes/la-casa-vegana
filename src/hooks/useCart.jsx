import { useState } from "react"

export const useCart = () => {
    const [listItems, setListItems] = useState([])
    const [cantItems, setCantItems] = useState(0)
    const [currentQuantity, setCurrentQuantity] = useState(0)

    const addItem = ({ product }) => {
        let newItem = { product, cant: currentQuantity }
        if (currentQuantity > 0) {
            const newListItems = [...listItems, newItem]
            setListItems(newListItems)
            setCantItems(cantItems + currentQuantity)
        } else {
            newItem = undefined
        }
        setCurrentQuantity(0)
        return newItem
    }

    const updateCurrentQuantity = (value) => {
        if (value <= 0) setCurrentQuantity(0)
        else setCurrentQuantity(Math.round(value))
    }

    return { listItems, addItem, cantItems, currentQuantity, updateCurrentQuantity }
}