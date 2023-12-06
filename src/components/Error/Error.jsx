import PropTypes from 'prop-types'

ErrorMessage.propTypes = {
    error: PropTypes.object
}

export function ErrorMessage({ error }) {
    return <div>Ha ocurrido un error {error.error}</div>
}