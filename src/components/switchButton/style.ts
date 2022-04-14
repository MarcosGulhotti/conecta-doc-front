import styled, { css } from "styled-components";

const StyledLeftButton = styled.button<{ monthOrWeek: boolean }>`
  ${({ monthOrWeek }) =>
    monthOrWeek
      ? css`
          background-color: var(--white);
          color: var(--black);
        `
      : css`
          background: linear-gradient(90deg, #007fff 0%, #003aff 100%);
          color: var(--white);
        `}

  width: 100px;
  height: 45px;

  border: none;
  border-radius: 5px 0px 0px 5px;

  font-family: var(--font-mulish);
  font-weight: bold;
`;

const StyledRightButton = styled.button<{ monthOrWeek: boolean }>`
  ${({ monthOrWeek }) =>
    monthOrWeek
      ? css`
          background: linear-gradient(90deg, #007fff 0%, #003aff 100%);
          color: var(--white);
        `
      : css`
          background-color: var(--white);
          color: var(--black);
        `}

  width: 100px;
  height: 45px;

  border: none;
  border-radius: 0px 5px 5px 0px;
  font-weight: bold;
`;

export { StyledLeftButton, StyledRightButton };
