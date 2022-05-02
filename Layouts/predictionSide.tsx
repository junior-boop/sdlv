import { PredicItemps } from '../components/predictItems'
import { Titre } from '../components/texte'
import Style from '../styles/app.module.css'

export function PredictableSide (){
    return(
        <div className={Style.prediction}>
            <div>
                <div style = {{width : '250px', height: '58px', alignItems : 'center', display : 'flex', justifyContent : 'space-between'}}>
                    <p style={{fontSize : 16, fontWeight : 700, color : '#666'}}>Les plus attendu</p>
                </div>
                <PredicItemps />
                <PredicItemps />
                <PredicItemps />
            </div>
            <div>
                <div style = {{width : '250px', height: '58px', alignItems : 'center', display : 'flex', justifyContent : 'space-between'}}>
                    <p style={{fontSize : 16, fontWeight : 700, color : '#666'}}>Queques un en plus</p>
                </div>
                <PredicItemps />
                <PredicItemps />
                <PredicItemps />
                <PredicItemps />
                <PredicItemps />
                <PredicItemps />
            </div>
        </div>
    )
}

