import { Container, TextArea } from "./styles";
import SucessImg from "../../../assets/sucess-img.svg";

import { useUserContext } from "../../../context/User/hook";
const SucessPage = () => {
  const { user } = useUserContext();
  return (
    <Container>
      <TextArea>
        <h1>{`Seja bem vindo ${user} `}</h1>
      </TextArea>
      <img src={SucessImg} alt="imagem" />
    </Container>
  );
};

export default SucessPage;
