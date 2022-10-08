import react from "react";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";

import GitHub from "../svg/gitHub";
import { useDatos } from "../context/Context";
import ContactoLeft from "../components/contactoLeft";
import Link from "next/link";

const Section = styled.section`
  margin: auto;
  max-width: 1200px;
  position: relative;
  top: 0;
  left: 0;
  z-index: 50;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 50px 0;

  li {
    list-style: none;
    width: 250px;
    height: 220px;
    background-color: #adadad;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 20px 0;
    margin: 10px;

    .conte1 {
      h3 {
      }
      .tec {
        font-weight: bold;
      }
      div {
        display: flex;
        flex-direction: column;

        .lis {
          font-size: 15px;
        }
      }
      a {
        text-decoration: none;
        color: #fff;
        transition: 0.3s;
      }
      a:hover {
        text-decoration: underline;
      }
    }
    .conte2 {
      /* background-color: blue; */
      svg {
        height: 40px;
        width: 40px;
        fill: #000000;
        transition: 0.3s;
      }
    }
  }

  li:hover {
    .conte1 {
      h3 {
      }
      .tec {
        font-weight: bold;
      }
      div {
        display: flex;
        flex-direction: column;

        .lis {
        }
      }
      a {
        text-decoration: none;
        color: #ff0000;
      }
    }
    .conte2 {
      /* background-color: blue; */
      svg {
        height: 40px;
        width: 40px;
        fill: #ff0000;
      }
    }
  }
`;

const ProtafoBackendlioList = () => {
  const { backend } = useDatos();

  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: 200 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -200 }}
        transition={{ duration: 0.5 }}
      >
        <Section>
          <ContactoLeft />
          {backend.map((dato) => (
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
                <div className="conte1">
                  <h3>{dato.titulo}</h3>
                  <span className="tec">Tecnologias</span>
                  <div>
                    {dato.tecnologias.map((list) => {
                      return <span className="lis">- {list}</span>;
                    })}

                    {/* {console.log(dato.tecnologias)} */}
                  </div>

                  <a
                    href={dato.gitHub}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ver proyecto 🡪
                  </a>
                </div>
                <div className="conte2">
                  <GitHub />
                </div>
              </li>
            </motion.div>
          ))}
        </Section>
      </motion.div>
    </>
  );
};

export default ProtafoBackendlioList;
