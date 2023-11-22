import { useParams } from "react-router-dom"
import { useMenuItem } from "../../hooks/useMenu"
import { compactString } from "../../utils/utils"
import { Loader } from ".."
import { Card } from "react-bootstrap"

export function ItemDetailContainer() {
    const { id } = useParams()
    const { data, loading, error } = useMenuItem(id)

    if (loading) return <Loader />
    if (error) return <div>Ha ocurrido un error {error}</div>
    return <div style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}>

        <Card >
            <Card.Img variant="top" src={data.img} style={{ 
                width: "90vw",
                minHeight: "500px",
                maxWidth: "600px", maxHeight: "600px", objectFit: "cover" }} />
            <Card.Body>
                <Card.Title>{data.name}</Card.Title>
                <Card.Text>
                    {compactString(data.details, 30)}
                </Card.Text>
            </Card.Body>
        </Card>
    </div>
}