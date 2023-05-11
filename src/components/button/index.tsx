import { StyledButton } from "./styles";

import { IButton } from "./types";

const Button = ({
  children,
  variant = "primary",
  onClick,
  type,
  disabled,
}: IButton) => {
  return (
    <StyledButton
      onClick={onClick}
      type={type}
      variant={variant}
      disabled={disabled}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
