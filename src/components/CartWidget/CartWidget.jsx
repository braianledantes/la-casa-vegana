import PropTypes from "prop-types";

CartWidget.propTypes = {
    count: PropTypes.number.isRequired
}

export function CartWidget({ count }) {
    return (
        <div>
            <i className="bi bi-cart"></i>
            {' '}
            <span>{count}</span>
        </div>
    )
}
