import { Card } from "./card";
import { Images } from "./image";
import Touchable from "./Touchable";

export function PredicItemps(){
    return(
        <Touchable href = {'/pronostic'} style={{minHeight : 70, width : '100%', border : '1px solid #eee', borderRadius : 12, marginBottom : 12 , padding : 12}}>
            <div style={{fontSize : 11, fontWeight : 300, color: "silver"}}>Date of de Day</div>
            <div style={{fontSize : 14, fontWeight : 500, color: "#444"}}>{'Man. City'} - {'Watford'}</div>
            <div style={{fontSize : 13, padding : "5px 0 0 0", display : "flex"}}>
                <div style={{ borderRadius : 12.5, fontWeight : 600,backgroundColor : '#ff3e3e', color : 'white', padding : '5px 10px', marginRight : 5}}>
                    <div>
                       + 2.5 buts
                    </div>
                </div>
                <div style={{ borderRadius : 12.5, fontWeight : 900, backgroundColor : '#ff3e3e33', padding : '5px 10px', color : "#ff3e3e"}}>
                    <div>
                      1X
                    </div>
                </div>
            </div>
        </Touchable>
    )
}


export function BigPredicItem (){
    return(
       <Card
        href={'/pronostic'}
        style={{ border : '1px solid #eee', display : 'inline-flex', width : 200, position : 'relative', justifyContent : 'center', height : 250, borderRadius : 12}}
       >
           <div>
               <Images src = {'/serie_a.png'} width = {36} style = {{ position : 'absolute', top : -18, display : "flex", justifyContent: 'center',left : '37.5%', width : 50, backgroundColor : 'white'}} />
               
               <div>

               </div>
           </div>
       </Card>
    )
}