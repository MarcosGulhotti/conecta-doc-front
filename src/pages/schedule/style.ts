import styled from "styled-components";

const PatientsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction:column;
  align-items: center;
  margin-top: 30px;
  max-height: 500px;

  overflow-y: scroll;
  overflow-x: hidden;

  @media (min-width: 768px){
    width: 80%;
    display: flex;
    flex-direction:row;
    flex-wrap: wrap;
    justify-content: center;
  }
`

const FixInScreen = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
`

const FixInRightSide = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;

  width: 90%;

  height: 100px;
`

export { PatientsContainer, FixInScreen, FixInRightSide }