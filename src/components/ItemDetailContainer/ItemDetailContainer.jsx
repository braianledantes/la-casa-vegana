import { useParams } from "react-router-dom"
import { useMenuItem } from "../../hooks/useMenu"
import { Loader } from ".."
import { Button, Card } from "react-bootstrap"
import { useContext } from "react"
import { CartContext } from "../../context"

export function ItemDetailContainer() {
    const { id } = useParams();
    const { product, loading, error } = useMenuItem(id);
    const { addItem } = useContext(CartContext);

    function handleAddProduct() {
        addItem({ product });
    }

    if (loading) return <Loader />
    if (error) return (<div>Ha ocurrido un error {error.error}</div>)
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