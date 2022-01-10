/**
 * @Autor Matias sarmiento gallardo
 * @version 1.0
 * @since 2021
 * @category React
 * @licence MIT
 * @description Pagina de pruebas
 * @data 2021-12-30
 */

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './public/css/main.css'
import {BrowserRouter} from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

