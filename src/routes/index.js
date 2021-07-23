// local que determina as rotas
import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import CreateProduct from "../pages/CreateProduct";
import Login from "../pages/Login";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import NavBar from "../components/NavBar";
import { Styled } from './styles';
import { useAuth } from '../hooks/contexts/AuthProvider';

export default function Routes() {
  const { auth } = useAuth();
  return (
    <Styled.AppLayout>
      {auth && <NavBar />}
      <Styled.PageLayout>
        <Switch>
          <Route path="/" exact component={Login} />
          {auth && <Route path="/home" component={Home} />}
          {auth && <Route path="/create-product" component={CreateProduct} />}
          {auth && <Route path="/edit-product/:id" component={CreateProduct} />}
          <Redirect from="*" to={NotFound} />
        </Switch>
      </Styled.PageLayout>
    </Styled.AppLayout>
  )
}