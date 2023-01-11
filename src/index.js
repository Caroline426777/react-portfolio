import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';

import './fonts/calibri font sv/Calibri Regular.ttf';
import './fonts/calibri font sv/Calibri Bold.TTF';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );
