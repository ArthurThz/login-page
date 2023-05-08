import styled from "styled-components";
import background from '../../../assets/background.png'

export const Container = styled.div`
    width:100%;
    height:100vh;

    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;  

    background-image:linear-gradient(90deg, rgba(39,42,55,0.9514180672268907) 100%, rgba(39,42,55,1) 100%, rgba(85,91,105,1) 100%),url(${background}); 

    gap:1.4em;

    img{
        height:60%;
        width:50%;
    }
`

export const TextArea = styled.div`
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    justify-content:flex-start;

    h1{ 
        color:#FFFFFF;
        font-family:'Roboto', sans-serif;    
        font-size:3em;
        font-weight:800;
    }

`

