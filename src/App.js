import React from 'react'
import NavigationBar from './components/navigationBar'
import SearchBar from './components/searchBar'
import Feactures from './components/features'
import Features from './components/features'
import VoiceSearch from './components/voiceSearch'

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DairyNote from './components/dairyNote'


const App = () => {
  return (
    <div>
      
      <BrowserRouter>
      <NavigationBar />
      <SearchBar/>
      <Features />
      <VoiceSearch />
      <Routes>
        <Route path="/dairy" element={<DairyNote/>} /> {/* 👈 Renders at /app/ */}
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
