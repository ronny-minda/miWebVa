import React from "react";
import styled from "styled-components";

const Principal = styled.img`
  clip-path: polygon(0 0, 100% 0, 100% 50%, 60% 50%, 60% 100%, 0 100%);
  background-color: #252525;
  height: 400px;
  width: 100%;
  object-fit: cover;

  /* position: relative;
  top: 0;
  left: 0;
  z-index: 50; */

  /* h1 {
    color: #ffffff;
    font-size: 50px;
    margin-left: 26%;
    padding-top: 50px;
  } */
`;

const BlogInicioImg = ({ blog }) => {
  return (
    <Principal src={blog.img} alt={blog.titulo}>
      {/* <h1>BLOG</h1> */}
    </Principal>
  );
};

export default BlogInicioImg;
