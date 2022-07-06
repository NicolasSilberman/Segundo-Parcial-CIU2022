
import React, { Fragment, useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import { Row, Col} from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import Comida from './components/Comida';
import Favorito from './components/Favorito';
import Formulario from './components/Formulario';
import Receta from './components/Receta';

function App() {
  const [comida, setComida] = useState({});

  const consultarAPI = async (unaComida) => {
    try {
        const api = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
        const apiB = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s='+unaComida);
        const comida = await api.json();
        const receta = await apiB.json();
        setComida(comida.meals[0]);
        setComida(receta.meals[0]);
    } catch (error) {
      console.log(error);
    }
  }

  let favoritosIniciales = JSON.parse(localStorage.getItem("favoritos"));
  if(!favoritosIniciales) {
    favoritosIniciales = [];
  };

  const [favoritos, editarfavoritos] = useState(favoritosIniciales);

  useEffect(() => {
      if(favoritosIniciales) {
        localStorage.setItem("favoritos", JSON.stringify(favoritos));
      }
      else {
        localStorage.setItem("favoritos", JSON.stringify([]));
      }
    },[favoritosIniciales]
  );

  const agregarfavoritos = (favorito) => {
    editarfavoritos([
      ...favoritos,
      favorito
    ])
  }

  const borrarfavorito = (id) => {
    const nuevaListaDefavorito = favoritos.filter(favorito => favorito.id !== id);
    editarfavoritos(nuevaListaDefavorito);
  }

  let tituloFavoritos = favoritos.length === 0
  ? "Sin favoritos"
  : "Plato";

  const onChangeHandler = (e) => {
    let unaComida = "";
    console.log(e.target.value);
    unaComida = e.target.value;
    if(unaComida != ""){
      consultarAPI(unaComida)
    }    
  };

  return (
    <Fragment>
      <Header/>
      <div className = "fondoMain">
      <Container>
        <Row className = "aux">
          <Col>
            <div>
              <br></br>
              <div className="d-grid gap-2 col-6 mx-auto">
                <button
                  onClick = {consultarAPI}
                  className="btn btn-primary"
                  >Traer un plato al azar</button>
                <input 
                  type="text"
                  placeholder="Buscar receta por nombre" 
                  onChange={onChangeHandler} ></input>
              <br></br>
              </div>
              <Comida
                comida={comida}
              />

            <div>
              <br></br>
              <div className = "text-bg-success rounded-2 text-center">RECETA</div>
              <Receta
                comida={comida}
            />
            <br></br>
           </div>
            </div>
          </Col>
          <Col>
            <Formulario 
              agregarfavoritos = {agregarfavoritos}
            />
            <br></br>
            <div className = "text-bg-success rounded-2 text-center">LISTA DE FAVORITOS</div>
            <div className = "text-bg-light rounded-2 text-center">{tituloFavoritos}</div>
            {
            favoritos.map(
              favorito =>
              <Favorito
                favorito={favorito}
                key = {favorito.id}
                borrarfavorito={borrarfavorito}
              />
            )
          }
          <br></br>
          </Col>
        </Row>
      </Container>
      </div>
      <Footer/>
    </Fragment>
  );
}

export default App;
