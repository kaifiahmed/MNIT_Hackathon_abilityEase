import React ,{useState} from 'react'
import Wrapper from './style';

const DairyNote = () => {
 
  //setting speech recog
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
    <Wrapper>
    <div className="search-container">
      <input type="text" 
      placeholder="Enter your search query"
      value={searchText}
      onChange={(e) => setSearchText(e.target.value)} />
      <button type="submit" className="button" onClick={startVoiceRecognition}>
        {/* <img src={mikeimg} alt="Search" height="50px" /> */}
      </button>
      <button type="submit" className="button">
        {/* <img src={searchbutton} alt="Search" height="50px" /> */}
      </button>
    </div>
  </Wrapper>
  )
}


export default DairyNote
