import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { useDatos } from "../../context/Context";

import Layout from "../../components/layout";
// import BlogInicio from "../components/blogInicio";
// import ListadoBlog from "../components/listadoBlog";
import BlogInicioImg from "../../components/blogInicioImg";
import ContenidoBlog from "../../components/contenidoBlog";

const Blog = () => {
  const router = useRouter();
  const { datos } = useDatos();

  if (!router.isReady) {
    return <div>Cargando....</div>;
  }

  // console.log(router.query.name);

  const name = router.query.name;

  const blog = datos.filter((dato) => {
    return dato.titulo === name;
  })[0];

  if (!blog) {
    router.push("/404");
    return <div>Cargando....</div>;
  }

  // useEffect(() => {
  //   if (!blog) {
  //     // return <div>Cargando....</div>;
  //     router.push("/404");
  //   }
  // }, []);

  const head = {
    titulo: blog.titulo,
    description: blog.titulo,
  };

  // console.log(blog.titulo);

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
        {/* <h1>{blog.titulo}</h1> */}
        <BlogInicioImg blog={blog} />
        <ContenidoBlog blog={blog} />
      </motion.div>
    </Layout>
  );
};

export default Blog;

// export async function getStaticPaths() {
//   const datos = [
//     {
//       id: 1,
//       fecha: "05-04-2021",
//       titulo: "Cómo funciona y cómo usar los operadores Spread y Rest",
//       img: "/ejemplo1.png",
//       contenido: `<p>
//       En el artículo de hoy vamos a hablar de una de las características de
//       la versión ES6 (ECMAScript 2015) de JavaScript que es el operador
//       Spread así como el operador Rest. Estas características pueden ser muy
//       útiles cuando se desarrolla y trabaja con los marcos de trabajo del
//       front-end. Explicaremos como puedes usarlo en la práctica cuando
//       copies y fusiones arrays y literales de objetos, insertas datos, con
//       los beneficios de hacer tu código más limpio. Vamos a entrar en ello y
//       ver cómo funciona.
//     </p>
//     <h2>Definición y sintaxis del Spread operador</h2>
//     <p>
//       En el artículo de hoy vamos a hablar de una de las características de
//       la versión ES6 (ECMAScript 2015) de JavaScript que es el operador
//       Spread así como el operador Rest. Estas características pueden ser muy
//       útiles cuando se desarrolla y trabaja con los marcos de trabajo del
//       front-end. Explicaremos como puedes usarlo en la práctica cuando
//       copies y fusiones arrays y literales de objetos, insertas datos, con
//       los beneficios de hacer tu código más limpio. Vamos a entrar en ello y
//       ver cómo funciona.
//     </p>
//     <h1>Cómo funciona y cómo usar los operadores Spread y Rest</h1>
//     <p>
//       En el artículo de hoy vamos a hablar de una de las características de
//       la versión ES6 (ECMAScript 2015) de JavaScript que es el operador
//       Spread así como el operador Rest. Estas características pueden ser muy
//       útiles cuando se desarrolla y trabaja con los marcos de trabajo del
//       front-end. Explicaremos como puedes usarlo en la práctica cuando
//       copies y fusiones arrays y literales de objetos, insertas datos, con
//       los beneficios de hacer tu código más limpio. Vamos a entrar en ello y
//       ver cómo funciona.
//     </p>
//     <h2>Definición y sintaxis del Spread operador</h2>
//     <p>
//       En el artículo de hoy vamos a hablar de una de las características de
//       la versión ES6 (ECMAScript 2015) de JavaScript que es el operador
//       Spread así como el operador Rest. Estas características pueden ser muy
//       útiles cuando se desarrolla y trabaja con los marcos de trabajo del
//       front-end. Explicaremos como puedes usarlo en la práctica cuando
//       copies y fusiones arrays y literales de objetos, insertas datos, con
//       los beneficios de hacer tu código más limpio. Vamos a entrar en ello y
//       ver cómo funciona.
//     </p>`,
//     },
//     {
//       id: 2,
//       fecha: "05-04-2020",
//       titulo: "Definición y sintaxis del Spread operador",
//       img: "/ejemplo1.png",
//       contenido: `<p>
//       En el artículo de hoy vamos a hablar de una de las características de
//       la versión ES6 (ECMAScript 2015) de JavaScript que es el operador
//       Spread así como el operador Rest. Estas características pueden ser muy
//       útiles cuando se desarrolla y trabaja con los marcos de trabajo del
//       front-end. Explicaremos como puedes usarlo en la práctica cuando
//       copies y fusiones arrays y literales de objetos, insertas datos, con
//       los beneficios de hacer tu código más limpio. Vamos a entrar en ello y
//       ver cómo funciona.
//     </p>
//     <h2>Definición y sintaxis del Spread operador</h2>
//     <p>
//       En el artículo de hoy vamos a hablar de una de las características de
//       la versión ES6 (ECMAScript 2015) de JavaScript que es el operador
//       Spread así como el operador Rest. Estas características pueden ser muy
//       útiles cuando se desarrolla y trabaja con los marcos de trabajo del
//       front-end. Explicaremos como puedes usarlo en la práctica cuando
//       copies y fusiones arrays y literales de objetos, insertas datos, con
//       los beneficios de hacer tu código más limpio. Vamos a entrar en ello y
//       ver cómo funciona.
//     </p>
//     <h1>Cómo funciona y cómo usar los operadores Spread y Rest</h1>
//     <p>
//       En el artículo de hoy vamos a hablar de una de las características de
//       la versión ES6 (ECMAScript 2015) de JavaScript que es el operador
//       Spread así como el operador Rest. Estas características pueden ser muy
//       útiles cuando se desarrolla y trabaja con los marcos de trabajo del
//       front-end. Explicaremos como puedes usarlo en la práctica cuando
//       copies y fusiones arrays y literales de objetos, insertas datos, con
//       los beneficios de hacer tu código más limpio. Vamos a entrar en ello y
//       ver cómo funciona.
//     </p>
//     <h2>Definición y sintaxis del Spread operador</h2>
//     <p>
//       En el artículo de hoy vamos a hablar de una de las características de
//       la versión ES6 (ECMAScript 2015) de JavaScript que es el operador
//       Spread así como el operador Rest. Estas características pueden ser muy
//       útiles cuando se desarrolla y trabaja con los marcos de trabajo del
//       front-end. Explicaremos como puedes usarlo en la práctica cuando
//       copies y fusiones arrays y literales de objetos, insertas datos, con
//       los beneficios de hacer tu código más limpio. Vamos a entrar en ello y
//       ver cómo funciona.
//     </p>`,
//     },
//     {
//       id: 3,
//       fecha: "05-04-2020",
//       titulo: "Copia de una matriz u objeto",
//       img: "/ejemplo1.png",
//       contenido: `<p>
//       En el artículo de hoy vamos a hablar de una de las características de
//       la versión ES6 (ECMAScript 2015) de JavaScript que es el operador
//       Spread así como el operador Rest. Estas características pueden ser muy
//       útiles cuando se desarrolla y trabaja con los marcos de trabajo del
//       front-end. Explicaremos como puedes usarlo en la práctica cuando
//       copies y fusiones arrays y literales de objetos, insertas datos, con
//       los beneficios de hacer tu código más limpio. Vamos a entrar en ello y
//       ver cómo funciona.
//     </p>
//     <h2>Definición y sintaxis del Spread operador</h2>
//     <p>
//       En el artículo de hoy vamos a hablar de una de las características de
//       la versión ES6 (ECMAScript 2015) de JavaScript que es el operador
//       Spread así como el operador Rest. Estas características pueden ser muy
//       útiles cuando se desarrolla y trabaja con los marcos de trabajo del
//       front-end. Explicaremos como puedes usarlo en la práctica cuando
//       copies y fusiones arrays y literales de objetos, insertas datos, con
//       los beneficios de hacer tu código más limpio. Vamos a entrar en ello y
//       ver cómo funciona.
//     </p>
//     <h1>Cómo funciona y cómo usar los operadores Spread y Rest</h1>
//     <p>
//       En el artículo de hoy vamos a hablar de una de las características de
//       la versión ES6 (ECMAScript 2015) de JavaScript que es el operador
//       Spread así como el operador Rest. Estas características pueden ser muy
//       útiles cuando se desarrolla y trabaja con los marcos de trabajo del
//       front-end. Explicaremos como puedes usarlo en la práctica cuando
//       copies y fusiones arrays y literales de objetos, insertas datos, con
//       los beneficios de hacer tu código más limpio. Vamos a entrar en ello y
//       ver cómo funciona.
//     </p>
//     <h2>Definición y sintaxis del Spread operador</h2>
//     <p>
//       En el artículo de hoy vamos a hablar de una de las características de
//       la versión ES6 (ECMAScript 2015) de JavaScript que es el operador
//       Spread así como el operador Rest. Estas características pueden ser muy
//       útiles cuando se desarrolla y trabaja con los marcos de trabajo del
//       front-end. Explicaremos como puedes usarlo en la práctica cuando
//       copies y fusiones arrays y literales de objetos, insertas datos, con
//       los beneficios de hacer tu código más limpio. Vamos a entrar en ello y
//       ver cómo funciona.
//     </p>`,
//     },
//     {
//       id: 4,
//       fecha: "05-04-2020",
//       titulo: "Se esparcen en los literales de la matriz",
//       img: "/ejemplo1.png",
//       contenido: `<p>
//       En el artículo de hoy vamos a hablar de una de las características de
//       la versión ES6 (ECMAScript 2015) de JavaScript que es el operador
//       Spread así como el operador Rest. Estas características pueden ser muy
//       útiles cuando se desarrolla y trabaja con los marcos de trabajo del
//       front-end. Explicaremos como puedes usarlo en la práctica cuando
//       copies y fusiones arrays y literales de objetos, insertas datos, con
//       los beneficios de hacer tu código más limpio. Vamos a entrar en ello y
//       ver cómo funciona.
//     </p>
//     <h2>Definición y sintaxis del Spread operador</h2>
//     <p>
//       En el artículo de hoy vamos a hablar de una de las características de
//       la versión ES6 (ECMAScript 2015) de JavaScript que es el operador
//       Spread así como el operador Rest. Estas características pueden ser muy
//       útiles cuando se desarrolla y trabaja con los marcos de trabajo del
//       front-end. Explicaremos como puedes usarlo en la práctica cuando
//       copies y fusiones arrays y literales de objetos, insertas datos, con
//       los beneficios de hacer tu código más limpio. Vamos a entrar en ello y
//       ver cómo funciona.
//     </p>
//     <h1>Cómo funciona y cómo usar los operadores Spread y Rest</h1>
//     <p>
//       En el artículo de hoy vamos a hablar de una de las características de
//       la versión ES6 (ECMAScript 2015) de JavaScript que es el operador
//       Spread así como el operador Rest. Estas características pueden ser muy
//       útiles cuando se desarrolla y trabaja con los marcos de trabajo del
//       front-end. Explicaremos como puedes usarlo en la práctica cuando
//       copies y fusiones arrays y literales de objetos, insertas datos, con
//       los beneficios de hacer tu código más limpio. Vamos a entrar en ello y
//       ver cómo funciona.
//     </p>
//     <h2>Definición y sintaxis del Spread operador</h2>
//     <p>
//       En el artículo de hoy vamos a hablar de una de las características de
//       la versión ES6 (ECMAScript 2015) de JavaScript que es el operador
//       Spread así como el operador Rest. Estas características pueden ser muy
//       útiles cuando se desarrolla y trabaja con los marcos de trabajo del
//       front-end. Explicaremos como puedes usarlo en la práctica cuando
//       copies y fusiones arrays y literales de objetos, insertas datos, con
//       los beneficios de hacer tu código más limpio. Vamos a entrar en ello y
//       ver cómo funciona.
//     </p>`,
//     },
//     {
//       id: 5,
//       fecha: "05-04-2020",
//       titulo: "Aquí es un ejemplo",
//       img: "/ejemplo1.png",
//       contenido: `<p>
//       En el artículo de hoy vamos a hablar de una de las características de
//       la versión ES6 (ECMAScript 2015) de JavaScript que es el operador
//       Spread así como el operador Rest. Estas características pueden ser muy
//       útiles cuando se desarrolla y trabaja con los marcos de trabajo del
//       front-end. Explicaremos como puedes usarlo en la práctica cuando
//       copies y fusiones arrays y literales de objetos, insertas datos, con
//       los beneficios de hacer tu código más limpio. Vamos a entrar en ello y
//       ver cómo funciona.
//     </p>
//     <h2>Definición y sintaxis del Spread operador</h2>
//     <p>
//       En el artículo de hoy vamos a hablar de una de las características de
//       la versión ES6 (ECMAScript 2015) de JavaScript que es el operador
//       Spread así como el operador Rest. Estas características pueden ser muy
//       útiles cuando se desarrolla y trabaja con los marcos de trabajo del
//       front-end. Explicaremos como puedes usarlo en la práctica cuando
//       copies y fusiones arrays y literales de objetos, insertas datos, con
//       los beneficios de hacer tu código más limpio. Vamos a entrar en ello y
//       ver cómo funciona.
//     </p>
//     <h1>Cómo funciona y cómo usar los operadores Spread y Rest</h1>
//     <p>
//       En el artículo de hoy vamos a hablar de una de las características de
//       la versión ES6 (ECMAScript 2015) de JavaScript que es el operador
//       Spread así como el operador Rest. Estas características pueden ser muy
//       útiles cuando se desarrolla y trabaja con los marcos de trabajo del
//       front-end. Explicaremos como puedes usarlo en la práctica cuando
//       copies y fusiones arrays y literales de objetos, insertas datos, con
//       los beneficios de hacer tu código más limpio. Vamos a entrar en ello y
//       ver cómo funciona.
//     </p>
//     <h2>Definición y sintaxis del Spread operador</h2>
//     <p>
//       En el artículo de hoy vamos a hablar de una de las características de
//       la versión ES6 (ECMAScript 2015) de JavaScript que es el operador
//       Spread así como el operador Rest. Estas características pueden ser muy
//       útiles cuando se desarrolla y trabaja con los marcos de trabajo del
//       front-end. Explicaremos como puedes usarlo en la práctica cuando
//       copies y fusiones arrays y literales de objetos, insertas datos, con
//       los beneficios de hacer tu código más limpio. Vamos a entrar en ello y
//       ver cómo funciona.
//     </p>`,
//     },
//     {
//       id: 6,
//       fecha: "05-04-2020",
//       titulo: "datos grandes",
//       img: "/ejemplo1.png",
//       contenido: `<p>
//       En el artículo de hoy vamos a hablar de una de las características de
//       la versión ES6 (ECMAScript 2015) de JavaScript que es el operador
//       Spread así como el operador Rest. Estas características pueden ser muy
//       útiles cuando se desarrolla y trabaja con los marcos de trabajo del
//       front-end. Explicaremos como puedes usarlo en la práctica cuando
//       copies y fusiones arrays y literales de objetos, insertas datos, con
//       los beneficios de hacer tu código más limpio. Vamos a entrar en ello y
//       ver cómo funciona.
//     </p>
//     <h2>Definición y sintaxis del Spread operador</h2>
//     <p>
//       En el artículo de hoy vamos a hablar de una de las características de
//       la versión ES6 (ECMAScript 2015) de JavaScript que es el operador
//       Spread así como el operador Rest. Estas características pueden ser muy
//       útiles cuando se desarrolla y trabaja con los marcos de trabajo del
//       front-end. Explicaremos como puedes usarlo en la práctica cuando
//       copies y fusiones arrays y literales de objetos, insertas datos, con
//       los beneficios de hacer tu código más limpio. Vamos a entrar en ello y
//       ver cómo funciona.
//     </p>
//     <h1>Cómo funciona y cómo usar los operadores Spread y Rest</h1>
//     <p>
//       En el artículo de hoy vamos a hablar de una de las características de
//       la versión ES6 (ECMAScript 2015) de JavaScript que es el operador
//       Spread así como el operador Rest. Estas características pueden ser muy
//       útiles cuando se desarrolla y trabaja con los marcos de trabajo del
//       front-end. Explicaremos como puedes usarlo en la práctica cuando
//       copies y fusiones arrays y literales de objetos, insertas datos, con
//       los beneficios de hacer tu código más limpio. Vamos a entrar en ello y
//       ver cómo funciona.
//     </p>
//     <h2>Definición y sintaxis del Spread operador</h2>
//     <p>
//       En el artículo de hoy vamos a hablar de una de las características de
//       la versión ES6 (ECMAScript 2015) de JavaScript que es el operador
//       Spread así como el operador Rest. Estas características pueden ser muy
//       útiles cuando se desarrolla y trabaja con los marcos de trabajo del
//       front-end. Explicaremos como puedes usarlo en la práctica cuando
//       copies y fusiones arrays y literales de objetos, insertas datos, con
//       los beneficios de hacer tu código más limpio. Vamos a entrar en ello y
//       ver cómo funciona.
//     </p>`,
//     },
//   ];
//   // const { datos } = useDatos();

//   // const paths = datos.map(({ titulo }) => ({
//   //   params: { titulo: titulo.toString() },
//   // }));

//   const paths = [{ params: { id: "1" } }, { params: { id: "2" } }];

//   return {
//     paths,
//     fallback: false,
//   };
// }

// export async function getStaticProps(context) {
//   return {
//     // Passed to the page component as props
//     props: { post: { halo: "1" } },
//   };
// }

// // export async function getStaticProps({ params }) {
// //   try {
// //     return {
// //       props: {
// //         params,
// //       },
// //     };
// //   } catch (error) {
// //     console.log(error);
// //   }
// // }
