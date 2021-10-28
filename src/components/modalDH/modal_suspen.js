import React, { useState } from "react";
import Modal from "../menu_dirt";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function ModalSuspen() {
  const [estadoModal4, cambiarEstadoModal4] = useState(false);
  return (
    <div>
      <ContenedorBotones>
        <Boton
          className="menu-btng"
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
          <div className="naver-mobg">
            <div className="menu-mobg">
              <h1>suspención trasera</h1>
              <p>
                Las suspensión trasera de DH tiene una medida de 240mm y en el
                caso de que esta cambie solo va a aumentar 5 o 10 mm estas
                pueden ser de aire o de aceite pera también existen las de coil
                que son unas de las suspensiones mas fuertes y resistentes.
              </p>
            </div>
          </div>
        </Contenido>
      </Modal>
    </div>
  );
}
const ContenedorBotones = styled.div`
  width: 100%;
`;

const Boton = styled.button`
  background: #d02639;
  border-radius: 50px;
  z-index: 3;
  width: 45px;
  color: #ffffff;
  height: 45px;
  border: none;
`;

const Contenido = styled.div`
  height: calc(100% - 45px);
  margin-top: 45px;
  width: 100%;
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
