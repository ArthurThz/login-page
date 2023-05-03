import styled from "styled-components";
import { COLORS } from "../../../styles/colors";


export const Container = styled.div`
    width:100%;
    height:100%;

    padding:4em 0;
    display:flex;
    align-items:flex-start;
    justify-content:center;
    flex-direction:column;

    background-color:transparent;
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

    form{
    width:100%;

    gap:1em;
    
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    justify-content:space-between;
    }
`

export const InputGroup = styled.div`
    gap: 0.5em;
    width:100%;
    display:flex;
    align-items:center;
    justify-content:space-between;
`

export const ButtonContainer = styled.div`
    width:50%;

    margin-top:1.5em;
    
    display:flex;
    align-items:center;
    justify-content:space-between;
`