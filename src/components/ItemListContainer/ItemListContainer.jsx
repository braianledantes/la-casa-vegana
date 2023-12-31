import PropTypes from "prop-types"
import { useProductsByCategory } from "../../hooks/useProducts"
import { Container } from "react-bootstrap"
import { Loader } from "../Loader"
import { ItemList } from "../ItemList"
import { ErrorMessage } from "../ErrorMessage"

ItemListContainer.propTypes = {
    categoryName: PropTypes.string
}

export function ItemListContainer({ categoryName = "" }) {

    const { products, loading, error } = useProductsByCategory(categoryName)

    if (error) return <ErrorMessage />
    if (loading) return <Loader />
    return (
        <Container className="mt-4 mb-4 d-flex flex-row flex-wrap gap-4 justify-content-center">
            {products.map(item => <ItemList key={item.id} product={item} />)}
        </Container>
    )
}
