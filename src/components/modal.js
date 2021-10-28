import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const ModalBike = ({
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
        <Overlay mostrarOverlay={mostrarOverlay} posicionModal={posicionModal}>
          <ContenedorModal padding={padding}>
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
        </Overlay>
      )}
    </>
  );
};

export default ModalBike;

const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 5;
  top: 0;
  left: 0;
  background: ${(props) =>
    props.mostrarOverlay ? "rgba(0,0,0,.5)" : "rgba(0,0,0,0)"};
  padding: 40px;
  display: flex;
  align-items: ${(props) =>
    props.posicionModal ? props.posicionModal : "center"};
  justify-content: center;
`;

const ContenedorModal = styled.div`
  width: 65%;
  height: 100vh;
  background: #fff;
  position: absolute;
  left: 0px;
  top: 0px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: ${(props) => (props.padding ? props.padding : "20px")};
`;

const En = styled.div`
  position: absolute;
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
