import styled from "styled-components"
import { COLORS } from "../../../styles/colors"


export const Container = styled.div`
    width:100%;
    height:100%;

    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;

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

        a{
            color:${COLORS.dotBlue};
            text-decoration:none;
    
            &:hover{
                cursor:pointer;
            }
        }
        }  
    
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

export const ButtonContainer = styled.div`
    width:50%;

    margin-top:1.5em;
    
    display:flex;
    align-items:center;
    justify-content:space-between;
`