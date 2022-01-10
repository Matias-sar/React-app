import React from 'react';
import {Container_loby, Card_one,Card_two, ImgOne, Text, Button} from '../public/css/style.js';
import Imgen_card_one from '../public/img/Imgen_card_one.jpg';


export class Loby extends React.Component {

    handleClick = () => {
        console.log(this)
    }
    
    render() {
        return (
            <Container_loby>
                <Card_one>
                    <Text>
                        <h1>Bienvenidos a la mejor tienda</h1>
                        <p>Los mejores productos en nuestros establecimientos</p>
                        <Button type="button" onClick={this.handleClick}>Buscar una tienda</Button>
                    </Text>
                    <ImgOne src={Imgen_card_one}/>
                </Card_one>
                <Card_two>
                    <h1>Hacemos envios a tu hogar sin costo</h1>
                </Card_two>
            </Container_loby>
        )
    }
}