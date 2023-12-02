import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { compactString } from '../../utils/utils';
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';

ItemList.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        details: PropTypes.string,
        img: PropTypes.string
    }).isRequired
}

export function ItemList({ item }) {
    return (
        <Card className='item-list'>
            <Card.Img variant="top" src={item.img} />
            <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>
                    {compactString(item.details, 30)}
                </Card.Text>
                <Button variant="primary" as={Link} to={`/menu/${item.id}`}>
                    Ver detalles
                </Button>
            </Card.Body>
        </Card>
    );
}
