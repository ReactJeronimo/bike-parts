import React, { useEffect, useRef } from "react";
import "../css/mtb.css";
import ModalSilla from "./modalDH/modal_silla";
import ModalCadena from "./modalDH/modal_cadena";
import ModalPlatos from "./modalDH/modal_platos";
import ModalCambiosT from "./modalDH/modal_cambiosT";
import ModalVolante from "./modalDH/modal_volante";
import ModalRayosD from "./modalDH/modal_RayosD";
import ModalRayosT from "./modalDH/modal_rayosT";
import ModalSuspenD from "./modalDH/modal_suspenD";
import ModalSuspenT from "./modalDH/modal_suspen";
import ModalPedal from "./modalDH/modal_pedal";
import ModalCuadro from "./modalDH/modal_cuadro";
import ModalLantaT from "./modalDH/modal_llantaT";
import ModalLantaD from "./modalDH/modal_llantaD";
import ModalFrenosT from "./modalDH/modal_frenosT";
import ModalFrenosD from "./modalDH/modal_frenosD";
import ModalCambiosD from "./modalDH/modal_cambiosD";

export default function DH() {
  const sillaRef = useRef();
  const CSRef = useRef();
  const cadenaRef = useRef();
  const CCRef = useRef();
  const platosRef = useRef();
  const CPRef = useRef();
  const volanteRef = useRef();
  const CVRef = useRef();
  const frenoTraseroRef = useRef();
  const CFTRef = useRef();
  const cambioDelanteroRef = useRef();
  const CCDRef = useRef();
  const cambioTraseroRef = useRef();
  const CCTRef = useRef();
  const suspencionDelanteraRef = useRef();
  const CSuDRef = useRef();
  const suspencionTraseraRef = useRef();
  const CSuTRef = useRef();
  const frenoDelanteroRef = useRef();
  const CFDRef = useRef();
  const llantaDelanteraRef = useRef();
  const CLDRef = useRef();
  const llantaTraseraRef = useRef();
  const CLTRef = useRef();
  const cuadroRef = useRef();
  const CCuRef = useRef();
  const pedalRef = useRef();
  const CPeRef = useRef();
  const rayosDelanterosRef = useRef();
  const CRDRef = useRef();
  const rayosTraserosRef = useRef();
  const CRTRef = useRef();
  const contentRef = useRef();

  useEffect(() => {
    const silla = sillaRef.current;
    const CS = CSRef.current;
    const cadenaBike = cadenaRef.current;
    const CC = CCRef.current;
    const platos = platosRef.current;
    const CP = CPRef.current;
    const volante = volanteRef.current;
    const CV = CVRef.current;
    const frenoTrasero = frenoTraseroRef.current;
    const CFT = CFTRef.current;
    const cambioDelantero = cambioDelanteroRef.current;
    const CCD = CCDRef.current;
    const CambiosTraseros = cambioTraseroRef.current;
    const CCT = CCTRef.current;
    const suspencionD = suspencionDelanteraRef.current;
    const CSuD = CSuDRef.current;
    const suspencionT = suspencionTraseraRef.current;
    const CSuT = CSuTRef.current;
    const frenoDelantero = frenoDelanteroRef.current;
    const CFD = CFDRef.current;
    const llantaDelantera = llantaDelanteraRef.current;
    const CLD = CLDRef.current;
    const llantaTrasera = llantaTraseraRef.current;
    const CLT = CLTRef.current;
    const cuadro = cuadroRef.current;
    const CCu = CCuRef.current;
    const pedal = pedalRef.current;
    const CPe = CPeRef.current;
    const rayosDelanteros = rayosDelanterosRef.current;
    const CRD = CRDRef.current;
    const rayosTraseros = rayosTraserosRef.current;
    const CRT = CRTRef.current;

    silla.addEventListener("click", () => {
      CS.style.display = "block";
      CC.style.display = "none";
      CP.style.display = "none";
      CV.style.display = "none";
      CFT.style.display = "none";
      CCD.style.display = "none";
      CCT.style.display = "none";
      CSuD.style.display = "none";
      CSuT.style.display = "none";
      CFD.style.display = "none";
      CLD.style.display = "none";
      CLT.style.display = "none";
      CCu.style.display = "none";
      CPe.style.display = "none";
      CRD.style.display = "none";
      CRT.style.display = "none";
    });
    cadenaBike.addEventListener("click", () => {
      CS.style.display = "none";
      CC.style.display = "block";
      CP.style.display = "none";
      CV.style.display = "none";
      CFT.style.display = "none";
      CCD.style.display = "none";
      CCT.style.display = "none";
      CSuD.style.display = "none";
      CSuT.style.display = "none";
      CFD.style.display = "none";
      CLD.style.display = "none";
      CLT.style.display = "none";
      CCu.style.display = "none";
      CPe.style.display = "none";
      CRD.style.display = "none";
      CRT.style.display = "none";
    });
    platos.addEventListener("click", () => {
      CS.style.display = "none";
      CC.style.display = "none";
      CP.style.display = "block";
      CV.style.display = "none";
      CFT.style.display = "none";
      CCD.style.display = "none";
      CCT.style.display = "none";
      CSuD.style.display = "none";
      CSuT.style.display = "none";
      CFD.style.display = "none";
      CLD.style.display = "none";
      CLT.style.display = "none";
      CCu.style.display = "none";
      CPe.style.display = "none";
      CRD.style.display = "none";
      CRT.style.display = "none";
    });
    volante.addEventListener("click", () => {
      CS.style.display = "none";
      CC.style.display = "none";
      CP.style.display = "none";
      CV.style.display = "block";
      CFT.style.display = "none";
      CCD.style.display = "none";
      CCT.style.display = "none";
      CSuD.style.display = "none";
      CSuT.style.display = "none";
      CFD.style.display = "none";
      CLD.style.display = "none";
      CLT.style.display = "none";
      CCu.style.display = "none";
      CPe.style.display = "none";
      CRD.style.display = "none";
      CRT.style.display = "none";
    });
    frenoTrasero.addEventListener("click", () => {
      CS.style.display = "none";
      CC.style.display = "none";
      CP.style.display = "none";
      CV.style.display = "none";
      CFT.style.display = "block";
      CCD.style.display = "none";
      CCT.style.display = "none";
      CSuD.style.display = "none";
      CSuT.style.display = "none";
      CFD.style.display = "none";
      CLD.style.display = "none";
      CLT.style.display = "none";
      CCu.style.display = "none";
      CPe.style.display = "none";
      CRD.style.display = "none";
      CRT.style.display = "none";
    });
    cambioDelantero.addEventListener("click", () => {
      CS.style.display = "none";
      CC.style.display = "none";
      CP.style.display = "none";
      CV.style.display = "none";
      CFT.style.display = "none";
      CCD.style.display = "block";
      CCT.style.display = "none";
      CSuD.style.display = "none";
      CSuT.style.display = "none";
      CFD.style.display = "none";
      CLD.style.display = "none";
      CLT.style.display = "none";
      CCu.style.display = "none";
      CPe.style.display = "none";
      CRD.style.display = "none";
      CRT.style.display = "none";
    });

    CambiosTraseros.addEventListener("click", () => {
      CS.style.display = "none";
      CC.style.display = "none";
      CP.style.display = "none";
      CV.style.display = "none";
      CFT.style.display = "none";
      CCD.style.display = "none";
      CCT.style.display = "block";
      CSuD.style.display = "none";
      CSuT.style.display = "none";
      CFD.style.display = "none";
      CLD.style.display = "none";
      CLT.style.display = "none";
      CCu.style.display = "none";
      CPe.style.display = "none";
      CRD.style.display = "none";
      CRT.style.display = "none";
    });
    suspencionD.addEventListener("click", () => {
      CS.style.display = "none";
      CC.style.display = "none";
      CP.style.display = "none";
      CV.style.display = "none";
      CFT.style.display = "none";
      CCD.style.display = "none";
      CCT.style.display = "none";
      CSuD.style.display = "block";
      CSuT.style.display = "none";
      CFD.style.display = "none";
      CLD.style.display = "none";
      CLT.style.display = "none";
      CCu.style.display = "none";
      CPe.style.display = "none";
      CRD.style.display = "none";
      CRT.style.display = "none";
    });
    suspencionT.addEventListener("click", () => {
      CS.style.display = "none";
      CC.style.display = "none";
      CP.style.display = "none";
      CV.style.display = "none";
      CFT.style.display = "none";
      CCD.style.display = "none";
      CCT.style.display = "none";
      CSuD.style.display = "none";
      CSuT.style.display = "block";
      CFD.style.display = "none";
      CLD.style.display = "none";
      CLT.style.display = "none";
      CCu.style.display = "none";
      CPe.style.display = "none";
      CRD.style.display = "none";
      CRT.style.display = "none";
    });
    frenoDelantero.addEventListener("click", () => {
      CS.style.display = "none";
      CC.style.display = "none";
      CP.style.display = "none";
      CV.style.display = "none";
      CFT.style.display = "none";
      CCD.style.display = "none";
      CCT.style.display = "none";
      CSuD.style.display = "none";
      CSuT.style.display = "none";
      CFD.style.display = "block";
      CLD.style.display = "none";
      CLT.style.display = "none";
      CCu.style.display = "none";
      CPe.style.display = "none";
      CRD.style.display = "none";
      CRT.style.display = "none";
    });
    llantaDelantera.addEventListener("click", () => {
      CS.style.display = "none";
      CC.style.display = "none";
      CP.style.display = "none";
      CV.style.display = "none";
      CFT.style.display = "none";
      CCD.style.display = "none";
      CCT.style.display = "none";
      CSuD.style.display = "none";
      CSuT.style.display = "none";
      CFD.style.display = "none";
      CLD.style.display = "block";
      CLT.style.display = "none";
      CCu.style.display = "none";
      CPe.style.display = "none";
      CRD.style.display = "none";
      CRT.style.display = "none";
    });
    llantaTrasera.addEventListener("click", () => {
      CS.style.display = "none";
      CC.style.display = "none";
      CP.style.display = "none";
      CV.style.display = "none";
      CFT.style.display = "none";
      CCD.style.display = "none";
      CCT.style.display = "none";
      CSuD.style.display = "none";
      CSuT.style.display = "none";
      CFD.style.display = "none";
      CLD.style.display = "none";
      CLT.style.display = "block";
      CCu.style.display = "none";
      CPe.style.display = "none";
      CRD.style.display = "none";
      CRT.style.display = "none";
    });
    cuadro.addEventListener("click", () => {
      CS.style.display = "none";
      CC.style.display = "none";
      CP.style.display = "none";
      CV.style.display = "none";
      CFT.style.display = "none";
      CCD.style.display = "none";
      CCT.style.display = "none";
      CSuD.style.display = "none";
      CSuT.style.display = "none";
      CFD.style.display = "none";
      CLD.style.display = "none";
      CLT.style.display = "none";
      CCu.style.display = "block";
      CPe.style.display = "none";
      CRD.style.display = "none";
      CRT.style.display = "none";
    });
    pedal.addEventListener("click", () => {
      CS.style.display = "none";
      CC.style.display = "none";
      CP.style.display = "none";
      CV.style.display = "none";
      CFT.style.display = "none";
      CCD.style.display = "none";
      CCT.style.display = "none";
      CSuD.style.display = "none";
      CSuT.style.display = "none";
      CFD.style.display = "none";
      CLD.style.display = "none";
      CLT.style.display = "none";
      CCu.style.display = "none";
      CPe.style.display = "block";
      CRD.style.display = "none";
      CRT.style.display = "none";
    });
    rayosTraseros.addEventListener("click", () => {
      CS.style.display = "none";
      CC.style.display = "none";
      CP.style.display = "none";
      CV.style.display = "none";
      CFT.style.display = "none";
      CCD.style.display = "none";
      CCT.style.display = "none";
      CSuD.style.display = "none";
      CSuT.style.display = "none";
      CFD.style.display = "none";
      CLD.style.display = "none";
      CLT.style.display = "none";
      CCu.style.display = "none";
      CPe.style.display = "none";
      CRT.style.display = "block";
      CRD.style.display = "none";
    });
    rayosDelanteros.addEventListener("click", () => {
      CS.style.display = "none";
      CC.style.display = "none";
      CP.style.display = "none";
      CV.style.display = "none";
      CFT.style.display = "none";
      CCD.style.display = "none";
      CCT.style.display = "none";
      CSuD.style.display = "none";
      CSuT.style.display = "none";
      CFD.style.display = "none";
      CLD.style.display = "none";
      CLT.style.display = "none";
      CCu.style.display = "none";
      CPe.style.display = "none";
      CRD.style.display = "block";
      CRT.style.display = "none";
    });
  }, []);

  return (
    <div className="mtb">
      <div className="header-dh">
        <div className="overly-mtb"></div>
        <h1 className="titulo">Down hill</h1>
        <p className="text-header">
          En esta pagina se le mostrara a las personas aficionadas de la
          bicicleta m??s acerca de estas de una forma interactiva y detallada
          para que puedan ver que piezas hay, como funciona, cual es su
          funcionamiento y las piezas que estas tienen.
          <br></br>
          Tenemos 4 tipos de bicicletas las cuales son las de enduro, downhill,
          dirt jump y las de carretera.
          <br></br>
          Para acceder a esta informacion haga clic en en boton de abajo o
          navegue por la barra de arriba.
        </p>
      </div>
      <svg
        id="biciDirt"
        width="877"
        height="539"
        viewBox="0 0 877 539"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="bici">
          <path
            ref={rayosTraserosRef}
            id="rayosTraseros"
            d="M142.301 500.137L164.952 396.797H185.193L191.94 385.69L185.193 371.686L172.663 367.823L161.578 375.066L160.614 385.69L163.024 393.416L165.434 503.034L137.482 497.722L119.651 488.547L182.301 400.177V398.245L166.88 397.28L63.2651 417.561L57.9639 396.797H161.578L159.651 387.139L84.9518 459.091L101.337 475.509L177.964 400.177L100.855 475.992L118.687 488.064L138.446 499.171L166.88 503.034H189.048L187.12 396.797H297M297 396.797V371.686L189.53 376.515V265.932H164.952L166.88 367.823L101.337 290.559L84.9518 308.427L157.103 375.066L57.9639 371.686V398.728L62.7831 419.493L72.4217 440.258L159.651 383.276L142.301 270.761L123.988 276.072L98.9277 292.491L83.988 309.392L71.4578 328.225L157.103 380.378L160.133 376.032L62.7831 350.439L71.4578 326.777L61.8193 351.887L57 373.135L159.651 378.447L171.699 366.857L234.831 278.97L212.181 270.761L187.602 264.483L163.506 265.932L140.373 270.761L190.494 264L214.59 270.761L190.494 374.101L181.337 368.306L252.663 293.457L233.386 277.521L254.108 293.457L269.53 308.427L191.94 383.276L174.59 370.237L293.627 349.473L281.578 327.742L268.084 305.529L283.024 327.742L191.94 388.588L211.699 499.654L187.12 504L213.627 499.654L233.867 489.513L174.59 400.177L252.181 475.026L232.904 490.962L254.59 474.06L269.53 460.056L193.867 388.588L191.94 378.447L281.578 440.258L268.566 462.471L283.988 440.258L293.627 419.976L189.048 400.177L294.108 420.459L297 396.797Z"
            stroke="#444444"
          />
          <path
            ref={rayosDelanterosRef}
            id="rayosDelanteros"
            d="M656.301 496.137L678.952 392.797H699.193L705.94 381.69L699.193 367.686L686.663 363.823L675.578 371.066L674.614 381.69L677.024 389.416L679.434 499.034L651.482 493.722L633.651 484.547L696.301 396.177V394.245L680.88 393.28L577.265 413.561L571.964 392.797H675.578L673.651 383.139L598.952 455.091L615.337 471.509L691.964 396.177L614.855 471.992L632.687 484.064L652.446 495.171L680.88 499.034H703.048L701.12 392.797H811M811 392.797V367.686L703.53 372.515V261.932H678.952L680.88 363.823L615.337 286.559L598.952 304.427L671.103 371.066L571.964 367.686V394.728L576.783 415.493L586.422 436.258L673.651 379.276L656.301 266.761L637.988 272.072L612.928 288.491L597.988 305.392L585.458 324.225L671.103 376.378L674.133 372.032L576.783 346.439L585.458 322.777L575.819 347.887L571 369.135L673.651 374.447L685.699 362.857L748.831 274.97L726.181 266.761L701.602 260.483L677.506 261.932L654.373 266.761L704.494 260L728.59 266.761L704.494 370.101L695.337 364.306L766.663 289.457L747.386 273.521L768.108 289.457L783.53 304.427L705.94 379.276L688.59 366.237L807.627 345.473L795.578 323.742L782.084 301.529L797.024 323.742L705.94 384.588L725.699 495.654L701.12 500L727.627 495.654L747.867 485.513L688.59 396.177L766.181 471.026L746.904 486.962L768.59 470.06L783.53 456.056L707.867 384.588L705.94 374.447L795.578 436.258L782.566 458.471L797.988 436.258L807.627 415.976L703.048 396.177L808.108 416.459L811 392.797Z"
            stroke="#444444"
          />
          <path
            ref={llantaTraseraRef}
            id="llantaTrasera"
            d="M100.121 479.45L120.008 492.735L105.457 520.288L76.8394 502.575L55.9827 479.45L40.4614 455.342L26.8803 421.885L23 396.792V373.176L26.8803 350.543L35.611 328.403L44.3417 304.294L60.8331 281.169L76.8394 263.457L97.211 250.173L126.798 237.872L149.11 230H187.913L225.746 237.872L259.699 253.125L290.742 281.169L315.479 316.102L326.635 350.543L331 389.904L326.635 421.885L315.479 450.914L298.502 479.45L275.706 502.575L247.573 518.811L219.441 533.08L192.279 538H164.632L134.559 533.08L105.942 520.78L120.493 493.227L140.38 502.575L164.632 506.511H187.913L211.68 502.575L233.022 492.735L250.483 479.45L270.855 462.23L282.496 443.042L294.137 421.885L298.502 396.792V373.176L294.137 350.543L282.496 328.403L270.855 308.722L250.483 289.042L233.022 276.249L211.68 268.869L187.913 263.457H164.632L140.38 268.869L119.038 276.249L100.121 289.042L82.6598 308.722L70.0488 328.403L60.8331 350.543L55.9827 373.176V396.792L60.8331 421.885L70.0488 443.042L83.6299 462.23L100.121 479.45Z"
            fill="#444444"
            stroke="#444444"
          />
          <path
            ref={llantaDelanteraRef}
            id="llantaDelantera"
            d="M614.869 475.401L634.433 488.47L620.118 515.575L591.965 498.15L571.447 475.401L556.178 451.684L542.817 418.77L539 394.085V370.851L542.817 348.586L551.406 326.805L559.995 303.088L576.219 280.339L591.965 262.914L612.006 249.845L641.113 237.744L663.063 230H701.236L738.455 237.744L771.857 252.749L802.395 280.339L826.731 314.704L837.706 348.586L842 387.308L837.706 418.77L826.731 447.327L810.03 475.401L787.603 498.15L759.928 514.123L732.252 528.16L705.531 533H678.332L648.748 528.16L620.595 516.059L634.91 488.954L654.474 498.15L678.332 502.022H701.236L724.617 498.15L745.613 488.47L762.791 475.401L782.831 458.46L794.283 439.583L805.735 418.77L810.03 394.085V370.851L805.735 348.586L794.283 326.805L782.831 307.444L762.791 288.083L745.613 275.498L724.617 268.238L701.236 262.914H678.332L654.474 268.238L633.479 275.498L614.869 288.083L597.691 307.444L585.285 326.805L576.219 348.586L571.447 370.851V394.085L576.219 418.77L585.285 439.583L598.646 458.46L614.869 475.401Z"
            fill="#444444"
            stroke="#444444"
          />
          <path
            ref={sillaRef}
            id="silla"
            d="M313 200.5L325 195L302 152.5L301 149H304H305.5C305.667 148.333 305.9 146.9 305.5 146.5C305.1 146.1 304.333 144.667 304 144L301 143L302 141L307 140L310 137.5L326 122L329.5 120.5L324.5 119.5L315 128.5L308.5 134.5L304 137.5H301V136L298.5 134.5L296 136L295 138.5L292.5 140L289.5 141L284 143L280.5 145L278.5 147.5L275 149L271 147.5L263 145V143H272L279.5 140L291 133.5L304 126.5L314 122L324.5 119L330.5 120L337.5 117.5L346 112L343 108H333L304 117.5L282 125L264 129.5L251.5 133H242.5L237.5 135L235 138L237.5 143L242.5 146.5H248H257L267 150L274 151.5L282 149L284 152.5V155.5L287 158L289.5 155.5L313 200.5Z"
            fill="#444444"
            stroke="black"
          />
          <path
            ref={suspencionTraseraRef}
            id="suspensionTrasera"
            d="M362 314.5L370 326.5L373.5 324L371 319.5L373.5 318L376 321.5L380 318L378 315L380 313.5L383 316.5L387 313.5L385 310L387 308L390 311.5L393.5 309.5L391.5 305.5L394 304L397 308L400 305L398 300.5L400 299L404.5 303L407.5 300.5L404.5 296.5L406.5 294L410 297.5L414 295.5L412 292L414 290L417.5 292L421 291L425.5 287.5L422 284.5L423.5 281L435 276V272H439L443.5 279.5L464 241.5L459.5 244.5L447 255L436 260.5L428 258L413 246.5L378 272.5L388 284.5L415.5 263.5L417.5 263L422 263.5L423.5 267.5L415.5 272L412 270L408.5 272L410 274.5L408.5 277.5L404.5 274.5L402 276L404.5 281L402 283L398 279.5L395.5 281L398 285.5L395.5 288.5L391.5 284.5L389 285.5L391.5 290L389 292L385 288.5L383 290L385 295.5L383 297.5L377.5 294L376 295.5L380 301L377.5 304L372.5 299L370 301L372.5 307L370 309.5L365.5 305L363.5 307L365.5 312.5L362 314.5Z"
            fill="#444444"
            stroke="black"
          />
          <path
            ref={frenoDelanteroRef}
            id="frenoDelantero"
            d="M639 392V378.5V373L656 374.5L659 385.5L664.5 398L674.5 405.5L687 410L702.5 405.5L713 398L717 382.5L711 365.5L701 354.5L689.5 352L669 359L656 373.5L630.5 372H635V370.5L633 367L636 361V341.5L636.5 332.5L636 308.5L633 282.5L626.5 255.5L607 203.5L600 165.5V131L594.5 115L583 102.5L565 94.5L564.5 101.5L559 102.5L548 101V90.5L553 89.5V86L559.5 90L569 93.5L585.5 101.5L597.5 114L603.5 131V165.5L610.5 203.5L629.5 255.5L636.5 282.5L640 307.5V332.5L639 341.5L640 362L648 361L651 354.5L668 344L674.5 339.5L694 336.5L717 344L729.5 362L734 385.5L729.5 404L717 417L705 422.5L691 425.5L671 422.5L654.5 410L647 398H642.5L639 392Z"
            fill="#444444"
            stroke="black"
          />
          <path
            ref={volanteRef}
            id="volante"
            d="M523 108.5L528.5 114L547 106L539.5 89L545 91L553 89V79.5L547 71L539.5 65L533 60.5L535 56.5V49L533 47.5L528.5 44L525.5 38.5L521.5 36H515L511 41.5L513 47.5L520 52V56.5L523 60.5L525.5 66.5L533 73L528.5 76.5L525.5 79.5L518 84.5V93.5L520 102.5L516.5 106L518 111L523 108.5Z"
            fill="#444444"
            stroke="black"
          />
          <path
            ref={suspencionDelanteraRef}
            id="suspencionDelantera"
            d="M692.5 369L679.5 366L632.5 277.5L625 259V245.5V237.5L622 227.5L615.5 224.5L612.5 227.5L618.5 234V243L615.5 245.5L573.5 160.5L557 167.5L674 403H679.5L686 412.5L692.5 407.5L689 398.5L692.5 394.5L701 389.5L704 379L692.5 369Z"
            fill="#444444"
            stroke="black"
          />
          <path
            ref={cambioDelanteroRef}
            id="cambioDelantero"
            d="M322.5 322.5L332.5 316L337.5 328L346 335L349 333.5L357.5 343.5L346 350.5L337.5 362.5H329.5V357.5L332.5 350.5V340L322.5 322.5Z"
            fill="#444444"
            stroke="black"
          />
          <g>
            <path
              ref={frenoTraseroRef}
              id="frenoTrasero"
              d="M170.5 344V356.5L162 361L153 372L150.5 386.5L155 402L162 411.5L176.5 414.5L191 413L203 405L208 392L206.5 380L202.5 367.5L194.5 361L182 358L171 356.5V344L170.5 338L173.5 336H183H191L194.5 330H198.5V336L202.5 333.5L208 338L230.5 345L280.522 327.1L332.5 306L405 228.5L516 152L564 132L574 124L583 113.5L588.5 101.5V91.5L574 79.5L565.5 75.5L557 76.5H552.5L547.5 72.5L546 68L539.5 62.5L533 59L535 55.5V50.5L533 47H541.5L557 57.5L564 68L565.5 71L583 82.5L590 89.5L591.5 101.5L586 113.5L576 124L564 133.5L516 155L405 232L332.5 308.5L280.522 327.1L231.5 347L206.5 341.5L209 348.5L202.5 347V341.5H198.5V345.5L191 350.5L194.5 351.5L206.5 356.5L216.5 367.5L220.5 380L221.5 392L218 404L211.5 414.5L198.5 423L184.5 428H170.5L158 425L149 416.5L141 404L137 389.5V373.5L145.5 358.5L158 347L170.5 344Z"
              fill="#444444"
            />
            <path
              ref={frenoTraseroRef}
              id="frenoTrasero"
              d="M170.5 356.5V344L158 347L145.5 358.5L137 373.5V389.5L141 404L149 416.5L158 425L170.5 428H184.5L198.5 423L211.5 414.5L218 404L221.5 392L220.5 380L216.5 367.5L206.5 356.5L194.5 351.5L191 350.5L198.5 345.5V341.5H202.5V347L209 348.5L206.5 341.5L231.5 347L332.5 306L405 228.5L516 152L564 132L574 124L583 113.5L588.5 101.5V91.5L574 79.5L565.5 75.5L557 76.5H552.5L547.5 72.5L546 68L539.5 62.5L533 59L535 55.5V50.5L533 47H541.5L557 57.5L564 68L565.5 71L583 82.5L590 89.5L591.5 101.5L586 113.5L576 124L564 133.5L516 155L405 232L332.5 308.5L230.5 345L208 338L202.5 333.5L198.5 336V330H194.5L191 336H183H173.5L170.5 338L171 344V356.5L182 358L194.5 361L202.5 367.5L206.5 380L208 392L203 405L191 413L176.5 414.5L162 411.5L155 402L150.5 386.5L153 372L162 361L170.5 356.5Z"
              stroke="black"
            />
          </g>
          <path
            ref={cambioTraseroRef}
            id="cambioTrasero"
            d="M188.5 445L196 442.5L197 438L196 434.5L193.5 429L191.5 425.5L194.5 420.5V415L190.5 405L185 402L180.5 398L185 390.5L187 379.5L185 370L332 303L334 301L366 262L404 232L506 160L557 125.5L565.5 115.5L570.5 106L574 97L572.5 88.5L570.5 86L561.5 81L556 79L549.5 75.5L553 79V81.5H556L561 83L570.5 88.5L572 97L569 106L564 115.5L556 124L504.5 159L404 229L366 260L332 301L184 368L179 365.5H166L157.5 368L151 373.5L148.5 382.5V390.5L153.5 398L160.5 402L170.5 405L174 410V415L176.5 420.5L184 424.5L187 430L180.5 435.5L182.5 442.5L188.5 445Z"
            fill="#444444"
            stroke="black"
          />
          <path
            ref={cuadroRef}
            id="cuadro"
            d="M170 396.5H190L218.5 374.5L219 369L262 350L285.5 340L325 321L338 313L347.5 332.5L367.5 354.5L380.5 347L384 344.5L383.5 344L376 336.5L370 327.5L361 314.5L358.5 301.5V279L361 271L364 269L368 250L385 240L366.5 225.5L354 234L346 222.5L347.5 219.5L361 221.5L366.5 224.5L386 239.5L504.5 158.5L507 163.5L494.5 188.5L486 198.5L464 241.5L443.5 279L429.5 304L382.5 346.5L364 357L331.5 366L219 375L191 396.5H249L331.5 389L353 386.5L377.5 378.5L401 362.5L421 346L444.5 321L461 300L524.5 176.5L538 163.5L547.5 151L556.5 167.5L573.5 160.5L564.5 141L547.5 106L528 115.5L530 121L399.5 205L390 210.5H375.5H364L351.5 209L339.5 207L325 194.5L313 200.5L309 205L312 210.5L317 208L344.5 247V253L338 271L335.5 304L317 310L177 373L162 380.5L157.5 385L158.5 392L170 396.5Z"
            fill="#444444"
            stroke="black"
          />
          <path
            ref={cadenaRef}
            id="cadena"
            d="M361 412L195 447L194.5 444.5L361 408L377.5 403.5L385 398.5L391.5 389L393.5 378.5L392.5 369L385 355L379.5 348.5L369.5 345.5L346.5 347L159.5 378.5L155 382.5V388L156.5 391L161 394L182 402.5H188L194 405.5L198.5 413.5L199 420L196 425L191.5 428L186 429.5L180.5 435.5L181.5 442.5L186 444.5H194.379L194.5 447L186 447.5L179.5 445.5L177 442V435.5L179.5 429.5L188 426L195 422V413L188 405.5H182L159 395.5L153.5 393L152 389V383L157 377L195 370L346.5 343.5L369.5 342L382 345.5L390.5 355L398 369V378.5L396 390.5L388.5 401.5L378.5 408L361 412Z"
            fill="#444444"
            stroke="black"
          />
          <path
            ref={platosRef}
            id="platos"
            d="M349.533 403.927L363.215 408L361.505 396.945L350.673 392.873L344.402 383.564V370.764L347.822 358.545L361.505 352.727L372.907 355.055L380.888 364.364L382.598 378.909L374.617 390.545L362.645 396.945L363.215 406.836L367.206 406.255L379.178 401.018L389.439 392.873L394 381.818V368.436L390.009 357.382L380.888 348.655L371.766 344H359.794L349.533 346.327L339.271 352.727L333 366.109V382.4L338.131 395.2L349.533 403.927Z"
            fill="#444444"
            stroke="black"
          />
          <path
            ref={pedalRef}
            id="pedal"
            d="M359.5 386.5L371 388.5L437.5 379L444 376V368L437.5 363L371 361.5L359.5 365L354.5 376L359.5 386.5Z"
            fill="#444444"
            stroke="black"
          />
        </g>
      </svg>
      <div className="content_bike-dirt" ref={contentRef}>
        <div ref={CSRef} className="silla-display none">
          <h1>silla</h1>
          <ModalSilla />
        </div>
        <div ref={CCRef} className="cadena-display none">
          <h1>cadena</h1>
          <ModalCadena />
        </div>
        <div ref={CPRef} className="platos-display none">
          <h1>platos</h1>
          <ModalPlatos />
        </div>
        <div ref={CVRef} className="-display none">
          <h1>volante</h1>
          <ModalVolante />
        </div>
        <div ref={CFTRef} className="-display none">
          <h1>frenos traseros</h1>
          <ModalFrenosT />
        </div>
        <div ref={CCDRef} className="-display none">
          <h1>cambios delanteros</h1>
          <ModalCambiosD />
        </div>
        <div ref={CCTRef} className="-display none">
          <h1>cambios traseros</h1>
          <ModalCambiosT />
        </div>
        <div ref={CSuDRef} className="-display none">
          <h1>suspenci??n</h1>
          <ModalSuspenD />
        </div>
        <div ref={CSuTRef} className="-display none">
          <h1>suspenci??n</h1>
          <ModalSuspenT />
        </div>
        <div ref={CFDRef} className="-display none">
          <h1>freno delantero</h1>
          <ModalFrenosD />
        </div>
        <div ref={CLDRef} className="-display none">
          <h1>llanta delantera</h1>
          <ModalLantaD />
        </div>
        <div ref={CLTRef} className="-display none">
          <h1>llanta trasera</h1>
          <ModalLantaT />
        </div>
        <div ref={CCuRef} className="-display none">
          <h1>cuadro</h1>
          <ModalCuadro />
        </div>
        <div ref={CPeRef} className="-display none">
          <h1>pedal</h1>
          <ModalPedal />
        </div>
        <div ref={CRDRef} className="-display none">
          <h1>Rayos delanteros</h1>
          <ModalRayosD />
        </div>
        <div ref={CRTRef} className="-display none">
          <h1>Rayos traseros</h1>
          <ModalRayosT />
        </div>
      </div>
    </div>
  );
}
