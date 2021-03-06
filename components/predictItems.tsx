import { Card } from './card';
import { Images } from './image';
import Touchable from './Touchable';
import {UI} from './constant'

import {CSSProperties} from 'react'



type PredicItempsProps = { 
    style? : CSSProperties | undefined,
}


export function PredicItemps({ style }: PredicItempsProps){
    let ui = UI().fonts
    let predicItem = UI().predictableItems
    let p = UI().padding
    return(
        <Touchable href = {'/pronostic/123343'} style={{minHeight : predicItem.minHeight, width : '100%', border : '1px solid #eee', borderRadius : ui.littleText, padding : ui.littleText, ...style}}>
            <div style={{fontSize : ui.littleText, fontWeight : 300, color: "silver"}}>Date of de Day</div>
            <div style={{fontSize : ui.normalText, fontWeight : 500, color: "#444"}}>{'Man. City'} - {'Watford'}</div>
            <div style={{fontSize : p * 2.6, padding : `${p}px 0 0 0`, display : "flex"}}>
                <div style={{ borderRadius : ui.littleText, fontWeight : 600,backgroundColor : '#ff3e3e', color : 'white', padding : '5px 10px', marginRight : p}}>
                    <div>
                       + 2.5 buts
                    </div>
                </div>
                <div style={{ borderRadius : ui.littleText, fontWeight : 900, backgroundColor : '#ff3e3e33', padding : `${p}px ${ui.littleText}px`, color : "#ff3e3e"}}>
                    <div>
                      1X
                    </div>
                </div>
            </div>
        </Touchable>
    )
}

type BigPredicItemProps = {
    data? : any,
} 


export function BigPredicItem ({data}: BigPredicItemProps){

    let {receiver, Guest, championat, logoLeague, date}: any = data
    let  {shot, possession, defences, match} = data.stats
    let {fistPronotic, secondPronostic} = data.pronostic

    let ui = UI().predictableItems
    let font = UI().fonts
    let p = UI().padding

    return(
       <Card
        href={'/pronostic/1234434'}
        style={{ border : '1px solid #eee', display : 'inline-flex', width : ui._200px, position : 'relative', justifyContent : 'center', height : 'auto', borderRadius : font.littleText, paddingBottom : font.littleText}}
       >
               <Images src = {logoLeague} width = {font.BigTitle} style = {{ position : 'absolute', top : `-${p * 3.6}px`, display : "flex", justifyContent: 'center', left : '37.5%', width : 50, backgroundColor : 'white'}} />
           <div style={{display : 'flex', alignItems : 'flex-start', justifyContent : 'center', paddingTop : font.BigTitle, width : '100%'}}>
               
               <div  style={{display : 'flex', flexDirection : 'column', alignItems : 'center', width : '100%' }}>
                <div style={{fontSize : 11, fontWeight : 300, color: "silver"}}>{date}</div>
                    <div style={{fontSize : 14, fontWeight : 500, color: "#444"}}>{receiver} - {Guest}</div>
                    <div style={{height : 'auto', width : '100%', backgroundColor : '#e4e4e433', marginTop : 12, padding : '7px 0', borderBottom : '1px solid #e4e4e433', borderTop : '1px solid #e4e4e433 '}}>
                        <Quote dom = {shot.dom} ext = {shot.ext} title = "shot's efficience" winner = {shot.winner} />
                        <QuotePer pourcentDom={possession.dom} pourcentExt = {possession.ext} title ='Possession' />
                        <Quote title='Defences' dom = {defences.dom} ext = {defences.ext} winner = {defences.winner} />
                        <QuoteMatche title='Last Game' Matches = {match} />
                    </div>
                    <div style={{fontSize : 13, padding : "5px 0 0 0", display : "flex", paddingTop : 10}}>
                        <div style={{ borderRadius : 12.5, fontWeight : 600,backgroundColor : '#ff3e3e', color : 'white', padding : '5px 10px', marginRight : 5}}>
                            <div>
                            {fistPronotic}
                            </div>
                        </div>
                        <div style={{ borderRadius : 12.5, fontWeight : 900, backgroundColor : '#ff3e3e33', padding : '5px 10px', color : "#ff3e3e"}}>
                            <div>{secondPronostic}
                            </div>
                        </div>
                    </div>
               </div>
           </div>
       </Card>
    )
}


