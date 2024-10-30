import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.scss';
import App from './app/app';
import { Provider } from 'react-redux';
import { store } from './app/store/store';
import { checkUserAuthData } from './app/actions/api-actions';

store.dispatch(checkUserAuthData());

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
