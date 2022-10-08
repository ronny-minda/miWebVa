import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import Linkedin from "../svg/linkedin";
import Twitter from "../svg/twitter";
import GitHub from "../svg/gitHub";
import Correo from "../svg/correo";
import Telefono from "../svg/telefono";

const Aside = styled.aside`
  background-color: #ffffffc1;
  /* height: 250px; */
  height: 0;
  width: 50px;
  position: sticky;
  top: 0;
  left: 0;

  /* padding-right: 40px; */
  /* margin-right: ; */
  /* border-right: 1px solid red; */

  /* position: relative; */
  z-index: 50;

  /* background-color: red; */
  /* position: fixed; */
  /* margin-left: 10px; */
  /* height: 100%; */
  /* width: 80px; */
  /* bottom: calc(50% - 175px); */
  /* left: 2%; */
  /* top: 0; */
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;

  /* .rayaA {
    height: 100vmax;
    width: 1px;
    background-color: #000;
  } */

  a {
    fill: #000;
    margin: 10px 0px;
    transition: 0.2s transform;
    width: 60px;
    height: 60px;

    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      height: 30px;
      width: 30px;
      fill: "#000";
      transition: 0.5s fill;

      path {
        border-radius: 0;
      }
    }
  }
`;

const ContactoLeft = () => {
  return (
    <Aside>
      <div className="rayaA"></div>
      <motion.a
        whileHover={{ rotate: 0, scale: 1.6, fill: "#C93939" }}
        whileTap={{ rotate: 0, scale: 1, fill: "#000" }}
        transition={{ duration: 0.1, ease: "easeInOut" }}
        title="Linkedin"
        href="https://www.linkedin.com/in/ronny-minda-a44261214/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Linkedin />
      </motion.a>

      <motion.a
        whileHover={{ rotate: 0, scale: 1.6, fill: "#C93939" }}
        whileTap={{ rotate: 0, scale: 1, fill: "#000" }}
        transition={{ duration: 0.1, ease: "easeInOut" }}
        title="Correo"
        href="mailto:ronny.michael.minda.vera@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Correo />
      </motion.a>

      <motion.a
        whileHover={{ rotate: 0, scale: 1.6, fill: "#C93939" }}
        whileTap={{ rotate: 0, scale: 1, fill: "#000" }}
        transition={{ duration: 0.1, ease: "easeInOut" }}
        title="GitHub"
        href="https://github.com/ronny-minda"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GitHub />
      </motion.a>

      <motion.a
        whileHover={{ rotate: 0, scale: 1.6, fill: "#C93939" }}
        whileTap={{ rotate: 0, scale: 1, fill: "#000" }}
        transition={{ duration: 0.1, ease: "easeInOut" }}
        title="Twitter"
        href="https://twitter.com/MichaelMinda7"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Twitter />
      </motion.a>
      <motion.a
        whileHover={{ rotate: 0, scale: 1.6, fill: "#C93939" }}
        whileTap={{ rotate: 0, scale: 1, fill: "#000" }}
        transition={{ duration: 0.1, ease: "easeInOut" }}
        title="Telefono"
        href="tel:0993105654"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Telefono />
      </motion.a>

      {/* <div className="twitter">twitter</div>
        <div className="gitHub">gitHub</div>
        <div className="telefono">telefono</div> */}
      <div className="rayaA"></div>
    </Aside>
  );
};

export default ContactoLeft;
