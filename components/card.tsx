import Link from "next/link"
import { CSSProperties } from "react"
import { UrlObject } from "url"
import ClassName from '../styles/app.module.css'

declare type Url = string | UrlObject

type CardProps = {
    children? : any,
    style? : CSSProperties | undefined,
    href : Url 
}

export function Card({ children, style, href}: CardProps){
    return(
        <div className={ClassName.card} >
            <Link
            href = {href}
            ><a>
                <div style = {{...style}}>
                    { children }
                </div>
            </a>
            </Link>
        </div>
    )
}