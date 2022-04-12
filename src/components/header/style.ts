import styled from "styled-components";

const StyledContainer = styled.div`
  width: 100%;
  height: 130px;
  background-color: var(--white);
  display: flex;
  flex-direction: column;

  @media (min-width: 410px) {
    height: 100px;
  }

  @media (min-width: 1000px) {
    justify-content: space-around;
    align-items: center;
    height: 100px;
    flex-direction: row;
  }

  img {
    width: 250px;
    align-self: center;
    cursor: pointer;

    @media (max-width: 768px) {
      margin-top: 15px;
    }
  }
`;

const StyledNavigationContainer = styled.div`
  ul {
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    list-style: none;

    flex-wrap: wrap;

    li {
      margin: 10px;
      cursor: pointer;
      p {
        font-size: 18px;
        font-family: var(--font-mulish);
      }
    }
    .LoginLi {
      display: flex;
      flex-direction: row;
      align-items: center;
      i {
        margin-left: 10px;
      }
    }
  }
`;

export { StyledContainer, StyledNavigationContainer };
