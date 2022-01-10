import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
color: blue;
`;

export const Container_loby = styled.div`
margin-top: 50px;   
`

export const HeaderMenu = styled.header`
background-color: #34495E;
padding: 10px;
height: 80px;
text-align: center;
color: white; 
display: flex;
position: fixed;
width: 100%;
z-index: 1;
`;

export const Error = styled.div`
margin-top: 210px;
text-align: center;
color: #C87CBC;
font-size: 40px;
`

export const LogoImg = styled.img`
width: 100px;
height: 80px;
transition: 0.5s;
&:hover{
    transform: scale(1.2);
}
`
export const Menu = styled.ul`
margin-top: 30px;
display: flex;
margin-left: auto;
padding-right: 60px;
list-style: none;
gap: 100px;
`

export const LinkMenu = styled.link`
text-decoration: none;
color: white;
`

//Estilos de tarjetas de loby

export const Card_one = styled.div`
background-color: #C87CBC;
padding: 6em;
color: white;
display: flex;
margin-top: 50px;
`
export const Card_two = styled.div`
background-color: #C87CBC;
padding: 6em;
color: white;
display: flex;
border: 1px solid black;
`

export const Text = styled.div`
color: white;
font-size: 30px;
`

export const Button = styled.button`
background-color: #34495E;
border: none;
padding: 10px;
font-size: 20px;
border-radius: 5px;
margin-top: 15px;
color: white;
width: 200px;
height: 50px;
&:hover{
    background-color: #283747;
}
`
export const ImgOne = styled.img`
width: 450px;
height: 325px;
margin-left: auto;
clip-path: polygon(0 0, 75% 0, 100% 100%, 25% 100%);
`

//Estilos de footer

export const FooterCont = styled.footer`
height: 120px;
color: white;
padding: 10px;
background-color: #34495E;
top: auto;
`

export const FooterIncons = styled.div`
display: flex;
gap: 55px;
margin-left: auto;
margin-right: auto;
width: 20%;
font-size: 30px;
align-items: center;
margin-top: 20px;
`

//Galeria

export const GaleriaContent = styled.div`
margin-top: 100px;
`
