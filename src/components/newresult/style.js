import styled from "styled-components";

const Wrapper = styled.div`
display: flex;
  flex-wrap: wrap;
& .news-container {
  max-width: 500px;
  margin-top : 5px;
  margin: 0 50px;
  padding: 65px;
  background-color: #f7f7f7;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

& .news-item {
  margin-bottom: 20px;
}
`
export default Wrapper