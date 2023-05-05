import { InputContainer, StyledInput } from "./styles";
import { IInput } from "./types";

const Input = ({ type, name, text, value, onChange }: IInput) => {
  return (
    <InputContainer>
      <label htmlFor={name}>{text}</label>
      <StyledInput value={value} onChange={onChange} type={type} name={name} />
    </InputContainer>
  );
};

export default Input;
