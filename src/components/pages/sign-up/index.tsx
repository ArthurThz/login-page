import {
  Container,
  ButtonContainer,
  InputArea,
  InputGroup,
  TextArea,
} from "./styles";

import Input from "../../input";
import Button from "../../button";

import { BlueDot } from "../../../styles/styles";

const SignUp = () => {
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
        <form>
          <InputGroup>
            <Input type="text" name="firstname" text="Nome" />
            <Input type="text" name="lastname" text="Sobrenome" />
          </InputGroup>
          <Input type="mail" name="email" text="E-mail" />
          <Input type="password" name="password" text="Senha" />
        </form>
      </InputArea>
      <ButtonContainer>
        <Button variant="secondary">Login</Button>
        <Button>Create account</Button>
      </ButtonContainer>
    </Container>
  );
};

export default SignUp;
