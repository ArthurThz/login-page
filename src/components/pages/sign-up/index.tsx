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
import { Link, useNavigate } from "react-router-dom";

import { BlueDot } from "../../../styles/styles";
import { IEvents, IForm } from "./types";

const SignUp = () => {
  const navigate = useNavigate();
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

  const createUser = (event: React.FormEvent) => {
    event.preventDefault();
    if (user.firstName === "") {
      alert("Digite o seu primeiro nome");
      return;
    }

    if (user.email === "") {
      alert("Digite o seu email");
      return;
    }

    if (user.password.length < 6) {
      alert("Sua senha deve ter no minimo 6 caracteres");
      return;
    }
    const newUser = {
      id: Math.floor(Math.random() * 100),
      ...user,
    };
    user ? api.post("/user", newUser) : null;
    navigate("/");
  };

  return (
    <Container>
      <TextArea>
        <p>START FOR FREE</p>
        <h1>
          Create new account<BlueDot>.</BlueDot>
        </h1>
        <p>
          Já possui um cadastro?{" "}
          <span>
            <Link to="/">Login</Link>
          </span>
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
            <Button type="submit">Create account</Button>
          </ButtonContainer>
        </form>
      </InputArea>
    </Container>
  );
};

export default SignUp;
