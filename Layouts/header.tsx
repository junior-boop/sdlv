import Image from "next/image";
import Link from "next/link";
import Router, { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Container from "../components/container";
import Style from '../styles/app.module.css'
import { CSSProperties } from 'react'


export default function Header(){
    let [router, setRouter] = useState('')
    
    let route = useRouter().route;
    console.log(route)

    useEffect(() => {
        switch (route)  {
            case '/':
                setRouter('home')
            case '/pronostic':
               setRouter('pronostic')
            case '/actus' :
               setRouter('actus')
            case 'contact':
               setRouter('contact')
            default :
               setRouter('home')
       }
       console.log(router)
    },[])

    const Home = () : CSSProperties => {
       if (route !== '/'){
           return {backgroundColor : 'white',}
        } else {
           return {borderBottomColor : 'red', color : '#111', fontWeight : '600' }
       }
    }

    const Pronos = () : CSSProperties => {
        if (route !== '/pronostic'){
            return {backgroundColor : 'white',}
         } else {
            return {borderBottomColor : 'red', color : '#111', fontWeight : '600' }
        }
     }
     const Actus = () : CSSProperties => {
        if (route !== '/actus'){
            return {backgroundColor : 'white',}
         } else {
            return {borderBottomColor : 'red', color : '#111', fontWeight : '600' }
        }
     }
     const Contact = () : CSSProperties => {
        if (route !== '/contacts'){
            return {backgroundColor : 'white',}
         } else {
            return {borderBottomColor : 'red', color : '#111', fontWeight : '600' }
        }
     }

    return(
        <header>
            <div>
                <Container style={{ height : 62 }}>
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
                                <Link href={'/'}><a><li style={Home()}>Accueil</li></a></Link>
                                <Link href={'/pronostic'}><a><li style={Pronos()}>Pronostic</li></a></Link>
                                <Link href={'/actus'}><a><li style={Actus()}>Actus</li></a></Link>
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