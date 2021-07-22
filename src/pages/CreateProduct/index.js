import React, { useMemo } from 'react';
import { useFormik } from 'formik';
import { Form, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Container from '../../components/Container';
import { Styled } from './styles';
import { useProduct } from '../../hooks/contexts/ProductProvider';


function CreateProduct() {
  const { postProduct, error } = useProduct();
  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      price: 0,
    },
    onSubmit: async values => {
      await postProduct(values);
      history.push("/home");
    }
  });

  const AppError = useMemo(
    () => <Styled.Error>{error}</Styled.Error>, [error]
  )

  return (
    <Container
      title="Criar Produto"
      size="sm"
    >
      <Form onSubmit={formik.handleSubmit}>
        <Form.Group className="mb-5">
          <Form.Label>Nome do Produto</Form.Label>
          <Form.Control
            id="name"
            name="name"
            placeholder="Coloque o nome do produto"
            onChange={formik.handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-5">
          <Form.Label>Descrição</Form.Label>
          <Form.Control
            id="description"
            name="description"
            placeholder="Coloque uma descrição do produto"
            onChange={formik.handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-5">
          <Form.Label>Preço</Form.Label>
          <Form.Control
            id="price"
            name="price"
            type="number"
            placeholder="Digite o preço do produto"
            onChange={formik.handleChange}
          />
        </Form.Group>
        {AppError}
        <Button variant="primary" type="submit">
          Criar produto
        </Button>
      </Form> 
    </Container>
  );
}

export default CreateProduct;