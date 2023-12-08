import PropTypes from "prop-types"

export const Product = {
    product: PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        details: PropTypes.string,
        img: PropTypes.string,
        stock: PropTypes.number
    }).isRequired
}