import React from 'react'
import NavigationBar from './components/navigationBar'
import SearchBar from './components/searchBar'

import Features from './components/features'


import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DairyNote from './components/dairyNote'
import Footer from './components/footer'
import Newresult from './components/newresult';
import AboutUs from './components/aboutus';
import SupportPage from './components/supportPage';
import Services from './components/services';


const App = () => {
  return (
    <div>
      
      <BrowserRouter>
      <NavigationBar />
      {/* <Features /> */}
      {/* <VoiceSearch /> */}
      <Routes>
        <Route path='/' element={<><SearchBar/> <Features /></>} />
        <Route path="/dairy" element={<DairyNote/>} /> 
        <Route path="/news-results" element={<Newresult/>} />
        <Route path="/aboutus" element={<AboutUs/>} />
        <Route path="/support" element={<SupportPage/>} />  
        <Route path="/services" element={<Services/>} /> 
      </Routes>
      <Footer/>
    </BrowserRouter>
    </div>
  )
}

export default App
