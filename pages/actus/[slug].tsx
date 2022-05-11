import type { NextPage } from 'next'
import Head from 'next/head'
import Container from '../../components/container'
import { Full } from '../../components/full'
import Style from '../../styles/app.module.css'
import {UI} from '../../components/constant'
import { PredicItemps } from '../../components/predictItems'
import { Titreimage } from '../pronostic'
import { Titre } from '../../components/texte'

const Home: NextPage = () => {
  let ui = UI()
  let heightPub = ui.miniActuItemUI.height
  return (
    <div>
      <Head>
        <title>SDLV</title>
        <meta name="description" content="Si Dieu Le Veut est un site web de prediction, de pronostic et d'actualité sportive. Elle a pour but d'apporter au parieur, à travers le monde les éléments necessaires pour effectuer des paries (stats, comparaisons, infos sur le/les match(s) et  Actualité en vironant la rancontre" />
        <link rel="icon" href="/icon.png" />
      </Head>

      <main>
          <Full style = {{
            padding : `${ui.fonts._16px}px 0`
          }}>
            <Container>
              <div style = {{
                display : 'grid',
                width : "100%",
                gridTemplateColumns : `25% 1fr ${ui.miniActuItemUI.width}px`
              }}>
                <div >
                  <div>
                    <div style={{
                      padding : ui.fonts._16px,
                      display : 'flex',
                      flexDirection : 'column',
                      alignItems : 'center',
                      border : '1px solid #eee',
                      marginBottom : ui.fonts._16px,
                      height : ui.miniActuItemUI.height,
                      marginTop : ui.fonts._16px,
                      borderRadius : ui.fonts.littleText
                    }}>
                      <p style={{ marginTop : 0}}>Stat du Match</p>
                      <div>
                        
                      </div>
                    </div>
                  </div>
                  <div style={{
                  backgroundColor : '#efefef66',
                  borderRadius : ui.fonts.littleText,
                  padding : ui.fonts._16px,
                  position : 'sticky',
                  top : ui.fonts._16px + 62
                }} >
                    <div>
                      <p style = {{ marginTop : 0, fontWeight : '700'}}>Competitions</p>
                      <ul className= {Style.competitions} >
                        <li>Angleterre</li>
                        <li>
                          Espagne
                        </li>
                        <li>Allemagne</li>
                        <li>Italie</li>
                        <li>France</li>
                        <li>Champions league</li>
                        <li>Europa League</li>
                        <li>Europa Conference League</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div style={{display : 'flex', flexDirection : 'column', alignItems : 'center', marginTop : ui.fonts._16px}}>
                  <div style={{
                      width : ui.actuItemUI.width,
                    }}>
                    <div style={{
                      width : ui.actuItemUI.width,
                      height : ui.actuItemUI.width,
                      borderRadius : ui.fonts._16px,
                      border : '0.5px solid #eee',
                      overflow : 'hidden',
                    }}>
                      <div style={{ width : '100%', height : '100%'}}>
                        <img src="/salah.jpg" alt="salah" height={'100%'}/>
                      </div>
                    </div>
                    <div>
                        <div style={{ display : 'flex', alignItems : 'center', justifyContent : 'center', margin : `${ui._50px}px 0` }}>
                            <Titre style={{fontSize : ui._50px}}>le titre de l'article</Titre>
                        </div>
                      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati tenetur quisquam repellendus quam debitis qui. Reiciendis accusantium omnis excepturi quidem velit commodi architecto. Consequatur, officiis maiores at quaerat quisquam sint! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam saepe nostrum, ea recusandae ad corrupti dicta! Dicta, quisquam perferendis quasi nihil velit fugit, neque autem illo, soluta officiis voluptates?</p>
                      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati tenetur quisquam repellendus quam debitis qui. Reiciendis accusantium omnis excepturi quidem velit commodi architecto. Consequatur, officiis maiores at quaerat quisquam sint! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam saepe nostrum, ea recusandae ad corrupti dicta! Dicta, quisquam perferendis quasi nihil velit fugit, neque autem illo, soluta officiis voluptates?</p>
                      <h3>Stats</h3>
                      <div style={{
                        width : '100%',
                        height : 1000,
                        backgroundColor : '#eee',
                        marginBottom : ui.fonts._16px
                      }} >

                      </div>
                      <div style={{
                        width : ui.actuItemUI.width,
                        height : '7.5vw',
                        borderRadius : ui.fonts._16px,
                        border : '0.5px solid #eee',
                      }}>
                        <div>
                          
                        </div>
                      </div>
                    </div>
                  </div>
                  
                </div>
                <div>
                  <div style = {{width : '100%', height : heightPub, backgroundColor : 'silver', marginTop : ui.fonts._16px, position : 'sticky', top : ui.fonts._16px + 62, }}>

                  </div>
                </div>
              </div>
            </Container>
          </Full>
          <Full style={{
            backgroundColor : '#00E8FA05',
            padding : `${ui.fonts._16px}px 0`,
          }}>
            <Container style={{flexDirection : 'column'}}>
              <div>
                <h3>Quelque dernieres etudes</h3>
              </div>
              <div style = {{
                display : 'grid',
                gridTemplateColumns : 'repeat(4, 1fr)',
                gap : ui.fonts.littleText,
                width : '100%',
                marginBottom : ui.fonts._16px
              }}>
              <PredicItemps style={{ backgroundColor : 'white', boxShadow : '0 0 12px -12px #3337'}} />
              <PredicItemps style={{ backgroundColor : 'white', boxShadow : '0 0 12px -12px #3337'}} />
              <PredicItemps style={{ backgroundColor : 'white', boxShadow : '0 0 12px -12px #3337'}} />
              <PredicItemps style={{ backgroundColor : 'white', boxShadow : '0 0 12px -12px #3337'}} />
              <PredicItemps style={{ backgroundColor : 'white', boxShadow : '0 0 12px -12px #3337'}} />
              <PredicItemps style={{ backgroundColor : 'white', boxShadow : '0 0 12px -12px #3337'}} />
              <PredicItemps style={{ backgroundColor : 'white', boxShadow : '0 0 12px -12px #3337'}} />
              <PredicItemps style={{ backgroundColor : 'white', boxShadow : '0 0 12px -12px #3337'}} />
              </div>
            </Container>
          </Full>
      </main>
      <footer style={{height : 150}}>

      </footer>
    </div>
  )
}

export default Home
