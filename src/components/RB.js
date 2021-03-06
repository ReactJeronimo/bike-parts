import React, { useRef, useEffect } from "react";
import "../css/mtb.css";
import ModalSilla from "./modalRB/modal_silla";
import ModalCadena from "./modalRB/modal_cadena";
import ModalPlatos from "./modalRB/modal_platos";
import ModalCambiosT from "./modalRB/modal_cambiosT";
import ModalVolante from "./modalRB/modal_volante";
import ModalRayosD from "./modalRB/modal_RayosD";
import ModalRayosT from "./modalRB/modal_rayosT";
import ModalSuspen from "./modalRB/modal_suspen";
import ModalPedal from "./modalRB/modal_pedal";
import ModalCuadro from "./modalRB/modal_cuadro";
import ModalLantaT from "./modalRB/modal_llantaT";
import ModalLantaD from "./modalRB/modal_llantaD";
import ModalFrenosT from "./modalRB/modal_frenosT";
import ModalFrenosD from "./modalRB/modal_frenosD";
import ModalCambiosD from "./modalRB/modal_cambiosD";

export default function RB() {
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
      <div className="header-rb">
        <div className="overly-mtb"></div>
        <h1 className="titulo">Road bike</h1>
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
        width="880"
        height="519"
        viewBox="0 0 880 519"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="bici">
          <path
            ref={platosRef}
            id="platos"
            d="M368 424.5L386.5 432.5L387.5 417L377.5 412L370 405.5L363 388.5L365 374L370 361.5L383.5 355L402 353.5L415.5 357L424.5 369L426.5 382.5L424.5 398L418.5 405.5L410.5 413L400.5 417H388L387 432.5H400.5L413.5 428L423 422.5L432.5 413L438.5 405.5L442 392.5L443 380L440 366.5L432.5 353.5L423 345L410 339L397 337.5L382.5 339L370 343L360.5 348.5L352.5 359.5L348.5 371L346 385.5L348.5 401L356 413L368 424.5Z"
            fill="#444444"
            stroke="black"
          />
          <path
            ref={rayosTraserosRef}
            id="rayosTraseros"
            d="M136.163 476.509L162.494 356.376H186.024L193.867 343.465L186.024 327.185L171.458 322.694L158.572 331.115L157.452 343.465L160.253 352.447L163.054 479.877L130.56 473.702L109.831 463.036L182.663 360.306V358.06L164.735 356.938L44.2831 380.515L38.1205 356.376H158.572L156.331 345.149L69.494 428.793L88.5422 447.879L177.62 360.306L87.9819 448.441L108.711 462.475L131.681 475.386L164.735 479.877H190.506L188.265 356.376H316M316 356.376V327.185L191.066 332.799V204.245H162.494L164.735 322.694L88.5422 232.875L69.494 253.646L153.369 331.115L38.1205 327.185V358.622L43.7229 382.761L54.9277 406.899L156.331 340.658L136.163 209.859L114.873 216.034L85.741 235.121L68.3735 254.769L53.8072 276.662L153.369 337.29L156.892 332.237L43.7229 302.485L53.8072 274.978L42.6024 304.169L37 328.869L156.331 335.044L170.337 321.571L243.729 219.402L217.398 209.859L188.825 202.561L160.813 204.245L133.922 209.859L192.187 202L220.199 209.859L192.187 329.992L181.542 323.256L264.458 236.243L242.048 217.718L266.139 236.243L284.066 253.646L193.867 340.658L173.699 325.501L312.078 301.362L298.072 276.101L282.386 250.278L299.753 276.101L193.867 346.833L216.837 475.948L188.265 481L219.078 475.948L242.608 464.159L173.699 360.306L263.898 447.318L241.488 465.843L266.699 446.195L284.066 429.916L196.108 346.833L193.867 335.044L298.072 406.899L282.946 432.722L300.874 406.899L312.078 383.322L190.506 360.306L312.639 383.883L316 356.376Z"
            stroke="#444444"
          />
          <path
            ref={rayosDelanterosRef}
            id="rayosDelanteros"
            d="M662.163 479.509L688.494 359.376H712.024L719.867 346.465L712.024 330.185L697.458 325.694L684.572 334.115L683.452 346.465L686.253 355.447L689.054 482.877L656.56 476.702L635.831 466.036L708.663 363.306V361.06L690.735 359.938L570.283 383.515L564.12 359.376H684.572L682.331 348.149L595.494 431.793L614.542 450.879L703.62 363.306L613.982 451.441L634.711 465.475L657.681 478.386L690.735 482.877H716.506L714.265 359.376H842M842 359.376V330.185L717.066 335.799V207.245H688.494L690.735 325.694L614.542 235.875L595.494 256.646L679.369 334.115L564.12 330.185V361.622L569.723 385.761L580.928 409.899L682.331 343.658L662.163 212.859L640.873 219.034L611.741 238.121L594.373 257.769L579.807 279.662L679.369 340.29L682.892 335.237L569.723 305.485L579.807 277.978L568.602 307.169L563 331.869L682.331 338.044L696.337 324.571L769.729 222.402L743.398 212.859L714.825 205.561L686.813 207.245L659.922 212.859L718.187 205L746.199 212.859L718.187 332.992L707.542 326.256L790.458 239.243L768.048 220.718L792.139 239.243L810.066 256.646L719.867 343.658L699.699 328.501L838.078 304.362L824.072 279.101L808.386 253.278L825.753 279.101L719.867 349.833L742.837 478.948L714.265 484L745.078 478.948L768.608 467.159L699.699 363.306L789.898 450.318L767.488 468.843L792.699 449.195L810.066 432.916L722.108 349.833L719.867 338.044L824.072 409.899L808.946 435.722L826.874 409.899L838.078 386.322L716.506 363.306L838.639 386.883L842 359.376Z"
            stroke="#444444"
          />
          <path
            ref={sillaRef}
            id="silla"
            d="M319 146.5L330.5 142L307.5 66L300 47.5L292.5 32L289.5 25.5L300 25L303.5 23.5L311 19L320 14.5L316.5 10.5L307.5 15.5L300.5 19L294.5 20.5L287 21L277 20.5V19L286 15.5L295.5 13L317 10L320.5 14L326 12.5H333L339 11L336 5.5L331 2.5H318.5L281 5.5L238.5 2.5L217.5 1L214.5 3.5L217.5 9L224 14L230 15.5H237.5L252.5 25L258 27.5H270.5V32L274.5 35L283 43L288 49L291.5 57L296.5 71.5L319 146.5Z"
            fill="#444444"
            stroke="black"
          />
          <path
            ref={llantaTraseraRef}
            id="llantaTrasera"
            d="M89.389 450.896L112.181 466.121L95.5039 497.7L62.7055 477.399L38.8016 450.896L21.0126 423.265L5.44724 384.92L1 356.161V329.094L5.44724 303.155L15.4535 277.78L25.4598 250.149L44.3606 223.645L62.7055 203.345L86.0535 188.12L119.964 174.022L145.535 165H190.008L233.369 174.022L272.282 191.503L307.86 223.645L336.211 263.682L348.997 303.155L354 348.267L348.997 384.92L336.211 418.19L316.754 450.896L290.627 477.399L258.384 496.008L226.142 512.361L195.011 518H163.324L128.858 512.361L96.0598 498.264L112.737 466.685L135.529 477.399L163.324 481.911H190.008L217.247 477.399L241.707 466.121L261.72 450.896L285.068 431.16L298.409 409.168L311.751 384.92L316.754 356.161V329.094L311.751 303.155L298.409 277.78L285.068 255.224L261.72 232.668L241.707 218.006L217.247 209.548L190.008 203.345H163.324L135.529 209.548L111.069 218.006L89.389 232.668L69.3764 255.224L54.9228 277.78L44.3606 303.155L38.8016 329.094V356.161L44.3606 384.92L54.9228 409.168L70.4882 431.16L89.389 450.896Z"
            fill="#444444"
            stroke="#444444"
          />
          <path
            ref={llantaDelanteraRef}
            id="llantaDelantera"
            d="M614.389 450.896L637.181 466.121L620.504 497.7L587.706 477.399L563.802 450.896L546.013 423.265L530.447 384.92L526 356.161V329.094L530.447 303.155L540.454 277.78L550.46 250.149L569.361 223.645L587.706 203.345L611.054 188.12L644.964 174.022L670.535 165H715.008L758.369 174.022L797.282 191.503L832.86 223.645L861.211 263.682L873.997 303.155L879 348.267L873.997 384.92L861.211 418.19L841.754 450.896L815.627 477.399L783.384 496.008L751.142 512.361L720.011 518H688.324L653.858 512.361L621.06 498.264L637.737 466.685L660.529 477.399L688.324 481.911H715.008L742.247 477.399L766.707 466.121L786.72 450.896L810.068 431.16L823.409 409.168L836.751 384.92L841.754 356.161V329.094L836.751 303.155L823.409 277.78L810.068 255.224L786.72 232.668L766.707 218.006L742.247 209.548L715.008 203.345H688.324L660.529 209.548L636.069 218.006L614.389 232.668L594.376 255.224L579.923 277.78L569.361 303.155L563.802 329.094V356.161L569.361 384.92L579.923 409.168L595.488 431.16L614.389 450.896Z"
            fill="#444444"
            stroke="#444444"
          />
          <path
            ref={frenoTraseroRef}
            id="FrenoTrasero"
            d="M167.5 385.5L183.5 387.5L197.5 380L211 367.5L225.5 346L341.5 367.5L450.5 306L565 141.5L624.5 111L648 61H644.5L621 111L565 138L448 303.5L341.5 363.5L231.5 341.5L228 337.5V333.5L225.5 320L216 310.5L211 313L205 310.5L194 303L179 299.5L161 303L142.5 313L136 324.5L133 341.5V355L142.5 373L167.5 385.5Z"
            fill="#444444"
            stroke="black"
          />
          <g>
            <path
              ref={frenoDelanteroRef}
              id="frenoDelantero"
              d="M660 332.5L658.5 329.5L674 330.5L675.5 342L679 353L687 361.5L698.5 364.5L712 361.5L720 354.5L723.5 343.5L721.5 332.5L716 323.5L705 317.5H690L681 323.5L674 329.5L653 328.5L652 326.5L653.5 321.5L652 319.5L660 307L658.5 269.5L651 218.5L633 158L637 128.5L645.5 111L651 87L648 59.5L645.5 39.5H651L662.5 38L671 35.5L682 31L686.5 24.5L689.5 15L695.5 11L703 13L710 19V28V32.5V35.5L713 48V67.5L715.5 85L720 94.5H717.5L706 87L698.5 74V67.5L701 60.5L706 54.5L703 45.5L698.5 41.5L695.5 45.5L678 54.5L653.5 58.5L651 62.5L653.5 87L647 113L639 130.5L635 158L653.5 216L662 269.5V307V308.5L665 310L671.5 312.5L677 308.5L690 301.5H697H709L721.5 307L732.5 319L739.5 334.5V351.5L732.5 366L721.5 375L705 380H690L675.5 375L664 359.5L658.5 343.5L660 332.5Z"
              fill="#444444"
            />
            <path
              ref={frenoDelanteroRef}
              id="frenoDelantero"
              d="M653.5 329.5H658.5M658.5 329.5L660 332.5L658.5 343.5L664 359.5L675.5 375L690 380H705L721.5 375L732.5 366L739.5 351.5V334.5L732.5 319L721.5 307L709 301.5H697H690L677 308.5L671.5 312.5L665 310L662 308.5V307V269.5L653.5 216L635 158L639 130.5L647 113L653.5 87L651 62.5L653.5 58.5L678 54.5L695.5 45.5L698.5 41.5L703 45.5L706 54.5L701 60.5L698.5 67.5V74L706 87L717.5 94.5H720L715.5 85L713 67.5V48L710 35.5V32.5V28V19L703 13L695.5 11L689.5 15L686.5 24.5L682 31L671 35.5L662.5 38L651 39.5H645.5L648 59.5L651 87L645.5 111L637 128.5L633 158L651 218.5L658.5 269.5L660 307L652 319.5L653.5 321.5L652 326.5L653 328.5L674 329.5L681 323.5L690 317.5H705L716 323.5L721.5 332.5L723.5 343.5L720 354.5L712 361.5L698.5 364.5L687 361.5L679 353L675.5 342L674 330.5L658.5 329.5Z"
              stroke="black"
            />
          </g>
          <path
          ref={cambioTraseroRef}
            id="cambioTrasero"
            d="M153 446.5L168.5 449.5L174 442V439V433L170.5 428.5L175.5 422L182 409.5L184.5 395.5L177 388L170.5 379L185.5 377.5L197.5 371.5L207.5 362L215 345.5L338.5 367.5L443.5 311L601 162L630.5 135L643.5 106L646.5 77.5L648 59H644.5V77.5L641.5 106L628.5 135L599 160L442 308.5L338.5 362.5L217.5 342L215 326.5L205 313.5L190.5 309.5L171.5 308L155.5 313.5L143 323.5L139.5 338.5L143 358.5H141H132.5L128 362.5L125.5 369.5L128 376L136 379L141 380.5L151.5 390.5L156 396L160.5 396.5L164 400.5L168.5 402.5L170.5 409.5L166.5 422L162 427L155 431L153 434.5L151.5 437.5L148 442L153 446.5Z"
            fill="#444444"
            stroke="black"
          />
          <path
          ref={cuadroRef}
            id="cuadro"
            d="M606 177.5L633.5 166.5L617.5 121.5L568.5 132.5V136.5L441.5 318.5L422 349L408.5 361L392.5 368.5H365.5L194 340.5L197.5 331.5L194 320.5L330.5 206.5L334.5 207L365.5 329.5L368 349L365 368H392.5L408 360.5L422 348.5L425 343L443.5 314.5L443 312.5L424.5 321L408.5 325L392.5 321L385 310L374.5 290L347.5 198L341 173.5V168.5L521 131.5L564.5 128L568.5 131.5L617.5 121L614.5 110L609.5 95L603 87L600.5 81.5L583.5 87L585 95L579 101L564.5 103L562 101L524 109L521 111.5L341 155.5H337.5L334.5 153L330.5 142.5L319.5 147H315.5L312.5 149V152L314 153L317.5 154L319.5 157L328.5 187.5L326.5 192L194 307L179 320.5L174 323.5L167 329L163.5 335.5V341.5L167 348.5L174 354H183.5H191L371 403L392.5 407L411.5 401.5L426.5 392.5L438 382L445.5 373L454 361L467.5 340.5L582.5 177.5L591 167.5L597.5 163L604 160L602 163V170L606 177.5Z"
            fill="#444444"
            stroke="black"
          />
          <path
          ref={cadenaRef}
            id="cadena"
            d="M199 445V449L172 447.5L159 446.5L154.5 439L156 429L169.5 409.5L178.5 402L179 393.5L177 388.5L154.5 373.5L142.5 355.5L140 338.5L144.5 323L156 314.5L171.5 311H192.5L389.5 335L412 337.5L427.5 348L437 358.5L442 370L444 381.5L442 397.5L432 415.5L420.5 425.5L398 436.5L200 449V445L398 433L420.5 422L430.5 414L439.5 397L441.5 381.5L439.5 370L434.5 359.5L425.5 349.5L411 341L389.5 338.5L192.5 313H171.5L157 316.5L147.5 324.5L142.5 338.5L144.5 355.5L157 373.5L179.5 387.5L181.5 392.5V403L171.5 412L157 430.5V439L161 445H171.5H199Z"
            fill="#444444"
            stroke="black"
          />
          <path
          ref={pedalRef}
            id="pedal"
            d="M444 405L482.5 410.5L487 408.5L491 405V401.5L488.5 396L482.5 393L444 384.5L409 377.5H396L388.5 382V391L394 398L411 401.5L444 405Z"
            fill="#444444"
            stroke="black"
          />
          <path
          ref={suspencionDelanteraRef}
            id="suspencionDelantera"
            d="M712.5 331L701.5 326L699.5 326.5L697 320.5L692 305.5L635 172L637.5 170.5L635 166L606.5 178.5L670 299L683 326.5L684.5 337V341.5L686 349.5L695 356.5H701.5L712.5 352.5L715.5 342.5L712.5 331Z"
            fill="#444444"
            stroke="black"
          />
          <path
          ref={cambioDelanteroRef}
            id="cambioDelantero"
            d="M354.5 344.5H368.5L445 312L558 155L584.5 141L622 134L639 124.5L647.5 98.5V60L675 57L692 49L698.5 44L701.5 47C702 48.6667 703.1 52.2 703.5 53C703.9 53.8 700.667 57.3333 699 59L695.5 68L698.5 81.5L707.5 94.5L700 79.5L698.5 68V62L705.5 53L703.5 47L698.5 42L690.5 48.5L674 55.5L645.5 58.5V74V98.5L641.5 112L636 124.5L622 130.5L584.5 137.5L558 151.5L445 309L368.5 341L365.5 316L351 321.5L354.5 344.5Z"
            fill="#444444"
            stroke="black"
          />
          <path
          ref={volanteRef}
            id="volante"
            d="M616 110.5H622.5H633L640.5 107.5L655 97.5L662.5 90L667.5 81V75L666 69.5L661 64.5L657 62L653.5 60L644 58.5L640.5 66L635.5 69.5L626.5 70.5L620.5 68L609 70.5L600.5 72L597.5 75L600.5 81L583.5 86.5L582.5 79.5L581 79H579.5L577 73L575 67V63L577 60L575 55L590.5 51.5L593 57.5L619 51.5L620.5 47.5L623.5 42.5L631.5 40H645L647.5 57.5H649L679 55L683.5 70V79L677.5 95.5L667.5 106.5L649 120.5L631.5 127.5L623.5 129L616 127.5L613.5 120.5V115L616 110.5Z"
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
          <ModalSuspen />
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
