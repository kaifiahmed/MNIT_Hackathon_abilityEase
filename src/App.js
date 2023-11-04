import React from 'react'
import NavigationBar from './components/navigationBar'
import SearchBar from './components/searchBar'
import Feactures from './components/features'
import Features from './components/features'
import VoiceSearch from './components/voiceSearch'

const App = () => {
  return (
    <div>
      <NavigationBar />
      <SearchBar/>
      <Features />
      <VoiceSearch />
    </div>
  )
}

export default App
