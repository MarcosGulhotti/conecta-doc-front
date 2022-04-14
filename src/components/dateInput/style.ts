import styled from "styled-components";

const StyledContainer = styled.div`
  width: 250px;
  height: 50px;

  @media (min-width: 425px) {
    width: 300px;
  }

  @media (min-width: 768px) {
    width: 350px;
  }

  border: 1px solid black;
  border-radius: 15px;

  display: flex;
  align-items: center;

  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);

  margin-top: 20px;

  input {
    border: none;
    border-radius: 15px;
    width: 85%;
    height: 35px;

    ::placeholder {
      color: var(--sub-text);

      font-family: var(--font-maven);
    }
  }
  i {
    font-size: 20px;
    margin: 0 10px;

    color: var(--sub-text);
  }
`;

export { StyledContainer };
