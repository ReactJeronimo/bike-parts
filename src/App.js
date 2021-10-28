import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Home from "./components/home";
import "./App.css";
import "./css/bar.css";
import Logo from "./components/logo";
import "./css/home.css";
import MTB from "./components/MTB";
import DH from "./components/DH";
import Dirt from "./components/dirt";
import RB from "./components/RB";
import Acerca from "./components/acerca";
import LogoLoader from "./components/Logo_loader";
import Try from "./components/try";

export default function App() {
  const [loading, setloading] = useState(false);


  useEffect(() => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 3000);
  }, []);


  return (
    <div className="App">
      {loading ? (
        <div className="loader">
          <br />
          <div className="overly_load"></div>
          <br />
          <h1 className="h1">.</h1>
          <h1 className="nombre">Bikes & Parts</h1>
          <LogoLoader />
        </div>
      ) : (
        <BrowserRouter>
          <div>
            <Try />

            <div className="naver" id="bar">
              <Logo />
              <div className="menu">
                <Link to="/acerca">
                  <p className="p-bar">Acerca de</p>
                </Link>
                <Link to="/MTB">
                  <p className="p-bar">MTB</p>
                </Link>
                <Link to="/DH">
                  <p className="p-bar">DH</p>
                </Link>
                <Link to="/DirtJump">
                  <p className="p-bar">Dirt jump</p>
                </Link>
                <Link to="/roadbike">
                  <p className="p-bar">Road bike</p>
                </Link>
              </div>
            </div>
            <Switch>
              <Route path="/" component={Home} exact={true} />
              <Route path="/acerca" component={Acerca} />
              <Route path="/MTB" component={MTB} />
              <Route path="/DH" component={DH} />
              <Route path="/DirtJump" component={Dirt} />
              <Route path="/roadbike" component={RB} />
            </Switch>
          </div>
        </BrowserRouter>
      )}
    </div>
  );
}

let ubicacionPrincipal = window.pageYOffset;
window.onscroll = function () {
  let Desplazamiento_Actual = window.pageYOffset;
  if (ubicacionPrincipal >= Desplazamiento_Actual) {
    document.getElementById("bar").style.top = "0";
  } else {
    document.getElementById("bar").style.top = "-100px";
  }
  ubicacionPrincipal = Desplazamiento_Actual;
};