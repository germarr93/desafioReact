import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import ReactDOM from 'react-dom'

import React from 'react';
const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home"> Inmobiliaria</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
         
            <Nav.Link href="#features">
              
              Inicio</Nav.Link>
            <Nav.Link href="#pricing">Imagenes </Nav.Link>
           <NavDropdown title="Mas Informacion" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Ropa Nueva 2022
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Ropa Tendencia 2023
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                La mas Vendida   
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Informacion extra       
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Carrito de Compras</Nav.Link>
            <Nav.Link href="#pricing"> 
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
            </svg>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default NavBar;

//  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
