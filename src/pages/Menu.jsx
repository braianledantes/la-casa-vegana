import { useParams } from "react-router-dom"
import { ItemListContainer, Loader } from "../components"
import { useMenuCategory } from "../hooks/useMenu"

export function Menu() {
    const { categoryName } = useParams()
    const { data, loading, error } = useMenuCategory(categoryName)

    if (error) return <div>Ha ocurrido un error {error}</div>

    if (loading) return <Loader />

    return <>
        <h2 style={{textAlign: "center", marginTop:"1rem"}}>{categoryName}</h2>
        <ItemListContainer menuList={data} />
    </>
}