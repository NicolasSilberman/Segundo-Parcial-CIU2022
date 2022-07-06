import React, { Fragment } from 'react';

const Receta = ({comida}) => {
    return (
        <Fragment>
            <div className="card">
                <ul className="list-group list-group-flush">
                    <li className="list-group-item text-bg-dark">{comida.strInstructions}</li>
                </ul>
            </div>
        </Fragment>
    )
}

export default Receta