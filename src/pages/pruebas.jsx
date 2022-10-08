import Link from "next/link";
import React from "react";
import styled from "styled-components";
import Flecha from "../svg/flecha";

import ContactoLeft from "../components/contactoLeft";

const Listado = styled.div`
  position: relative;
  top: 0;
  left: 0;
  z-index: 50;

  display: flex;
  align-items: flex-start;
  justify-content: center;
  /* background-color: red; */
  max-width: 800px;
  margin: auto;
  padding-top: 40px;

  .lista {
    max-width: 800px;
    h1 {
      font-size: 40px;
      margin: 50px 0;
    }
    h2 {
      margin: 50px 0;
    }
    p {
      margin: 50px 0;
    }
    pre {
      white-space: pre-wrap;
      background-color: #000;
      color: #ffe100;
    }
  }
`;

const ContenidoBlog = ({ blog }) => {
  return (
    <Listado>
      <ContactoLeft />
      <div className="lista">
        <div>
          {/* <h2></h2>
          <p></p>

          <pre>
            {`
    <iframe
    src="http://www.html5rocks.com/"
    style="-webkit-transform: rotate3d(0, 1, 1, 30deg)"></iframe>
          `}
          </pre> */}
          <p></p>
        </div>
      </div>
    </Listado>
  );
};

export default ContenidoBlog;
