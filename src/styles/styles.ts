import styled from "styled-components";
import { COLORS } from "./colors";

import background from '../assets/background.png'

export const Container = styled.div`
    width:100%;
    min-height:100vh;

    padding:1em;

    display:flex;
    align-items:center;
    justify-content:center;
`

export const Main = styled.main`
    height:100vh;
    width:100%;

    padding:4em;

    
    
    background-image:linear-gradient(90deg, rgba(39,42,55,0.9514180672268907) 100%, rgba(39,42,55,1) 100%, rgba(85,91,105,1) 100%),url(${background}); 
    background-color:#272A37;
`
export const BlueDot = styled.span`
    color:${COLORS.dotBlue};
`

