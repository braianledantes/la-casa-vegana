import { NavBar } from "../components"

export const MainLayout = ({ children, cartCount }) => {
    return (
        <>
            <NavBar cartCount={cartCount} />
            {children}
        </>
    )
}