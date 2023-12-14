import { useContext, useState } from "react"
import { CartContext } from "../../context"
import { Card, ListGroup } from "react-bootstrap"
import { AddItemButton } from "../AddItemButton"
import { Description } from "../Description"
import { ItemQuantitySelector } from "../ItemQuantitySelector"
import { Product } from "../../shapes"
import Toastify from 'toastify-js'

ItemDetail.propTypes = {
    product: Product
}

export function ItemDetail({ product }) {

    const { addItem } = useContext(CartContext)
    const [quantity, setQuantity] = useState(1)

    const handleIncrementQuantity = () => {
        if (quantity < product.stock) {
            setQuantity(quantity + 1)
        } else {
            setQuantity(product.stock)
        }
    }

    const handleDecrementQuantity = () => {
        setQuantity(quantity - 1)
    }

    const handleAddItem = () => {
        const newItem = addItem({ product, cant: quantity })

        if (newItem) {
            Toastify({
                text: `Se agregaron ${newItem.cant} items al carrito`,
                duration: 3000,
                gravity: "top",
                position: "left",
                style: {
                    background: "rgb(25, 135, 84)",
                    borderRadius: "5px"
                }
            }).showToast();
        }
    }

    return (
        <Card className="item-details">
            <Description product={product} />
            <ListGroup className="list-group-flush">
                <ListGroup.Item>
                    ${product.price} c/u
                </ListGroup.Item>
                <ListGroup.Item>
                    Cantidad disponible: {product.stock}
                </ListGroup.Item>
                <ListGroup.Item>
                    <ItemQuantitySelector
                        currentQuantity={quantity}
                        incrementCallback={handleIncrementQuantity}
                        decrementCallback={handleDecrementQuantity}
                    />
                    <AddItemButton callback={handleAddItem} />
                </ListGroup.Item>
            </ListGroup>
        </Card >
    )
}