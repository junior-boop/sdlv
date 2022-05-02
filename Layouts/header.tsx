import Image from "next/image";
import Link from "next/link";
import Router, { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Container from "../components/container";
import Style from '../styles/app.module.css'


export default function Header(){
    let [accueil, setAccueil] = useState(false)
    let [pronostic, setPronostic] = useState(false)
    let [actus, setActus] = useState(false)
    let [contact, setContact] = useState(false)
    
    let route = useRouter().route;

    useEffect(() => {
       switch (route) {
            case '/':
                setAccueil(true);
                setContact(false)
                setPronostic(false)
                setActus(false)
            case '/pronostic':
                setAccueil(false);
                setContact(false)
                setPronostic(true)
                setActus(false)

            case '/actus' :
                setAccueil(false);
                setContact(false)
                setPronostic(false)
                setActus(true)

            case 'contact':
                setAccueil(false);
                setContact(true)
                setPronostic(false)
                setActus(false)
       }

    })

    const Active = () => {
        if(accueil){
            console.log('vrai')
            return { borderBottom : '5px solid #ff3e3e' }
        } else {
            return 
        }
    }

    return(
        <header>
            <div>
                <Container>
                    <div className={Style.containerInner}>
                    <div className={Style.logo}>
                       <div className={Style.logoCase}>
                       <Image 
                            src = {'/logo.png'}
                            width = {36}
                            height = {36}
                            layout = 'fill'
                        />
                       </div>
                    </div>
                    <div className={Style.menu}>
                        <ul>
                            <Link href={'/'}><a><li style={Active()}>Accueil</li></a></Link>
                            <Link href={'/pronostic'}><a><li>Pronostic</li></a></Link>
                            <Link href={'/actus'}><a><li>Actus</li></a></Link>
                            <Link href={'/contact'}><a><li>Contacts</li></a></Link>
                        </ul>
                    </div>
                    <div>
                        <div className={Style.genius}>
                            <Link href = 'htts://www.geniusOfDigital.vercle.app'><a><p>#geniusOfDigital</p></a></Link>
                        </div>
                    </div>
                    </div>
                </Container>
            </div>
        </header>
    )
}