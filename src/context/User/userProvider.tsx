import { useState } from "react";
import { userContext } from ".";

interface IProps {
  children: React.ReactNode;
}

export const UserProvider = ({ children }: IProps) => {
  const [user, setUser] = useState("");
  return (
    <userContext.Provider value={{ user, setUser }}>
      {children}
    </userContext.Provider>
  );
};
