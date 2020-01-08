import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux'; // deixa de exportar para todos componentes
import { ToastContainer } from 'react-toastify';
import GlobalStyles from './styles/global';
import './config/ReactotronConfig';
import Header from './components/Header';
import Routes from './routes';
import store from './store';
import history from './services/history';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Header />
        <Routes />
        <GlobalStyles />
        <ToastContainer autoClose={3000} />
      </Router>
    </Provider>
  );
}

export default App;
