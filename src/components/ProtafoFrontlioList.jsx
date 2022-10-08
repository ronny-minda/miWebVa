import React from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

import { useDatos } from "../context/Context";
import ContactoLeft from "../components/contactoLeft";

const Section = styled.section`
  margin: auto;
  max-width: 1100px;

  /* display: flex; */

  /* background-color: red; */

  position: relative;
  top: 0;
  left: 0;
  z-index: 50;

  h1 {
    /* text-align: end; */
  }

  li {
    clip-path: polygon(100% 0, 100% 100%, 40% 100%, 10% 80%, 0 80%, 0 0);
    margin: 40px auto;
    width: 90%;
    height: 400px;
    /* background-color: blue; */
    list-style: none;
    position: relative;

    @media (max-width: 800px) {
      width: 80%;
    }
    @media (max-width: 400px) {
      width: 75%;
    }

    img {
      object-fit: cover;
      height: 100%;
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      filter: brightness(50%);
      transition: 0.2s;
    }

    .contePorFiltro {
      transition: 0.2s;
      height: 100%;
      width: 100%;
      background-color: #ff0000bb;
      position: absolute;
      top: 0;
      left: 0;
      clip-path: polygon(0 0, 50% 0, 0% 100%, 0 100%);
    }

    .contePor {
      height: auto;
      max-width: 50%;
      /* background-color: #00c8ff5d; */
      position: absolute;
      bottom: 50px;
      right: 50px;
      transform: scale(1);
      transition: 0.2s;

      h2 {
        color: #fff;
        font-size: 40px;
      }

      p {
        color: #fff;
      }

      a {
        margin: 0 50px 0 0;
        color: #ffffff;
        text-decoration: none;
      }
    }

    @media (max-width: 400px) {
      .contePor {
      }
    }
  }

  li:hover {
    img {
      filter: brightness(100%);
    }

    .contePorFiltro {
      transition: 0.2s;
      height: 100%;
      width: 100%;
      background-color: #252525ee;
      position: absolute;
      top: 0;
      left: 0;
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    }

    .contePor {
      height: auto;
      max-width: 50%;
      /* background-color: #00c8ff5d; */
      position: absolute;
      bottom: 50px;
      right: 50px;
      transform: scale(1.2);

      h2 {
        color: #fff;
        font-size: 40px;
      }

      p {
        color: #fff;
      }

      a {
        color: #00ff26;
        text-decoration: underline;
      }
    }

    @media (max-width: 400px) {
      .contePor {
      }
    }
  }
`;

const ProtafoFrontlioList = () => {
  const { frontend } = useDatos();

  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -200 }}
      transition={{ duration: 0.5 }}
    >
      <Section>
        <ContactoLeft />
        {frontend.map((dato) => (
          <motion.div
            key={dato.id}
            className="divCont"
            initial={{ opacity: 0, y: 150 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.2,
              duration: 1,
              type: "spring",
              //   stiffness: 150,
            }}
          >
            <li>
              <img src={dato.img} alt={dato.titulo} />

              <div className="contePorFiltro"></div>

              <div className="contePor">
                <h2>{dato.titulo}</h2>
                <p>{dato.descripcion}</p>
                <a
                  href={dato.disponible}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Disponible en 🡪
                </a>

                <Link href={dato.detalles}>
                  <a>Detalles 🡪</a>
                </Link>
              </div>
            </li>
          </motion.div>
        ))}

        {/* <li>
          <img src="/datos/3D y CSS.png" alt="3D y CSS.png" />

          <div className="contePorFiltro"></div>

          <div className="contePor">
            <h2>titulo</h2>
            <p>Lorem ipsum dolor sit amet consectetur......</p>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              Disponible en 🡪
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              Detalles 🡪
            </a>
          </div>
        </li>

        <li>
          <img src="/datos/3D y CSS.png" alt="3D y CSS.png" />

          <div className="contePorFiltro"></div>

          <div className="contePor">
            <h2>titulo</h2>
            <p>Lorem ipsum dolor sit amet consectetur......</p>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              Disponible en 🡪
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              Detalles 🡪
            </a>
          </div>
        </li>

        <li>
          <img src="/datos/3D y CSS.png" alt="3D y CSS.png" />

          <div className="contePorFiltro"></div>

          <div className="contePor">
            <h2>titulo</h2>
            <p>Lorem ipsum dolor sit amet consectetur......</p>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              Disponible en 🡪
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              Detalles 🡪
            </a>
          </div>
        </li>

        <li>
          <img src="/datos/3D y CSS.png" alt="3D y CSS.png" />

          <div className="contePorFiltro"></div>

          <div className="contePor">
            <h2>titulo</h2>
            <p>Lorem ipsum dolor sit amet consectetur......</p>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              Disponible en 🡪
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              Detalles 🡪
            </a>
          </div>
        </li>

        <li>
          <img src="/datos/3D y CSS.png" alt="3D y CSS.png" />

          <div className="contePorFiltro"></div>

          <div className="contePor">
            <h2>titulo</h2>
            <p>Lorem ipsum dolor sit amet consectetur......</p>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              Disponible en 🡪
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              Detalles 🡪
            </a>
          </div>
        </li>

        <li>
          <img src="/datos/3D y CSS.png" alt="3D y CSS.png" />

          <div className="contePorFiltro"></div>

          <div className="contePor">
            <h2>titulo</h2>
            <p>Lorem ipsum dolor sit amet consectetur......</p>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              Disponible en 🡪
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              Detalles 🡪
            </a>
          </div>
        </li>

        <li>
          <img src="/datos/3D y CSS.png" alt="3D y CSS.png" />

          <div className="contePorFiltro"></div>

          <div className="contePor">
            <h2>titulo</h2>
            <p>Lorem ipsum dolor sit amet consectetur......</p>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              Disponible en 🡪
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              Detalles 🡪
            </a>
          </div>
        </li> */}
      </Section>
    </motion.div>
  );
};

export default ProtafoFrontlioList;
