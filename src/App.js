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
    <Router>
    <Routes>
      <Route path="/" element={<Features />} />
      <Route path="/news-results" element={<Newresult />} />
      <Route path="/navigation" element={<NavigationBar />} />
      <Route path="/searchbar" element={<SearchBar />} />
      <Route path="/features" element={<Features />} />
      
    </Routes>
  </Router>
)
}

export default App
