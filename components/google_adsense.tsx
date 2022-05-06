import Script from 'next/script';
import {useEffect} from 'react'

interface GoogleAdsense {

}
export enum AdType {
    DEFAULT,
    ARTICLE,
    VERTICAL,
  }
  


export function BlockPubLarge(){
    useEffect(() => {
        try{
            //@ts-ignore
            (window.adsbygoogle = window.adsbygoogle || []).push({
                // google_ad_client: '1899219914731834',
            });
        } catch (error : any) {
            console.log('Il y a une Erreur dans la connexion : ' , error.message )
        }
    })
    return(
        <div style={{width : 750, height : 150, backgroundColor : '#5552'}}>
            <ins className="adsbygoogle"
                style={{display:"inline-block", width:"750px", height:"150px"}}
                data-ad-client="ca-pub-1899219914731834"
                data-ad-slot="3712114725"
                data-ad-format="auto"
                data-full-width-responsive="true">
            </ins>
        </div>
    )
}