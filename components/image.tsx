import { CSSProperties } from "react"
import Image from 'next/image'
type ImageProps = {
    src : string,
    alt? : string,
    width? : number | string | undefined,
    height? : number | string | undefined,
    style? : CSSProperties | undefined,
    radius? : boolean, 
    className? : any
}

export function Images({className, src, alt, width, height, style, radius}:ImageProps){


    let Radius = radius ? 12 : 0

    return(
        <div style={{borderRadius : Radius, ...style}}>
            <div>
                <Image src={src} alt={alt} height = {height} width = {width} layout = 'fill' />
            </div> 
        </div>
    )
}