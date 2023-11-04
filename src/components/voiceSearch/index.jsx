import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';

const VoiceSearch = () => {
    const [searchText, setSearchText] = useState('');
    const recognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognizer = new recognition();
  
    recognizer.onresult = function(event) {
      const transcript = event.results[0][0].transcript;
      setSearchText(transcript);
      performSearch(transcript);
    };
  
    function performSearch(query) {
      // Implement your search logic here and display the results
    }
  
    function startVoiceRecognition() {
      recognizer.start();
    }
  
    return (
      <div className="App">
        <h1>Voice Search Example</h1>
        <input
          type="text"
          id="search-input"
          placeholder="Search..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <Button id="voice-search-button" onClick={startVoiceRecognition}>
          Start Voice Search
        </Button>
        <div id="search-results">
          {/* Display search results here */}
        </div>
      </div>
    );
  }

export default VoiceSearch
