import { StyledButton } from "./styles";

import { IButton } from "./types";

const Button = ({ children, variant = "primary" }: IButton) => {
  return <StyledButton variant={variant}>{children}</StyledButton>;
};

export default Button;
