import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SelectionPage from "./selectionPage";
import waldobeach from './images/waldobeach.jpg'
import ImageMap from "./ImageMap";
import NavBar from "./navBar";



function App() {
  


  return (
    <div id="page">
      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route path="/waldo" element={<SelectionPage maps={[{title: 'Beach Map!', image: waldobeach, map: 'desert', findable: ['waldo', 'odlaw', 'wizard'], link: '/beach'}]}></SelectionPage>}></Route>
          <Route path='/beach' element={<ImageMap title={'Beach Map!'} image={waldobeach} map={'desert'} findable={['waldo', 'odlaw', 'wizard']} start={0} max={360}></ImageMap>}></Route>

          

          <Route path='/highscores' element={<div>temporary</div>}></Route>

        </Routes>
      
      </BrowserRouter>

    </div>
  );
}

export default App;
