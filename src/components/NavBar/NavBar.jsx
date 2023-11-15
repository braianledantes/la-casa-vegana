import icon from '../../assets/logo.svg';
import { CartWidget } from '../CartWidget';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';

NavBar.propTypes = {
    cartCount: PropTypes.number.isRequired
}

export function NavBar({ cartCount }) {

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
                            <NavDropdown.Item >
                                Empanadas
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                Burgers
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link as={Link} to={'/events'} href='#'>Eventos</Nav.Link>
                        <Nav.Link as={Link} to={'/contact'} href='#'>Contacto</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link as={Link} to={'/cart'} href='#'>
                            <CartWidget count={cartCount} />
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
