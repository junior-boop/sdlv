import Script from "next/script";
import { ActuItem, HorizontalMiniActuItem } from "../components/actueItems";
import {UI} from '../components/constant'

export default function ActuSide(){

    let ui = UI().actuItemUI
    let font = UI().fonts

    return(
        <div style = {{width : '100%', alignItems : 'center', display : 'flex', flexDirection : 'column'}}>
            <div style = {{width : ui.width , height: '58px', alignItems : 'center', display : 'flex', justifyContent : 'space-between'}}>
                <p style={{fontSize : font._16px, fontWeight : 700, color : '#666'}}>Infos pour les Parieurs</p>
                <p style={{fontSize : font._16px, fontWeight : 700, color : '#666'}}>plus</p>
            </div>
            <ActuItem />
            <HorizontalMiniActuItem />
            <HorizontalMiniActuItem />
            <ActuItem />
            <div style={{width : ui.width, height : ui._150px, margin : `${font.LittleTitle}px 0`, backgroundColor : '#ddd'}}>
                
            </div>
            <ActuItem />
            <HorizontalMiniActuItem />

        </div>
    )
}