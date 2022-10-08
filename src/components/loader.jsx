import React, { useState, useEffect } from "react";
import styled from "styled-components";
import LogoPerfil from "../svg/logoPerfil";

const Carga1 = styled.div`
  transition: 1s cubic-bezier(0.755, 0.135, 0.65, 0.81);
  transition-delay: 0.5s;
  clip-path: polygon(
    50% 100%,
    50% 100%,
    50% 0,
    100% 0,
    100% 100%,
    0 100%,
    0 0,
    50% 0
  );
  background-color: #ffffff;
  position: fixed;
  z-index: 999999;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;

  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    path {
      fill: #ff0000;
    }
  }
`;

const Carga2 = styled.div`
  transition: 1s cubic-bezier(0.755, 0.135, 0.65, 0.81);

  clip-path: polygon(
    50% 100%,
    50% 100%,
    50% 0,
    100% 0,
    100% 100%,
    0 100%,
    0 0,
    50% 0
  );
  background-color: #252525;
  position: fixed;
  z-index: 999999;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;

  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    path {
      fill: #ffffff;
    }
  }
`;

const Loader = ({ time }) => {
  const [stado, setStado] = useState({
    valor1: "",
    valor2: "",
  });

  const [visi, setVisi] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setStado({
        valor1: "horizontal",
        valor2: "vertical",
      });
    }, 2500);

    // setTimeout(() => {
    //   setVisi(false);
    // }, 3500);
  });

  //   else {
  //     setTimeout(() => {
  //       setStado("vertical");
  //     }, 2000);
  //   }

  return (
    <>
      <Carga1 className={stado.valor1}>
        <LogoPerfil />
      </Carga1>

      <Carga2 className={stado.valor2}>
        <LogoPerfil />
      </Carga2>
    </>
  );
};

export default Loader;
