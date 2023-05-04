import { Container, TextArea } from "./styles";
import SucessImg from "../../../assets/sucess-img.svg";
const SucessPage = () => {
  return (
    <Container>
      <TextArea>
        <h1>Seja bem vindo Arthur!</h1>
      </TextArea>
      <img src={SucessImg} alt="imagem" />
    </Container>
  );
};

export default SucessPage;
