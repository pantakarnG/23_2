import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <Navbar collapseOnSelect expand="lg" className="px-4 bg-info">
      <Container>
        <Navbar.Brand href="/">
          Student
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/#" onClick={() => navigate("/student")}>
              หน้าแรก
            </Nav.Link>
            <Nav.Link href="/#" onClick={() => navigate("/student")}>
              ข้อมูลนักศึกษา
            </Nav.Link>
            <NavDropdown title="การจอง" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1" onClick={() => navigate("/student")}>
                null
                </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2"onClick={() => navigate("/student")}>
                ลงทะเบียน
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" onClick={() => navigate("/student")}>
                เข้าสู่ระบบ
                </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4" onClick={() => navigate("/student")}>
                ข้อมูลการจอง
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Login</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Rock and Roll
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
