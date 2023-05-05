import {
  Container,
  ButtonContainer,
  InputArea,
  InputGroup,
  TextArea,
} from "./styles";
import { api } from "../../../services/api";
import Input from "../../input";
import Button from "../../button";

import { useState } from "react";

import { BlueDot } from "../../../styles/styles";
import { IEvents, IForm } from "./types";

const SignUp = () => {
  const [user, setUser] = useState<IForm>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleOnChange = (event: IEvents) => {
    const { value, name } = event.target;
    setUser({ ...user, [name]: value });
  };

  const createUser = () => {
    const newUser = {
      id: Math.floor(Math.random() * 100),
      ...user,
    };
    user ? api.post("/user", newUser) : null;
  };

  return (
    <Container>
      <TextArea>
        <p>START FOR FREE</p>
        <h1>
          Create new account<BlueDot>.</BlueDot>
        </h1>
        <p>
          Already A Member? <span>Log In</span>
        </p>
      </TextArea>
      <InputArea>
        <form onSubmit={createUser}>
          <InputGroup>
            <Input
              type="text"
              onChange={handleOnChange}
              name="firstName"
              text="Nome"
            />
            <Input
              type="text"
              onChange={handleOnChange}
              name="lastName"
              text="Sobrenome"
            />
          </InputGroup>
          <Input
            type="mail"
            onChange={handleOnChange}
            name="email"
            text="E-mail"
          />
          <Input
            type="password"
            onChange={handleOnChange}
            name="password"
            text="Senha"
          />
          <ButtonContainer>
            <Button type="button" variant="secondary">
              Login
            </Button>
            <Button type="submit">Create account</Button>
          </ButtonContainer>
        </form>
      </InputArea>
    </Container>
  );
};

export default SignUp;
