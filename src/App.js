import React from 'react'
import NavigationBar from './components/navigationBar'
import SearchBar from './components/searchBar'
import VoiceSearch from './components/voiceSearch'

const App = () => {
  return (
    <div>
      <NavigationBar />
      <SearchBar/>
      <VoiceSearch />
    </div>
  )
}

export default App
