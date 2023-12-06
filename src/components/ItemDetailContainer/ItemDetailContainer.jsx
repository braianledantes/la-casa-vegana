import { useParams } from "react-router-dom"
import { useMenuItem } from "../../hooks/useMenu"
import { Loader } from ".."
import { ItemDetail } from "../ItemDetail/ItemDetail"

export function ItemDetailContainer() {
    const { id } = useParams();
    const { product, loading, error } = useMenuItem(id);

    if (loading) return <Loader />
    if (error) return (<div>Ha ocurrido un error {error.error}</div>)
    return <ItemDetail product={product} />
}