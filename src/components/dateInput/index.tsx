import { useRef } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { StyledContainer } from "./style";

interface InputProps {
  register: UseFormRegisterReturn;
  icon: string;
  placeholder: string;
}

export const InputDate = ({ register, icon, placeholder, ...rest }: InputProps) => {
  const divElementRef = useRef<HTMLDivElement | null>(null);

  function onDivClick() {
    const element = divElementRef.current?.querySelector("input");

    if (element) element.focus();
  }

  return (
    <StyledContainer onClick={onDivClick}>
      <i className={icon} />
      <input type="date" {...register} placeholder={placeholder} {...rest} />
    </StyledContainer>
  );
};
