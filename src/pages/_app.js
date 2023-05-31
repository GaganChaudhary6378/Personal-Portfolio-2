import "@/styles/globals.css";
import React from "react";
import { GuardSpinner } from "react-spinners-kit";
import Navbar from "../../components/Navbar";
import { useRouter } from "next/router";
export default function App({ Component, pageProps }) {
  const [loading, setLoading] = React.useState(false);
  const router=useRouter();
  React.useEffect(() => {
    router.events.on('routeChangeStart',() => {
      setLoading(true);
    })
    router.events.on('routeChangeComplete',()=> {
      setLoading(false);
    })
  })
  return (
    <>
    
      
      <Navbar />
      {loading ? <div className="md:ml-[46%] md:mt-[20%] ml-[630px] mt-[850px] "><GuardSpinner size={100} color="#686769" loading={loading} /></div> : <Component {...pageProps} />}
    </>
  );
}
