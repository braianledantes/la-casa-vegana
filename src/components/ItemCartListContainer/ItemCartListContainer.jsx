import { useContext } from "react"
import { CartContext } from "../../context"
import { ItemCart } from "../ItemCart/ItemCart"

export function ItemCartListContainer() {

    const { order } = useContext(CartContext)

    return (
        <div className="cart-list mb-3">
            {order.cant > 0 &&
                <div>
                    {order.items.map(({ product, cant }) =>
                        <ItemCart key={product.id} product={product} cant={cant} />
                    )}
                </div>}
            {order.cant <= 0 &&
                <p>La lista de productos está vacía 😔</p>}
        </div>
    )
}
