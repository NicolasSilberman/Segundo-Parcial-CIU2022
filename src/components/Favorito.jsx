import React, {Fragment} from "react";

const Favorito = ({favorito, borrarfavorito}) => {
    return (
        <Fragment>
        <ul className="list-group">
            <li className="list-group-item d-flex justify-content-between align-items-center">
                {favorito.nombre}
                <span>
                    <button
                    className="btn btn-danger btn-sm"
                    onClick={()=>borrarfavorito(favorito.id)}
                    >Eliminar</button>
                </span>
            </li>
        </ul>
    
        </Fragment>
    );


}

export default Favorito;