import { useParams } from "react-router-dom"
import { useProduct } from "../../hooks/useMenu"
import { Loader } from ".."
import { ItemDetail } from "../ItemDetail"
import { ErrorMessage } from "../ErrorMessage"

export function ItemDetailContainer() {
    const { id } = useParams();
    const { product, loading, error } = useProduct(id);

    if (loading) return <Loader />
    if (error) return <ErrorMessage error={error} />
    return <ItemDetail product={product} />
}