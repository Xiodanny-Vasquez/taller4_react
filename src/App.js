// Ejercicio 1: Manejo de eventos

// import React from "react";

// function ButtonClick() {
//   const manejoClick = () => {
//     alert("¡Botón clickeado!");
//   };
//   return (
//     <div>
//       <button onClick={manejoClick}>haz click en el boton por favor</button>
//     </div>
//   );
// }
// export default ButtonClick;


// Ejercicio 2: Creación y gestión de formularios

// import React, { useState } from "react";

// function Formulario() {
//   const [nombre, setNombre] = useState("");

//   const manejoCambio = (evento) => {
//     setNombre(evento.target.value);
//   };

//   const manejoEnvio = (evento) => {
//     evento.preventDefault();
//     alert (`Nombre: ${nombre}`);
//   };

//   return (
//       <form onSubmit={manejoEnvio}>
//         <label>
//           Nombre: 
//           <input type="text" value={nombre} onChange={manejoCambio} />
//         </label>
//         <button type="submit" > Enviar </button>
//       </form>
//   );
// };
// export default Formulario;


// Ejercicio 3:  Lifting State Up

import React, {useState} from 'react';

const App = () => {
  const [numero, setNumero] = useState(''); 

  const cambioNumero = (event) => {
    setNumero(event.target.value);
  };

  return (
    <div> 
      <h1>Formulario</h1>
      <input
        type="number"
        placeholder="Escribe un número"
        onChange={cambioNumero}
      />
      <h1>resultado: {numero}</h1>
    </div>
  );
};

export default App;