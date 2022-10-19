import React from 'react';

import ReactDOM from 'react-dom/client';
import App from './App';
// import Try from './components/Try';
import { BrowserRouter } from 'react-router-dom';
import './index.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>

    <App />
    {/* <Try/> */}
  </BrowserRouter>
);
