
import { useContext } from "react"
import { CartContext } from "../../context"
import { Card, Button } from "react-bootstrap"
import PropTypes from "prop-types"

ItemDetail.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        details: PropTypes.string,
        img: PropTypes.string
    }).isRequired
}

export function ItemDetail({ product }) {
    const { addItem } = useContext(CartContext)

    function handleAddProduct() {
        addItem({ product })
    }

    return (
        <Card className="item-details">
            <Card.Img variant="top" src={product.img} />
            <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>
                    {product.details}
                </Card.Text>
                <Button variant="success" onClick={handleAddProduct}>Agregar al carrito</Button>
            </Card.Body>
        </Card>
    )
}