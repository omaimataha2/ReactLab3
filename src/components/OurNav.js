import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

export default function OurNav(){
    return(
        <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Omaima</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/home">Home</Nav.Link>
      <Nav.Link href="/about">About</Nav.Link>
      <Nav.Link href="/posts">Posts</Nav.Link>
      <Nav.Link href="/profile">Profile</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
    );
}






