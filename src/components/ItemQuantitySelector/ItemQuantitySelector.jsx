import { Badge, Button } from "react-bootstrap"
import { useState } from "react"
import { AddItemButton } from "../AddItemButton"
import { Product } from "../../shapes"

ItemQuantitySelector.propTypes = {
    product: Product
}

export function ItemQuantitySelector({ product }) {
    const [quantity, setQuantity] = useState(1)

    const handleDecrementQuantity = () => {
        if (quantity <= 1) {
            setQuantity(1)
        } else {
            setQuantity(quantity - 1)
        }
    }

    const handleIncrementQuantity = () => {
        if (quantity < product.stock) {
            setQuantity(quantity + 1)
        } else {
            setQuantity(product.stock)
        }
    }

    const handleResertQuantity = () => {
        setQuantity(1)
    }

    return <>
        <div className="item-quantity-selector">
            <Button variant="primary" onClick={handleDecrementQuantity}>-</Button>
            <Badge className="quantity" bg="secondary">{quantity}</Badge>
            <Button active variant="primary" onClick={handleIncrementQuantity}>+</Button>
        </div>
        <AddItemButton quantity={quantity} product={product} handleResertQuantity={handleResertQuantity} />
    </>
}