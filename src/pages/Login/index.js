import React from 'react';
import { Form, Button } from 'react-bootstrap';
import Container from '../../components/Container';
import { useFormik } from 'formik';

function Login() {
  const formik = useFormik({
    initialValues: {
      login: "",
      password: "",
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  });

  return <div>
    <Container
      title="Login"
      size="sm"
    >
      <Form onSubmit={formik.handleSubmit}>
        <Form.Group className="mb-5">
          <Form.Label>Login</Form.Label>
          <Form.Control
            id="login"
            name="login"
            placeholder="Coloque aqui o seu melhor login"
            onChange={formik.handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-5">
          <Form.Label>Senha</Form.Label>
          <Form.Control
            id="password"
            name="password"
            type="password"
            placeholder="Sua senha"
            onChange={formik.handleChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
        Entrar
        </Button>
      </Form> 
    </Container>
  </div>
}

export default Login;