import styled from "styled-components";

const StyledContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  width: 90%;
  height: auto;

  background-color: var(--white);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  border-radius: 20px;

  img {
    width: 250px;
    height: 80px;
    margin-bottom: 40px;
  }

  @media (min-width: 768px) {
    width: 650px;
    height: auto;

    img {
      height: 100px;
      margin-bottom: 0px;
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
    justify-content: flex-end;
  }
`;

const StyledTextContainer = styled.div`
  @media (min-width: 768px) {
    width: 500px;
    margin-left: 50px;
    h1 {
      font-size: 40px;
      font-weight: bold;
      margin-bottom: 15px;
    }
    p {
      font-size: 20px;
      margin-bottom: 15px;
    }
  }
  height: 100px;
  align-self: flex-start;
  margin-left: 20px;
  line-height: 1.5rem;

  h1 {
    font-weight: var(--font-mulish);
    color: var(--light-blue);
    font-size: 32px;
    font-weight: bold;

    margin-bottom: 15px;
  }

  p {
    font-weight: var(--font-mulish);
    color: var(--sub-text);
    font-size: 16px;
    margin-bottom: 15px;
  }
`;

const StyledButtonContainer = styled.div`
  margin-top: 40px;
  @media (min-width: 768px) {
    margin-top: 0px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    width: 100%;
  }
  height: 150px;
  button {
    margin-top: 15px;
  }
`;

export { StyledContainer, StyledTextContainer, StyledButtonContainer };
