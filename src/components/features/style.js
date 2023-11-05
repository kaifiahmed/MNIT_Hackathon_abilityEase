import styled from "styled-components";

const Wrapper = styled.div`
  .features-container {
    display: flex;
    justify-content: center;
  }

  .main {
    padding: 0 120px;
    display: flex;
    flex-wrap: wrap;
    justify-content: ; /* Center the boxes */
  }

  .box {
    min-width: 300px;
    min-height:300px;
    margin: 50px;
    //background-color: #bbdfff;
    border: 1px solid #000;
    flex: 2; /* Each box takes up equal space in the row */
    box-sizing:border-box;
    border-radius : 20px;
  }
`;

export default Wrapper;
