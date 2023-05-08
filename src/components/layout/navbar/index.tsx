import { Header, NavLinks, Title, Circle } from "./styles";
import { BlueDot } from "../../../styles/styles";
import { useUserContext } from "../../../context/User/hook";

const NavBar = () => {
  const { user, setUser } = useUserContext();
  return (
    <Header>
      <Title>
        <Circle />
        <h2>
          Bikes Corporate<BlueDot>.</BlueDot>
        </h2>
      </Title>
      <NavLinks>
        <span>Home</span>
        <span>Join</span>
        {user ? <span onClick={() => setUser("")}>LogOut</span> : null}
      </NavLinks>
    </Header>
  );
};

export default NavBar;
