import React from "react";
import { AppProps } from "next/dist/next-server/lib/router/router";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "../styles/global";
import theme from "../styles/theme";
import { motion } from "framer-motion";

const MyApp: React.FC<AppProps> = ({ Component, pageProps, router }) => {
  return (
    <motion.div
      key={router.route}
      initial="pageInitial"
      animate="pageAnimate"
      variants={{
        pageInitial: {},
        pageAnimate: {
          transition: {
            duration: 0.25,
          },
        },
      }}
    >
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <GlobalStyle />
      </ThemeProvider>
    </motion.div>
  );
};

export default MyApp;
