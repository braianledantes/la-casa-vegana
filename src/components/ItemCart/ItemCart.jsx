import { compactString } from '../../utils/utils'
import { Product } from "../../shapes"
import PropTypes from "prop-types"

ItemCart.propTypes = {
    product: Product,
    quantity: PropTypes.number.isRequired
}

export function ItemCart({ product, quantity }) {
    return (
        <div className='item-cart' >
            <img className="image" src={product.img} />
            <div className="item-cart__content">
                <h5 className="name">{product.name}</h5>
                <p className="details">{compactString(product.details, 30)}</p>
                <p className="cant">Cantidad: {quantity}</p>
            </div>
        </div>
    )
}