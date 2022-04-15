import styled from "styled-components";

const PatientsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 30px;
  max-height: 400px;
  height: 400px;

  overflow-y: scroll;
  overflow-x: hidden;

  img {
    width: 360px;
  }

  @media (min-width: 940px) {
    width: 80%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    align-items: center;
    max-height: 450px;
    height: 450px;
  }
`;

const FixInScreen = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
`;

const FixInRightSide = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;

  width: 90%;

  height: 100px;
`;

export { PatientsContainer, FixInScreen, FixInRightSide };
