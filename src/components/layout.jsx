import react, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styled, { createGlobalStyle } from "styled-components";
import Head from "next/head";

import Header from "./heaber";
import Footer from "./footer";
import FondoPrueba from "../svg/fondoPrueba";
import Loader from "./loader";
import { useDatos } from "../context/Context";

const GlobalStyle = createGlobalStyle`
  body {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    background-image: url('/fondoPunto.png');
    background-color: #D9D9D9;
    overflow-x: hidden;
    
  }
  
  .horizontal {
    clip-path: polygon(
    0% 100%,
    100% 100%,
    100% 0,
    100% 0,
    100% 100%,
    0 100%,
    0 0,
    0% 0
  );
  }

  .vertical {
    clip-path: polygon(
      0% 100%,
    100% 100%,
    100% 0,
    100% 0,
    100% 100%,
    0 100%,
    0 0,
    0% 0
  );
  }
  
  ::-webkit-scrollbar {
    width: 0px;
  }
  /* ::-webkit-scrollbar-track {
    background-color: #000000c;
      -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); 
      
  }
  ::-webkit-scrollbar-thumb {
      
      -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5);
  } */

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Kanit', sans-serif;
    font-family: 'Oswald', sans-serif;
    
  }
`;

const Fondo = styled.div`
  position: relative;
  /* height: ; */
  .fondo {
    /* transition: 1s; */
    /* transition: 0.1s; */
    position: fixed;
    top: 0;
    left: 0;
    z-index: 49;
    height: 100%;
    width: 100%;
    /* background-color: red; */

    /* background-image: url("/fontoTodo.svg");
    background-position: left -1500px;
    background-repeat: no-repeat; 
    background-size: 80%;
    transition: 1s; */

    .fondo1 {
      height: 80vh;
      width: 30%;

      background-image: url("/fondoLogo.svg");
      background-position: left;
      background-repeat: no-repeat;
      background-size: cover;

      margin-left: 50px;
      margin-top: 20px;
    }
    .fondo2 {
      height: 80vh;
      width: 96%;

      background-image: url("/fondoLogo.svg");
      background-position: left;
      background-repeat: no-repeat;
      background-size: contain;

      margin-left: 50px;
      margin-top: 20px;
      transform: scaleX(-1);
    }
    .fondo3 {
      height: 80vh;
      width: 30%;

      background-image: url("/fondoLogo.svg");
      background-position: left;
      background-repeat: no-repeat;
      background-size: cover;

      margin-left: 50px;
      margin-top: 20px;
    }
  }
`;

