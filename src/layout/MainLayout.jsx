import { NavBar } from "../components"
import PropTypes from "prop-types";

MainLayout.propTypes = {
    children: PropTypes.node,
    cartCount: PropTypes.number
}

export function MainLayout({ children, cartCount }) {
    return (
        <>
            <NavBar cartCount={cartCount} />
            {children}
        </>
    )
}