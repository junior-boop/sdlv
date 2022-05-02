import React from "react"
import Style from "../styles/app.module.css"
import { CSSProperties } from 'react'

type containerProps = {
    children? : any,
    style? : CSSProperties | undefined,
}

export default function Container({ children, style }: containerProps){
    return(
        <div className={Style.container} style = {{...style}} >
            {children}
        </div>
    )
}