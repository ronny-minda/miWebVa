import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { useDatos } from "../../context/Context";

import Layout from "../../components/layout";
import BlogInicioImg from "../../components/blogInicioImg";
import BlogInicio from "../../components/blogInicio";
import ContenidoBlog from "../../components/contenidoBlog";
import ConteWeb from "../../components/conteWeb";

const Blog = () => {
  const router = useRouter();
  const { frontend } = useDatos();

  useEffect(() => {
    if (!router.isReady) {
      // return <div>Cargando....</div>;
      router.push("/404");
    }
  }, []);

  // console.log(router.query.name);

  const name = router.query.name;

  const front = frontend.filter((dato) => {
    return dato.titulo === name;
  })[0];

  if (!front) {
    return <div>Cargando....</div>;
  }

  // console.log(blog.titulo);

  const head = {
    titulo: front.titulo,
    description: front.titulo,
  };

  return (
    <Layout head={head}>
      <motion.div
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
        {/* <h1>{front.titulo}</h1> */}
        <BlogInicioImg blog={front} />

        <ConteWeb blog={front} />
        {/* <ContenidoBlog blog={blog} /> */}
      </motion.div>
    </Layout>
  );
};

export default Blog;
