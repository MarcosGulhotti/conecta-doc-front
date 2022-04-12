import styled from "styled-components";

const StyledButton = styled.button<{ width: string; height: string }>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};

  border: none;

  background: linear-gradient(90deg, #55aaff 0%, #3298ff 50%, #007fff 100%);
  border-radius: 10px;

  color: var(--white);
  font-size: 20px;

  display: flex;
  align-items: center;
  justify-content: space-around;

  animation: go-forward 1.5s;

  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);

  @keyframes go-forward {
    from {
      transform: translateX(-150px);
      opacity: 0.2;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;

export { StyledButton };
