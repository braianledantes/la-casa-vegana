import { ItemListContainer, Loader } from "../components"
import { useCompleteMenu } from "../hooks/useMenu"

export function Home() {
    const { data, loading, error } = useCompleteMenu()

    if (loading) return <Loader />
    if (error) return <div>Ha ocurrido un error {error}</div>
    return <ItemListContainer menuList={data} />
}