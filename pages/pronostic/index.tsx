import type { NextPage } from 'next'
import Head from 'next/head'
import { MiniActuItem } from '../../components/actueItems'
import Container from '../../components/container'
import { Full } from '../../components/full'
import { Images } from '../../components/image'
import { BigPredicItem, PredicItemps } from '../../components/predictItems'
import DiapoPub from '../../Layouts/diapoPub'
import Style from '../styles/Home.module.css'


const dataType = {
  championat : 'Premier League',
  logoLeague : '/epl.png',
  receiver : 'Man. City',
  Guest : 'Watfort',
  date : 'aujourd\'hui',
  pronostic : {
      fistPronotic : '+ 2.5 Goals',
      secondPronostic : '1X',
  },
  stats :{
      shot : {
          dom : 3.5,
          ext : 5.5,
          winner : 'ext'
      },
      possession : {
          dom : 65,
          ext : 55,
          winner : 'dom'
      },
      defences : {
          dom : 1.5,
          ext : 2.4,
          winner : 'dom'
      },
      match : {
          dom : ['win', 'win', 'due', 'win', 'lost'],
          ext : ['win', 'lost', 'due', 'win', 'win']
      }
  }
}


const Pronostic: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Pronostic | SDLV</title>
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
                    <BigPredicItem data={dataType} />
                    <BigPredicItem data={dataType}/>
                    <BigPredicItem data={dataType}/>
                    <BigPredicItem data={dataType}/>
                  </div>
                  <div>
                  <Titreimage img='/epl.png' title='Championat Anglais' />
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
                  <Titreimage img='/laliga.png' title='Championat Espagnol' />
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


type TitreimageProps = {
  img : string,
  title: string,
}

export function Titreimage({img, title}: TitreimageProps){
  return(
    <div style = {{width : '23vw', height: '58px', alignItems : 'center', display : 'flex', justifyContent : 'flex-start', margin : '18px 0 0 '}}>
        <Images src = {img}  width = {36} style = {{backgroundColor : 'white'}}  />
        <p style={{fontSize : 16, fontWeight : 700, color : '#666', marginLeft : 12}}>{title}</p>
    </div> 
  )
}