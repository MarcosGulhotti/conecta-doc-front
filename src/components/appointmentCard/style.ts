import styled from "styled-components";

const StyledContainer = styled.div`
  width: 300px;

  margin: 10px;
  @media (min-width: 425px) {
    width: 350px;
  }
  height: 80px;

  border-radius: 20px;

  background-color: var(--white);

  display: flex;

  i {
    color: #cc3e36;
    font-size: 20px;

    width: 40px;

    height: 20px;

    margin-top: 6px;
    margin-right: 6px;

    cursor: pointer;
  }
`;

const StyledDateContainer = styled.div`
  width: 100px;
  height: 80px;

  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;

  font-family: var(--font-mulish);
  font-size: 24px;
  color: var(--white);
  font-weight: bold;

  background-color: var(--dark-blue);

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const StyledInfosContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  width: 75%;

  p {
    font-family: var(--font-mulish);
    font-size: 24px;
    color: var(--black);
    font-weight: bold;

    max-width: 100%;
    white-space: nowrap;
    overflow-x: hidden;
    text-overflow: ellipsis;
  }
`;

const StyledCardsContainer = styled.div`
  display: flex;

  div {
    @media (min-width: 425px) {
      width: 90px;
    }
    width: 80px;
    height: 30px;
    background: linear-gradient(90deg, #54a9ff 0%, #007fff 100%);
    border-radius: 15px;

    color: var(--white);
    font-family: var(--font-mulish);
    font-size: 14px;
    font-weight: bold;

    margin: 0px 15px;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export { StyledContainer, StyledDateContainer, StyledInfosContainer, StyledCardsContainer };
