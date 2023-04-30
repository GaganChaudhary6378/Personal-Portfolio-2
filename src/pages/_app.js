import "@/styles/globals.css";
import { Poppins} from 'next/font/google'
import Navbar from "../../components/Navbar";

const poppins= Poppins({
  weight:'400',
  style:['normal'],
  variable: '--font-poppins',
})

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar/>
      <Component {...pageProps} />
    </>
  );
}
