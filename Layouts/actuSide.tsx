import { ActuItem, HorizontalMiniActuItem } from "../components/actueItems";

export default function ActuSide(){
    return(
        <div style = {{width : '100%', alignItems : 'center', display : 'flex', flexDirection : 'column'}}>
            <div style = {{width : '450px', height: '58px', alignItems : 'center', display : 'flex', justifyContent : 'space-between'}}>
                <p style={{fontSize : 16, fontWeight : 700, color : '#666'}}>Infos pour les Parieurs</p>
                <p style={{fontSize : 16, fontWeight : 700, color : '#666'}}>plus</p>
            </div>
            <ActuItem />
            <HorizontalMiniActuItem />
            <HorizontalMiniActuItem />
            <ActuItem />
            <div style={{width : 450, height : 150, margin : '24px 0', backgroundColor : '#ddd'}}></div>
            <ActuItem />
            <HorizontalMiniActuItem />

        </div>
    )
}