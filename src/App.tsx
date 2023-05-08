// Styles
import { Main } from "./styles/styles";

// Components
import NavBar from "./components/layout/navbar";
import SignIn from "./components/pages/sign-in";
import SucessPage from "./components/pages/sucess-page";
import { useUserContext } from "./context/User/hook";

function App() {
  const { user } = useUserContext();
  return (
    <Main>
      <NavBar />
      {user !== "" ? <SucessPage /> : <SignIn />}
    </Main>
  );
}

export default App;
