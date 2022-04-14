import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;

  img {
    width: 200px;
    height: 80px;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;

    height: 250px;

    button {
      margin-top: 25px;
    }
  }

  .BackButton {
    cursor: pointer;
    align-self: flex-start;
    font-size: 30px;
    margin-left: 20px;
    margin-top: 20px;

    height: 50px;

    @media (min-width: 768px) {
      margin-left: 100px;
    }
  }

  .CloseButton {
    cursor: pointer;
    align-self: flex-end;
    font-size: 30px;
    margin-right: 20px;
    margin-top: 20px;

    height: 50px;

    color: #cc3e36;
    @media (min-width: 768px) {
      margin-right: 50px;
    }
  }

  .IconsDiv {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
`;

export { StyledContainer };
