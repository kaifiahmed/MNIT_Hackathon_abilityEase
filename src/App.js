import React from 'react'
import NavigationBar from './components/navigationBar'
import SearchBar from './components/searchBar'
import Feactures from './components/features'
import Features from './components/features'
import VoiceSearch from './components/voiceSearch'

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DairyNote from './components/dairyNote'
import Footer from './components/footer'


const App = () => {
  return (
    <div>
      
      <BrowserRouter>
      <NavigationBar />
      {/* <Features /> */}
      {/* <VoiceSearch /> */}
      <Routes>
        <Route path='/' element={<><SearchBar/> <Features /></>} />
        <Route path="/dairy" element={<DairyNote/>} /> {/* 👈 Renders at /app/ */}
      </Routes>
      <Footer/>
    </BrowserRouter>
    </div>
  )
}

export default App
