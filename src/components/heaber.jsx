import react from "react";
import Link from "next/link";

import styled from "styled-components";
import Logo from "../svg/logo";

const Hheader = styled.header`
  position: relative;
  top: 0;
  left: 0;
  z-index: 50;
  background-color: #252525;
  border-bottom: 1px solid #d2d1ff;

  /* > * {
    overflow: visible;
  } */

  nav {
    li {
      list-style: none;
      display: flex;
      justify-content: center;
      a {
        text-decoration: none;
        font-size: 20px;
      }

      .portafolio {
        display: flex;
        align-items: center;
        color: #d2d1ff;
        transition: 0.3s;

        &:hover {
          color: #d2d1ffaa;
          text-decoration: underline;
        }
      }

      .centro {
        margin: 0 30px 0 30px;

        /* background-color: blue; */
        display: flex;

        .raya1 {
          height: 50px;
          width: 7px;
          background-color: #d2d1ff;
          transform: translate(15px, 0px) skew(45deg, 0deg);
        }
        .contenido {
          height: 50px;
          width: 250px;
          background-color: #d2d1ff;
          clip-path: polygon(0 0, 100% 0, 80% 100%, 20% 100%);
          display: flex;
          justify-content: center;
          align-items: center;
          transition: 0.3s;

          &:hover {
            background-color: #d2d1ffaa;
            svg {
              path {
                fill: #ffffff !important;
              }
            }
          }
        }
        .raya2 {
          height: 50px;
          width: 7px;
          background-color: #d2d1ff;
          transform: translate(-15px, 0px) skew(-45deg, 0deg);
        }
      }

      .blog {
        display: flex;
        align-items: center;
        color: #d2d1ff;
        transition: 0.3s;

        &:hover {
          color: #d2d1ffaa;
          text-decoration: underline;
        }
      }

      .game:hover {
        color: red;
        text-decoration: underline;
      }
    }
  }
`;

const Header = () => {
  const particlesInit = async (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  return (
    <Hheader>
      <nav>
        <li>
          <Link href="/portafolio">
            <a className="portafolio">PORTAFOLIO</a>
          </Link>

          <Link href="/">
            <a className="centro">
              <div className="raya1"></div>
              <div className="contenido">
                <Logo />
              </div>
              <div className="raya2"></div>
            </a>
          </Link>

          <Link href="/blog">
            <a className="blog">BLOG</a>
          </Link>
          {/* <Link href="/game">
            <a style={{ margin: " 0 20px" }} className="blog game">
              GAME
            </a>
          </Link> */}
        </li>
      </nav>
    </Hheader>
  );
};

export default Header;
