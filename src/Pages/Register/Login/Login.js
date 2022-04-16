import React from "react";
import { Button, Form } from "react-bootstrap";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
  return (
    <div className="w-25 mx-auto border border-danger mt-3 rounded">
      <div className="p-2">
        <h2 style={{color: '#4A4A4B'}} className="text-center mt-2">Log In</h2>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button
            className="w-50 mx-auto d-block"
            variant="danger"
            type="submit"
          >
            Log In
          </Button>
        </Form>
        <SocialLogin></SocialLogin>
      </div>
    </div>
  );
};

export default Login;
