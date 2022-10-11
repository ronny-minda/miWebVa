// import { AnimatePresence, motion } from "framer-motion";
import { DatosProvider } from "../context/Context";

// function MyApp({ Component, pageProps }) {
//   return (
//     <DatosProvider>
//       <AnimatePresence exitBeforeEnter>
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 1 }}
//         >
//           <Component {...pageProps} />
//         </motion.div>
//       </AnimatePresence>
//     </DatosProvider>
//   );
// }

// function MyApp({ Component, pageProps }) {
//   return (
//     <AnimatePresence>
//       <Component {...pageProps} />
//     </AnimatePresence>
//   );
// }

import React from "react";
import App from "next/app";
import { AnimatePresence, motion } from "framer-motion";

class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props;

    return (
      <DatosProvider>
        <AnimatePresence>
         
            <Component {...pageProps} key={router.route} />
   
        </AnimatePresence>
      </DatosProvider>
    );
  }
}

export default MyApp;
