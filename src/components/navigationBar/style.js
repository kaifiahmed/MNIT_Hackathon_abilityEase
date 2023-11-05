import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
 justify-content: space-between;
  align-items: center;
  // background-color: #bbdfff;
  padding: 7px 15px;

  .navbar {
    display: flex;
    align-items: center;
  }

  .logo{
    display:flex;
    justify-content: center;
    align-items: center;


  }

  .logo img {
    max-height: 50px; /* Set the max height for the logo */
  }
  .website-name {
    font-size: 26px; /* Adjust font size as needed */
    color: #000;

    margin-left: 10px;
     /* Add some space between logo and website name */
  }

 

  .nav-items a {
    color: #000;
    padding: 0 20px;
    font-size:26px;
    text-decoration: none;
    margin-left: 20px; /* Adjust the spacing between navigation items */
  }

  .nav-items a:hover {
    // text-decoration: underline;
    background-color:grey;
    border-radius:12px;
  }
`;

export default Wrapper;
