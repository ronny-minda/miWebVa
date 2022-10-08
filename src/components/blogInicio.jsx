import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Principal = styled.div`
  clip-path: polygon(0 0, 100% 0, 100% 50%, 60% 50%, 60% 100%, 0 100%);
  /* background-color: #252525; */

  height: 400px;
  width: 100%;

  background-image: url("/electronic.gif");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  position: relative;
  top: 0;
  left: 0;
  z-index: 50;

  h1 {
    color: #ffffff;
    font-size: 50px;
    margin-left: 26%;
    padding-top: 50px;
  }
`;

const BlogInicio = ({ titulo }) => {
  return (
    <motion.div
      id="particles-js"
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
      <Principal>
        <h1>{titulo}</h1>
      </Principal>
    </motion.div>
  );
};

export default BlogInicio;
