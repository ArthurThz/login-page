// Styles
import {
  BlueDot,
  ButtonContainer,
  Container,
  InputArea,
  InputGroup,
  Main,
  TextArea,
} from "./styles/styles";

// Components
import NavBar from "./components/layout/navbar";
import Input from "./components/input";
import Button from "./components/button";

function App() {
  return (
    <Container>
      <Main>
        <NavBar />
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
          <InputGroup>
            <Input type="text" name="firstname" text="Nome" />
            <Input type="text" name="lastname" text="Sobrenome" />
          </InputGroup>
          <Input type="mail" name="email" text="E-mail" />
          <Input type="password" name="password" text="Senha" />
        </InputArea>
        <ButtonContainer>
          <Button variant="secondary">Change Method</Button>
          <Button>Create account</Button>
        </ButtonContainer>
      </Main>
    </Container>
  );
}

export default App;
