import styled from "styled-components";

const Wrapper = styled.div`
display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  padding: 10px 20px;
  .navbar {
    display: flex;
    align-items: center;
  }
  
  .logo img {
    max-height: 50px; /* Set the max height for the logo */
  }
  
  .nav-items a {
    color: #fff;
    text-decoration: none;
    margin-left: 20px; /* Adjust the spacing between navigation items */
  }
  
  .nav-items a:hover {
    text-decoration: underline;
  }
`

export default Wrapper;
