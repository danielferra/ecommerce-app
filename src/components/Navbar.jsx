import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function BasicExample() {
    return (
      <Navbar bg="light fw-bold fs-4 py-3 shadow-sm" expand="lg">
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
            <div className='buttons'>
                 <a href='.' className='btn btn-outline-success'>
                    <i className='fa fa-sign-in me-1'></i>Login</a>
                    <a href='.' className='btn btn-outline-success ms-2'>
                    <i className='fa fa-user-plus me-1'></i>Registro</a>
                    <a href='.' className='btn btn-outline-success ms-2'>
                    <i className='fa fa-shopping-cart me-1'></i>Carrito (0)</a>
              </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
  
  export default BasicExample;