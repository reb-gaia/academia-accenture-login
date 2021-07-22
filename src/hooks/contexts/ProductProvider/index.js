// requisições, regras de negocio

import React, { createContext, useContext, useState, useCallback } from 'react';
import { api } from "../../../services/api";

const ProductContext = createContext({});

function ProductProvider({children}) {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  

  const getProduct = useCallback(
    async () => {
      try {
        const { data } = await api.get('/products');
        setProducts(data);
      } catch (error) {
        setError("Erro ao adquirir a lista de produtos");
      }
    
  }, []);
  
  const postProduct = useCallback(
    async ({name, description, price}) => {
      try {
        await api.post('/products', {
          name,
          description,
          price,        
        });
      } catch (error) {
        setError("Erro ao postar um produto");
      }
  }, []);

  const putProduct = useCallback(
    async ({id, name, description, price}) => {
      try {
        await api.put(`/products/${id}`,
          name, 
          description, 
          price,
        );
      } catch (error) {
        setError("Erro ao editar o produto");
      }
  }, []);

  const deleteProduct = useCallback(
    async ({id}) => {
      try {
        await api.delete(`/products/${id}`);
      } catch (error) {
        setError("Erro ao deletar o produto");
      }
  }, []);

  return (
    <ProductContext.Provider 
      value={{
        products, 
        error,
        getProduct,
        postProduct,
        putProduct,
        deleteProduct        
    }}>
      {children}
    </ProductContext.Provider>
  );
}

function useProduct() {
  const context = useContext(ProductContext);
  return context;
}

export { ProductProvider, useProduct };