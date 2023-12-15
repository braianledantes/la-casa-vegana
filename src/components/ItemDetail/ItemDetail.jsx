import { Card, ListGroup } from "react-bootstrap"
import { Description } from "../Description"
import { ItemQuantitySelector } from "../ItemQuantitySelector"
import { Product } from "../../shapes"

ItemDetail.propTypes = {
    product: Product
}

export function ItemDetail({ product }) {

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
                    <ItemQuantitySelector product={product} />
                </ListGroup.Item>
            </ListGroup>
        </Card >
    )
}