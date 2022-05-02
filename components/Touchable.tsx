import Link from "next/link";
import React, {CSSProperties, DetailedHTMLProps} from 'react'
import {UrlObject} from 'url'

declare type Url = string | UrlObject

type ToucahbleProps = {
    children? : any, 
    style? : CSSProperties | undefined,
    href : Url,
    className? : string | undefined
}

function Touchable ({ children, style, href, className}: ToucahbleProps){
    return(
        <Link 
            href = {href}
        ><a className = {className}>
            <div style={{...style}}>
                {children}
            </div>
        </a>
        </Link>
    )
}

export default Touchable;