import React from 'react';

const Header = () => {
    
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <img src="https://cdn-icons-png.flaticon.com/512/3480/3480707.png" alt="" width="45" height="38" className="d-inline-block align-text-top"></img>
                <a className="navbar-brand" href="#">MASTER FOOD</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link active" aria-current="page" href="App.js">Inicio</a>
                        <a className="nav-link" href="Construccion.html">Nosotros</a>
                        <a className="nav-link" href="Construccion.html">Libros</a>
                    </div>
                </div>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search"></input>
                    <button className="btn btn-primary" type="submit">Buscar</button>
                </form>
            </div>
        </nav>
    );
}

export default Header