import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";
import Navbar from "../../components/Navbar";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
