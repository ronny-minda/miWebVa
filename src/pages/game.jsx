import react, { useEffect } from "react";
import styled from "styled-components";
import Layout from "../components/layout";
// import ReactAudioPlayer from "react-audio-player";

// import sont from "../../public/audio/starFoxCorneria.mp3";

const Main = styled.main`
  background-color: red;
  max-width: 80%;
  height: 100vh;
  margin: 50px auto;
  display: flex;
  justify-content: center;
  align-items: center;

  .conteMain {
    height: 350px;
    width: 90%;
    background-color: aqua;
    /* margin: auto; */
  }
`;

const Game = () => {
  // useEffect(() => {
  //   let sound = new Audio();
  //   sound.play;
  // });

  return (
    <Layout>
      {/* <ReactAudioPlayer
        src="../../public/audio/starFoxCorneria.mp3"
        autoPlay="true"
      /> */}
      <Main>
        <div className="conteMain">
          {/* <h1>PRONTO ESTARA DISPONIBLE</h1>
          <h2>ESTA EN CONSTRUCCION</h2> */}
        </div>
      </Main>
    </Layout>
  );
};

export default Game;
