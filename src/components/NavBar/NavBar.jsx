import icon from '../../assets/logo.svg';
import CartWidget from '../CartWidget/CartWidget';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = ({ cartCount }) => {

    return (
        <Navbar className="bg-body-tertiary sticky-top z-index-1 shadow">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src={icon}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    La Casa Vegana
                </Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" active>Inicio</Nav.Link>
                        <Nav.Link href="#menu">Menú</Nav.Link>
                        <Nav.Link href="#events">Eventos</Nav.Link>
                        <Nav.Link href="#contact">Contactos</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <CartWidget count={cartCount} />
            </Container>
        </Navbar>
    )
}

export default NavBar;
