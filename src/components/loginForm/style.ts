import styled from "styled-components";

const StyledContainer = styled.div`
  border: 1px solid black;
  border-radius: 10px;

  background-color: white;

  width: 300px;
  height: 400px;

  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);

  @media (min-width: 425px) {
    width: 350px;
  }

  @media (min-width: 768px) {
    width: 400px;
  }

  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  img {
    width: 300px;
    cursor: pointer;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;

    p {
      @media (max-width: 768px) {
        font-size: 12px;
      }
      align-self: flex-end;
      font-family: var(--font-maven);
      margin: 5px 0;
      span {
        cursor: pointer;
        font-weight: bold;
        color: var(--light-blue);
      }
    }

    button {
      margin-top: 25px;
      width: 250px;

      @media (min-width: 425px) {
        width: 280px;
      }
      @media (min-width: 768px) {
        width: 350px;
      }
    }
  }
`;

export { StyledContainer };
