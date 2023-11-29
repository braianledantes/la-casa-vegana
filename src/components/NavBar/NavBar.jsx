import icon from '../../assets/logo.svg';
import { CartWidget } from '../CartWidget';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';
import { useAllCategories } from "../../hooks/useMenu";

export function NavBar() {
    const { categories } = useAllCategories()

    return (
        <Navbar collapseOnSelect expand="md" className="bg-body-tertiary sticky-top z-index-1 shadow">
            <Container>
                <Navbar.Brand as={Link} to={'/'}>
                    <img
                        alt=""
                        src={icon}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    La Casa Vegana
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to={'/'} href='#'>Inicio</Nav.Link>
                        <NavDropdown title="Menú" id="collapsible-nav-dropdown">
                            <NavDropdown.Item as={Link} to={'/menu'} href='#'>Todo</NavDropdown.Item>
                            <NavDropdown.Divider />
                            {categories.map(category => {
                                return <NavDropdown.Item key={category.id} as={Link} to={`/category/${category.name}`} >{category.name}</NavDropdown.Item>
                            })}
                        </NavDropdown>
                        <Nav.Link as={Link} to={'/events'} href='#'>Eventos</Nav.Link>
                        <Nav.Link as={Link} to={'/contact'} href='#'>Contacto</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link as={Link} to={'/cart'} href='#'>
                            <CartWidget />
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
