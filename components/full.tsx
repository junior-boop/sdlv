import { CSSProperties } from 'react'
import Style from '../styles/app.module.css' 

type full = {
    children? : any,
    style? :CSSProperties | undefined,
}

export function Full({ children, style }: full){
    return(
        <div className={Style.full} style = {{...style}}>
            { children }
        </div>
    )
}