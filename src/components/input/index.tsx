import { useRef } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { StyledContainer } from "./style";

interface InputProps {
  register: UseFormRegisterReturn;
  icon: string;
  placeholder: string;
  type?: string;
  select?: boolean;
  selectValues?: Array<string>;
  presentation?: string;
}

export const Input = ({ type, register, icon, placeholder, select, selectValues, presentation, ...rest }: InputProps) => {
  const divElementRef = useRef<HTMLDivElement | null>(null);

  function onDivClick() {
    const element = divElementRef.current?.querySelector("input");

    if (element) element.focus();
  }

  return (
    <StyledContainer onClick={onDivClick}>
      <i className={icon} />
      {select ? (
        <select {...register} placeholder={placeholder} {...rest}>
          <option value={undefined}>{presentation ? presentation : "Qual genero você se identica?"}</option>
          {selectValues &&
            selectValues.map((elm, i) => (
              <option key={i} value={elm}>
                {elm}
              </option>
            ))}
        </select>
      ) : (
        <input type={type} {...register} placeholder={placeholder} {...rest} />
      )}
    </StyledContainer>
  );
};
