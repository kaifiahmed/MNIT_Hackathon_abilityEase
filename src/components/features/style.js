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
    justify-content: center; /* Center the boxes */
  }

  .box {
    min-width: 250px;
    min-height:250px;
    margin: 10px;
    background-color: #bbdfff;
    border: 1px solid #000;
    flex: 1; /* Each box takes up equal space in the row */
    box-sizing:border-box;
  }
`;

export default Wrapper;
