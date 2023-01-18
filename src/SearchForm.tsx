import React, { useState, useEffect } from "react";

function SearchForm(props) {
  //desestructuro el useState en 2 en el valor y en el setter
  const [value, setValue] = useState([]);

  //uso a useEffect para monitorear cuando cambia el valor de la busqueda
  useEffect(() => {
    if (value) {
      props.onSearch(value);
    }
  }, [value]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.search.value);
    //le paso la funcion de la app por la prop onSearch al form
    console.log("dentro del form: ", e.target.search.value);

    //setteo el valor con el setter del useState
    setValue(e.target.search.value);
  };

  return (
    <div className="container-form">
      <form className="buscador-form" onSubmit={handleSubmit} action="">
        <input className="input-buscar" type="text" name="search" />
        <button
          className="boton-buscar"
          onClick={() => {
            console.log("me clickearon");
          }}
        >
          Buscar
        </button>
      </form>
    </div>
  );
}

export { SearchForm };
