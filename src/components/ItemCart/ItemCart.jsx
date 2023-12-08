import PropTypes from "prop-types"
import { compactString } from '../../utils/utils'

ItemCart.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        details: PropTypes.string,
        img: PropTypes.string
    }).isRequired,
    cant: PropTypes.number.isRequired
}

export function ItemCart({ product, cant }) {
    return (
        <div className='item-cart' >
            <img className="image" src={product.img} />
            <div className="item-cart__content">
                <h5 className="name">{product.name}</h5>
                <p className="details">{compactString(product.details, 30)}</p>
                <p className="cant">Cantidad: {cant}</p>
            </div>
        </div>
    )
}