import React, { useEffect } from 'react';
import Container from '../../components/Container';
import { Styled } from './styles';
import { useProduct } from '../../hooks/contexts/ProductProvider'
import CardProduct from '../../components/CardProduct';

function Home() {

  const { products, getProduct } = useProduct();

  // useEffect -> renderizar os produtos
  useEffect(() => {
    getProduct()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container 
      title="Últimos Cadastros" 
      size="lg"
    >
      <Styled.CardWrapper>
        {products.map(product => (
          <CardProduct 
            key={product.id}
            product={product}>
              
          </CardProduct>
        ))}
      </Styled.CardWrapper>
    </Container>
  )
}

export default Home;