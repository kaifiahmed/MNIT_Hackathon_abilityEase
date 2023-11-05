import React from 'react'
import NavigationBar from './components/navigationBar'
import SearchBar from './components/searchBar'

import Features from './components/features'


import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DairyNote from './components/dairyNote'
import Footer from './components/footer'
import Newresult from './components/newresult';
import AboutUs from './components/aboutus';
import Services from './components/Services';


<<<<<<< HEAD
import SupportPage from './components/supportPage';
=======
import Textcoat from './components/coat';
>>>>>>> 2d1e4cefbe3758e4084dcdf5b25c02ba34e3ce3c


const App = () => {
  return (
    <div>
      
      <BrowserRouter>
      <NavigationBar />
      {/* <Features /> */}
      {/* <VoiceSearch /> */}
      <Routes>
<<<<<<< HEAD
        <Route path='/' element={<><SearchBar/> <Features /></>} />
        <Route path="/dairy" element={<DairyNote/>} /> 
=======
        <Route path='/' element={<><SearchBar/>  <Features /></>} />
        <Route path="/dairy" element={<DairyNote/>} /> {/* 👈 Rfasfenders at /app/ */}
>>>>>>> 2d1e4cefbe3758e4084dcdf5b25c02ba34e3ce3c
        <Route path="/news-results" element={<Newresult/>} />
        <Route path="/aboutus" element={<AboutUs/>} /> 
        <Route path="/Services" element={<Services/>} />
        <Route path="/Support" element={<SupportPage/>} />   </Routes>
      <Footer/>
    </BrowserRouter>
    </div>
  )
}

export default App
