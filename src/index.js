import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';

const domain = process.env.React_App_AUTH0_DOMAIN;
const clientId = process.env.React_APP_AUTH0_ClIENT_ID;

ReactDOM.render(
  <Auth0Provider>
  domain={domain}
  clientId={clientId}
  redirectUri={window.location.origin}>
  <App />
</Auth0Provider>,
  document.getElementById('root')
);
