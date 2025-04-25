import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './styles/index.scss';
import './styles/fonts.scss';
import './styles/animations.scss';
import './styles/icons.scss';

import App from './App';
import NotFound from './components/common/not-found';

const ApplyTheme = ({ children }: any) => {
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (!theme || theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return children;
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <ApplyTheme>
            <App />
          </ApplyTheme>
        }/>
        <Route path="*" element={
          <ApplyTheme>
            <NotFound />
          </ApplyTheme>
        }/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
