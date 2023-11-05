import styled from "styled-components";

const Wrapper = styled.div`
  .search-container {
    margin: 30px auto;
    border: solid black 1px;
    display: flex;
    overflow: hidden;
    justify-content: space-between; 
    font-weight: bold;
    border-radius: 10px;
    width: 400px;
  }

  input[type="text"] {
    width: 100%;
    padding: 10px;
    margin: 0;
    border: none;
    outline:none;
    border-radius: 4px;
    font-size:20px;


  }

img {
      max-width: 35px;
      max-height: 35px;
      padding: 6px;
  }
  .button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    padding: 5px;
  }
`;

export default Wrapper;
