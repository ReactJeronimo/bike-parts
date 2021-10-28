import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "./menu";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Try() {
  const [estadoModal4, cambiarEstadoModal4] = useState(false);

  return (
    <div className="App">
      <ContenedorBotones>
        <Boton
          className="menu-btn"
          onClick={() => cambiarEstadoModal4(!estadoModal4)}
        >
          <FontAwesomeIcon icon={faBars} />
        </Boton>
      </ContenedorBotones>
      <Modal
        estado={estadoModal4}
        cambiarEstado={cambiarEstadoModal4}
        titulo="Menu"
        mostrarHeader={false}
        mostrarOverlay={true}
        posicionModal={"center"}
        padding={"0px"}
      >
        <Contenido>
          <div className="naver-mob">
            <div className="menu-mob">
              <Link to="/" onClick={() => cambiarEstadoModal4(!estadoModal4)}>
                <p className="p-bar-mob">Inicio</p>
              </Link>
              <Link
                to="/acerca"
                onClick={() => cambiarEstadoModal4(!estadoModal4)}
              >
                <p className="p-bar-mob">Acerca de</p>
              </Link>
              <Link
                to="/MTB"
                onClick={() => cambiarEstadoModal4(!estadoModal4)}
              >
                <p className="p-bar-mob">MTB</p>
              </Link>
              <Link to="/DH" onClick={() => cambiarEstadoModal4(!estadoModal4)}>
                <p className="p-bar-mob">DH</p>
              </Link>
              <Link
                to="/DirtJump"
                onClick={() => cambiarEstadoModal4(!estadoModal4)}
              >
                <p className="p-bar-mob">Dirt jump</p>
              </Link>
              <Link
                to="/roadbike"
                onClick={() => cambiarEstadoModal4(!estadoModal4)}
              >
                <p className="p-bar-mob">Road bike</p>
              </Link>
            </div>
          </div>
        </Contenido>
      </Modal>
    </div>
  );
}
const ContenedorBotones = styled.div`
  padding: 0px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  height: 0px;
`;

const Boton = styled.button`
  background: #d02639;
  position: fixed;
  left: 15px;
  bottom: 15px;
  border-radius: 50px;
  z-index: 3;
  width: 45px;
  color: #ffffff;
  height: 45px;
  border: none;
`;

const Contenido = styled.div`
  p {
    left: 10px;
    font-size: 20px;
  }
  img {
    width: 100%;
    vertical-align: top;
    border-radius: 3px;
  }
`;
