import Style from '../styles/app.module.css'
import {CSSProperties} from 'react'

type Titre = {
    children? : any;
    style? : CSSProperties | undefined;
}

export function Titre ( { children, style } : Titre){
    return (
        <p className={Style.titre} style = {{ ...style }}> { children } </p>
    )
}