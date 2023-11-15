import { ItemList } from "../ListItem";
import { Container } from "react-bootstrap";
import PropTypes from "prop-types";

ItemListContainer.propTypes = {
    menuList: PropTypes.arrayOf(PropTypes.object).isRequired
}

export function ItemListContainer({ menuList }) {

    return (
        <Container className="mt-4 mb-4 d-flex flex-row flex-wrap gap-4 justify-content-center">
            {menuList.map(item => {
                return <ItemList key={item.id} item={item} />
            })}
        </Container>
    )
}
