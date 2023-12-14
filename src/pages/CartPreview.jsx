import { Button, Container } from "react-bootstrap"
import { ItemCartListContainer } from "../components/ItemCartListContainer"
import { useContext } from "react"
import { CartContext } from "../context"
import { ErrorMessage } from "../components/ErrorMessage"
import { Loader } from "../components/Loader"


export function CartPreview() {
    const { order, sendOrder, sendingError, sendingOrder } = useContext(CartContext)

    if (sendingError) return <ErrorMessage />
    if (sendingOrder) return <Loader />
    return <>
        <Container fluid="sm" className="my-3">
            <h1>Carrito</h1>
            <ItemCartListContainer />
            <p>Total: ${order.total}</p>
            <Button onClick={sendOrder}>Enviar Pedido</Button>
        </Container>
    </>
}