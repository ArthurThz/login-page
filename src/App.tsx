// Styles
import { Main } from "./styles/styles";

// Components
import NavBar from "./components/layout/navbar";
import SignIn from "./components/pages/sign-in";
import SucessPage from "./components/pages/sucess-page";

function App() {
  const user = "";
  return (
    <Main>
      <NavBar />
      {user !== "" ? <SucessPage /> : <SignIn />}
    </Main>
  );
}

export default App;
