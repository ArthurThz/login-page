import styled from "styled-components";
import { COLORS } from "./colors";

export const Container = styled.div`
    width:100%;
    min-height:100vh;

    display:flex;
    align-items:center;
    justify-content:center;
`

export const Main = styled.main`
    height:80%;
    width:90%;

    padding:4em;

    border-radius:3%;

    background-color:#272A37;
`
export const BlueDot = styled.span`
    color:${COLORS.dotBlue};
`

export const TextArea = styled.div`
    width:50%;
    padding:2em 0;

    gap:1.5em;

    display:flex;
    flex-direction:column;
    align-items:flex-start;
    justify-content:center;

    p{
        color:${COLORS.spanGrey};
        font-weight:800;
    }

    h1{
        color:${COLORS.textWhite}
    }
    span{
        color:${COLORS.dotBlue};

        &:hover{
            cursor:pointer;
        }
    }

    margin-top:10%;
    
`

export const InputArea = styled.div`
    width:50%;

    gap:1em;
    
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    justify-content:space-between;
`

export const InputGroup = styled.div`
    gap: 0.5em;
    width:100%;
    display:flex;
    align-items:center;
    justify-content:space-between;
`