import { StyledContainer } from "./style";

interface IndicatorCardInterface {
  text: string;
  number: number;
}

export const IndicatorCard = ({ text, number }: IndicatorCardInterface) => {
  return (
    <StyledContainer>
      <p>{text}</p>
      <span>{number}</span>
    </StyledContainer>
  );
};
