import styled from "styled-components";
import { COLORS } from "../../../styles/colors";
import background from '../../../assets/background.png'


export const Container = styled.div`
    width:100%;
    height:100vh;

    padding:4em 0;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;

    background-image:linear-gradient(90deg, rgba(39,42,55,0.9514180672268907) 100%, rgba(39,42,55,1) 100%, rgba(85,91,105,1) 100%),url(${background}); 

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
    width:45%;

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
    width:100%;

    margin-top:1.5em;
    
    display:flex;
    align-items:center;
    justify-content:space-between;
`