import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Modal = ({
  children,
  estado,
  cambiarEstado,
  titulo = "Alerta",
  mostrarHeader,
  mostrarOverlay,
  posicionModal,
  padding,
}) => {
  return (
    <>
      {estado && (
          <ContenedorModal padding={padding} className="todo">
            {mostrarHeader && (
              <EncabezadoModal>
                <h3>Menu</h3>
              </EncabezadoModal>
            )}

            <BotonCerrar>
            <En>Menu</En>
              <FontAwesomeIcon
                icon={faTimes}
                onClick={() => cambiarEstado(false)}
              />
            </BotonCerrar>

            {children}
          </ContenedorModal>
      )}
    </>
  );
};

export default Modal;


const ContenedorModal = styled.div`

`;

const En = styled.div`
  position: fixed;
  top: 10px;
  z-index: 10;
  left: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  padding-bottom: 20px;
  h3 {
    font-weight: 500;
    font-size: 16px;
    color: #1766dc;
  }
`;

const EncabezadoModal = styled.div`
  position: absolute;
  top: 10px;
  z-index: 10;
  left: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  padding-bottom: 20px;
  background: #000;
  h3 {
    font-weight: 500;
    font-size: 16px;
    color: #1766dc;
  }
`;

const BotonCerrar = styled.button`
  position: absolute;
  top: 0px;
  right: 0px;
  height: 50px;
  border: none;
  background: #d02639;
  width: 100%;
  font-size: 25px;
  cursor: pointer;
  transition: 0.3s ease all;
  color: #ffffff;
  svg {
    position: absolute;
    top: 0px;
    right: 15px;
    width: 100%;
    height: 100%;
  }
`;
