import PropTypes from "prop-types"

export const Product = PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    details: PropTypes.string,
    img: PropTypes.string,
    price: PropTypes.number,
    stock: PropTypes.number
}).isRequired
