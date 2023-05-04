// Styles
import { Main, Container } from "./styles/styles";

// Components
import NavBar from "./components/layout/navbar";
import SignUp from "./components/pages/sign-up";
import SignIn from "./components/pages/sign-in";
import SucessPage from "./components/pages/sucess-page";

function App() {
  return (
    <Main>
      <NavBar />
      {/* <SignUp /> */}
      {/* <SignIn /> */}
      <SucessPage />
    </Main>
  );
}

export default App;
