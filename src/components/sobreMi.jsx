import Image from "next/image";
import react, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const Section = styled.section`
  /* height: 150px; */
  width: 100%;
  background-color: #252525;
  position: relative;
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
      top: 0px;
      /* transition: 1s; */
      height: 100%;
      width: 40%;
      /* background-color: red; */
      background-image: url("/fondoLogo.svg");
      background-position: left;
      background-repeat: no-repeat;
      background-size: 400px;
      transform: scaleX(-1);
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
        color: #ffffff;
        width: 100%;
        /* height: 1000px; */
      }
    }

    .conte {
      max-width: 1000px;
      margin: auto auto 80px auto;
      display: flex;
      justify-content: center;
      align-items: center;

      @media (max-width: 650px) {
        flex-direction: column;
      }

      .palabras {
        p {
          padding: 10px 0 10px 40px;
          color: #fff;
          max-width: 1000px;
          font-size: 20px;
          /* font-size: 20px; */
        }

        .botonNext {
          height: 60px;
          width: 250px;
          background-color: #f00;
          position: absolute;
          top: 100%;
          left: calc(50% - 100px);
          font-size: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: 0.2s;
          border-radius: 3px;
        }
        /* .botonNext:hover {
      background-color: #ff5555;
    } */

        .button {
          text-decoration: none;
          -moz-appearance: none;
          -webkit-appearance: none;
          appearance: none;
          border: none;
          background: none;
          color: #0f1923;
          cursor: pointer;
          position: relative;
          padding: 8px;
          margin-bottom: 20px;
          text-transform: uppercase;
          font-weight: bold;
          font-size: 14px;
          transition: all 0.15s ease;
        }

        .button::before,
        .button::after {
          content: "";
          display: block;
          position: absolute;
          right: 0;
          left: 0;
          height: calc(50% - 5px);
          border: 1px solid #7d8082;
          transition: all 0.15s ease;
        }

        .button::before {
          top: 0;
          border-bottom-width: 0;
        }

        .button::after {
          bottom: 0;
          border-top-width: 0;
        }

        .button:active,
        .button:focus {
          outline: none;
        }

        .button:active::before,
        .button:active::after {
          right: 3px;
          left: 3px;
        }

        .button:active::before {
          top: 3px;
        }

        .button:active::after {
          bottom: 3px;
        }

        .button_lg {
          width: 100%;
          position: relative;
          display: flex;
          justify-content: center;
          padding: 10px 20px;
          color: #dde4ff;
          background-color: #470404;
          overflow: hidden;
          box-shadow: inset 0px 0px 0px 1px transparent;
        }

        .button_lg::before {
          content: "";
          display: block;
          position: absolute;
          top: 0;
          left: 0;
          width: 2px;
          height: 2px;
          background-color: #470404;
        }

        .button_lg::after {
          content: "";
          display: block;
          position: absolute;
          right: 0;
          bottom: 0;
          width: 4px;
          height: 4px;
          background-color: #470404;
          transition: all 0.2s ease;
        }

        .button_sl {
          display: block;
          position: absolute;
          top: 0;
          bottom: -1px;
          left: -8px;
          width: 0;
          background-color: #f00;
          transform: skew(-15deg);
          transition: all 0.2s ease;
        }

        .button_text {
          position: relative;
        }

        .button:hover {
          color: #470404;
        }

        .button:hover .button_sl {
          width: calc(100% + 15px);
        }

        .button:hover .button_lg::after {
          background-color: #dde4ff;
        }
      }
    }
  }
`;

const SobreMi = () => {
  const [scroll, setScroll] = useState(-100);
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    addEventListener("scroll", (e) => {
      let winScroll = window.top.scrollY;

      // console.log({ winScroll });

      let valor = winScroll * 0.3;

      let total = valor - 100;

      // console.log(total);

      setScroll(total);
    });

    addEventListener("mousemove", (e) => {
      // const mause = document.querySelector(".mause")
      const y = e.pageY - window.top.scrollY;
      const x = e.pageX;

      // console.log(x);
      // console.log(y);

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
          // delay: 0.3,
          duration: 2,
          // type: "spring",
          //   stiffness: 150,
        }}
      >
        <Section>
          <div className="contenido">
            <div className="h2conte">
              <h2>SOBRE MI</h2>
            </div>

            <div className="conte">
              <Image
                // className="img"
                src="/perfilActual.jpeg"
                width={400}
                height={500}
                quality={75}
                style={{ objectFit: "cover" }}
                // blurDataURL="/images/path-to-blur-image.jpg"
                // placeholder="blur"
                // className={loaded ? "unblur" : ""}
              />
              <div className="palabras">
                <p style={{ marginTop: "20px" }}>
                  ¡Hola! Mis conocimientos en en pedidos api rest de lado
                  frontend y desarrollo de api rest de lado backend con node y
                  sus respectivas validaciones administracion de roles.
                </p>
                <p>
                  <b>Correo: </b>ronny.minda.vera@gmail.com
                </p>
                <a
                  href="/curriculumRonny.pdf"
                  className="button botonNext"
                  download
                >
                  <span className="button_lg">
                    <span className="button_sl"></span>
                    <span className="button_text">Descargar curriculum</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="fondoLetra">
            <p>SOBRE MI</p>
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

export default SobreMi;
