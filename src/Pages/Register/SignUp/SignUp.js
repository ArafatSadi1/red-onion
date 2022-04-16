import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import SocialLogin from "../SocialLogin/SocialLogin";
import auth from "../../hooks/Firebase.Init/Firebase.init";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const navigate = useNavigate();

  const getUserName = (event) => {
    const name = event.target.value;
    setName(name);
  };
  const getUserEmail = (event) => {
    const email = event.target.value;
    setEmail(email);
  };
  const getUserPassword = (event) => {
    const password = event.target.value;
    setPassword(password);
  };
  const getUserConfirmPassword = (event) => {
    const confirmPassword = event.target.value;
    setConfirmPassword(confirmPassword);
  };
  const handleSignUp = event =>{
    event.preventDefault();
    createUserWithEmailAndPassword(email, password);
    navigate('/')
  }
  return (
    <div>
      <div className="w-25 mx-auto border border-danger mt-3 rounded">
        <div className="p-3">
          <h2 style={{ color: "#4A4A4B" }} className="text-center mt-2">
            Sign Up
          </h2>
          <Form onSubmit={handleSignUp}>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Control
                onBlur={getUserName}
                type="text"
                placeholder="Name"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                onBlur={getUserEmail}
                type="email"
                placeholder="Enter email"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                onBlur={getUserPassword}
                type="password"
                placeholder="Password"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
              <Form.Control
                onBlur={getUserConfirmPassword}
                type="password"
                placeholder="Confirm Password"
              />
            </Form.Group>
            <p>
              Already have an account?{" "}
              <Link className="text-decoration-none" to="/login">
                Please LogIn
              </Link>
            </p>
            <Button
              className="w-50 mx-auto d-block"
              variant="danger"
              type="submit"
            >
              Sign Up
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
