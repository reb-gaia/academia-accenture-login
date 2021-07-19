import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import GlobalStyle from './styles/global'

function App() {
  return (
    <div>
      <BrowserRouter> {/* Gerenciar os contextos */}
        <Routes />
        <GlobalStyle />
      </BrowserRouter>
    </div>  
  );
}

export default App;
