import styled from "styled-components";

import { COLORS } from "../../../styles/colors";
export const Header = styled.header`
    width:100%;

    display:flex;
    align-items:center;
    justify-content:space-between;
    

`

export const Title = styled.div`
    margin:0 15px;

    display:flex;
    align-items:center;
    gap: 0.5em;

    h2{
        @media(max-width:640px){
        font-size:.8em;
    }
        font-size:1em;
        letter-spacing:-0.5px;
        color:${COLORS.textWhite};
    }

    width:150px;
`
export const Circle = styled.div`
    width:30px;
    height:30px;

    background-color:${COLORS.dotBlue};

    border:none;
    border-radius:80px;

`
export const NavLinks = styled.div`
    gap:3em;
    padding:0 2em;
    

    span{
        font-family:'Roboto', sans-serif;
        color:${COLORS.spanGrey};
        font-weight:900;
        font-size:1em;
        opacity:0.6;

        transition:.3s ease-in-out;
        &:hover{
            cursor: pointer;
            opacity:.9;
        }
    }
    
    display:flex;
    align-items:center;
    justify-content:space-between;


`