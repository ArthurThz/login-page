import styled from "styled-components";
import { COLORS } from "../../styles/colors";


export const InputContainer = styled.div`
    width:100%;
    min-width:30%;
    position:relative;
     
    label{
        position:absolute; 
        font-size:.7em; 
        left:20px;      
        top:8px;
        font-family:'Roboto',sans-serif;
        font-weight:500;
        color:${COLORS.spanGrey};
        margin-bottom:5px;      
    }

    /* don't allow the browser change the background color in auto-complete */
    input:-webkit-autofill,
    input:-webkit-autofill:hover, 
    input:-webkit-autofill:focus, 
    input:-webkit-autofill:active  {
  transition: background-color 5000s;
  -webkit-text-fill-color: #FFFFFF !important;
}   

`
export const StyledInput = styled.input`
    width:100%;
   
    height:60px; 
    min-height:40px;  

    border:none;
    border-radius:20px;

    font-family:'Roboto',sans-serif;
    font-size:1em;
    font-weight:300;
    color:${COLORS.textWhite};

    background-color:${COLORS.inputGrey};
    padding:2em 1.5em;

    outline:0;

    &:focus{
        outline:2px solid ${COLORS.outlineBlue};
        box-shadow: ${COLORS.outlineBlue} 0px 0px 10px 0px;
    }
    
 

`
   
