import { ItemListContainer, Loader } from "../components"
import { useCompleteMenu } from "../hooks/useMenu"

export function Menu() {
    const { data, loading, error } = useCompleteMenu()

    if (error) return <div>Ha ocurrido un error {error}</div>

    if (loading) return <Loader />

    return <ItemListContainer menuList={data} />
}