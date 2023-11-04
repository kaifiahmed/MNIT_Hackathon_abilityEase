import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
 justify-content: space-between;
  align-items: center;
  background-color: #bbdfff;
  padding: 7px 15px;

  .navbar {
    display: flex;
    align-items: center;
  }

  .logo img {
    max-height: 50px; /* Set the max height for the logo */
  }
  .website-name {
    font-size: 20px; /* Adjust font size as needed */
    color: #000;
    margin-left: 10px;
     /* Add some space between logo and website name */
  }

 

  .nav-items a {
    color: #000;
    text-decoration: none;
    margin-left: 20px; /* Adjust the spacing between navigation items */
  }

  .nav-items a:hover {
    text-decoration: underline;
  }
`;

export default Wrapper;