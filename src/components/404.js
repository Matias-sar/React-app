import React from "react";
import {Error} from '../public/css/style.js';

export const Error404 = () =>{
    return (
        <Error>
            <h1>Error 404</h1>
            <p>Pagina no encontrada</p>
            <p>Por favor, vuelva a la pagina principal</p>
        </Error>
    )
}