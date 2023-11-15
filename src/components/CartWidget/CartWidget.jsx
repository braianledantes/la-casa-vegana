export function CartWidget({ count }) {
    return (
        <div>
            <i className="bi bi-cart"></i>
            {' '}
            <span>{count}</span>
        </div>
    )
}
