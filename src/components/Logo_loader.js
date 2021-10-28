import React from "react";
import cadena from "../img/engranaje.png";
import logo from "../img/logo.png";
import "../css/home.css";

import { useRef } from "react";

export default function LogoLoader() {
  const logoRef = useRef();
  const rueda1Ref = useRef();
  const rueda2Ref = useRef();
  const cadenaARRef = useRef();
  const cadenaABRef = useRef();

  React.useEffect(() => {
    const rueda1 = rueda1Ref.current;
    const rueda2 = rueda2Ref.current;
    const cadenaAR = cadenaARRef.current;
    const cadenaAB = cadenaABRef.current;
      rueda2.animate(
        [{ transform: "rotate(0deg)" }, { transform: "rotate(360deg)" }],
        {
          duration: 600,
          iterations: 5
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
          iterations: 5
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
          iterations: 30
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
          iterations: 30
        }
      );
  }, []);

  return (
      <div className="logo-container-load" ref={logoRef}>
        <img alt="logo" ref={rueda1Ref} className="rueda-1" src={cadena}></img>
        <img alt="logo" className="logo" src={logo}></img>
        <img alt="logo" ref={rueda2Ref} className="rueda-2" src={cadena}></img>
        <div ref={cadenaARRef} className="cadena-arriba"></div>
        <div ref={cadenaABRef} className="cadena-abajo"></div>
        <div className="cadena-izq"></div>
        <div className="cadena-der"></div>
      </div>
  );
}
