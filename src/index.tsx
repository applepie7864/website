import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import './styles/fonts.scss';
import './styles/animations.scss';
import './styles/icons.scss';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
