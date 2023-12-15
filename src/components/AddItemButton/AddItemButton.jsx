
import { Button } from "react-bootstrap"
import PropTypes from "prop-types"
import Toastify from 'toastify-js'
import { CartContext } from "../../context"
import { useContext } from "react"
import { Product } from "../../shapes"

AddItemButton.propTypes = {
    product: Product,
    quantity: PropTypes.number.isRequired,
    handleResertQuantity: PropTypes.func.isRequired
}

export function AddItemButton({ product, quantity, handleResertQuantity }) {

    const { addItem } = useContext(CartContext)

    const handleAddItem = () => {
        const quantityAdded = addItem({ product, quantity })

        if (quantityAdded > 0) {
            Toastify({
                text: `Se agregaron ${quantityAdded} items al carrito`,
                duration: 3000,
                gravity: "top",
                position: "left",
                style: {
                    background: "rgb(25, 135, 84)",
                    borderRadius: "5px"
                }
            }).showToast();
        } else {
            Toastify({
                text: `No se agregó producto, supera el stock`,
                duration: 3000,
                gravity: "top",
                position: "left",
                style: {
                    background: "rgb(135, 52, 61)",
                    borderRadius: "5px"
                }
            }).showToast();
        }

        handleResertQuantity()
    }

    return (
        <Button className="add-item-button" variant="success" onClick={handleAddItem}>
            Agregar al carrito
        </Button>
    )
}