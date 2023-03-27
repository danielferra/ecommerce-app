import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget/CartWidget';



function BasicExample() {
    return (
      <Navbar bg="light fw-bold py-3 shadow-sm" expand="lg">
        <Container>
          <Navbar.Brand href="#home">ECOMMERCE REACT</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">About Us</Nav.Link>
              <Nav.Link href="#link">Users</Nav.Link>
              <Nav.Link href="#link">Contact</Nav.Link>
            </Nav>
           </Navbar.Collapse>
        </Container>
        <CartWidget/>
      </Navbar>
      
    );
  }
  
  export default BasicExample;