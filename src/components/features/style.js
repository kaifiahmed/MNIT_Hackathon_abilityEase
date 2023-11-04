import styled from "styled-components";

const Wrapper = styled.div`
.features-container {
    display: flex;
    justify-content: center;
  }
  
  .main {
    display: flex;
    flex-wrap: wrap;
  }
  
  .box {
    flex: 1;
    min-width: 200px;
    min-height: 200px;
    margin: 10px;
    background-color: #bbdfff;
    border: 2px solid #000;
  }
  
`
export default Wrapper;