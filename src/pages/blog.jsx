import React from "react";
import { motion } from "framer-motion";
import { useDatos } from "../context/Context";

import Layout from "../components/layout";
import BlogInicio from "../components/blogInicio";
import ListadoBlog from "../components/listadoBlog";

const Blog = () => {
  // const { halo } = useDatos();

  // console.log(halo("maikol"));
  const head = {
    titulo: "Blog Ronny Minda V.",
    description: "Blog pesonal de desarrollo ",
  };

  return (
    <Layout head={head}>
      <BlogInicio titulo={"BLOG"} />

      <ListadoBlog />
    </Layout>
  );
};

export default Blog;
