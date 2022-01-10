import React from 'react'
import {HeaderMenu, LogoImg, Menu, LinkMenu} from '../public/css/style.js'
import Logo from '../public/img/Logo.png'
import {Link} from 'react-router-dom'
import '../public/css/main.css'

export class Header extends React.Component{
    render(){
        return (
            <HeaderMenu>
                <LogoImg src={Logo}/>
                <Menu>
                    <li><Link className="link" to = "/">Inicio</Link></li>
                    <li><Link className="link"  to = "/galeria">Galeria</Link></li>
                    <li><Link className="link"  to = "/formulario">Formulario</Link></li>
                    <li><Link className="link"  to = "/perfil">Perfil</Link></li>
                </Menu>
            </HeaderMenu>
        )
    }
}

