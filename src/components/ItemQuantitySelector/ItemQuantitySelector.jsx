import { useContext } from "react"
import { Form } from "react-bootstrap"
import { CartContext } from "../../context"

export function ItemQuantitySelector() {

    const { currentQuantity, updateCurrentQuantity } = useContext(CartContext)

    const handleChangeValue = (e) => {
        const q = parseInt(e.target.value)
        if (Number.isInteger(q)) {
            updateCurrentQuantity(q)
        }
    }

    return <>
        <Form.Label htmlFor="itemQuantity">Cantidad</Form.Label>
        <Form.Control style={{ marginBottom: "1rem" }}
            id="itemQuantity"
            type="number"
            value={currentQuantity}
            onChange={handleChangeValue}
        />
    </>
}