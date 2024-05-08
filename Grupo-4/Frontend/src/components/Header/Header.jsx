import './Header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown'; // Asegúrate de importar NavDropdown aquí

export function GameHeader() {
    return (
        <>
            <header>
                <Navbar bg="danger" expand="lg">
                    <Container>
                        <Navbar.Brand href="#home">FinanSage</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="#home" className="nav-link">
                                    Inicio
                                </Nav.Link>
                                <Nav.Link href="#link" className="nav-link">
                                    Enlace
                                </Nav.Link>
                                <NavDropdown
                                    title="Dropdown"
                                    id="basic-nav-dropdown"
                                    className="nav-dropdown"
                                >
                                    <NavDropdown.Item href="#action/3.1">
                                        Acción
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">
                                        Otra acción
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">
                                        Enlace separado
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
