import type { NextPage } from 'next'
import Head from 'next/head'
import { MiniActuItem } from '../../components/actueItems'
import Container from '../../components/container'
import { Full } from '../../components/full'
import { BigPredicItem, PredicItemps } from '../../components/predictItems'
import DiapoPub from '../../Layouts/diapoPub'
import Style from '../styles/Home.module.css'

const Pronostic: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Pronostic | S-D-L-V</title>
        <meta name="description" content="Si Dieu Le Veut est un site web de prediction, de pronostic et d'actualité sportive. Elle a pour but d'apporter au parieur, à travers le monde les éléments necessaires pour effectuer des paries (stats, comparaisons, infos sur le/les match(s) et  Actualité en vironant la rancontre" />
        <link rel="icon" href="/icon.png" />
      </Head>

      <main>
        <DiapoPub />
        <Full style={{marginTop : 16}}>
          <Container style={{alignItems : 'flex-start'}}>
            <div style={{
              display : 'grid',
              gridTemplateColumns : '1fr 25%', 
              width : '100%'
            }}>
              <div>
                <div>
                  <div style = {{width : '100%', height: '58px', alignItems : 'center', display : 'flex', justifyContent : 'space-between'}}>
                      <p style={{fontSize : 16, fontWeight : 700, color : '#666'}}>Le Top </p>
                  </div>
                  <div style={{display : 'flex' }}>
                    <BigPredicItem />
                    <BigPredicItem />
                    <BigPredicItem />
                    <BigPredicItem />
                  </div>
                  <div>
                    <div style = {{width : '100%', height: '58px', alignItems : 'center', display : 'flex', justifyContent : 'space-between'}}>
                        <p style={{fontSize : 16, fontWeight : 700, color : '#666'}}>Championat Anglais </p>
                    </div>
                    <div style={{display : 'flex', justifyContent : 'flex-start', alignItems : 'center', width : '100%'}}>
                      <div style = {{display : 'grid', gridTemplateColumns : 'repeat(3, 1fr)', gap : 12, width : '96%'}}>
                      <PredicItemps />
                      <PredicItemps />
                      <PredicItemps />
                      <PredicItemps />
                      <PredicItemps />
                      <PredicItemps />
                      <PredicItemps />
                      <PredicItemps />
                      <PredicItemps />
                      <PredicItemps />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div style = {{width : '100%', height: '58px', alignItems : 'center', display : 'flex', justifyContent : 'space-between'}}>
                        <p style={{fontSize : 16, fontWeight : 700, color : '#666'}}>Championat Espagnol </p>
                    </div>
                    <div style={{display : 'flex', justifyContent : 'flex-start', alignItems : 'center', width : '100%'}}>
                      <div style = {{display : 'grid', gridTemplateColumns : 'repeat(3, 1fr)', gap : 12, width : '96%'}}>
                      <PredicItemps />
                      <PredicItemps />
                      <PredicItemps />
                      <PredicItemps />
                      <PredicItemps />
                      <PredicItemps />
                      <PredicItemps />
                      <PredicItemps />
                      <PredicItemps />
                      <PredicItemps />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{width : '100%', backgroundColor : '#eee3', paddingBottom : '16px'}}>
              <div style={{width : '100%', display : "flex", alignItems : 'center', flexDirection:'column'}}>
                    <div style = {{width : '250px', height: '58px', alignItems : 'center', display : 'flex', justifyContent : 'space-between'}}>
                        <p style={{fontSize : 16, fontWeight : 700, color : '#666'}}></p>
                        <p style={{fontSize : 16, fontWeight : 700, color : '#666'}}>A lire</p>
                    </div>
                    <MiniActuItem />
                    <div style = {{width : '250px', height: '500px', alignItems : 'center', display : 'flex', justifyContent : 'center', backgroundColor : '#eee', marginTop : 16 }}>

                    </div>
                </div>
              </div>

          </div>
          </Container>
        </Full>


      </main>
      <footer style={{height : 150}}>

      </footer>
    </div>
  )
}

export default Pronostic
