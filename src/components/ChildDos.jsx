import React from 'react';
import '../components/css/Child.css';

function ChildDos(props) {

  // LLega una props con una funcion
  console.log('props-->', props)
  // console.log('funcion cambio titulo-->',cambioTitulo() )

  const {cambioTituloHijo} = props

  /*
  Desde el evento onClick con una funcion
  que llama a otra funcion (CallBack) se llama 
  a la funcion cambioTitulo() a traves del props 
  cambioTitulo('Pasado desde el Hijo');
  */
  return (
    <div className="componentChild">
        <h2>{cambioTituloHijo}</h2>
        <button onClick={() => props.cambioTituloPadre('Titulo cambiado desde el Hijo 2')} className="componentChild__btn">
          Click! cambia el titulo del Padre
        </button>
        <p>Manejo de Hook setState(), mandar props de un hijo a un padre</p>
    </div>
  );
}

export default ChildDos;
