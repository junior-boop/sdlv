import { Full } from '../components/full'
import Style from '../styles/app.module.css'
import Script from 'next/script'

export default function DiapoPub(){
    return(
        <Full style={{ backgroundColor : '#ddd2', height : 200}}>
            <div style={{width : 750, height : 150, backgroundColor : '#5552'}}>
            <ins className="adsbygoogle"
                style={{display:"inline-block", width:"750px", height:"150px"}}
                data-ad-client="ca-pub-1899219914731834"
                data-ad-slot="3712114725"></ins>
            <Script>
                (adsbygoogle = window.adsbygoogle || []).push({});
            </Script>
            </div>
        </Full>
    )
}