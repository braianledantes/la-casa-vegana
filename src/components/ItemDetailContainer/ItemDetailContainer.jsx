import { useParams } from "react-router-dom"
import { useMenuItem } from "../../hooks/useMenu"
import { compactString } from "../../utils/utils"
import { Loader } from ".."
import { Button, Card } from "react-bootstrap"
import { useContext } from "react"
import { CartContext } from "../../context"

export function ItemDetailContainer() {
    const { id } = useParams();
    const { data, loading, error } = useMenuItem(id);
    const { addItem } = useContext(CartContext);

    function handleAddProduct() {
        const product = data;
        addItem({ product });
    }

    if (loading) return <Loader />
    if (error) return (<div>Ha ocurrido un error {error.error}</div>)
    return (
        <div style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}>
            <Card >
                <Card.Img variant="top" src={data.img} style={{
                    width: "90vw",
                    minHeight: "500px",
                    maxWidth: "600px", maxHeight: "600px", objectFit: "cover"
                }} />
                <Card.Body>
                    <Card.Title>{data.name}</Card.Title>
                    <Card.Text>
                        {compactString(data.details, 30)}
                    </Card.Text>
                    <Button variant="success" onClick={handleAddProduct}>Agrgar al carrito</Button>
                </Card.Body>
            </Card>
        </div>
    )
}