import {createContext} from 'react'

export const userContext = createContext({
    user: "",
    setUser: (user: string) => {
      user;
    },
  });