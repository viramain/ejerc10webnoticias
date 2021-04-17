import React from 'react';
import NoticiaCompleta from './NoticiaCompleta';

const ItemNoticia = (props) => {
    return (
         // continuacion sistema de grillas
        <div className="col my-3">
            <div className="card shadow">  
                <img src={props.info.urlToImage} className="card-img-top" alt={props.info.title}></img>

                <div className="card-body">
                    <h5 className="card-title">{props.info.title}</h5>
                    <p className="card-text">{props.info.description}</p>
                    <div className="d-flex justify-content-center">
                        <a href={<NoticiaCompleta></NoticiaCompleta>} className="btn btn-primary">Ver noticia completa</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemNoticia;