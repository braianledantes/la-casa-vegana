
import { Button } from "react-bootstrap"
import PropTypes from "prop-types"

AddItemButton.propTypes = {
    callback: PropTypes.func.isRequired
}

export function AddItemButton({ callback }) {
    return (
        <Button className="add-item-button" variant="success" onClick={callback}>
            Agregar al carrito
        </Button>
    )
}