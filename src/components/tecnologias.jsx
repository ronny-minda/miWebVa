import Image from "next/image";
import react, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import Javascript from "../svg/javascript";
import LiteReact from "../svg/react";
import Sass from "../svg/sass";
import Node from "../svg/node";
import Git from "../svg/git";
import GitHub from "../svg/gitHub";

import Html from "../svg/html";
import Css from "../svg/css";
import Next from "../svg/next";

const Section = styled.section`
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  /* height: 150px; */
  width: 100%;
  background-color: #25252500;
  position: relative;

  .fondoLetra {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 30;
    width: 100%;
    height: 100%;

    p {
      position: absolute;
      height: 230px;
      top: -45px;
      left: 10px;
      display: block;
      color: #ff000000;
      /* -webkit-text-stroke: 1px #ffffff1b; */
      -webkit-text-stroke: 1px #0000008c;
      font-size: 180px;
      overflow: hidden;
    }
    div {
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: 40%;
      /* background-color: red; */
      background-image: url("/fondoLogo.svg");
      background-position: left;
      background-repeat: no-repeat;
      background-size: cover;
      /* transform: scaleX(-1); */
    }
  }
  .contenido {
    position: relative;
    z-index: 40;
    min-height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */

    .h2conte {
      height: 250px;
      position: relative;
      top: 0;
      left: 0;

      h2 {
        position: sticky;
        top: 0;
        left: 0;
        font-size: 50px;
        padding: 20px 0 0px 30px;
        color: #000;
        width: 100%;
        /* height: 1000px; */
      }
    }

    .conte {
      /* height: 100px;
      width: 100%;
      background-color: red; */

      background-color: #25252500;
      width: 100%;
      height: auto;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      /* margin: 20px ; */
      margin-bottom: 80px;
      padding: 10px 0;

      .conteIconos {
        background-color: #ffffff76;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 10px;
      }

      h4 {
        color: #000000;
        margin: 10px 5px;
        font-size: 20px;
      }

      svg {
        margin: 0 8px;
        height: 100px;
        width: 100px;
        fill: #000000;
      }
    }
  }
`;

const Tecnologias = () => {
  const [scroll, setScroll] = useState(-100);

  useEffect(() => {
    addEventListener("scroll", (e) => {
      let winScroll = window.top.scrollY;

      // console.log({ winScroll });

      let valor = winScroll * 0.3;

      let total = valor - 100;

      // console.log(total);

      setScroll(total);
    });
  }, []);

  return (
    <>
      <motion.div
        className="divCont"
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          delay: 0.3,
          duration: 2,
          type: "spring",
          //   stiffness: 150,
        }}
      >
        <Section>
          <div className="contenido">
            <div className="h2conte">
              <h2>TECNOLOGIAS QUE USO</h2>
            </div>

            <div className="conte">
              <div className="conteIconos">
                <Html />
                <h4>Html</h4>
              </div>
              <div className="conteIconos">
                <Css />
                <h4>Css</h4>
              </div>
              <div className="conteIconos">
                <Javascript />
                <h4>Javascript</h4>
              </div>
              <div className="conteIconos">
                <LiteReact />
                <h4>React</h4>
              </div>
              <div className="conteIconos">
                <Sass />
                <h4>Sass</h4>
              </div>
              <div className="conteIconos">
                <Node />
                <h4>Node</h4>
              </div>
              <div className="conteIconos">
                <Next />
                <h4>Next</h4>
              </div>
              <div className="conteIconos">
                <Git />
                <h4>Git</h4>
              </div>
              <div className="conteIconos">
                <GitHub />
                <h4>GitHub</h4>
              </div>
            </div>
          </div>
          <div className="fondoLetra">
            <p>TECNOLOGIAS QUE USO</p>
            <div style={{ top: `-${scroll}px` }}></div>
          </div>
        </Section>
      </motion.div>
    </>
  );
};

export default Tecnologias;
