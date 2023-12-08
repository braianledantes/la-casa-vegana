import { Card } from "react-bootstrap"
import PropTypes from "prop-types"

Description.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        details: PropTypes.string,
        img: PropTypes.string,
        stock: PropTypes.number
    }).isRequired
}

export function Description({ product }) {
    return (
        <>
            <Card.Img variant="top" src={product.img} />
            <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.details}</Card.Text>
            </Card.Body>
        </>

    )
}