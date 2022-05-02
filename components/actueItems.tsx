import Image from "next/image";
import { Titre } from "./texte";
import Style from '../styles/app.module.css'
import Touchable from "./Touchable";
import { futimesSync } from "fs";

export function ActuItem(){
    return(
        <Touchable href={'/actus'} className={Style.actu} style={{width : 450, height : 450, display : 'flex', justifyContent : 'center', alignItems : 'center', position : 'relative', borderRadius : 12, overflow : 'hidden'}}>
            <div style={{width : '100%', height : '100%',  position : 'relative', overflow : 'hidden', display : 'flex', justifyContent : 'center', alignItems : 'center', zIndex : 0}}>
                <img src = {'/salah.jpg'} height = {'100%'}  />
            </div>
            <div style={{width : 450, height : 225, display : 'flex',  alignItems : 'flex-start', position : 'absolute', bottom : 0, left : 0, backgroundImage : "linear-gradient(transparent, black)", padding : '0 24px', }}>
                <div>
                    <div style={{display : "flex", flexDirection : 'row', paddingBottom : 5}}>
                        <div style={{fontSize : 14, fontWeight : 900, color : '#383200', padding : 5, backgroundColor : '#ffe600'}}>
                            BALLON D'OR
                        </div>
                    </div>
                    <div>
                        <Titre style={{fontSize : 36, width : 275, color : 'white'}}>
                            Mohamed Salah et le Ballon D'Or
                        </Titre>
                    </div>
                    <div style={{fontSize : 14, fontWeight : 400, color : 'white', width : 320, padding : '10px 0'}}>
                        Dans une liste de cinq pretendants au trone du meilleur football mondial, le nom de Salah apparait en dernier !
                    </div>
                    <div style={{fontSize : 12, fontWeight : 200, color : 'white', width : 320}}>
                        Publier le 15 Avril - Par Suzanne Lobe
                    </div>
                </div>
            </div>
            <div></div>
        </Touchable>
    )
}


export function MiniActuItem(){
    return(
        <Touchable href={'/actus'} className={Style.actu} style={{width : 250, height : '450px', overflow : 'hidden', borderRadius : 12, border : "1px solid #eee", backgroundColor : 'white'}}>
            <div style={{width : 250, height : 250, display : 'flex', alignItems : 'center', justifyContent : 'center', position : 'relative'}}>
                <img src={'/ten Hag.jpg'} alt="rien"  height={250} />
                <div style={{position : 'absolute', bottom : 0, left : 0, height : 50, width : "100%", display : 'flex', alignItems : 'flex-start', justifyContent : 'center', flexDirection : "column", padding : "0 12px"}}>
                    <div style={{padding : 5, backgroundColor : "purple", color : 'white', fontSize : 12, textTransform : 'uppercase'}}>
                        Premier league
                    </div>
                </div>
            </div>

            <div>
                <div style={{padding : 12}}>
                    <Titre style={{fontSize : 24, width : 220, color : 'black', }}>
                        ERIK TEN HAG, <br/> Va-t-il changer le "Game" ?
                    </Titre>
                </div>
                <div style={{fontSize : 14, fontWeight : 400, width : '100%', padding : '0 12px 0 12px'}}>
                        Dans une liste de cinq pretendants au trone du football mondial, le nom de Salah apparait en dernier !
                </div>
                
            </div>
        </Touchable>
    )
}

export function HorizontalMiniActuItem(){
    return(
        <Touchable href={'/actus/erik-ten-hag-va-t-il-changer-le-game'} className={Style.actu} >
            <div style={{width : 450, height : 150, display : "flex", marginTop : 24}}>
                <div style={{ width : 300, }}>
                    <div style={{padding : 5, backgroundColor : "purple", color : 'white', fontSize : 12, textTransform : 'uppercase', display : "inline-block", marginBottom : 12}}>
                        Premier league
                    </div>
                    <div style={{paddingBottom: 12}}>
                        <Titre style={{fontSize : 24, width : 270, color : 'black', }}>
                            ERIK TEN HAG, <br/> Va-t-il changer le "Game" ?
                        </Titre>
                    </div>
                    <div style={{fontSize : 14, fontWeight : 400, width : '90%'}}>
                            Dans une liste de cinq pretendants au trone du football mondial, le nom de Salah apparait en dernier !
                    </div>
                </div>
                <div style={{width : 150, height : 150, overflow : 'hidden', borderRadius : 9, border : "1px solid #eee"}}>
                    <div style={{width : 150, height : 150, display : 'flex', alignItems : 'center', justifyContent : 'center', position : 'relative'}}>
                        <img src={'/ten hag.jpg'} alt="coach" height={150} />
                    </div>
                </div>
            </div>
        </Touchable>
    )
}

