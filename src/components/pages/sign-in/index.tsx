import Input from "../../input";
import Button from "../../button";
import { ButtonContainer, Container, InputArea, TextArea } from "./styles";

import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import { api } from "../../../services/api";

import { IProps } from "./types";
import { useUserContext } from "../../../context/hook";

const SignIn = () => {
  const navigate = useNavigate();

  const { setUser } = useUserContext();

  const [userInput, setUserInput] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleUserInput = (event: IProps) => {
    const { value } = event.target;
    setUserInput(value);
  };

  const handleUserPassword = (event: IProps) => {
    const { value } = event.target;
    setPassword(value);
  };

  const fetchLogin = async () => {
    try {
      const { data } = await api.get(
        `user?firstName=${userInput}&password=${password}`
      );

      if (data.length === 0) {
        alert("usuário ou senha incorretos");
        return;
      }

      setUser(data[0].firstName);
      navigate("/sucess");
    } catch {
      alert("houve um erro, tente novamente.");
    }
  };
  return (
    <Container>
      <>
        <TextArea>
          <h1>LOGIN</h1>
          <p>
            Ainda não tem uma conta?{" "}
            <span>
              <Link to="/signup">cadastre-se</Link>
            </span>
          </p>
        </TextArea>
        <InputArea>
          <form>
            <Input
              name="user"
              text="Usuário"
              type="text"
              onChange={handleUserInput}
              value={userInput}
            />
            <Input
              name="password"
              text="Senha"
              type="password"
              onChange={handleUserPassword}
              value={password}
            />
          </form>
        </InputArea>
        <ButtonContainer>
          <Button onClick={fetchLogin}>Confirmar</Button>
        </ButtonContainer>
      </>
    </Container>
  );
};

export default SignIn;
