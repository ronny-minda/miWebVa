import React from "react";
import styled from "styled-components";
import Layout from "../components/layout";

const Main = styled.main`
  /* background-color: red; */
  height: calc(100vh - 230px);
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  img {
    max-width: 250px;
    /* height: ; */
  }
  h2 {
    font-size: 40px;
  }
`;

const NotFound = () => {
  const head = {
    titulo: "Ronny Minda V.",
    description:
      "¡Hola! Mis conocimientos en en pedidos api rest de lado frontend y desarrollo de api rest de lado backend con node y sus respectivas validaciones administracion de roles.",
  };

  return (
    <Layout head={head}>
      <Main>
        <img src="/error-404.png" alt="error-404" />
        <h2>página no encontrada</h2>
      </Main>
    </Layout>
  );
};

export default NotFound;
