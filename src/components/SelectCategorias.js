import React, { Fragment } from "react";
import { useState } from "react";
import Spinner from "./Spinner";
import ListaNoticias from "./ListaNoticias";


const SelectCategorias = () => {
  // crear state personaje que es un arreglo [] de objetos
    const [noticias, setNoticias] = useState([]);
    const [categoria, setCategoria] = useState('');
    const [cargando, setCargando] = useState(false);

  // uso useeffect porque quiero que se cargue en el montaje
    // useEffect(() => {
    // //aqui escribo la logica. los corchetes vacios es para que se actualice solo en el montaje []
    // consultarAPI();
    // }, []);

    const buscaCategoria = (e) => {
      e.preventDefault();
      // asigno a state categoria la opcion seleccionada
      setCategoria(e.target.value);
      consultarAPI();
    };

    const consultarAPI = async () => {
        // mostrar spinner
        setCargando(true);
        // constante RESPUESTA recibe la respuesta de la API. con fetch paso la URL de la pag 
        // const respuesta = await fetch(`https://newsapi.org/v2/everything?category=${categoria}apiKey=55bea24272f54108aa49ca5ce2bb3b60`);
        // no funciona por categoria
        const respuesta = await fetch('https://newsapi.org/v2/everything?q=covid&apiKey=55bea24272f54108aa49ca5ce2bb3b60');
        
        //extraigo resultados de formato json
        const {articles} = await respuesta.json();
        // para que muestre un poco mas de tiempo el spinner se usa settimeout
        setTimeout(() => {
          setNoticias(articles);
          setCargando(false);
        }, 2000);
    };

  //operador ternario: alternativa a un IF (se usa cuando es una linea corta)
  // (condicion logica)?(lo que quiero que haga si es true la condicion):(lo que quiero que suceda si es false)
  const mostrarComponente = (cargando === true) ? (<Spinner></Spinner>) : (<ListaNoticias arregloNoticias={noticias}></ListaNoticias>);

    return (
        <Fragment>
        <section className="container shadow text-center w-75 mt-5">
            <form className="my-3 mx-5 text-center">
                <label className="lead fw-bold my-3">Buscar por categoría:</label>
                <select defaultValue={'DEFAULT'}  className="form-select lead fw-bold ml-4" onChange={buscaCategoria}>
                    <option value="DEFAULT" disabled>Seleccione una Categoría...</option>
                    <option value="business">Negocios</option>
                    <option value="generalhealth">Salud</option>
                    <option value="science">Ciencia</option>
                    <option value="sports">Deportes</option>
                    <option value="technology">Tecnología</option>
                </select>
                
            </form>    
        </section>

        <section>
          {
          mostrarComponente
          }
        </section>
        </Fragment>
    );
};

export default SelectCategorias;
