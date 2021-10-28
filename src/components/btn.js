import React from "react";
import cadena from "../img/engranaje.png";
import "../css/home.css";

import { useRef } from "react";

export default function AccessingElement() {
  const elementRef = useRef();
  const ruedaRef = useRef();

  React.useEffect(() => {
    const divElement = elementRef.current;
    const rueda = ruedaRef.current;
    divElement.addEventListener("click", () => {
      divElement.animate(
        [
          { backgroundPosition: "0 0, 100% 0, 100% 100%, 0% 100%" },
          { backgroundPosition: "100% 0, 100% 500%, 0% 100%, 0% -500%" },
        ],
        {
          duration: 600,
        }
      );
      rueda.animate(
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
    });
  }, []);

  return (
    <button ref={elementRef} className="btn-scroll" id="btn-scroll">
      Ver
      <img
        alt="logo"
        ref={ruedaRef}
        className="rueda-btn"
        id="rueda-btn"
        src={cadena}
      ></img>
    </button>
  );
}
