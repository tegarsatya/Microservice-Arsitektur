import Router from "next/router";
import {ToastContainer} from "react-toastify";
import Nprogress from "nprogress";
import "nprogress/nprogress.css";

import '../../tailwindcss/style.css';
import "react-toastify/dist/ReactToastify.css";

Nprogress.configure({}); 
Router.events.on("routeChangeStart", () => Nprogress.start());
Router.events.on("routeChangeComplete", () => Nprogress.done());
Router.events.on("routeChangeError", () => Nprogress.done());


function MyApp({ Component, pageProps }) {
   return (
   <>
        <Component {...pageProps }/>
        <ToastContainer position="top-center"></ToastContainer>
   </>
   );
}

export default MyApp