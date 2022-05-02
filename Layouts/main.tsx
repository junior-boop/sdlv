import { MiniActuItem } from "../components/actueItems";
import Container from "../components/container";
import { Full } from "../components/full";
import Style from '../styles/app.module.css'
import ActuSide from "./actuSide";
import { PredictableSide } from "./predictionSide";

export default function Main(){
    return(
        <Full style={{ marginTop : 12}}>
            <Container style={{alignItems : 'flex-start', height : 'auto'}}>
                <div className={Style.mainGrid}>
                    <PredictableSide />
                    <ActuSide/>
                    <div style={{width : '100%', display : "flex", alignItems : 'flex-end', flexDirection:'column'}}>
                        <div style = {{width : '250px', height: '58px', alignItems : 'center', display : 'flex', justifyContent : 'space-between'}}>
                            <p style={{fontSize : 16, fontWeight : 700, color : '#666'}}></p>
                            <p style={{fontSize : 16, fontWeight : 700, color : '#666'}}>A lire</p>
                        </div>
                        <MiniActuItem />
                        <div style = {{width : '250px', height: '500px', alignItems : 'center', display : 'flex', justifyContent : 'center', backgroundColor : '#eee', marginTop : 16 }}>

                        </div>
                    </div>
                </div>
            </Container>
        </Full>
    )
}