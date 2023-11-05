import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/navigationBar';
import Features from './components/features';
import SearchBar from './components/searchBar';
import Newresult from './components/newresult';
import AboutUs from './components/aboutus';

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
        <Route path="/news-results" element={<Newresult/>} />
     

      <Route path="/navigation" element={<NavigationBar />} />
      <Route path="/searchbar" element={<SearchBar />} />
      <Route path="/features" element={<Features />} />
      <Route path="/aboutus" element={<AboutUs />} />

      
    </Routes>
  </Router>
)
}

export default App
