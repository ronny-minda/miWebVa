import react, { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

import BlogInicio from "../components/blogInicio";
import Layout from "../components/layout";
import ProtafoBackendlioList from "../components/ProtafoBackendlioList";
import ProtafolioList from "../components/ProtafoFrontlioList";

const Section = styled.section`
  margin: auto;
  width: max-content;
  padding-top: 30px;

  position: relative;
  top: 0;
  left: 0;
  z-index: 50;

  span {
    font-size: 25px;
    cursor: pointer;
    margin: 0 15px;
  }

  .under {
    transition: 0.2s;
    height: 3px;
    width: 50%;
    position: relative;
    left: 120px;
    background-color: red;
  }
  /* background-color: ; */
`;

const Portafolio = () => {
  const [estado, setEstado] = useState(false);

  const head = {
    titulo: "Portafolio Ronny Minda V.",
    description: "Portafolio del sobre mis conocimientos",
    link: "https://www.ronnyminda.ga/portafolio",
  };

  return (
    <>
      <Layout head={head}>
        <BlogInicio titulo={"PORTAFOLIO"} />
        <Section>
          <span onClick={() => setEstado(false)}>FRONTEND</span>
          <span onClick={() => setEstado(true)}>BACKEND</span>

          <div
            style={{ left: estado === true ? "130px" : "0px" }}
            className="under"
          ></div>
        </Section>

        <AnimatePresence>
          {estado === false ? <ProtafolioList /> : <ProtafoBackendlioList />}
        </AnimatePresence>
      </Layout>
    </>
  );
};

export default Portafolio;
