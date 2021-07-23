import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useProduct } from '../../hooks/contexts/ProductProvider'
import Swal from 'sweetalert2';
import { useHistory } from 'react-router-dom';

function CardProduct({product}) {
  const history = useHistory();

  const { deleteProduct } = useProduct();
  const handleDelete = async () => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Você deseja excluuir esse produto?',
      text: "Caso exclua, será permanente!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sim, quero excluir!',
      cancelButtonText: 'Não, quero cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        deleteProduct({id: product.id});
        swalWithBootstrapButtons.fire(
          'Excluido!',
          'Seu produto foi excluido!',
          'Sucesso'
        )
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelado',
          'Seu produto foi salvo!',
          'Error'
        )
      }
    })
  };

  const handleEdit = async () => {
    history.push(`edit-product/${product.id}`, {product});
  };

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">$ {product.price}</Card.Subtitle>
        <Card.Text>
          {product.description}
        </Card.Text>
        <Button variant="primary" onClick={handleDelete}>
          Excluir
        </Button>
        <Button variant="primary" type="submit" onClick={handleEdit}>
          Editar
        </Button>
      </Card.Body>
    </Card>
  );
}

export default CardProduct;