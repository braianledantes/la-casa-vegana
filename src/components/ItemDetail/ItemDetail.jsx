import { Card, Row } from "react-bootstrap"
import PropTypes from "prop-types"
import { AddItemButton } from "../AddItemButton"
import { Description } from "../Description"
import { ItemQuantitySelector } from "../ItemQuantitySelector"

ItemDetail.propTypes = {
    product: PropTypes.object.isRequired
}

export function ItemDetail({ product }) {
    return (
        <Card className="item-details">
            <Description product={product} />
            <Card.Body>
                <Row>
                    <ItemQuantitySelector />
                    <AddItemButton product={product} />
                </Row>
            </Card.Body>
        </Card >
    )
}