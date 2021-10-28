import React, { useRef, useEffect } from "react";
import "../css/mtb.css";
import "../css/dirt.css";
import ModalSilla from "./modalsDirt/modal_silla";
import ModalCadena from "./modalsDirt/modal_cadena";
import ModalPlatos from "./modalsDirt/modal_platos";
import ModalPinones from "./modalsDirt/modal_pinones";
import ModalValD from "./modalsDirt/Modal_valD";
import ModalValT from "./modalsDirt/modal_valT";
import ModalVolante from "./modalsDirt/modal_volante";
import ModalRayosD from "./modalsDirt/modal_RayosD";
import ModalRayosT from "./modalsDirt/modal_rayosT";
import ModalSuspen from "./modalsDirt/modal_suspen";
import ModalPedal from "./modalsDirt/modal_pedal";
import ModalCuadro from "./modalsDirt/modal_cuadro";
import ModalLantaT from "./modalsDirt/modal_llantaT";
import ModalLantaD from "./modalsDirt/modal_llantaD";
import ModalFrenosT from "./modalsDirt/modal_frenosT";
import ModalFrenosD from "./modalsDirt/modal_frenosD";
import ModalCambiosD from "./modalsDirt/modal_cambiosD";

export default function Dirt() {
  const sillaRef = useRef();
  const CSRef = useRef();
  const cadenaRef = useRef();
  const CCRef = useRef();
  const platosRef = useRef();
  const CPRef = useRef();
  const pinonesRef = useRef();
  const CPiRef = useRef();
  const volanteRef = useRef();
  const CVRef = useRef();
  const frenoTraseroRef = useRef();
  const CFTRef = useRef();
  const cambioDelanteroRef = useRef();
  const CCDRef = useRef();
  const suspencionRef = useRef();
  const CSuRef = useRef();
  const frenoDelanteroRef = useRef();
  const CFDRef = useRef();
  const llantaDelanteraRef = useRef();
  const CLDRef = useRef();
  const llantaTraseraRef = useRef();
  const CLTRef = useRef();
  const valvulaRef = useRef();
  const CVaRef = useRef();
  const valvulaDosRef = useRef();
  const CVaDRef = useRef();
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
    const pinones = pinonesRef.current;
    const CPi = CPiRef.current;
    const volante = volanteRef.current;
    const CV = CVRef.current;
    const frenoTrasero = frenoTraseroRef.current;
    const CFT = CFTRef.current;
    const cambioDelantero = cambioDelanteroRef.current;
    const CCD = CCDRef.current;
    const suspencion = suspencionRef.current;
    const CSu = CSuRef.current;
    const frenoDelantero = frenoDelanteroRef.current;
    const CFD = CFDRef.current;
    const llantaDelantera = llantaDelanteraRef.current;
    const CLD = CLDRef.current;
    const llantaTrasera = llantaTraseraRef.current;
    const CLT = CLTRef.current;
    const valvula = valvulaRef.current;
    const CVa = CVaRef.current;
    const valvulaDos = valvulaDosRef.current;
    const CVaD = CVaDRef.current;
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
      CPi.style.display = "none";
      CV.style.display = "none";
      CFT.style.display = "none";
      CCD.style.display = "none";
      CSu.style.display = "none";
      CFD.style.display = "none";
      CLD.style.display = "none";
      CLT.style.display = "none";
      CVa.style.display = "none";
      CVaD.style.display = "none";
      CCu.style.display = "none";
      CPe.style.display = "none";
      CRD.style.display = "none";
      CRT.style.display = "none";
    });
    cadenaBike.addEventListener("click", () => {
      CS.style.display = "none";
      CC.style.display = "block";
      CP.style.display = "none";
      CPi.style.display = "none";
      CV.style.display = "none";
      CFT.style.display = "none";
      CCD.style.display = "none";
      CSu.style.display = "none";
      CFD.style.display = "none";
      CLD.style.display = "none";
      CLT.style.display = "none";
      CVa.style.display = "none";
      CVaD.style.display = "none";
      CCu.style.display = "none";
      CPe.style.display = "none";
      CRD.style.display = "none";
      CRT.style.display = "none";
    });
    platos.addEventListener("click", () => {
      CS.style.display = "none";
      CC.style.display = "none";
      CP.style.display = "block";
      CPi.style.display = "none";
      CV.style.display = "none";
      CFT.style.display = "none";
      CCD.style.display = "none";
      CSu.style.display = "none";
      CFD.style.display = "none";
      CLD.style.display = "none";
      CLT.style.display = "none";
      CVa.style.display = "none";
      CVaD.style.display = "none";
      CCu.style.display = "none";
      CPe.style.display = "none";
      CRD.style.display = "none";
      CRT.style.display = "none";
    });
    pinones.addEventListener("click", () => {
      CS.style.display = "none";
      CC.style.display = "none";
      CP.style.display = "none";
      CPi.style.display = "block";
      CV.style.display = "none";
      CFT.style.display = "none";
      CCD.style.display = "none";
      CSu.style.display = "none";
      CFD.style.display = "none";
      CLD.style.display = "none";
      CLT.style.display = "none";
      CVa.style.display = "none";
      CVaD.style.display = "none";
      CCu.style.display = "none";
      CPe.style.display = "none";
      CRD.style.display = "none";
      CRT.style.display = "none";
    });
    volante.addEventListener("click", () => {
      CS.style.display = "none";
      CC.style.display = "none";
      CP.style.display = "none";
      CPi.style.display = "none";
      CV.style.display = "block";
      CFT.style.display = "none";
      CCD.style.display = "none";
      CSu.style.display = "none";
      CFD.style.display = "none";
      CLD.style.display = "none";
      CLT.style.display = "none";
      CVa.style.display = "none";
      CVaD.style.display = "none";
      CCu.style.display = "none";
      CPe.style.display = "none";
      CRD.style.display = "none";
      CRT.style.display = "none";
    });
    frenoTrasero.addEventListener("click", () => {
      CS.style.display = "none";
      CC.style.display = "none";
      CP.style.display = "none";
      CPi.style.display = "none";
      CV.style.display = "none";
      CFT.style.display = "block";
      CCD.style.display = "none";
      CSu.style.display = "none";
      CFD.style.display = "none";
      CLD.style.display = "none";
      CLT.style.display = "none";
      CVa.style.display = "none";
      CVaD.style.display = "none";
      CCu.style.display = "none";
      CPe.style.display = "none";
      CRD.style.display = "none";
      CRT.style.display = "none";
    });
    cambioDelantero.addEventListener("click", () => {
      CS.style.display = "none";
      CC.style.display = "none";
      CP.style.display = "none";
      CPi.style.display = "none";
      CV.style.display = "none";
      CFT.style.display = "none";
      CCD.style.display = "block";
      CSu.style.display = "none";
      CFD.style.display = "none";
      CLD.style.display = "none";
      CLT.style.display = "none";
      CVa.style.display = "none";
      CVaD.style.display = "none";
      CCu.style.display = "none";
      CPe.style.display = "none";
      CRD.style.display = "none";
      CRT.style.display = "none";
    });
    suspencion.addEventListener("click", () => {
      CS.style.display = "none";
      CC.style.display = "none";
      CP.style.display = "none";
      CPi.style.display = "none";
      CV.style.display = "none";
      CFT.style.display = "none";
      CCD.style.display = "none";
      CSu.style.display = "block";
      CFD.style.display = "none";
      CLD.style.display = "none";
      CLT.style.display = "none";
      CVa.style.display = "none";
      CVaD.style.display = "none";
      CCu.style.display = "none";
      CPe.style.display = "none";
      CRD.style.display = "none";
      CRT.style.display = "none";
    });
    frenoDelantero.addEventListener("click", () => {
      CS.style.display = "none";
      CC.style.display = "none";
      CP.style.display = "none";
      CPi.style.display = "none";
      CV.style.display = "none";
      CFT.style.display = "none";
      CCD.style.display = "none";
      CSu.style.display = "none";
      CFD.style.display = "block";
      CLD.style.display = "none";
      CLT.style.display = "none";
      CVa.style.display = "none";
      CVaD.style.display = "none";
      CCu.style.display = "none";
      CPe.style.display = "none";
      CRD.style.display = "none";
      CRT.style.display = "none";
    });
    llantaDelantera.addEventListener("click", () => {
      CS.style.display = "none";
      CC.style.display = "none";
      CP.style.display = "none";
      CPi.style.display = "none";
      CV.style.display = "none";
      CFT.style.display = "none";
      CCD.style.display = "none";
      CSu.style.display = "none";
      CFD.style.display = "none";
      CLD.style.display = "block";
      CLT.style.display = "none";
      CVa.style.display = "none";
      CVaD.style.display = "none";
      CCu.style.display = "none";
      CPe.style.display = "none";
      CRD.style.display = "none";
      CRT.style.display = "none";
    });
    llantaTrasera.addEventListener("click", () => {
      CS.style.display = "none";
      CC.style.display = "none";
      CP.style.display = "none";
      CPi.style.display = "none";
      CV.style.display = "none";
      CFT.style.display = "none";
      CCD.style.display = "none";
      CSu.style.display = "none";
      CFD.style.display = "none";
      CLD.style.display = "none";
      CLT.style.display = "block";
      CVa.style.display = "none";
      CVaD.style.display = "none";
      CCu.style.display = "none";
      CPe.style.display = "none";
      CRD.style.display = "none";
      CRT.style.display = "none";
    });
    valvula.addEventListener("click", () => {
      CS.style.display = "none";
      CC.style.display = "none";
      CP.style.display = "none";
      CPi.style.display = "none";
      CV.style.display = "none";
      CFT.style.display = "none";
      CCD.style.display = "none";
      CSu.style.display = "none";
      CFD.style.display = "none";
      CLD.style.display = "none";
      CLT.style.display = "none";
      CVa.style.display = "block";
      CVaD.style.display = "none";
      CCu.style.display = "none";
      CPe.style.display = "none";
      CRD.style.display = "none";
      CRT.style.display = "none";
    });
    valvulaDos.addEventListener("click", () => {
      CS.style.display = "none";
      CC.style.display = "none";
      CP.style.display = "none";
      CPi.style.display = "none";
      CV.style.display = "none";
      CFT.style.display = "none";
      CCD.style.display = "none";
      CSu.style.display = "none";
      CFD.style.display = "none";
      CLD.style.display = "none";
      CLT.style.display = "none";
      CVa.style.display = "none";
      CVaD.style.display = "block";
      CCu.style.display = "none";
      CPe.style.display = "none";
      CRD.style.display = "none";
      CRT.style.display = "none";
    });
    cuadro.addEventListener("click", () => {
      CS.style.display = "none";
      CC.style.display = "none";
      CP.style.display = "none";
      CPi.style.display = "none";
      CV.style.display = "none";
      CFT.style.display = "none";
      CCD.style.display = "none";
      CSu.style.display = "none";
      CFD.style.display = "none";
      CLD.style.display = "none";
      CLT.style.display = "none";
      CVa.style.display = "none";
      CVaD.style.display = "none";
      CCu.style.display = "block";
      CPe.style.display = "none";
      CRD.style.display = "none";
      CRT.style.display = "none";
    });
    pedal.addEventListener("click", () => {
      CS.style.display = "none";
      CC.style.display = "none";
      CP.style.display = "none";
      CPi.style.display = "none";
      CV.style.display = "none";
      CFT.style.display = "none";
      CCD.style.display = "none";
      CSu.style.display = "none";
      CFD.style.display = "none";
      CLD.style.display = "none";
      CLT.style.display = "none";
      CVa.style.display = "none";
      CVaD.style.display = "none";
      CCu.style.display = "none";
      CPe.style.display = "block";
      CRD.style.display = "none";
      CRT.style.display = "none";
    });
    rayosTraseros.addEventListener("click", () => {
      CS.style.display = "none";
      CC.style.display = "none";
      CP.style.display = "none";
      CPi.style.display = "none";
      CV.style.display = "none";
      CFT.style.display = "none";
      CCD.style.display = "none";
      CSu.style.display = "none";
      CFD.style.display = "none";
      CLD.style.display = "none";
      CLT.style.display = "none";
      CVa.style.display = "none";
      CVaD.style.display = "none";
      CCu.style.display = "none";
      CPe.style.display = "none";
      CRT.style.display = "block";
      CRD.style.display = "none";
    });
    rayosDelanteros.addEventListener("click", () => {
      CS.style.display = "none";
      CC.style.display = "none";
      CP.style.display = "none";
      CPi.style.display = "none";
      CV.style.display = "none";
      CFT.style.display = "none";
      CCD.style.display = "none";
      CSu.style.display = "none";
      CFD.style.display = "none";
      CLD.style.display = "none";
      CLT.style.display = "none";
      CVa.style.display = "none";
      CVaD.style.display = "none";
      CCu.style.display = "none";
      CPe.style.display = "none";
      CRD.style.display = "block";
      CRT.style.display = "none";
    });
  }, []);

  return (
    <div className="mtb">
      <div className="header-dirt">
        <div className="overly-mtb"></div>
        <h1 className="titulo">Dirt jump</h1>
        <p className="text-header">
          En esta pagina se le mostrara a las personas aficionadas de la
          bicicleta más acerca de estas de una forma interactiva y detallada
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
        height="538"
        viewBox="0 0 877 538"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="bici">
          <path
            ref={sillaRef}
            id="silla"
            d="M310 159.5L324.5 151.5V153L318.5 165.5L316.5 168L310 165.5L308.5 168L305 170L300.5 171L295.5 172.5L289.5 176.5L287.5 178L284.5 178.5L283.5 180H291L292 182.5L299.5 186.5L334 277.5L346 274L312.5 181.5L317.5 179V175L310 176.5V175L314.5 172.5L322.5 166.5L329 148.5H337.5L346 145H354.5L357 138L352 133.5H341.5L329 138L308.5 145L265 157.5L254 159.5L245 163L247 170L252 177.5L269 181L286 177.5L299.5 168L310 159.5Z"
            fill="#444444"
            stroke="#444444"
          />
          <path
            ref={cadenaRef}
            id="cadena"
            d="M193.5 368.5L368 386V384L367 384.5L193.5 367.5L180 365.5L170.5 359.5L167.5 351L170.5 342L180 337.5L193.5 335L368 328.5L381.5 334L389.5 344.5L391 357L389.5 368.5L382.5 376L372.5 382.5L368.5 384V386L372.5 384.5L382.5 378L391 369.5L393 357L391 343.5L382.5 332L368 326L193.5 334L179.5 336.5L169.5 341.5L166.5 351L169.5 360L179.5 366.5L193.5 368.5Z"
            fill="#444444"
            stroke="#444444"
          />
          <path
            ref={platosRef}
            id="platos"
            d="M362 375.5L371 374L374.5 382.5L369 385H359L352.5 382.5L347 379L340.5 371.5L337 364V354.5L338 345.5L344 335L354 328L367 325.5L377 329.5L385.5 336L391 343.5L392.5 353.5V366.5L386.5 374.5L376 382.5L371.5 374L376 371.5L381.5 365.5L382.5 357.5L381.5 348.5L377 341.5L369 337.5H360.5L352.5 341.5L348 348.5L347 357.5L349 365.5L354 372L362 375.5Z"
            fill="#444444"
            stroke="#444444"
          />
          <path
            ref={pinonesRef}
            id="pinones"
            d="M188.5 369.5L199.5 360.5L201.5 357L204 343.5L203 337L196.5 328.5L187 325L179 326.5L171.5 329.5L165 338L162.5 350L167 362.5L175 369.5H188.5Z"
            fill="#444444"
            stroke="#444444"
          />
          <path
            ref={volanteRef}
            id="volante"
            d="M564.5 76.5L570 88L554.5 92L549.5 81L547 79L543 69.5L547 68V64L560 60L562 56.5V50H560H556L552 48L543 45L539.5 43.5L538 36.5L539.5 32.5L545 30.5H552H557.5C559.167 31 562.9 32.1 564.5 32.5C566.1 32.9 567.167 35.3333 567.5 36.5L570 42C571 42.5 573.3 43.5 574.5 43.5C575.7 43.5 584.667 53.1667 589 58L586 65.5H581V69.5L564.5 76.5Z"
            fill="#444444"
            stroke="#444444"
          />
          <path
            ref={frenoTraseroRef}
            id="frenoTrasero"
            d="M174.5 323.5L169 321.5L161 313.5L164.5 311L172 308.5L176.5 307L185.5 291.5L190 288L198.5 283L204.5 280L217 277.5L254 279.5L315.5 260L514 149.5L550 123.5L578 96.5L594.5 84L599.5 77.5V70.5L595.5 68H593L587 65L589 58.5L583.5 50.5L589 56L599.5 64L603 72V80L583.5 96.5L550 126L515.5 151L316 261.5L254 282L217 280.5L205.5 282L198.5 284.5L191.5 289.5L190 291.5V295L192.5 298L191.5 302.5L188 307L201 310L212 319L220.5 332.5L222.5 353L218.5 365L210 376L196 384H177L163 376L153 363L150 348.5L153 332.5L164.5 319L161 314.5L169 322L163 329L158.5 341L160 360L171 371L185.5 376L201 374L210 365L215 353L212 336.5L205.5 325.5L196 317.5L188 316L181.5 317.5L174.5 323.5Z"
            fill="#444444"
            stroke="#444444"
          />
          <path
            ref={cambioDelanteroRef}
            id="cambioDelantero"
            d="M365.5 313.5H362.5V321L358 322.5L348 325.5L351 330.5L355.5 328.5L364 325.5H370L365.5 313.5Z"
            fill="#444444"
            stroke="#444444"
          />
          <path
            ref={suspencionRef}
            id="suspencion"
            d="M694 350L690 360.5L684 364.5H673L661.5 360.5L653.5 350.5L593 186L590.5 181.5L585 170.5L582 162H577.5L572.5 155.5L594.5 143.5L598.5 145.5V152.5C599.667 153.833 602.2 156.8 603 158C604 159.5 605.5 166 605.5 167.5C605.5 168.7 606.5 175.667 607 179L617.5 204.5H620V189H623L629.5 191.5L632 200V212.5V223.5L629.5 240L655.5 304.5L665.5 331L677 340H687L694 350Z"
            fill="#444444"
            stroke="#444444"
          />
          <path
            ref={frenoDelanteroRef}
            id="frenoDelantero"
            d="M671 385H687.5L699.5 376L709 364L714 352.5L712 334.5L704.5 320.5L690.5 313L676 309.5L663 311L647.5 321L639.5 334.5L648.5 342.5V345L643.5 339.5L638 334L633 329L627.5 330L621 321L623.5 303L629.5 282V228V209.5L621 186L607 176L580 133.5L562 98L556.5 64L555.5 54.5556L558 45.5L568.5 42.5L582.5 48L590.5 53.5L594.5 60H598L596 55.5L582.5 45.5L564.5 39.5L555.5 42.5L553.5 51.5V65L559.5 99.5L578.5 135L607 178L621 188.5L627.5 209.5V228V282L621 302.5L619.5 320.5L625 330L626.5 334C628 336.167 631.4 340.7 633 341.5C635 342.5 638 348.5 638 349C638 349.4 637.333 352.167 637 353.5L635.5 358L639 361.5L645.5 357L650.5 352.5V346L652 337L658.5 327L665.5 321L674.5 319L687.5 321L697.5 325.5L704.5 336L707 348L704.5 359L699.5 366.5L692.5 373L685.5 376H673L661.5 373L654.5 362L650.5 354L648.5 355.5L645.5 359V364L656 378L671 385Z"
            fill="#444444"
            stroke="#444444"
          />
          <path
            ref={llantaDelanteraRef}
            id="llantaDelantera"
            d="M600 446.5L620.5 460L605.5 488L576 470L554.5 446.5L538.5 422L524.5 388L520.5 362.5V338.5L524.5 315.5L533.5 293L542.5 268.5L559.5 245L576 227L597 213.5L627.5 201L650.5 193H690.5L729.5 201L764.5 216.5L796.5 245L822 280.5L833.5 315.5L838 355.5L833.5 388L822 417.5L804.5 446.5L781 470L752 486.5L723 501L695 506H666.5L635.5 501L606 488.5L621 460.5L641.5 470L666.5 474H690.5L715 470L737 460L755 446.5L776 429L788 409.5L800 388L804.5 362.5V338.5L800 315.5L788 293L776 273L755 253L737 240L715 232.5L690.5 227H666.5L641.5 232.5L619.5 240L600 253L582 273L569 293L559.5 315.5L554.5 338.5V362.5L559.5 388L569 409.5L583 429L600 446.5Z"
            fill="#444444"
            stroke="#444444"
          />
          <path
            ref={llantaTraseraRef}
            id="llantaTrasera"
            d="M103.5 443.5L124 457L109 485L79.5 467L58 443.5L42 419L28 385L24 359.5V335.5L28 312.5L37 290L46 265.5L63 242L79.5 224L100.5 210.5L131 198L154 190H194L233 198L268 213.5L300 242L325.5 277.5L337 312.5L341.5 352.5L337 385L325.5 414.5L308 443.5L284.5 467L255.5 483.5L226.5 498L198.5 503H170L139 498L109.5 485.5L124.5 457.5L145 467L170 471H194L218.5 467L240.5 457L258.5 443.5L279.5 426L291.5 406.5L303.5 385L308 359.5V335.5L303.5 312.5L291.5 290L279.5 270L258.5 250L240.5 237L218.5 229.5L194 224H170L145 229.5L123 237L103.5 250L85.5 270L72.5 290L63 312.5L58 335.5V359.5L63 385L72.5 406.5L86.5 426L103.5 443.5Z"
            fill="#444444"
            stroke="#444444"
          />
          <path
            ref={valvulaRef}
            id="valvula"
            d="M581 288.5L575 286L574 285.5L576.5 282L577 282.5L582.5 286L581 288.5Z"
            fill="#444444"
            stroke="#444444"
          />
          <path
            ref={valvulaDosRef}
            id="valvulaDos"
            d="M82.5 280.5L80 278.5L81.5 276.5L84.5 278.5L82.5 280.5Z"
            fill="#444444"
            stroke="#444444"
          />
          <path
            ref={rayosDelanterosRef}
            id="rayosDelanteros"
            d="M642.5 470.5L666 363.5H687L694 352L687 337.5L674 333.5L662.5 341L661.5 352L664 360L666.5 473.5L637.5 468L619 458.5L684 367V365L668 364L560.5 385L555 363.5H662.5L660.5 353.5L583 428L600 445L679.5 367L599.5 445.5L618 458L638.5 469.5L668 473.5H691L689 363.5H803M803 363.5V337.5L691.5 342.5V228H666L668 333.5L600 253.5L583 272L657.856 341L555 337.5V365.5L560 387L570 408.5L660.5 349.5L642.5 233L623.5 238.5L597.5 255.5L582 273L569 292.5L657.856 346.5L661 342L560 315.5L569 291L559 317L554 339L660.5 344.5L673 332.5L738.5 241.5L715 233L689.5 226.5L664.5 228L640.5 233L692.5 226L717.5 233L692.5 340L683 334L757 256.5L737 240L758.5 256.5L774.5 272L694 349.5L676 336L799.5 314.5L787 292L773 269L788.5 292L694 355L714.5 470L689 474.5L716.5 470L737.5 459.5L676 367L756.5 444.5L736.5 461L759 443.5L774.5 429L696 355L694 344.5L787 408.5L773.5 431.5L789.5 408.5L799.5 387.5L691 367L800 388L803 363.5Z"
            stroke="#444444"
          />
          <path
            ref={rayosTraserosRef}
            id="rayosTraseros"
            d="M146.5 467.5L170 360.5H191L198 349L191 334.5L178 330.5L166.5 338L165.5 349L168 357L170.5 470.5L141.5 465L123 455.5L188 364V362L172 361L64.5 382L59 360.5H166.5L164.5 350.5L87 425L104 442L183.5 364L103.5 442.5L122 455L142.5 466.5L172 470.5H195L193 360.5H307M307 360.5V334.5L195.5 339.5V225H170L172 330.5L104 250.5L87 269L161.856 338L59 334.5V362.5L64 384L74 405.5L164.5 346.5L146.5 230L127.5 235.5L101.5 252.5L86 270L73 289.5L161.856 343.5L165 339L64 312.5L73 288L63 314L58 336L164.5 341.5L177 329.5L242.5 238.5L219 230L193.5 223.5L168.5 225L144.5 230L196.5 223L221.5 230L196.5 337L187 331L261 253.5L241 237L262.5 253.5L278.5 269L198 346.5L180 333L303.5 311.5L291 289L277 266L292.5 289L198 352L218.5 467L193 471.5L220.5 467L241.5 456.5L180 364L260.5 441.5L240.5 458L263 440.5L278.5 426L200 352L198 341.5L291 405.5L277.5 428.5L293.5 405.5L303.5 384.5L195 364L304 385L307 360.5Z"
            stroke="#444444"
          />
          <path
            ref={cuadroRef}
            id="cuadro"
            d="M534 143L545.5 133L544 129.5L581.5 111L594.5 143L572 156L571 150.5H565.5L552.5 159L538 173.5L386.5 342L370 355L339 363L195 359.5L191.5 363L184.5 367L175 365.5L168.5 359.5L165 350.5L166.5 342L171.5 333.5L181.5 329.5L195 321L305 247.5L317.5 237L312 223H310L307.5 216L330.5 209L331.5 214.5L325.5 216L330.5 228.5H335.5L538 110.5V104.5L552.5 100.5V93.5L572 88L581 110.5L542 130L339 244.5L366.5 325.5L370.5 327.5L356.5 341L354 341.5L321.5 251.5L221 315.5L199 333.5L202 342H332H357L370 329.5L478 205.5L534 143Z"
            fill="#444444"
            stroke="black"
          />
          <path
            ref={pedalRef}
            id="pedal"
            d="M423 370H462L467 351.5H452L447 348H372.5H363L355.5 351.5V357.5L358 363L363 366H377.5H420L423 370Z"
            fill="#444444"
            stroke="#444444"
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
        <div ref={CPiRef} className="-display none">
          <h1>piñones</h1>
          <ModalPinones />
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
        <div ref={CSuRef} className="-display none">
          <h1>suspención</h1>
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
        <div ref={CVaRef} className="-display none">
          <h1>valvula delantera</h1>
          <ModalValD />
        </div>
        <div ref={CVaDRef} className="-display none">
          <h1>valvula trasera</h1>
          <ModalValT />
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
