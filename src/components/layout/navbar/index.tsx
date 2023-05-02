import { Header,NavLinks,Title,Circle } from "./styles";
import { BlueDot } from "../../../styles/styles";

const NavBar = () => {


    return ( 
            <Header>
                <Title>
                    <Circle />
                    <h2>Local App<BlueDot>.</BlueDot></h2>
                </Title>
                <NavLinks>
                    <span>Home</span>
                    <span>Join</span>
                </NavLinks>
            </Header>
     );
}
 
export default NavBar;