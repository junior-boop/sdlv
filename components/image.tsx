import { CSSProperties } from 'react'
type ImageProps = {
    src : string | undefined,
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
            <div style={{height : '100%'}}>
                <img src={src} alt={alt} height = {height} width = {width} />
            </div> 
        </div>
    )
}