import { useContext } from "react"
import { CartContext } from "../../context"
import { Button } from "react-bootstrap"
import Toastify from 'toastify-js'
import { Product } from "../../shapes"

AddItemButton.propTypes = Product

export function AddItemButton({ product }) {

    const { addItem } = useContext(CartContext);

    const handleAddProduct = () => {
        const newItem = addItem({ product })

        if (newItem) {
            Toastify({
                text: `Se agregaron ${newItem.cant} items al carrito`,
                duration: 3000,
                gravity: "top",
                position: "right",
                style: {
                    background: "rgb(25, 135, 84)",
                    borderRadius: "5px"
                }
            }).showToast();
        }
    }

    return <Button className="add-item-button" variant="success" onClick={handleAddProduct}>Agregar al carrito</Button>
}