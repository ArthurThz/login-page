import Input from "../../input";
import Button from "../../button";
import { ButtonContainer, Container, InputArea, TextArea } from "./styles";

const SignIn = () => {
  return (
    <Container>
      <TextArea>
        <h1>LOGIN</h1>
        <p>
          Ainda não tem uma conta? <span>cadastre-se</span>
        </p>
      </TextArea>
      <InputArea>
        <form>
          <Input name="user" text="Usuário" type="text" />
          <Input name="password" text="Senha" type="password" />
        </form>
      </InputArea>
      <ButtonContainer>
        <Button>Confirmar</Button>
      </ButtonContainer>
    </Container>
  );
};

export default SignIn;
