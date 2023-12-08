import { useState } from "react"

const INITIAL_QUANTITY = 1

export const useCart = () => {

    const [listItems, setListItems] = useState([])
    const [cantItems, setCantItems] = useState(0)

    const addItem = ({ product, cant }) => {
        let newItem = { product, cant }
        if (cant >= INITIAL_QUANTITY) {
            const newListItems = [...listItems, newItem]
            setListItems(newListItems)
            setCantItems(newListItems.length)
        } else {
            newItem = undefined
        }
        return newItem
    }

    return { listItems, addItem, cantItems }
}