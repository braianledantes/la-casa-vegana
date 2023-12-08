import { useContext } from "react"
import { CartContext } from "../../context"
import { ItemCart } from "../ItemCart/ItemCart"

export function ItemCartListContainer() {

    const { listItems } = useContext(CartContext)

    return (
        <div className="cart-list">
            {listItems.map(({ product, cant }) =>
                <ItemCart key={product.id} product={product} cant={cant} />
            )}
        </div>
    )
}
