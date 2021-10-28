import React, { useState } from "react";
import Modal from "../menu_dirt";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function ModalSuspenD() {
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
              <h1>suspención delantera</h1>
              <p>
                La suspensión delantera de DH sabe tener una medida de 200mm
                para arriba con la mas grande siendo de 340mm, pero la mas común
                entre todas es la de 240mm, cada suspensión cambia dependiendo
                de la marca de esta y el de la bicicleta, también existen dos
                tipos las de aire y las de aceite estas dos son las mas comunes
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
