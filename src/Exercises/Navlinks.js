import {Outlet} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navlinks() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">Joel Hayag</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/exercise1">Exercise1 &nbsp;  &nbsp;|</Nav.Link>
              <Nav.Link href="/exercise2">Exercise2 &nbsp;  &nbsp;|</Nav.Link>
              <Nav.Link href="/exercise3">Exercise3 &nbsp;  &nbsp;|</Nav.Link>
              <Nav.Link href="/exercise4">Exercise4 &nbsp;  &nbsp;|</Nav.Link>
              <Nav.Link href="/exercise5">Exercise5 &nbsp;  &nbsp;|</Nav.Link>
              <Nav.Link href="/exercise6">Exercise6</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>
        <Outlet/>
      </Container>
    </>
  );
}

export default Navlinks;
