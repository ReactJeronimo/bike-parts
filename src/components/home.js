import React from "react";
import "../css/home.css";
import BtnC from "./btn";
import { Link as Scroll } from "react-scroll";
import MTB_img from "../img/mtb.jpg";
import DH_img from "../img/downhill.avif";
import DJ_img from "../img/dirt_jump.jpg";
import RB_img from "../img/road_bikes.jpg";
import { Link } from "react-router-dom";

const Home = () => (
  <div className="home">
    <div className="header">
      <div className="overly"></div>
      <h1 className="titulo">Información</h1>
      <p className="text-header">
        En esta pagina se le mostrara a las personas aficionadas de la bicicleta
        más acerca de estas de una forma interactiva y detallada para que puedan
        ver que piezas hay, como funciona, cual es su funcionamiento y las
        piezas que estas tienen.
        <br></br>
        Tenemos 4 tipos de bicicletas las cuales son las de enduro, downhill,
        dirt jump y las de carretera.
        <br></br>
        Para acceder a esta informacion haga clic en en boton de abajo o navegue
        por la barra de arriba.
      </p>
      <Scroll
        to="c"
        smooth={true}
        offset={-20}
        duration={700}
        delay={160}
        ignoreCancelEvents={true}
      >
        <BtnC />
      </Scroll>
    </div>
    <div className="body-home">
      <h1 id="c" name="c">
        Tipo de bicis
      </h1>
      <div className="grid-home">
        <div className="tipos">
          <h3>MTB</h3>
          <div className="contenedor-img">
            <img alt="MTB" src={MTB_img} className="cards-img" />
          </div>
          <div className="text-content">
            <p>
              Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
            </p>
            <Link to="/mtb">
              <BtnC />
            </Link>
          </div>
        </div>
        <div className="tipos">
          <h3>DH</h3>
          <div className="contenedor-img">
            <img alt="Dow hill" src={DH_img} className="cards-img" />
          </div>
          <div className="text-content">
            <p>
              Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
            </p>
            <Link to="/dh">
              <BtnC />
            </Link>
          </div>
        </div>
        <div className="tipos">
          <h3>Dirt jump</h3>
          <div className="contenedor-img">
            <img alt="Dirt Jump" src={DJ_img} className="cards-img" />
          </div>
          <div className="text-content">
            <p>
              Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
            </p>
            <Link to="/dirtjump">
              <BtnC />
            </Link>
          </div>
        </div>
        <div className="tipos">
          <h3>Road bike</h3>
          <div className="contenedor-img">
            <img alt="Road bike" src={RB_img} className="cards-img" />
          </div>
          <div className="text-content">
            <p>
              Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
            </p>
            <Link to="/roadbike">
              <BtnC />
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default Home;