const Layout = ({ children, head }) => {
  const { loger, loader } = useDatos();

  // console.log(loger);

  const [scroll, setScroll] = useState(-100);
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  // console.log({ head });

  useEffect(() => {
    addEventListener("scroll", (event) => {
      let winScroll = window.top.scrollY;

      // console.log({ winScroll });
      setScroll(winScroll * 0.3);
    });

    setTimeout(() => {
      loader();
    }, 3000);

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

    // setTimeout(() => {
    //   loader();
    // }, 2000);
  }, []);

  // console.log({ loger });

  return (
    <>
      <Head>
        {/* <meta charset="UTF-8"></meta>
        <title>{head.titulo}</title>
        <meta property="og:title" content={head.titulo}></meta>

        <meta name="apple-mobile-web-app-capable" content="yes" />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>

        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
  
          crossOrigin="true"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap"
          rel="stylesheet"
        ></link>

        <meta
          name="viewport"
          content="user-scalable=no, width=device-width, initial-scale=1.0"
        />
 

     
        <meta name="description" content={head.description}></meta>

     
        <link rel="icon" href="/favicon.png"></link>
        <link rel="apple-touch-icon" href="/favicon.png"></link>
        <meta name="theme-color" content="#ff5555"></meta>

        <meta property="og:description" content={head.description}></meta>
        <meta
          property="og:image"
          content="/perfilActual.jpeg"
        ></meta>
        <meta
          property="og:url"
          content="https://www.ronnyminda.ga/index.html"
        ></meta>
        <meta name="twitter:card" content="summary"></meta>
        <meta name="twitter:site" content="@MichaelMinda7"></meta> */}

        <meta charset="UTF-8"></meta>
        <title>Platzi: ‎Cursos Online Profesionales de Tecnología</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <meta name="referrer" content="no-referrer-when-downgrade"></meta>
        <meta
          name="description"
          content="Aprende desde cero a crear el futuro web con nuestros Cursos Online Profesionales de Tecnología. 🚀¡Cursos de Desarrollo, Diseño, Marketing y Negocios!"
        ></meta>
        <meta name="theme-color" content="#15210B"></meta>
        <meta property="fb:app_id" content="263680607075199"></meta>
        <meta property="fb:admins" content="1030603473"></meta>
        <meta
          property="og:description"
          content="Aprende desde cero a crear el futuro web con nuestros Cursos Online Profesionales de Tecnología. 🚀¡Cursos de Desarrollo, Diseño, Marketing y Negocios!"
        ></meta>
        <meta
          property="og:title"
          content="Platzi: ‎Cursos Online Profesionales de Tecnología"
        ></meta>
        <meta property="og:type" content="website"></meta>
        <meta property="og:url" content="https://platzi.com/inicio/"></meta>
        <meta
          property="og:image"
          content="https://static.platzi.com/media/meta_tags/og/OG-platzi-Dic-2019.webp"
        ></meta>
        <meta
          property="og:site_name"
          content="https://platzi.com/inicio/"
        ></meta>
        <meta property="twitter:account_id" content="4503599630205252"></meta>
        <meta name="twitter:card" content="summary_large_image"></meta>
        <meta name="twitter:site" content="@Platzi"></meta>
        <meta
          name="twitter:title"
          content="Platzi: ‎Cursos Online Profesionales de Tecnología"
        ></meta>
        <meta
          name="twitter:description"
          content="Aprende desde cero a crear el futuro web con nuestros Cursos Online Profesionales de Tecnología. 🚀¡Cursos de Desarrollo, Diseño, Marketing y Negocios!"
        ></meta>
        <meta name="twitter:creator" content="@Platzi"></meta>
        <meta
          name="twitter:image"
          content="https://static.platzi.com/media/meta_tags/og/OG-platzi-Dic-2019.webp"
        ></meta>
        <meta name="twitter:domain" content="https://platzi.com/inicio/"></meta>
        <meta
          name="p:domain_verify"
          content="7b60446823db932528d0528d4cb50e66"
        ></meta>
        <link
          rel="shortcut icon"
          href="//static.platzi.com/media/favicons/platzi_favicon.png"
        ></link>
        <link
          rel="icon"
          sizes="192x192"
          href="//static.platzi.com/media/favicons/platzi_favicon.png"
        ></link>
        <link rel="canonical" href="https://platzi.com"></link>
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://platzi.com"
        ></link>
        <link rel="alternate" hreflang="es" href="https://platzi.com"></link>
        <link rel="alternate" hreflang="pt" href="https://platzi.com.br"></link>
        <link
          rel="alternate"
          hreflang="en"
          href="https://courses.platzi.com"
        ></link>
      </Head>
      <GlobalStyle />

      <Header />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Fondo>
          {/* <AnimatePresence exitBeforeEnter>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          > */}
          {children}
          {/* </motion.div>
        </AnimatePresence> */}
          <div
            className="fondo"
            style={{
              top: `-${scroll + position.y * 0.01}px`,
              left: `-${position.x * 0.01}px`,
            }}
          >
            <div className="fondo1"></div>
            <div className="fondo2"></div>
            <div className="fondo3"></div>
          </div>
        </Fondo>

        {/* rayas mamalonas 2 */}
        <div
          style={{
            position: "fixed",
            zIndex: "9999",
            top: 0,
            left: "25%",
            height: "100%",
            width: "1px",
            backgroundColor: "#C93939",
            // boxShadow: " 10px 0px 4px 0px red",
          }}
        ></div>

        <div
          style={{
            position: "fixed",
            zIndex: "9999",
            top: 0,
            left: "28%",
            height: "100%",
            width: "1px",
            backgroundColor: "#C93939",
            // boxShadow: " 10px 0px 4px 0px red",
          }}
        ></div>

        <div
          style={{
            position: "fixed",
            zIndex: "9999",
            top: 0,
            left: "75%",
            height: "100%",
            width: "1px",
            backgroundColor: "#C93939",
            // boxShadow: " 10px 0px 4px 0px red",
          }}
        ></div>

        {/* mira mause */}

        {/* <div
        style={{
          height: "10px",
          width: "2px",
          backgroundColor: "red",
          position: "fixed",
          zIndex: 999,
          top: position.y - 13,
          left: position.x - 1,
          boxShadow: " 30px 30px 4px 0px red",
        }}
      ></div>
      <div
        style={{
          height: "2px",
          width: "10px",
          backgroundColor: "red",
          position: "fixed",
          zIndex: 999,
          top: position.y,
          left: position.x + 3,
          boxShadow: " 30px 30px 4px 0px red",
        }}
      ></div>
      <div
        style={{
          height: "2px",
          width: "10px",
          backgroundColor: "red",
          position: "fixed",
          zIndex: 999,
          top: position.y,
          left: position.x - 13,
          boxShadow: " 30px 30px 4px 0px red",
        }}
      ></div>
      <div
        style={{
          height: "10px",
          width: "2px",
          backgroundColor: "red",
          position: "fixed",
          zIndex: 999,
          top: position.y + 5,
          left: position.x - 1,
          boxShadow: " 30px 30px 4px 0px red",
        }}
      ></div> */}

        <Footer />
        {/* <FondoPrueba /> */}
      </motion.div>
      {loger && <Loader />}
    </>
  );
};

export default Layout;
