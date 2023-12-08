import { Card, ListGroup } from "react-bootstrap"

import { AddItemButton } from "../AddItemButton"
import { Description } from "../Description"
import { ItemQuantitySelector } from "../ItemQuantitySelector"
import { Product } from "../../shapes"

ItemDetail.propTypes = Product

export function ItemDetail({ product }) {
    return (
        <Card className="item-details">
            <Description product={product} />
            <ListGroup className="list-group-flush">
                <ListGroup.Item>
                    Cantidad disponible: {product.stock}
                </ListGroup.Item>
                <ListGroup.Item>
                    <ItemQuantitySelector maxQuantity={product.stock}/>
                    <AddItemButton product={product} />
                </ListGroup.Item>
            </ListGroup>
        </Card >
    )
}