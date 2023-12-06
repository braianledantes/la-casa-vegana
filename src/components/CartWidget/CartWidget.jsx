import { useContext } from "react";
import { CartContext } from "../../context";
import { Badge } from "react-bootstrap";

export function CartWidget() {
    const { cantItems } = useContext(CartContext);

    return (
        <div>
            <i className="bi bi-cart"></i>
            {' '}
            <Badge bg="success">{cantItems}</Badge>
        </div>
    )
}
