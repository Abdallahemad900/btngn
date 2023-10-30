import { useState } from 'react'
import './App.css'
import { Route,Routes } from 'react-router-dom'
// import Carts from './components/Cart'
// import Product from './components/Products'
import AppNav from './components/pages/AppNavbar'
import Head from './components/pages/Home'
// import ScrollToTopButton from './components/scrollBtn/ScrollToTopButton'
// import Canvass from './components/curser/curserhandler'
// import TDcomp from './components/3ds/Tdcomp'
// import FBx from './components/3ds/Fbxo'
// import Women from './components/3ds/Womenss'
// import Anime from './components/3ds/Anime'
// import {MantineProvider} from '@mantine/core'
// import { CharacterAnimationsProvider } from './components/3ds/characteranime/characteranimation.jsx';
import Shoesconf from './components/shoess/Shoesconf'
// import Houses from './components/HouseConf/Houses'
import Aparting from './components/apartment/Apartments'
import Floars from './components/floor/Floors'
import Basics from './components/basicss/Basic'
import Basic2 from './components/basic2/Basic2'
import Basicso from './components/gltfs/Gltfs'
import Mans from './components/man/Man'
import Exp from './components/Boudy/Exper'
function App() {

  return (
    <div className='App'>
      <AppNav/>

      <Routes>
      <Route path="/" element={<Head/>} />
      <Route path="/apart" element={<Aparting/>} />
          <Route path="/floor" element={<Floars/>} />
          <Route path="/basic" element={<Basics/>} />
          <Route path="/basic2" element={<Basic2/>} />
          <Route path="/basic3" element={<Basicso/>} />
          <Route path="/men" element={<Mans/>} />
          <Route path="/shoe" element={<Shoesconf/>} />
          <Route path="/body" element={<Exp/>} />

     
      </Routes>
        {/* <Route path="/product" element={<Product/>} /> */}
        {/* <Route path="/cart" element={<Carts/>} /> */}
        {/* <Route path="/td" element={<TDcomp/>} />
        <Route path="/fb" element={<FBx/>} />
        <Route path="/women" element={<Women/>} />
        <Route path="/anime" element={
         <MantineProvider >
         <CharacterAnimationsProvider>
         <Anime/>
         </CharacterAnimationsProvider>
   </MantineProvider>
        } />
      
          <Route path="/house" element={<Houses/>} /> */}
        
      {/* <ScrollToTopButton/>
      <Canvass/> */}
     
    </div>
  )
}

export default App
