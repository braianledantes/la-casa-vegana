import { ItemListContainer, Loader } from "../components"
import { useCompleteMenu } from "../hooks/useMenu"

export function Home() {
    const { products, loading, error } = useCompleteMenu()

    if (loading) return <Loader />
    if (error) return <div>Ha ocurrido un error {error.error}</div>
    return <ItemListContainer menuList={products} />
}