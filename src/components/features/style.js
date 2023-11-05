import styled from "styled-components";

const Wrapper = styled.div`
  .features-container {
    display: flex;
    justify-content: center;
  }
  .box img {
    width: 100%;
    height: 100%;
  }

  .main {
    padding: 0 120px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center; /* Center the boxes */
  }

  .box {
    min-width: 250px;
    min-height: 250px;
    margin: 10px;
    background-color: #bbdfff;
    border: 1px solid #000;
    flex: 1;
    box-sizing: border-box;
    overflow: hidden;
    border-radius: 6px;
  }
`;

export default Wrapper;
