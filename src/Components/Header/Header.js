import Button from "@restart/ui/esm/Button";
import React from "react";
import {
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
} from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="mx-auto">
      <Navbar bg="warning">
        <Container fluid>
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <NavLink to="/home" className="item">
                Home
              </NavLink>
              <NavLink to="/about" className="item">
                About
              </NavLink>
              <NavLink to="/servises" className="item">
                Servises
              </NavLink>
              <NavLink to="/contuct" className="item">
                Contuct
              </NavLink>
              <NavLink to="/comment" className="item">
                Comment
              </NavLink>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
