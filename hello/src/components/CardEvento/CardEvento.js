import React from "react";
import './CardEvento.css'

const CardEvento = (props) => {
    return (
        <div className="card">
            <h3 className="card__titulo">{props.titulo}</h3>
            <p className="card__texto">{props.texto}</p>
            <a href="" className="card__conectar">{props.link}</a>
        </div>
    );
}

export default CardEvento;