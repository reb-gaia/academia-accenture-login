import React, { useMemo } from 'react';
import { Form, Button } from 'react-bootstrap';
import Container from '../../components/Container';
import { useFormik } from 'formik';
import { useAuth } from '../../hooks/contexts/AuthProvider';
import { useHistory } from 'react-router-dom';
import { Styled } from './styles';
import { validationSchema } from './validation'

function Login() {
  const { SignIn, error } = useAuth();
  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      login: "",
      password: "",
    },
    validationSchema,
    onSubmit: async values => {
      await SignIn(values);
      history.push("/home");
    }
  });

  const AppError = useMemo(
    () => <Styled.Error>{error}</Styled.Error>, [error]
  );

  const ValidationLoginError = useMemo(
    () => <Styled.Error>{formik.errors.login}</Styled.Error>, [formik.errors.login]
  );
  const ValidationPasswordError = useMemo(
    () => <Styled.Error>{formik.errors.password}</Styled.Error>, [formik.errors.password]
  );

  return (
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
            isValid={formik.touched.login && !formik.errors.login}
            isInvalid={formik.errors.login}
          />
          {ValidationLoginError}
        </Form.Group>
        <Form.Group className="mb-5">
          <Form.Label>Senha</Form.Label>
          <Form.Control
            id="password"
            name="password"
            type="password"
            placeholder="Sua senha"
            onChange={formik.handleChange}
            isValid={formik.touched.password && !formik.errors.password}
            isInvalid={formik.errors.password}
          />
          {ValidationPasswordError}
        </Form.Group>
        {AppError}    
        <Button variant="primary" type="submit">
          Entrar
        </Button>
      </Form> 
    </Container>
  );
}

export default Login;