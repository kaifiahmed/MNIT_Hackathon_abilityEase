import React from 'react'
import NavigationBar from './components/navigationBar'
import SearchBar from './components/searchBar'
import Features from './components/features'
import Newresult from './components/newresult'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
    <Routes>
    <Route
          path="/"
          element={
            <>
              <NavigationBar />
              <SearchBar />
              <Features />
            </>
          }
        />
      <Route path="/news-results" element={<Newresult />} />
      <Route path="/navigation" element={<NavigationBar />} />
      <Route path="/searchbar" element={<SearchBar />} />
      <Route path="/features" element={<Features />} />
      
    </Routes>
  </Router>
)
}

export default App
