import { useContext } from "react"
import { CartContext } from "../../context"
import { Button } from "react-bootstrap"
import PropTypes from 'prop-types'
import Toastify from 'toastify-js'

AddItemButton.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        details: PropTypes.string,
        img: PropTypes.string
    }).isRequired
}

export function AddItemButton({ product }) {

    const { addItem } = useContext(CartContext);

    const handleAddProduct = () => {
        const newItem = addItem({ product })

        if (newItem) {
            Toastify({
                text: `Se agregaron ${newItem.cant} items al carrito`,
                duration: 3000,
                gravity: "bottom",
                position: "right",
                style: {
                    background: "rgb(25, 135, 84)",
                    borderRadius: "5px"
                }
            }).showToast();
        }
    }

    return <Button variant="success" onClick={handleAddProduct}>Agregar al carrito</Button>
}