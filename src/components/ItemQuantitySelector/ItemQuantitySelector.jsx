import { Badge, Button } from "react-bootstrap"
import PropTypes from "prop-types"

ItemQuantitySelector.propTypes = {
    currentQuantity: PropTypes.number.isRequired,
    incrementCallback: PropTypes.func.isRequired,
    decrementCallback: PropTypes.func.isRequired
}

export function ItemQuantitySelector({ currentQuantity, incrementCallback, decrementCallback }) {
    return <div className="item-quantity-selector">
        <Button variant="primary" onClick={decrementCallback}>-</Button>
        <Badge className="quantity" bg="secondary">{currentQuantity}</Badge>
        <Button active variant="primary" onClick={incrementCallback}>+</Button>
    </div>
}