import { MiniActuItem } from "../components/actueItems";
import Container from "../components/container";
import { Full } from "../components/full";
import Style from '../styles/app.module.css'
import ActuSide from "./actuSide";
import { PredictableSide } from "./predictionSide";
import { UI } from '../components/constant'

export default function Main(){

    const ui = UI().miniActuItemUI
    
    return(
        <Full style={{ marginTop : 12}}>
            <Container style={{alignItems : 'flex-start', height : 'auto'}}>
                <div className={Style.mainGrid} style = {{ gridTemplateColumns : `25% 1fr ${ui.heightImg}px`}}>
                    <PredictableSide />
                    <ActuSide/>
                    <div style={{width : '100%', display : "flex", alignItems : 'flex-end', flexDirection:'column'}}>
                        <div style = {{width : '250px', height: '58px', alignItems : 'center', display : 'flex', justifyContent : 'space-between'}}>
                            <p style={{fontSize : 16, fontWeight : 700, color : '#666'}}></p>
                            <p style={{fontSize : 16, fontWeight : 700, color : '#666'}}>A lire</p>
                        </div>
                        <MiniActuItem />
                        <div style = {{position :'sticky', top: 80 ,width : '250px', height: '500px', alignItems : 'center', display : 'flex', justifyContent : 'center', backgroundColor : '#eee', marginTop : 16 }}>

                        </div>
                    </div>
                </div>
            </Container>
        </Full>
    )
}