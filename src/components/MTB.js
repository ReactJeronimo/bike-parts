import React, { useEffect, useRef } from "react";
import "../css/mtb.css";
import ModalSilla from "./modalMTB/modal_silla";
import ModalCadena from "./modalMTB/modal_cadena";
import ModalPlatos from "./modalMTB/modal_platos";
import ModalVolante from "./modalMTB/modal_volante";
import ModalRayosD from "./modalMTB/modal_RayosD";
import ModalRayosT from "./modalMTB/modal_rayosT";
import ModalSuspenD from "./modalMTB/modal_suspenD";
import ModalSuspenT from "./modalMTB/modal_suspen";
import ModalPedal from "./modalMTB/modal_pedal";
import ModalCuadro from "./modalMTB/modal_cuadro";
import ModalLantaT from "./modalMTB/modal_llantaT";
import ModalLantaD from "./modalMTB/modal_llantaD";
import ModalFrenosT from "./modalMTB/modal_frenosT";
import ModalFrenosD from "./modalMTB/modal_frenosD";
import ModalCambiosD from "./modalMTB/modal_cambiosD";
import ModalCambiosT from "./modalMTB/modal_cambiosT.js";

export default function MTB() {
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
      <div className="header-mtb">
        <div className="overly-mtb"></div>
        <h1 className="titulo">MTB (mountain bike)</h1>
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
        width="875"
        height="464"
        viewBox="0 0 875 464"
        fill="none"
        id="biciDirt"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="bici">
          <path
            ref={llantaDelanteraRef}
            id="llantaDelantera"
            d="M622.132 399.128L643.827 413.62L627.953 443.677L596.734 424.355L573.981 399.128L557.049 372.827L542.233 336.329L538 308.955V283.192L542.233 258.502L551.757 234.348L561.282 208.048L579.272 182.821L596.734 163.498L618.957 149.006L651.235 135.588L675.575 127H717.906L759.178 135.588L796.217 152.227L830.082 182.821L857.068 220.93L869.238 258.502L874 301.441L869.238 336.329L857.068 367.997L838.548 399.128L813.679 424.355L782.989 442.067L752.299 457.633L722.668 463H692.507L659.701 457.633L628.482 444.214L644.356 414.157L666.05 424.355L692.507 428.649H717.906L743.833 424.355L767.115 413.62L786.164 399.128L808.387 380.342L821.087 359.409L833.786 336.329L838.548 308.955V283.192L833.786 258.502L821.087 234.348L808.387 212.879L786.164 191.409L767.115 177.454L743.833 169.403L717.906 163.498H692.507L666.05 169.403L642.769 177.454L622.132 191.409L603.083 212.879L589.326 234.348L579.272 258.502L573.981 283.192V308.955L579.272 336.329L589.326 359.409L604.142 380.342L622.132 399.128Z"
            fill="#444444"
            stroke="#444444"
          />
          <path
            id="llantaTrasera"
            ref={llantaTraseraRef}
            d="M85.1323 399.128L106.827 413.62L90.9528 443.677L59.7339 424.355L36.9811 399.128L20.0488 372.827L5.23307 336.329L1 308.955V283.192L5.23307 258.502L14.7575 234.348L24.2819 208.048L42.2724 182.821L59.7339 163.498L81.9575 149.006L114.235 135.588L138.575 127H180.906L222.178 135.588L259.217 152.227L293.082 182.821L320.068 220.93L332.238 258.502L337 301.441L332.238 336.329L320.068 367.997L301.548 399.128L276.679 424.355L245.989 442.067L215.299 457.633L185.668 463H155.507L122.701 457.633L91.4819 444.214L107.356 414.157L129.05 424.355L155.507 428.649H180.906L206.833 424.355L230.115 413.62L249.164 399.128L271.387 380.342L284.087 359.409L296.786 336.329L301.548 308.955V283.192L296.786 258.502L284.087 234.348L271.387 212.879L249.164 191.409L230.115 177.454L206.833 169.403L180.906 163.498H155.507L129.05 169.403L105.769 177.454L85.1323 191.409L66.0835 212.879L52.326 234.348L42.2724 258.502L36.9811 283.192V308.955L42.2724 336.329L52.326 359.409L67.1417 380.342L85.1323 399.128Z"
            fill="#444444"
            stroke="#444444"
          />
          <path
            ref={suspencionDelanteraRef}
            id="suspencionDelantera"
            d="M611 86L590.5 95.5L589.5 98L591.5 101.5L597 106.5L604 105V108.5L609 120L611.5 121L681.5 294L682.5 298L687.5 302.5L692 306.5L698 309.5L702.5 311L708 312L713.5 311L717 308.5L720 304L721.5 298V292.5L718.5 287L713.5 283.5L708 281.5H703L700 283.5H696L653 182.5L648.5 170.5L644 159L642.5 155.5V152.5L644 135.5L642.5 132.5L639 131L637 132.5L636.5 135.5V138.5L637 141V142.5L635.5 141.5L624.5 116.5L626 114L620.5 100.5L614 95.5V90L611 86Z"
            fill="#444444"
            stroke="black"
          />
          <path
            ref={cadenaRef}
            id="cadena"
            d="M385.5 338.5L389 332.5L393 333.5L388.5 340.5L383 346L375 350.5L367.5 353L183 403L176.5 404.5L167.5 403L162.5 400L160 396L158 389L160 382.5L162.5 372L167.5 356L166 347.5L163 342L157 337L143.5 329L134.5 319.5L128.5 307.5V294.5L131.5 283L138 273L150 265.5L160 262L173 260L186 262L198.5 264L335 284.5L354.5 287L366.5 288L376.5 292.5L384 298L391 307.5L394 316.5V326L393 333L389 332L390 325.5V316.5L387 308L381.5 301L374.5 295.5L366 292.5L356 291L343.5 289.5L230 272.5L201.5 268L189 266L176.5 264H166L157 266.5L148 270.5L141.5 276L137 280.5L133 289L131.5 299L134.5 311L143.5 323.5L164.5 337L171 343.5L173 356L171 363L167.5 370L164.5 379L162.5 388L164.5 396L173 400L179.5 399L366.5 349.5L372.5 347L380 343.5L385.5 338.5Z"
            fill="#444444"
            stroke="black"
          />
          <path
            ref={sillaRef}
            id="silla"
            d="M316 110.5C319.667 109.333 327.4 107 329 107L302 34.5L299.5 29.5L294.5 25L301.5 24L306 23L319.5 13.5H312.5L307.5 17L302 20.5L295.5 21.5H280.5L282.5 19L295.5 15.5L304 14L313.5 13H321.5H325.5L332.5 14H339V9.5L337 6L330.5 4.5H318L295.5 6H287H275L263 4.5L247.5 2.5L236 0.5H232L230.5 2.5V5.5L232 9.5L236 13L241.5 14L247.5 15.5L251.5 17L254.5 19.5L255.5 21.5L259.5 24.5L263 26H275L274.5 27.5L272 30.5V34.5L278.5 30.5V29.5L280.5 29L282.5 29.5V31L280 32L278.5 31L273.5 34.5H277.5L285.5 32L288 34.5L291 40L316 110.5Z"
            fill="#444444"
            stroke="black"
          />
          <path
            ref={cuadroRef}
            id="cuadro"
            d="M590.5 40.5L572.5 47.5L521.5 70L527 85.5L549.5 76.5H556.5V82.5L417 277L392.5 294.5L373.5 297.5V282V242.5L369 209L361.5 191L357.5 184.5L344 195L348.5 200.5L354.5 229V254.5L354 290.5L338.5 294.5H296.5H232H194L190.5 288L193 280L302.5 220.5L338.5 198.5L357 184L348.5 161.5V156.5L353.5 152L417 126.5L436.5 120L440 125.5V130L446 136.5L449 135L460 112L526.5 85.5L521 70.5L367 132L357 133L348.5 134L341.5 132L338.5 129L330.758 112.5L334.5 110V107L332.5 106L329 107L316 111L313 112.5L314.5 116.5H317L341.5 186.5L177 280L164.5 286.5L158 297L160 306L170 310H196.5L300.5 313L354.5 306L371.5 317L402.5 313L419 304L431.5 295.5L439 287L563.5 113.5L568 107.5L580.5 99L590 95.5L611 85.5L590.5 40.5Z"
            fill="#444444"
            stroke="black"
          />
          <path
            ref={suspencionTraseraRef}
            id="suspensionTrasera"
            d="M440 130L446 136.5V141V144H442L433.5 149H429.5L406.5 162.5L404.5 165H401L399 167H393L366.5 182L360.5 188.5L355.5 178.5L388.5 158.5L390.5 156.5L394 154.5V152.5L398 150.5L414.5 141L423.5 135.5L430.5 130L435.5 131.5L440 130Z"
            fill="#444444"
            stroke="black"
          />
          <path
            ref={platosRef}
            id="platos"
            d="M351 346.5L363 350L361.5 340.5L352 337L346.5 329V318L349.5 307.5L361.5 302.5L371.5 304.5L378.5 312.5L380 325L373 335L362.5 340.5L363 349L366.5 348.5L377 344L386 337L390 327.5V316L386.5 306.5L378.5 299L370.5 295H360L351 297L342 302.5L336.5 314V328L341 339L351 346.5Z"
            fill="#444444"
            stroke="black"
          />
          <path
            ref={volanteRef}
            id="volante"
            d="M604 55L595.5 51L590 40L572 47.5L572.5 44.5L570.5 43.5L568 41L570.5 38.5V35H565V33L568 30L575 25.5V22L577 16.5L583.5 14.5H599L604 12.5H608.5L612 16.5L613.5 22L616 30V38.5L613.5 41L612 45.5L608.5 48.5L606 51L604 55Z"
            fill="#444444"
            stroke="black"
          />
          <path
            ref={rayosTraserosRef}
            id="rayosTraseros"
            d="M130.187 424.734L155.197 310.63H177.546L184.996 298.366L177.546 282.903L163.711 278.638L151.472 286.636L150.408 298.366L153.068 306.897L155.729 427.934L124.865 422.068L105.177 411.938L174.353 314.362V312.229L157.325 311.163L42.9177 333.557L37.0643 310.63H151.472L149.343 299.966L66.8635 379.412L84.9558 397.541L169.564 314.362L84.4237 398.074L104.112 411.404L125.93 423.668L157.325 427.934H181.803L179.675 310.63H301M301 310.63V282.903L182.335 288.235V166.133H155.197L157.325 278.638L84.9558 193.326L66.8635 213.054L146.53 286.636L37.0643 282.903V312.763L42.3855 335.69L53.0281 358.618L149.343 295.7L130.187 171.465L109.966 177.33L82.2952 195.459L65.7992 214.121L51.9639 234.915L146.53 292.501L149.876 287.702L42.3855 259.443L51.9639 233.316L41.3213 261.042L36 284.503L149.343 290.368L162.647 277.571L232.355 180.529L207.345 171.465L180.207 164.533L153.6 166.133L128.058 171.465L183.4 164L210.006 171.465L183.4 285.569L173.289 279.171L252.044 196.525L230.759 178.93L253.641 196.525L270.669 213.054L184.996 295.7L165.839 281.304L297.275 258.376L283.972 234.382L269.072 209.855L285.568 234.382L184.996 301.565L206.813 424.201L179.675 429L208.942 424.201L231.291 413.004L165.839 314.362L251.512 397.008L230.227 414.604L254.173 395.942L270.669 380.479L187.124 301.565L184.996 290.368L283.972 358.618L269.604 383.145L286.633 358.618L297.275 336.223L181.803 314.362L297.807 336.757L301 310.63Z"
            stroke="#444444"
          />
          <path
            ref={rayosDelanterosRef}
            id="rayosDelanteros"
            d="M666.898 423.751L692.096 310.076H714.614L722.12 297.859L714.614 282.455L700.675 278.205L688.343 286.173L687.271 297.859L689.952 306.358L692.633 426.938L661.536 421.095L641.699 411.002L711.398 313.795V311.67L694.241 310.608L578.97 332.918L573.072 310.076H688.343L686.199 299.453L603.096 378.6L621.325 396.66L706.572 313.795L620.789 397.191L640.627 410.471L662.608 422.688L694.241 426.938H718.904L716.759 310.076H839M839 310.076V282.455L719.44 287.767V166.125H692.096L694.241 278.205L621.325 193.215L603.096 212.869L683.364 286.173L573.072 282.455V312.201L578.434 335.042L589.157 357.883L686.199 295.203L666.898 171.437L646.524 177.28L618.645 195.34L602.024 213.932L588.084 234.648L683.364 292.016L686.735 287.235L578.434 259.082L588.084 233.054L577.361 260.676L572 284.048L686.199 289.891L699.602 277.143L769.837 180.467L744.639 171.437L717.295 164.531L690.488 166.125L664.753 171.437L720.512 164L747.319 171.437L720.512 285.111L710.325 278.736L789.675 196.402L768.229 178.873L791.283 196.402L808.44 212.869L722.12 295.203L702.819 280.861L835.247 258.02L821.843 234.117L806.831 209.682L823.452 234.117L722.12 301.046L744.102 423.219L716.759 428L746.247 423.219L768.765 412.064L702.819 313.795L789.139 396.129L767.693 413.658L791.819 395.066L808.44 379.662L724.265 301.046L722.12 289.891L821.843 357.883L807.367 382.318L824.524 357.883L835.247 335.573L718.904 313.795L835.783 336.105L839 310.076Z"
            stroke="#444444"
          />
          <path
            ref={frenoTraseroRef}
            id="frenoTrasero"
            d="M154 249.5L157 257.5L157.5 260L149 266L140.5 273.5L133.5 287L132.5 304.5L139 319.5L153 329.5L169 332L186 328L197 319.5L203.5 305V292.5L200.5 280L197 270.5L186 263.5L173 259.5H158L155 249.5H157H160H169H180L198.5 257.5L207 264.5L212.5 278L216.5 284L221 287.5L225.5 290H242.5H288.5H331.5L366 285L383.5 290L412.5 276L543.5 95.5L564.5 83L600.5 80L614 77.5L627 76.5L651 74L655 71.5L659 68V59.5L655 55.5L647.5 52L641 49L633.5 46.5L627.5 45L620 41.5L616 36V30L621.5 33.5L633.5 43.5L643 46.5L655 52L662.5 59.5V68L659 74L651 77.5L614 80L600.5 82L565.5 85.5L543.5 99L414 277.5L383.5 292.5L364 287L331.5 292.5L288.5 293.5H242.5L225.5 292.5L224.5 293.5L216.5 292.5V307L212.5 319.5L207 329.5L198.5 336.5L189.5 341.5L174 345.5H162L148.5 344L139 338.5L130 332L123.5 322.5L120.5 313L119 299.5L120.5 287L123.5 277.5L130 266L139 257.5L153 249.5H154Z"
            fill="#444444"
            stroke="black"
          />
          <g>
            <path
              ref={frenoDelanteroRef}
              id="frenoDelantero"
              d="M666 305L673 301.5L673.155 300.88L664 305L660.5 304.5L659.5 298L660.5 294.5H659.5V291.5L662.5 290.5L661.5 286L658 283.5L660.5 280.5L654 277.5L658 273.5L670.5 267L670.903 264.258L669 259.5L669.5 250L664 232L658 208L644.5 170.5L647 131L654 113L660.5 103L664 90V81L659.5 71.5L650 57.5L638 51.5L621.5 46.5L613.5 41.5L617.5 34L631 41.5L650 51.5L659.5 62L668 76.5C668.667 80.8333 670 89.6 670 90C670 90.4 667.667 98.8333 666.5 103L659.5 116.5L650 135V175L664 215L673 250L670.903 264.258L672 267V280.5L673 283.5L672 286.5L673 288L674 297.5L673.155 300.88L674 300.5L678.5 299.5L680 301.5L683 307L692.5 318.5L706.5 323L719.5 321L730.5 311L734 299L731.5 284.5L726 275.5L716 269L705 267L690 269L673 280.5V275.5V267L681 262.5L690 259L706.5 256L721.5 259L737.5 269L743.5 280.5L747.5 299L745 312L737.5 323L727.5 331.5L709.5 337.5L692.5 333L674.5 323L666 305Z"
              fill="#444444"
            />
            <path
              ref={frenoDelanteroRef}
              id="frenoDelantero"
              d="M673 301.5L666 305L674.5 323L692.5 333L709.5 337.5L727.5 331.5L737.5 323L745 312L747.5 299L743.5 280.5L737.5 269L721.5 259L706.5 256L690 259L681 262.5L673 267V275.5V280.5L690 269L705 267L716 269L726 275.5L731.5 284.5L734 299L730.5 311L719.5 321L706.5 323L692.5 318.5L683 307L680 301.5L678.5 299.5L674 300.5L664 305L660.5 304.5L659.5 298L660.5 294.5H659.5V291.5L662.5 290.5L661.5 286L658 283.5L660.5 280.5L654 277.5L658 273.5L670.5 267L673 250L664 215L650 175V135L659.5 116.5L666.5 103C667.667 98.8333 670 90.4 670 90C670 89.6 668.667 80.8333 668 76.5L659.5 62L650 51.5L631 41.5L617.5 34L613.5 41.5L621.5 46.5L638 51.5L650 57.5L659.5 71.5L664 81V90L660.5 103L654 113L647 131L644.5 170.5L658 208L664 232L669.5 250L669 259.5L672 267V280.5L673 283.5L672 286.5L673 288L674 297.5L673 301.5Z"
              stroke="black"
            />
          </g>
          <g>
            <path
              ref={cambioTraseroRef}
              id="CambiosTraseros"
              d="M201.5 307L194 321.5L183.5 328L158.5 330.5L181.5 329L185 339.5L215.5 315L236.5 310H318L368 297.5L414 269L501 153L552.5 88.5L609 70.5L618.5 53.5L617.5 48.5L613 45.5L614.5 41L616.5 37.5L621.5 43.5V55L610.5 72L552.5 91.5L503.5 153L417 269L369 300L318 313H236.5L217.5 317.5L187.5 342L188.5 351L183 359.5L179.5 368L175 377L177 380L183 389L181.5 394.5L178 400.5L168 404H158.5L150.5 396V391.5L157 389V385.5L158.5 377H163.5L162.5 365.5L161 359.5L153.5 354.5L150.5 348L153.5 338.5L158.5 330.5L144 321.5L137.5 313L133.5 300H137.5L141 308L143.5 307L141 298.5L141.5 290.5L148.5 277.5L160.5 270L172.5 268L186.5 272.5L191 282.5L192.5 296.5L190 310L186.5 315L180.5 319L170.5 321.5L163 322.5L154 319L149 314.5L151 313L154.5 316.5L161 319H166.5L173 317.5L172 314.5L170.5 315L167 315.5H161L154 312L150 304L148.5 294.5L151 287L156 281L162 277L170 275.5L178 277L182.5 283L185 291.5V299.5L183.5 306.5L179 311L173.5 314.5L174 317.5L180.5 315L185 311L188 302L189 293.5L186.5 283.5L181.5 275.5L174 272.5L164 273.5L153.5 278.5L146.5 289.5L146 299.5L146.5 306L150.5 312L148.5 314L144 308L141.5 309L148.5 319L159 325H170L185 320.5L190 317L194 310.5L196.5 296.5L194 279.5L189 270L173 265L158.5 266L146.5 274.5L137.5 293.5V298.5H133.5L133 289L140.5 274.5L155.5 262.5L166 259L182.5 262.5L195.5 270L201.5 285.5V307Z"
              fill="#444444"
            />
            <path
            ref={cambioTraseroRef}
              id="CambiosTraseros"
              d="M158.5 330.5L144 321.5L137.5 313L133.5 300H137.5L141 308L143.5 307L141 298.5L141.5 290.5L148.5 277.5L160.5 270L172.5 268L186.5 272.5L191 282.5L192.5 296.5L190 310L186.5 315L180.5 319L170.5 321.5L163 322.5L154 319L149 314.5L151 313L154.5 316.5L161 319H166.5L173 317.5L172 314.5L170.5 315L167 315.5H161L154 312L150 304L148.5 294.5L151 287L156 281L162 277L170 275.5L178 277L182.5 283L185 291.5V299.5L183.5 306.5L179 311L173.5 314.5L174 317.5L180.5 315L185 311L188 302L189 293.5L186.5 283.5L181.5 275.5L174 272.5L164 273.5L153.5 278.5L146.5 289.5L146 299.5L146.5 306L150.5 312L148.5 314L144 308L141.5 309L148.5 319L159 325H170L185 320.5L190 317L194 310.5L196.5 296.5L194 279.5L189 270L173 265L158.5 266L146.5 274.5L137.5 293.5V298.5H133.5L133 289L140.5 274.5L155.5 262.5L166 259L182.5 262.5L195.5 270L201.5 285.5V307L194 321.5L183.5 328L158.5 330.5ZM158.5 330.5L153.5 338.5L150.5 348L153.5 354.5L161 359.5L162.5 365.5L163.5 377H158.5L157 385.5V389L150.5 391.5V396L158.5 404H168L178 400.5L181.5 394.5L183 389L177 380L175 377L179.5 368L183 359.5L188.5 351L187.5 342L217.5 317.5L236.5 313H318L369 300L417 269L503.5 153L552.5 91.5L610.5 72L621.5 55V43.5L616.5 37.5L614.5 41L613 45.5L617.5 48.5L618.5 53.5L609 70.5L552.5 88.5L501 153L414 269L368 297.5L318 310H236.5L215.5 315L185 339.5L181.5 329L158.5 330.5Z"
              stroke="black"
            />
          </g>
          <path
          ref={cambioDelanteroRef}
            id="cambiosDelanteros"
            d="M384 268H373V293L370 299.5L379.5 302.5L385 298L388.5 296L397 291L416 277L546.5 95L571 79L591 73.5L607.5 64L615.5 38L612 43.5L604 64L571 75.5L544 92.5L414.5 275L396 288.5L387.5 294L384 293V268Z"
            fill="#444444"
            stroke="black"
          />
          <path
          ref={pedalRef}
            id="pedal"
            d="M423 331.5L449 327.5L452.5 326L454.5 321L452.5 317.5L449 315L429.5 311.5L385 309H362L355.5 311.5L353 315L351 321L353 327.5L360 331.5H385H423Z"
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
