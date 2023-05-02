import { InputContainer,StyledInput } from "./styles";
import { IInput } from "./types";

const Input = ({type, name, text} : IInput) => {
    return  (
        <InputContainer>      
            <label htmlFor={name}>{text}</label>     
            <StyledInput type={type}  name={name} />
        </InputContainer>
    )
     
}
 
export default Input;