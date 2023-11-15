import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { compactString } from '../../utils/utils';
import PropTypes from "prop-types";

ItemList.propTypes = {
    item: PropTypes.shape({
        name: PropTypes.string,
        details: PropTypes.string,
        img: PropTypes.string
    }).isRequired
}

export function ItemList({ item }) {

    function handleClick() {
        console.log(`Item "${item.name}" añadido al carrito`);
    }

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={item.img} style={{height: "250px", objectFit: "cover"}}/>
            <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>
                    {compactString(item.details, 30)}
                </Card.Text>
                <Button variant="primary" onClick={handleClick}>
                    <i className="bi bi-cart-plus"></i>
                    {' '}
                    Agregar al carrito
                </Button>
            </Card.Body>
        </Card>
    );
}
