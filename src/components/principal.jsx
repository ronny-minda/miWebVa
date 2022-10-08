import react from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const Section = styled.section`
  position: relative;
  /* width: 100; */
  height: calc(100vh - 50px);
  display: flex;

  .titulo {
    /* background-color: #0059ff; */
    /* background-color: #ff00007a; */

    /* height: calc(100vh - 50px); */
    height: 100%;
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
      margin-bottom: 10px;
      font-size: 50px;
      font-weight: bold;
      @media (max-width: 910px) {
        & {
          font-size: 30px;
        }
      }
      @media (max-width: 770px) {
        & {
          font-size: 25px;
        }
      }
    }
    h2 {
      font-size: 40px;
      -webkit-text-stroke: 1px black;
      color: #fff0;
      @media (max-width: 910px) {
        & {
          font-size: 25px;
        }
      }
      @media (max-width: 770px) {
        & {
          font-size: 20px;
        }
      }
    }
  }
  .imgPincipal {
    /* height: calc(100vh - 50px); */
    clip-path: polygon(0 0, 100% 0%, 100% 65%, 60% 100%, 0 100%);
    height: 100%;
    width: 50%;
    /* background-color: red; */
    background-image: url("/fondo1.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    .filtro {
      height: 100%;
      width: 100%;
      background-color: #ff000088;
    }
  }

  @media (max-width: 950px) {
    .titulo {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 80;
      width: 100%;
      h1 {
        color: #fff;
      }
      h2 {
        -webkit-text-stroke: 1px #fff;
      }
    }
    .imgPincipal {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 79;
      width: 100%;
    }
  }
`;

// h-min	height: min-content;
// h-max	height: max-content;
// h-fit	height: fit-content;

const Principal = () => {
  return (
    <motion.div
      className="divCont"
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        delay: 0.5,
        duration: 2,
        type: "spring",
        //   stiffness: 150,
      }}
    >
      <Section>
        <div className="titulo">
          <h1>RONNY MINDA V.</h1>
          <h2>DESARROLLO DE SOFTWARE</h2>
        </div>
        <div className="imgPincipal">
          <div className="filtro"></div>
        </div>
      </Section>
    </motion.div>
  );
};

export default Principal;
