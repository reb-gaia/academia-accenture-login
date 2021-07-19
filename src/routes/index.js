// local que determina as rotas
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from '../pages/Login';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import { Styled } from './styles';
import NavBar from '../components/NavBar';

function Routes() {
  return (
    <Styled.AppLayout>
      <NavBar />
      <Styled.PageLayout>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/home" component={Home} />
          <Redirect from="*" to={NotFound} /> {/* Se não for nenhuma acima, redireciona para a NotFound */}
        </Switch>
      </Styled.PageLayout>
    </Styled.AppLayout>
  );
}

export default Routes;