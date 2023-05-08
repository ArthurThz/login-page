import {useContext} from 'react';
import { userContext } from '.';

export const useUserContext = () =>{
    const context = useContext(userContext);
    return context;
}