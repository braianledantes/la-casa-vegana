import ItemList from "../ListItem/ItemList";
import img from '../../assets/hamburguesa-vegana.png'
import { Container } from "react-bootstrap";

function ItemListContainer() {
    const item = {
        name: "Hamburguesa",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        srcImage: img
    }
    return (
        <Container className="mt-4 mb-4 d-flex flex-row flex-wrap gap-4 justify-content-center">
            <ItemList item={item} />
            <ItemList item={item} />
            <ItemList item={item} />
            <ItemList item={item} />
            <ItemList item={item} />
        </Container>
    )
}

export default ItemListContainer;