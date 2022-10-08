import react from "react";
import styled from "styled-components";
import LogoPerfil from "../svg/logoPerfil";

const Ffooter = styled.footer`
  width: 100%;
  height: 180px;
  background-color: #252525;
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
  top: 0;
  left: 0;
  z-index: 50;
  display: flex;
  /* flex-direction: column; */
  justify-content: center;

  svg {
    height: 130px;
    width: 130px;
    margin-right: 30px;

    path {
      fill: #fff;
      transition: 0.3s;
    }

    path:hover {
      fill: red;
    }
  }

  h4 {
    color: #fff;
  }
`;

const Footer = () => {
  return (
    <Ffooter>
      <LogoPerfil />
      <h4>Sitio Creado por Ronny Minda V.</h4>
    </Ffooter>
  );
};

export default Footer;
