import { StyledButton } from "./style";

interface ButtonProps {
  text: string;
  func?: () => void;
  details?: boolean;
  width: string;
  height: string;
  type: "button" | "submit" | "reset";
  animated: boolean
}

export const Button = ({ text, func, details, width, height, type, animated }: ButtonProps) => {
  return (
    <StyledButton animated={animated} type={type} height={height} width={width} onClick={func}>
      {text} {details ? <i className="fa-solid fa-arrow-right" /> : null}
    </StyledButton>
  );
};
