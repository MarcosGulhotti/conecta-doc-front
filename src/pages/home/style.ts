import styled from "styled-components";
import mainImage from "../../assets/mainImage.webp";

const StyledContainer = styled.div`
  background: url(${mainImage}) no-repeat center center fixed;
  min-height: 100vh;
  background-size: cover;

  display: flex;
  flex-direction: column;

  p {
    margin-bottom: 15px;
    font-size: 28px;
    font-family: var(--font-maven);
    span {
      font-weight: bold;
      margin: 0px 10px;
      .Doc {
        color: var(--logo-blue);
        margin: 0;
      }
    }
  }
  .MainText {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .SubText {
    font-weight: normal;
    font-size: 20px;
    color: var(--sub-text);
    margin-bottom: 25px;
  }

  div {
    position: absolute;
    top: 50%;
    max-width: 500px;
    transform: translateY(-50%);
    padding: 30px;
  }

  @media (min-width: 1025px) {
    display: flex;
    flex-direction: column;

    p {
      margin-bottom: 15px;
      font-size: 48px;
      font-family: var(--font-maven);
      span {
        font-weight: bold;
        margin: 0px 10px;
        .Doc {
          color: var(--logo-blue);
          margin: 0;
        }
      }
    }

    .MainText {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      max-width: 650px;
    }

    .SubText {
      font-weight: normal;
      font-size: 24px;
      color: var(--sub-text);
      max-width: 650px;
      margin-bottom: 25px;
    }

    div {
      max-width: 650px;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      margin-left: 200px;
    }
  }
`;

export { StyledContainer };
