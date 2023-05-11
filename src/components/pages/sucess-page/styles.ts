import styled from "styled-components";


export const Container = styled.div`
    width:100%;
    height:100%;

    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;  

    background-color:transparent;
    gap:1.4em;

    img{
        height:60%;
        width:50%;
    }

    @media(max-width:640px){
        gap: 0.4em;
        img{
            
            width:100%;
            height:100%;
        }
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

        @media(max-width:700px){
            font-size:2em;        
    }

    @media (max-width:500px){
        font-size:1.4em;
    }
    }

`

