import PropTypes from "prop-types"
import { useMenuCategory } from "../../hooks/useMenu"
import { Container } from "react-bootstrap"
import { Loader } from "../Loader"
import { ItemList } from "../ItemList"

ItemListContainer.propTypes = {
    categoryName: PropTypes.string
}

export function ItemListContainer({ categoryName = "" }) {

    const { products, loading, error } = useMenuCategory(categoryName)

    if (error) return <div>Ha ocurrido un error {error.error}</div>
    if (loading) return <Loader />
    return (
        <Container className="mt-4 mb-4 d-flex flex-row flex-wrap gap-4 justify-content-center">
            {products.map(item => <ItemList key={item.id} item={item} />)}
        </Container>
    )
}
