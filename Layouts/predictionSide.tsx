import { PredicItemps } from '../components/predictItems'
import { Titre } from '../components/texte'
import Style from '../styles/app.module.css'
import {UI} from '../components/constant'

export function PredictableSide (){
    let ui = UI().fonts
    return(
        <div className={Style.prediction}>
            <div>
                <div style = {{width : '100%', height: '58px', alignItems : 'center', display : 'flex', justifyContent : 'space-between'}}>
                    <p style={{fontSize : ui._16px, fontWeight : 700, color : '#666'}}>Les plus attendu</p>
                </div>
                <PredicItemps style={{marginBottom : ui.littleText}} />
                <PredicItemps style={{marginBottom : ui.littleText}} />
                <PredicItemps style={{marginBottom : ui.littleText}} />
            </div>
            <div>
                <div style = {{width : '250px', height: '58px', alignItems : 'center', display : 'flex', justifyContent : 'space-between'}}>
                    <p style={{fontSize : ui._16px, fontWeight : 700, color : '#666'}}>Queques un en plus</p>
                </div>
                <PredicItemps style={{marginBottom : ui.littleText}} />
                <PredicItemps style={{marginBottom : ui.littleText}} />
                <PredicItemps style={{marginBottom : ui.littleText}} />
                <PredicItemps style={{marginBottom : ui.littleText}} />
                <PredicItemps style={{marginBottom : ui.littleText}} />
                <PredicItemps style={{marginBottom : ui.littleText}} />
                
            </div>
        </div>
    )
}

