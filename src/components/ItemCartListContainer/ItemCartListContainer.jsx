import { useContext } from "react"
import { CartContext } from "../../context"
import { ItemCart } from "../ItemCart/ItemCart"

export function ItemCartListContainer() {

    const { order } = useContext(CartContext)

    return (
        <div className="cart-list mb-3">
            {order.quantity > 0 &&
                <>
                    {order.items.map(({ product, quantity }) =>
                        <ItemCart key={product.id} product={product} quantity={quantity} />
                    )}
                </>}
            {order.quantity <= 0 &&
                <p>La lista de productos está vacía 😔</p>}
        </div>
    )
}
