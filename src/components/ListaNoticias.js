import React from 'react';
import ItemNoticia from './ItemNoticia';

const ListaNoticias = (props) => {
    return (
        <section className='container mb-5 py-3 shadow-lg'>
            {/* definicion de sistema de grillas para las cards de noticias */}
            <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3'>
                {/* MAP recorre cada elem del arreglo y llama a la funcion/componente ItemNoticia,
                para armar la lista de noticias. key hace que cada componente ItemTarea sea unico */}
                {
                props.arregloNoticias.map((valor,indice)=><ItemNoticia key={indice} info={valor}></ItemNoticia>)
                }
            </div>
        </section>
    );
};

export default ListaNoticias;