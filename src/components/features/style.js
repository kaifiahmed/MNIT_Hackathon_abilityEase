import styled from "styled-components";

const Wrapper = styled.div`
  .features-container {
    display: flex;
    justify-content: center;
  }
  .box img {
    // width: 100%;
    // height: 100%;
    width:250px;
    height:250px;
  }
  a {
    text-decoration: none;
  }
  img{
    width:250px;
    height:250px;
  }

  .main {
    gap: 15px;
    padding: 0 120px;
    display: flex;
    flex-wrap: wrap;
    justify-content: ; /* Center the boxes */
  }

  .box {
    gap: 5px;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    display: flex;
    min-width: 250px;
    min-height: 250px;
    margin: 10px;
    border: 1px solid #000;
    flex: 1;
    box-sizing: border-box;
    overflow: hidden;
    border-radius: 6px;
  }
`;

export default Wrapper;
