import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../Context/AuthProvider/AuthProvider";

const Login = () => {
  const navigate = useNavigate();
  const { signIn } = useContext(AuthContext);

  const [error, setError] = useState('');

  const location = useLocation()

  const from = location.state?.from?.pathname || '/';

  const handelLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        setError('');
        navigate(from, {replace: true});
      })
      .catch((error) => {
        console.error(" error is ", error);
        setError(error.message);
      });
  };
  return (
    <div>
      <Form onSubmit={handelLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Button className="mb-3" variant="primary" type="submit">
          Submit
        </Button>
        <Form.Text className="text-danger">
            {error}
        </Form.Text>
      </Form>
    </div>
  );
};

export default Login;
