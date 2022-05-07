import type { NextPage } from 'next'
import Head from 'next/head'
import { MiniActuItem } from '../components/actueItems'
import DiapoPub from '../Layouts/diapoPub'
import Main from '../Layouts/main'

import {log, useWindowSize, UI} from '../components/constant'


log('tres bien')

const Home: NextPage = () => {

  const window = useWindowSize()

  let ui = UI()
  console.log(window, ui)
  
  return (
    <div>
      <Head>
        <title>SDLV | Pronostic Website</title>
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
