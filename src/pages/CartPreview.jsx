import { Container } from "react-bootstrap"
import { ItemCartListContainer } from "../components/ItemCartListContainer"
import { useContext } from "react"
import { CartContext } from "../context"
import { ErrorMessage } from "../components/ErrorMessage"
import { Loader } from "../components/Loader"
import { BuyerForm } from "../components/BuyerForm"


export function CartPreview() {
    const { order, sendingError, sendingOrder } = useContext(CartContext)

    if (sendingError) return <ErrorMessage />
    if (sendingOrder) return <Loader />
    return <>
        <Container fluid="sm" className="my-3">
            <h1>Carrito</h1>
            <p>Aquí se pueden ver los productos agregados al carrito</p>
            <ItemCartListContainer />
            <h2>Total: ${order.total}</h2>
            <BuyerForm />
        </Container>
    </>
}