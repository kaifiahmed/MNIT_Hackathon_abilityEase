
import styled from "styled-components";

const Wrapper = styled.div`
.container{
    gap: 10px;
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .container1{
        gap: 10px;
        display: flex;
    width: 100%;
    // flex-direction: column;
    justify-content: center;
    align-items: center;
    }
.input{
    width: 80%;
    height: 60vh;
    border-radius: 6px;
    border: solid black 1px;
    overflow:hidden;
}
input[type="text"] {
    padding:10px;
        width: 100%;
        outline:none;
        border:none;
        background-color: transparent;

        
}
`
export default Wrapper;