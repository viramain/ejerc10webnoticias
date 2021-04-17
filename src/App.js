
import { Fragment } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SelectCategorias from './components/SelectCategorias';

function App() {
  return (
    <Fragment>
        <section className="container my-5 border border-4 bg-secondary">
          <h1 className='display-4 text-light text-center my-3'>Noticias</h1>
        </section>
        <SelectCategorias></SelectCategorias>
    </Fragment>
  );
}

export default App;
