import react from "react";
import styled from "styled-components";
import ContactoLeft from "./contactoLeft";

const Main = styled.main`
  /* background-color: red; */
  margin: auto;
  max-width: 1000px;
  margin: 40px auto;

  position: relative;
  top: 0;
  left: 0;
  z-index: 50;

  .contenido {
    width: 90%;
    margin-left: auto;

    @media (max-width: 400px) {
      & {
        width: 85%;
      }
    }

    .conteImg {
      /* background-color: aqua; */
      margin: 40px auto;
      width: 500px;
      height: 300px;
      position: relative;

      .img1 {
        height: 240px;
        width: 380px;
        position: absolute;
        /* left: calc(100% - 0px); */

        top: calc(46% - 120px);
        left: calc(50% - 190px);
        /* object-fit: cover; */
      }

      .img2 {
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
      }
    }

    img {
      height: 100px;
      width: 100px;
    }

    h1 {
      /* background-color: blue; */
      margin: 20px 0;
      font-size: 40px;
    }

    p {
    }

    h3 {
      margin: 10px 0;
    }

    li {
    }

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

    .button:active,
    .button:focus {
      outline: none;
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
`;

const ConteWeb = ({ blog }) => {
  return (
    <Main>
      <ContactoLeft />
      <div className="contenido">
        <h1>{blog.titulo}</h1>
        <div className="conteImg">
          <img className="img1" src={blog.img} alt={blog.titulo} />
          <img className="img2" src="/laptop.png" alt="laptop.png" />
        </div>

        <p>{blog.descripcion}</p>
        <h3>TECNOLOGIAS</h3>
        {blog.tecnologias.map((dato) => {
          return <li key={dato}>{dato}</li>;
        })}

        <a
          href={blog.disponible}
          //   href="/"
          target="_blank"
          rel="noopener noreferrer"
          className="button botonNext"
        >
          <span className="button_lg">
            <span className="button_sl"></span>
            <span className="button_text">Disponible en 🡪</span>
          </span>
        </a>
      </div>
    </Main>
  );
};

export default ConteWeb;
