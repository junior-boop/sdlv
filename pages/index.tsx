import type { NextPage } from 'next'
import Head from 'next/head'
import { MiniActuItem } from '../components/actueItems'
import DiapoPub from '../Layouts/diapoPub'
import Main from '../Layouts/main'
import Style from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>S-D-L-V</title>
        <meta name="description" content="Si Dieu Le Veut est un site web de prediction, de pronostic et d'actualité sportive. Elle a pour but d'apporter au parieur, à travers le monde les éléments necessaires pour effectuer des paries (stats, comparaisons, infos sur le/les match(s) et  Actualité en vironant la rancontre" />
        <link rel="icon" href="/icon.png" />
      </Head>

      <main>
          <DiapoPub />
          <Main />
          
      </main>
      <footer style={{height : 150}}>

      </footer>
    </div>
  )
}

export default Home
