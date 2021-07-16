import React, { useState } from 'react';
import './css/Parent.css';
import ChildUno from './components/ChildUno';
import ChildDos from './components/ChildDos';

function Parent() {
  
  const [titulopadre, setTitulopadre] = useState('Titulo Padre')
  const [titulohijouno, setTitulohijouno] = useState('Titulo Hijo Uno')
  const [titulohijodos, setTitulohijodos] = useState('Titulo Hijo Dos')

  

  const handleChangeTitleChild1 = (event) => {
    setTitulohijouno('Titulo cambiado desde el padre')
  }

  const handleChangeTitleChild2 = (event) => {
    setTitulohijodos('Titulo cambiado desde el padre')
  }

  return (
    <div className="componentParent">
        {/* 
          El titulo lo recupera del useState, estado original
        */}
        <h1>{titulopadre}</h1>
        <button className="componentParent__btn mb-5" onClick={handleChangeTitleChild1}>Click! cambia el titulo del hijo 1 desde el padre</button>
        <button className="componentParent__btn" onClick={handleChangeTitleChild2}>Click! cambia el titulo del hijo 2 desde el padre</button>
        <p>Manejo de Hook setState(), mandar props desde un padre a un hijo</p>
        <ChildUno

          cambioTituloHijo={titulohijouno}

          /*
            titulo -> Recibe el dato del useState() parte de un valor por defecto.
            setTitulo -> cambia el estado, por lo que word CAMBIA
          */

          cambioTituloPadre={
            // Se manda una props que contiene una funcion ( Arrow function )
            titulopadre => setTitulopadre(titulopadre)
          }
        />

        <ChildDos
        cambioTituloHijo={titulohijodos} 
        cambioTituloPadre={
          // Se manda una props que contiene una funcion ( Arrow function )
          titulopadre => setTitulopadre(titulopadre)
        }
        />
    </div>
  );
}

export default Parent;