type quoteProps = {
    title  : string,
    dom? : number,
    ext? : number, 
    winner? : 'ext' | 'dom',
    pourcentDom? : number,
    pourcentExt? : number,
    Matches? : any
}

export function Quote({dom, ext, title, winner} : quoteProps){
    return(
        <div style={{display : 'flex', flexDirection : 'column', alignItems : 'center', width : '100%' }}>
            <span style={{fontSize : 11, fontWeight : 300, color: "silver"}}>{title}</span>
            <div style={{display : 'flex', marginTop : 5}}>
                <div>
                    <div style={{ borderRadius : 12.5, fontWeight : 400, width : 60 ,
                        backgroundColor : winner === 'dom'? '#40ff00' : 'transparent', 
                        color : winner === 'dom' ? '#003418' : 'black', 
                        display : "flex", justifyContent : 'center', alignItems : 'center',fontSize : 12, padding : 5}}>
                        <div>
                        { dom } / 10
                        </div>
                    </div>
                </div>
                <span style={{margin : '0 5px'}}> - </span>
                <div>
                    <div style={{ borderRadius : 12.5, fontWeight : 400, width : 60 , 
                        backgroundColor : winner === 'ext'? '#40ff00' : 'transparent', 
                        color : winner === 'ext' ? '#003418' : 'black', 
                        display : "flex", justifyContent : 'center', alignItems : 'center',fontSize : 12, padding : 5}}>
                        <div>
                        { ext } / 10
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export function QuotePer({pourcentDom, pourcentExt, title} : quoteProps){

    // const Pointer = () : CSSProperties => {
    //     let pointer = {
    //         dom : { color : 'black'},
    //         ext : { color : 'black'}
    //     }


    //     return pointer
    // }

    return(
        <div style={{display : 'flex', flexDirection : 'column', alignItems : 'center', width : '100%' }}>
            <span style={{fontSize : 11, fontWeight : 300, color: "silver"}}>{title}</span>
            <div style={{display : 'flex', marginTop : 5}}>
                <div>
                    <div style={{ borderRadius : 12.5, fontWeight : 400, width : 60 ,backgroundColor :  '#40ff00', color : '#003418', display : "flex", justifyContent : 'center', alignItems : 'center',fontSize : 12, padding : 5 }}>
                        <div>
                        { pourcentDom }%
                        </div>
                    </div>
                </div>
                <span style={{margin : '0 5px'}}> - </span>
                <div>
                    <div style={{ borderRadius : 12.5, fontWeight : 400, width : 60 , color : 'black', display : "flex", justifyContent : 'center', alignItems : 'center',fontSize : 12, padding : 5}}>
                        <div>
                        { pourcentExt }%
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

type ColorProps = {
    match? : 'win' | 'due' | 'lost', 
    key? : any
}


export function QuoteMatche({title, Matches} : quoteProps){

    let { dom, ext } = Matches

    const Match = ({match, key} : ColorProps) => {

        const color = () =>{
            switch (match) {
                case 'win':
                    return 'green';
                case 'due':
                    return 'silver';
                case 'lost':
                    return 'red';
            }
        }

        return(
            <span style = {{ height : 12, width : 12, backgroundColor : color(), marginLeft : 5,borderRadius : 6}}></span>
        )
    }


    return(
        <div style={{display : 'flex', flexDirection : 'column', alignItems : 'center', width : '100%' }}>
            <span style={{fontSize : 11, fontWeight : 300, color: "silver"}}>{title}</span>
            <div style={{display : 'flex', marginTop : 5}}>
                <div>
                    <div style={{ borderRadius : 12.5, fontWeight : 400, width : 70 , color : '#003418', display : "flex",alignItems : 'center',padding : 5}}>
                        {dom.map((el : any, key : number) => <Match match={el} key={key} />)}
                    </div>
                </div>
                <span style={{margin : '0 5px'}}> - </span>
                <div>
                    <div style={{ borderRadius : 12.5, fontWeight : 400, width : 70 , color : 'black', display : "flex", justifyContent : 'center', alignItems : 'center', flexDirection:'row-reverse', fontSize : 12, padding : 5}}>
                        {ext.map((el : any, key : number) => <Match match={el} key = {key} />)}
                    </div>
                </div>
            </div>
        </div>
    )
}