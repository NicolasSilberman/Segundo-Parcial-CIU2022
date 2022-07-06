import React, {Fragment, useState} from 'react';
import {Form} from 'react-bootstrap';
import { v4 as uuidv4} from 'uuid';

const Formulario = ({agregarfavoritos}) => {
    const [favorito, editarfavorito] = useState({
        nombre: "",
    });

    const [error, setError] = useState(false);

    const {nombre} = favorito;

    const handleChange = (e) => {
        editarfavorito({
            ...favorito,
            [e.target.name] : e.target.value,
        })
    }

    const submitForm = (e) => {
        e.preventDefault();

        if (nombre.trim() === '') {
            setError(true);
            return;
        }

        setError(false);

        favorito.id = uuidv4();

        agregarfavoritos(favorito);

        editarfavorito({
            nombre: "",
        })


    }
    
    
    return (
       <Fragment>
        <br></br>
         <Form
            onSubmit={submitForm}
         >
            <div className="input-group d-flex justify-content-center">
            <Form.Group>
                <Form.Control 
                    type="text"
                    placeholder="Agrega tus platos favoritos"
                    name="nombre"
                    onChange={handleChange}
                    value = {nombre}
                />
            </Form.Group>
            <button
                type="submit"
                className="btn btn-success"
            >
               AGREGAR
            </button>
            </div>
          </Form>
          {
              error ? <div className="alert alert-danger" role="alert">
              Debes completar todos los datos</div> : null
              
          } 
       </Fragment>
    );
}

export default Formulario;