import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../../images/logo2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import auth from "../../hooks/Firebase.Init/Firebase.init";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

const NavBar = () => {
  const [user, loading, error] = useAuthState(auth);
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img height={35} src={logo} alt="" />
        </Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link as={Link} to="/cart">
            <FontAwesomeIcon icon={faCartPlus} />
          </Nav.Link>
          {user ? (
            <button onClick={()=> signOut(auth)} style={{color: '#4a4a4b'}} className="btn btn-link text-decoration-none fw-bold mx-3">Log Out</button>
          ) : (
            <Nav.Link className="fw-bold mx-3" as={Link} to="/login">
              Log In
            </Nav.Link>
          )}
          <Nav.Link
            className="btn btn-danger text-white rounded-pill py-1 px-2"
            as={Link}
            to="/signup"
          >
            Sign Up
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
