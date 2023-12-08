import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { compactString } from '../../utils/utils';
import { Link } from 'react-router-dom';
import { ListGroup } from 'react-bootstrap';
import { Product } from '../../shapes';

ItemList.propTypes = {
    product: Product
}

export function ItemList({ product }) {
    return (
        <Card className='item-list'>
            <Card.Img variant="top" src={product.img} />
            <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>
                    {compactString(product.details, 30)}
                </Card.Text>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>
                        ${product.price} c/u
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Cantidad disponible: {product.stock}
                    </ListGroup.Item>
                </ListGroup>

                <Button variant="primary" as={Link} to={`/menu/${product.id}`}>
                    Ver detalles
                </Button>
            </Card.Body>
        </Card>
    );
}
