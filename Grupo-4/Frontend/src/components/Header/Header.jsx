import './Header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../../public/img/Logo.jpeg';
import { useContext } from 'react';
import { UserContext } from '../../context/Context';

export function GameHeader() {
    const { user } = useContext(UserContext);

    return (
        <>
            <header>
                <Navbar bg="danger" expand="lg" className="navbar-custom">
                    <Container>
                        <img src={Logo} alt="arbol" className="logo-img" />
                        <Navbar.Brand href="/">FinanSage</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto d-flex flex-column flex-lg-row justify-content-end">
                                <Nav.Link href="/login" className="nav-link">
                                    {user ? 'Hola, Julian' : 'Login'}
                                </Nav.Link>
                                <NavDropdown
                                    title="Acciones"
                                    id="basic-nav-dropdown"
                                    className="nav-dropdown"
                                >
                                    <NavDropdown.Item href="/addCards">
                                        Agregar Tarjeta
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">
                                        Inversion
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
        </>
    );
}
