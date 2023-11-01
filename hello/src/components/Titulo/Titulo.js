import React from "react";
import './Titulo.css';

const Titulo = (props) => {
    return (
        <h1 className="titulo">Amo meu namorado {props.titulo}</h1>
    );
}
export default Titulo;