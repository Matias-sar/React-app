import React from 'react';
import {FooterCont, FooterIncons, Facebook} from '../public/css/style.js'
import { TiSocialFacebook } from "react-icons/ti";
import { AiFillInstagram,AiFillTwitterCircle ,AiFillYoutube} from "react-icons/ai";



export class Footer extends React.Component { 
    render(){
        return (
            <FooterCont>  
                <FooterIncons>
                    <a href="https://facebook.com"><TiSocialFacebook className="facebook"/></a>
                    <a href="https://instagram.com"><AiFillInstagram className="instagram"/></a>
                    <a href="https://twitter.com"><AiFillTwitterCircle className="twitter"/></a>
                    <a href="https://youtube.com"><AiFillYoutube className="youtube"/></a>
                </FooterIncons> 
            </FooterCont>
        )   
    }
}

