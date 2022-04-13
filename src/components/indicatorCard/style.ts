import styled from "styled-components"

const StyledContainer = styled.div`
    width: 250px;
    height: 70px;

    padding: 10px;

    border-radius: 15px;

    background-color: var(--white);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin: 15px 0;

    p, span{
      font-family: var(--font-mulish);
      font-size: 14px;
      font-weight: bold;
    }

    span{
        color: var(--light-blue);
    }
    
`


export { StyledContainer }