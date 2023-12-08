import { Container } from "react-bootstrap"
import { ItemCartListContainer } from "../components/ItemCartListContainer"

export function CartPreview() {
    return <>
        <Container fluid="sm" className="my-3">
            <h1>Carrito</h1>
            <ItemCartListContainer />
        </Container>
    </>
}