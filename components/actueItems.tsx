import { Titre } from './texte';
import Style from '../styles/app.module.css';
import Touchable from './Touchable';
import { Images } from './image';

import { UI } from './constant';

export function ActuItem(){

    const actuItem = UI().actuItemUI
    const font = UI().fonts
    let p = UI().padding

    return(
        <Touchable href={'/actus'} className={Style.actu} style={{width : actuItem.width, height : actuItem.height, display : 'flex', justifyContent : 'center', alignItems : 'center', position : 'relative', borderRadius : UI().radui, overflow : 'hidden'}}>
            <div style={{width: '100%', height : '100%',  position : 'relative', overflow : 'hidden', display : 'flex', justifyContent : 'center', alignItems : 'center', zIndex : 0}}>
                <Images src = {'/salah.jpg'} height = {'100%'} style ={{height : '100%'}} />
            </div>
            <div style={{width : actuItem.width, height : actuItem.heightMask, display : 'flex',  alignItems : 'flex-start', position : 'absolute', bottom : 0, left : 0, backgroundImage : "linear-gradient(transparent, black)", padding : `0 ${UI().fonts.littleText*2}px`, }}>
                <div>
                    <div style={{display : "flex", flexDirection : 'row', paddingBottom : p}}>
                        <div style={{fontSize : font.normalText, fontWeight : 900, color : '#383200', padding : p, backgroundColor : '#ffe600'}}>
                            BALLON D'OR
                        </div>
                    </div>
                    <div>
                        <Titre style={{fontSize : font.BigTitle, width : '70%', color : 'white'}}>
                            Mohamed Salah et le Ballon D'Or
                        </Titre>
                    </div>
                    <div style={{fontSize : font.normalText, fontWeight : 400, color : 'white', width : '75%', padding : `${p*2}px 0`}}>
                        Dans une liste de cinq pretendants au trone du meilleur football mondial, le nom de Salah apparait en dernier !
                    </div>
                    <div style={{fontSize : font.littleText, fontWeight : 200, color : 'white', width : '75%'}}>
                        Publier le 15 Avril - Par Suzanne Lobe
                    </div>
                </div>
            </div>
            <div></div>
        </Touchable>
    )
}


export function MiniActuItem(){

    const ui = UI().miniActuItemUI
    const font = UI().fonts
    let p = UI().padding

    return(
        <Touchable href={'/actus'} className={Style.actu} style={{width : ui.width, height : ui.height, overflow : 'hidden', borderRadius : font.littleText, border : "1px solid #eee", backgroundColor : 'white'}}>
            <div style={{width : ui.widthImg, height : ui.heightImg, display : 'flex', alignItems : 'center', justifyContent : 'center', position : 'relative'}}>
                <img src={'/ten Hag.jpg'} alt="rien"  height={ui.heightImg} />
                <div style={{position : 'absolute', bottom : 0, left : 0, height : UI()._50px, width : "100%", display : 'flex', alignItems : 'flex-start', justifyContent : 'center', flexDirection : "column", padding : `0 ${font.littleText}px`}}>
                    <div style={{padding : p, backgroundColor : "purple", color : 'white', fontSize : font.littleText, textTransform : 'uppercase'}}>
                        Premier league
                    </div>
                </div>
            </div>

            <div>
                <div style={{padding : font.littleText}}>
                    <Titre style={{ fontSize:font.LittleTitle, width : '90%', color : 'black', }}>
                        ERIK TEN HAG, <br/> Va-t-il changer le "Game" ?
                    </Titre>
                </div>
                <div style={{fontSize : font.normalText, fontWeight : 400, width : '100%', padding : `0 ${font.littleText}px`}}>
                        Dans une liste de cinq pretendants au trone du football mondial, le nom de Salah apparait en dernier !
                </div>
                
            </div>
        </Touchable>
    )
}

export function HorizontalMiniActuItem(){
    const ui = UI().horizontalActuItemUI
    const font = UI().fonts
    let p = UI().padding
    return(
        <Touchable href={'/actus/erik-ten-hag-va-t-il-changer-le-game'} className={Style.actu} >
            <div style={{width : ui.width , height : ui.height, display : "flex", marginTop : font.LittleTitle}}>
                <div style={{ width : ui.widthContent }}>
                    <div style={{padding : p, backgroundColor : "purple", color : 'white', fontSize : font.littleText, textTransform : 'uppercase', display : "inline-block", marginBottom : font.littleText}}>
                        Premier league
                    </div>
                    <div style={{paddingBottom: font.littleText}}>
                        <Titre style={{ fontSize:font.LittleTitle,  width : '90%', color : 'black', }}>
                            ERIK TEN HAG, <br/> Va-t-il changer le "Game" ?
                        </Titre>
                    </div>
                    <div style={{fontSize : font.normalText, fontWeight : 400, width : '90%'}}>
                            Dans une liste de cinq pretendants au trone du football mondial, le nom de Salah apparait en dernier !
                    </div>
                </div>
                <div style={{width : ui.widthImg, height : ui.heightImg, overflow : 'hidden', borderRadius : 9, border : "1px solid #eee"}}>
                    <div style={{width : ui.widthImg, height : ui.heightImg, display : 'flex', alignItems : 'center', justifyContent : 'center', position : 'relative'}}>
                        <img src={'/ten Hag.jpg'} alt="coach" height={ui.heightImg} />
                    </div>
                </div>
            </div>
        </Touchable>
    )
}

