// Styles
import { Main, Container } from "./styles/styles";

// Components
import NavBar from "./components/layout/navbar";
import SignUp from "./components/pages/sign-up";
import SignIn from "./components/pages/sign-in";

function App() {
  return (
    <Container>
      <Main>
        <NavBar />
        {/* <SignUp /> */}
        <SignIn />
      </Main>
    </Container>
  );
}

export default App;
