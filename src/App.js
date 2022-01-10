import React from "react"
import {Header} from "./components/header.js"
import {Loby} from "./components/loby.js"
import {Galeria} from "./components/galeria.js"
import {Footer} from "./components/footer.js"
import {Perfil} from "./components/perfil.js"
import {Formulario} from "./components/formulario.js"
import {Error404} from "./components/404.js"
import {Container} from "./public/css/style.js"
import {Routes, Route} from 'react-router-dom'

const App = () =>{
  return (
    <Container>
       <Header/>
        <Routes>
            <Route exact path="/" element={<Loby/>}/>
            <Route exact path="/galeria" element={<Galeria/>}/>
            <Route exact path = "/Formulario" element={<Formulario/>}/>
            <Route exact path = "/Perfil" element={<Perfil/>}/>
            <Route path="*" element={<Error404/>}/>
        </Routes>
       <Footer/>
    </Container>
  )
}

export default App;
