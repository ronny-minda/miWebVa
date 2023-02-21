import react, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styled, { createGlobalStyle } from "styled-components";
import Head from "next/head";
import { NextSeo } from "next-seo";

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
      <NextSeo
        title={head.titulo}
        description={head.description}
        canonical={head.link}
        openGraph={{
          url: head.link,
          title: head.titulo,
          description: head.description,
          images: [
            {
              url: "https://www.ronnyminda.ga/_next/image?url=%2FperfilActual.jpeg&w=640&q=75",
              width: 800,
              height: 600,
              alt: "Og Image Alt",
              type: "image/jpeg",
            },
            {
              url: "https://www.ronnyminda.ga/_next/image?url=%2FperfilActual.jpeg&w=640&q=75",
              width: 900,
              height: 800,
              alt: "Og Image Alt Second",
              type: "image/jpeg",
            },
            {
              url: "https://www.ronnyminda.ga/_next/image?url=%2FperfilActual.jpeg&w=640&q=75",
            },
            {
              url: "https://www.ronnyminda.ga/_next/image?url=%2FperfilActual.jpeg&w=640&q=75",
            },
          ],
          siteName: head.titulo,
        }}
        twitter={{
          handle: "@MichaelMinda7",
          site: "@site",
          cardType: "summary_large_image",
        }}
        robotsProps={{
          nosnippet: true,
          notranslate: true,
          noimageindex: true,
          noarchive: true,
          maxSnippet: -1,
          maxImagePreview: "none",
          maxVideoPreview: -1,
        }}
      />

      <Head>
        {/* <meta charset="UTF-8"></meta>
        <title>{head.titulo}</title>
        <meta property="og:title" content={head.titulo}></meta>
         */}

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

        <meta
          name="google-site-verification"
          content="VfzAKHwjf9TtB4QzlFHlntf-XJMI77x-l4UEF4uBi2s"
        />

        {/* <meta name="description" content={head.description}></meta> */}

        <link rel="icon" href="/favicon.png"></link>
        <link rel="apple-touch-icon" href="/favicon.png"></link>
        <meta name="theme-color" content="#ff5555"></meta>

        {/* <meta property="og:description" content={head.description}></meta>
        <meta
          property="og:image"
          content="https://www.ronnyminda.ga/_next/image?url=%2FimgPrincipal.png&w=256&q=75"
        ></meta>
        <meta
          property="og:url"
          content="https://www.ronnyminda.ga/index.html"
        ></meta>
        <meta name="twitter:card" content="summary"></meta>
        <meta name="twitter:site" content="@MichaelMinda7"></meta> */}
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
