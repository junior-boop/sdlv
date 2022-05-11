import React from "react"
import Style from "../styles/app.module.css"
import { CSSProperties } from 'react'
import {UI} from '../components/constant'

type containerProps = {
    children? : any,
    style? : CSSProperties | undefined,
}

export default function Container({ children, style }: containerProps){
    const width = UI().container
    return(
        <div className={Style.container} style = {{width : width, ...style}} >
            {children}
        </div>
    )
}