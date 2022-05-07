import type { NextPage } from 'next'
import Head from 'next/head'
import Container from '../../components/container'
import { Full } from '../../components/full'
import DiapoPub from '../../Layouts/diapoPub'

const Actu: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Actus | SDLV</title>
        <meta name="description" content="Si Dieu Le Veut est un site web de prediction, de pronostic et d'actualité sportive. Elle a pour but d'apporter au parieur, à travers le monde les éléments necessaires pour effectuer des paries (stats, comparaisons, infos sur le/les match(s) et  Actualité en vironant la rancontre" />
        <link rel="icon" href="/icon.png" />
      </Head>


      <main>
          <DiapoPub />
          <Full>
            <Container>
              <div>
                
              </div>
            </Container>
          </Full>
      </main>
      <footer style={{height : 150}}>

      </footer>
    </div>
  )
}

export default Actu
