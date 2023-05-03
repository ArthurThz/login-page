
import styled, {css} from "styled-components";
import { COLORS } from "../../styles/colors";
import { IVariant } from "./types";

export const StyledButton = styled.button<IVariant>`
    width:190px;
    height:50px;

    display:flex;
    align-items:center;
    justify-content:center;

    color:${COLORS.textWhite};
    
    background-color:${COLORS.dotBlue};

    border:none;
    border-radius:40px;

    font-family:"Roboto", sans-serif;
    font-size:.9em;
    font-weight:600;

    transition:.3s ease-out;

    &:hover{
        cursor: pointer;
        opacity:.7;
    }
    
    ${({variant}) => variant !== "primary" && 
    css`
        background-color:${COLORS.softGreyButton};

        &:hover{
            cursor:pointer;
        }
    `}
    


`