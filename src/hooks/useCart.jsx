import { useState } from "react"

export const useCart = () => {
    const [listItems, setListItems] = useState([]);
    const [cantItems, setCantItems] = useState(0);

    const addItem = ({product}) => {
        const newListItems = [...listItems, product];
        setListItems(newListItems);
        setCantItems(cantItems + 1);
    }

    return { listItems, cantItems, addItem }
}