import Image from "next/image";
import Link from "next/link";
import react, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import Flecha from "../svg/flecha";
import { useDatos } from "../context/Context";

// 2450
// 2528 - 2000 = 528

const Section = styled.section`
  /* height: 150px; */
  width: 100%;
  background-color: #252525;
  position: relative;
  margin-bottom: 30px;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);

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
      -webkit-text-stroke: 1px #ffffff1b;
      font-size: 180px;
      overflow: hidden;
    }
    div {
      position: absolute;
      right: 0;
      top: 0;
      height: 100%;
      width: 40%;
      /* background-color: red; */
      background-image: url("/fondoLogo.svg");
      background-position: left;
      background-repeat: no-repeat;
      background-size: cover;
      transform: scaleX(-1);
    }
  }
  .contenido {
    /* margin-bottom: 2000px; */
    position: relative;
    z-index: 40;
    min-height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    /* align-items: center; */

    .h2conte {
      height: 200px;
      position: relative;
      top: 0;
      left: 0;
      display: flex;
      justify-content: space-between;

      @media (max-width: 500px) {
        flex-direction: column;
      }

      .y1 {
        /* background-color: red; */
        max-width: 50%;
        h2 {
          position: sticky;
          top: 0;
          left: 0;
          font-size: 50px;
          padding: 20px 0 0px 30px;
          color: #ffffff;
          /* width: 100%; */
          display: inline-block;
          /* width: ; */
          /* height: 1000px; */
        }
      }
      .y2 {
        /* background-color: red; */
        max-width: 50%;
        @media (max-width: 500px) {
          max-width: 100%;
        }
        a {
          margin-top: 20px;
          margin-left: 10px;
          text-decoration: none;
          position: sticky;
          top: 0;
          right: 0;
          display: flex;
          align-items: center;
          color: #fff;
          transition: 0.2s;

          svg {
            transform: translate(0px, 0px);
            transition: 0.2s;
            path {
              stroke: #ffffff;
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

    .conte {
      /* max-width: 1000px;
      margin: 0 50px 80px 50px;
      display: flex;
      justify-content: center;
      align-items: center; */

      a {
        text-decoration: none;
      }

      perspective: 700px;

      /* transition: 1s; */
      height: auto;
      max-width: 1000px;
      background-color: #ff000000;
      margin: auto;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;

      li {
        transform: rotateX(0deg);
        height: auto;
        width: 250px;
        background-color: #ffffff;
        list-style: none;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        padding: 10px;
        margin: 10px;

        img {
          /* height: 130px; */
          width: 100%;
          height: 150px;
          object-fit: cover;
        }

        .contenid {
          .flecha {
            color: #c93939;
            font-size: 15px;
            margin: 5px 0;
          }
          .titulo {
            font-weight: bold;
            color: #000;
            text-decoration: none;
          }
        }
      }
    }
  }
`;

const PreBlogIndex = () => {
  const { datos } = useDatos();
  const [scroll, setScroll] = useState(-100);

  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const [card1, setCard1] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    addEventListener("scroll", (e) => {
      let winScroll = window.top.scrollY;

      // console.log({ winScroll });

      let valor = winScroll * 0.3;

      let total = valor - 400;
      setScroll(total);

      // console.log(total);

      // const page = document.getElementById("card3d");
      // console.log(page);
      // let rect = page.getBoundingClientRect();
      // console.log(rect.x);
      // console.log("y: " + rect.y);
    });

    // try {
    //   const carddd = document.getElementById("card3d");

    //   const rect = carddd.getBoundingClientRect();
    //   const valorCard = {
    //     left: rect.left + window.scrollX,
    //     top: rect.top + window.scrollY,
    //   };

    //   // console.log(valorCard.left);
    //   // console.log(valorCard.top);

    //   setCard1({
    //     x: valorCard.left,
    //     y: valorCard.top,
    //   });
    // } catch (error) {
    //   console.log({ error });
    // }

    addEventListener("mousemove", (e) => {
      // const mause = document.querySelector(".mause")
      const y = e.pageY;
      const x = e.pageX;

      // console.log({ x });
      // console.log({ y });

      setPosition({
        x: x - 0,
        y: y - 0,
      });
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
              <div className="y1">
                <h2>BLOG</h2>
              </div>
              <div className="y2">
                <Link href="/blog">
                  <a>
                    Ir al blog principal <Flecha />
                  </a>
                </Link>
              </div>
            </div>

            <div className="conte">
              {datos.map((dato) => {
                // console.log(datos.length - 3);
                if (datos.length - 3 < dato.id) {
                  return (
                    <li key={dato.id}>
                      <Link href={`blog/${dato.titulo}`}>
                        <a>
                          <img src={dato.img} alt={dato.titulo} />

                          <div className="contenid">
                            <p className="flecha">{dato.fecha}</p>
                            <div className="titulo">{dato.titulo}</div>
                            {/* <a href={dato.titulo} className="titulo">
                          {dato.titulo}
                        </a> */}
                          </div>
                        </a>
                      </Link>
                    </li>
                  );
                } else {
                }
              })}

              {/* <li
              // id="card3d"
              // style={{
              //   transform: `
              //   rotateX(${(150 + card1.y - position.y) * 0.01}deg)
              //   rotateY(${(150 + card1.x - position.x) * 0.01}deg)`,
              // }}
              >
                <img src="/ejemplo1.png" alt="aaaa" />

                <div className="contenid">
                  <p className="flecha">24/09/2022</p>
                  <h4 className="titulo">
                    Javascript: los operadores Spread y Rest
                  </h4>
                </div>
              </li> */}
            </div>
          </div>
          <div className="fondoLetra">
            <p>BLOG</p>
            <div
              style={{
                top: `-${scroll + position.y * 0.01}px`,
                right: `-${0 + position.x * 0.01}px`,
              }}
            ></div>
          </div>
        </Section>
      </motion.div>
    </>
  );
};

export default PreBlogIndex;
