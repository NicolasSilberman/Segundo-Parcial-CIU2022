import React, { Fragment } from 'react';

const Comida = ({comida}) => {
    return (
        <Fragment>
            <div className="card">
                <img src={comida.strMealThumb} className="card-img-top"/>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item text-bg-dark">{comida.strMeal}</li>
                    <li className="list-group-item text-bg-light">{comida.idMeal}</li>
                    <li className="list-group-item text-bg-light">{comida.strCategory}</li>
                    <li className="list-group-item text-bg-light">{comida.strArea}</li>
                </ul>
            </div>
        </Fragment>
    )
}

export default Comida;