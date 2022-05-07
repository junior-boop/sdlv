import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../Layouts/header'
import Style from '../styles/app.module.css'


function Vide(){
  return(
    <div style={{height : 62, width : '100%'}}>

    </div>
  )
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className = {Style.STYLE}>
       <Header />
       <Vide />
      <Component {...pageProps} />
    </div>
 )
}

export default MyApp
