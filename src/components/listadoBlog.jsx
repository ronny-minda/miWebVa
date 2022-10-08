import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useDatos } from "../context/Context";

import Flecha from "../svg/flecha";
import ContactoLeft from "../components/contactoLeft";

const Listado = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  /* background-color: red; */
  max-width: 800px;
  margin: auto;

  .lista {
    position: absolute;
    z-index: 49;
    padding-top: 40px;
    /* background-color: red; */

    @media (max-width: 600px) {
      & {
        max-width: 268px;
      }
    }
    /* height: 500px; */
    height: auto;
    /* margin: auto; */

    position: relative;
    top: 0;
    left: 0;
    z-index: 50;

    .iz {
      flex-direction: row-reverse;
    }
    .dere {
      flex-direction: row;
    }

    .card {
      /* padding: 20px; */
      height: 200px;
      width: calc(100% - 50px);
      background-color: #ffffff76;
      display: flex;
      margin: 40px 0;
      /* flex-direction: row-reverse; */

      @media (max-width: 600px) {
        & {
          flex-direction: column;
          height: auto;
          /* justify-content: center; */
          align-items: center;
          width: auto;
        }
      }

      img {
        padding: 10px;
        height: 100%;
        width: 50%;
        object-fit: cover;
        @media (max-width: 600px) {
          & {
            height: 150px;
            width: 100%;
          }
        }
      }
      .conteni {
        height: 100%;
        width: 50%;
        /* background-color: #00000028; */
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding: 0 15px;
        @media (max-width: 600px) {
          & {
            width: 100%;
          }
        }

        .fecha {
          color: #c93939;
        }
        .titulo {
        }
        a {
          font-weight: bold;
          margin-top: 20px;
          margin-left: 10px;
          text-decoration: none;
          position: sticky;
          top: 0;
          right: 0;
          display: flex;
          align-items: center;
          color: #000;
          transition: 0.2s;

          svg {
            transform: translate(0px, 0px);
            transition: 0.2s;
            path {
              stroke: #000;
            }
          }

          &:hover {
            color: #c93939;
            text-decoration: underline;
            svg {
              transform: translate(20px, 0px);
              path {
                stroke: #c93939;
              }
            }
          }
        }
      }
    }
  }
`;

const ListadoBlog = () => {
  const { datos } = useDatos();

  return (
    <Listado>
      <ContactoLeft />
      <div className="lista">
        {datos.map((dato) => (
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
            <div
              className={dato.id % 2 == 0 ? "card" : "card iz"}
              // key={dato.id}
            >
              <img src={dato.img} alt={dato.titulo} />
              <div className="conteni">
                <div className="fecha">{dato.fecha}</div>
                <div className="titulo">{dato.titulo}</div>
                <Link href={`/blog/${dato.titulo}`}>
                  <a>
                    Ver articulo <Flecha />
                  </a>
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Listado>
  );
};

export default ListadoBlog;
