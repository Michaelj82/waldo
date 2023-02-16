import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SelectionPage from "./selectionPage";

import waldobeach from './images/waldobeach.jpg'
import waldoProfile from './images/waldoProfile.png'
import wizardProfile from './images/wizardProfile.png'
import odlawProfile from './images/odlawProfile.png'

import ImageMap from "./ImageMap";
import NavBar from "./navBar";
import Highscore from "./Highscore";



function App() {
  


  return (
      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route path="/waldo" element={<SelectionPage maps={[{title: 'Beach Map!', image: waldobeach, map: 'desert', findable: ['waldo', 'odlaw', 'wizard'], link: '/beach'}]}></SelectionPage>}></Route>
          <Route path='/beach' element={<ImageMap title={'Beach Map!'} image={waldobeach} map={'desert'} findable={['waldo', 'odlaw', 'wizard']} start={0} max={360} profilePics={{'waldo':waldoProfile, 'wizard': wizardProfile, 'odlaw': odlawProfile}}></ImageMap>}></Route>

          

          <Route path='/highscores' element={<Highscore maps={['desert', 'gladiator', 'snow']}></Highscore>}></Route>

        </Routes>
      
      </BrowserRouter>

  );
}

export default App;
