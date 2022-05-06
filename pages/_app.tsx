import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../Layouts/header'
import Style from '../styles/app.module.css'
import Script from 'next/script'


function Vide(){
  return(
    <div style={{height : 62, width : '100%'}}>

    </div>
  )
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className = {Style.STYLE}>
        {/* <Script
          id='Adsense-id'
          async = {true}
          strategy = "beforeInteractive"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1899219914731834"
          crossOrigin='anonymous'
        ></Script> */}
       <Header />
       <Vide />
      <Component {...pageProps} />
    </div>
 )
}

export default MyApp
