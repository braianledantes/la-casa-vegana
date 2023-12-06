import { useParams } from "react-router-dom"
import { ItemListContainer } from "../components"

export function Menu() {
    const { categoryName } = useParams()

    return <>
        <h2 style={{ textAlign: "center", marginTop: "1rem" }}>{categoryName}</h2>
        <ItemListContainer categoryName={categoryName} />
    </>

}