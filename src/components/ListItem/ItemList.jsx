import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function ItemList({ item }) {

    function handleClick() {
        console.log(`Item "${item.name}" añadido al carrito`);
    }

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={item.srcImage} />
            <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>
                    {item.description}
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

export default ItemList;