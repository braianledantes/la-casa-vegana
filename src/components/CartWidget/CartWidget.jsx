import { useContext } from "react";
import { CartContext } from "../../context";

export function CartWidget() {
    const { cantItems } = useContext(CartContext);

    return (
        <div>
            <i className="bi bi-cart"></i>
            {' '}
            <span>{cantItems}</span>
        </div>
    )
}
