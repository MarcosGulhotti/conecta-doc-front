import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 50px;

  h1 {
    display: none;
  }

  @media (min-width: 768px) {
    align-items: center;
    justify-content: space-around;
    flex-direction: row;
    h1 {
      display: block;
      font-family: var(--font-mulish);
      font-size: 20px;
      font-weight: bold;
    }
  }

  @media (min-width: 1000px) {
    align-items: center;
    justify-content: space-around;
    flex-direction: row;

    /* margin-top: 100px; */

    h1 {
      display: block;
      font-family: var(--font-mulish);
      font-size: 36px;
      font-weight: bold;
    }
  }
`;

const DivisorDiv = styled.div`
  width: 100%;
  height: 1px;
  background-color: var(--sub-text);
  margin-top: 30px;
`;

const PatientsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  max-height: 500px;

  overflow-y: scroll;
  overflow-x: hidden;

  @media (min-width: 768px) {
    width: 80%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const FixInScreen = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
`;

export { StyledContainer, DivisorDiv, PatientsContainer, FixInScreen };
