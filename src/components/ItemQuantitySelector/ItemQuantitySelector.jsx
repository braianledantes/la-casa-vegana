import { useContext } from "react"
import { Badge, Button } from "react-bootstrap"
import { CartContext } from "../../context"
import PropTypes from "prop-types"

ItemQuantitySelector.propTypes = {
    maxQuantity: PropTypes.number.isRequired
}

export function ItemQuantitySelector({ maxQuantity }) {

    const { currentQuantity, updateCurrentQuantity } = useContext(CartContext)

    const handleIncrementQuantity = () => {
        if (currentQuantity < maxQuantity) {
            updateCurrentQuantity(currentQuantity + 1)
        } else {
            updateCurrentQuantity(maxQuantity)
        }
    }

    const handleDecrementQuantity = () => {
        updateCurrentQuantity(currentQuantity - 1)
    }

    return <div className="item-quantity-selector">
        <Button variant="primary" onClick={handleDecrementQuantity}>-</Button>{' '}
        <Badge className="quantity" bg="secondary">{currentQuantity}</Badge>
        <Button variant="primary" onClick={handleIncrementQuantity}>+</Button>{' '}
    </div>
}