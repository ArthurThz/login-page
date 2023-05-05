import { StyledButton } from "./styles";

import { IButton } from "./types";

const Button = ({ children, variant = "primary", onClick, type }: IButton) => {
  return (
    <StyledButton onClick={onClick} type={type} variant={variant}>
      {children}
    </StyledButton>
  );
};

export default Button;
