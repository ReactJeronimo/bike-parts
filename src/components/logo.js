import React from "react";
import cadena from "../img/engranaje.png";
import logo from "../img/logo.png";
import { Link } from "react-router-dom";
import "../css/home.css";

import { useRef } from "react";

export default function Logo() {
  const logoRef = useRef();
  const rueda1Ref = useRef();
  const rueda2Ref = useRef();
  const cadenaARRef = useRef();
  const cadenaABRef = useRef();

  React.useEffect(() => {
    const logoElement = logoRef.current;
    const rueda1 = rueda1Ref.current;
    const rueda2 = rueda2Ref.current;
    const cadenaAR = cadenaARRef.current;
    const cadenaAB = cadenaABRef.current;
    logoElement.addEventListener("click", () => {
      rueda2.animate(
        [{ transform: "rotate(0deg)" }, { transform: "rotate(360deg)" }],
        {
          duration: 600,
        }
      );
      rueda1.animate(
        [
          // keyframes
          { transform: "rotate(0deg)" },
          { transform: "rotate(360deg)" },
        ],
        {
          // timing options
          duration: 600,
        }
      );

      cadenaAR.animate(
        [
          // keyframes
          { left: "20%" },
          { left: "25%",
            width: "105px"
          },
        ],
        {
          // timing options
          duration: 100,
          iterations: 6
        }
      );

      cadenaAB.animate(
        [
          // keyframes
          { left: "20%" },
          { left: "25%",
            width: "105px"
          },
        ],
        {
          // timing options
          duration: 100,
          iterations: 6
        }
      );
    });
  }, []);

  return (
    <Link className="home-nav" to="/">
      <div className="logo-container" ref={logoRef}>
        <img alt="logo" ref={rueda1Ref} className="rueda-1" src={cadena}></img>
        <img alt="logo" className="logo" src={logo}></img>
        <img alt="logo" ref={rueda2Ref} className="rueda-2" src={cadena}></img>
        <div ref={cadenaARRef} className="cadena-arriba"></div>
        <div ref={cadenaABRef} className="cadena-abajo"></div>
        <div className="cadena-izq"></div>
        <div className="cadena-der"></div>
      </div>
    </Link>
  );
}
