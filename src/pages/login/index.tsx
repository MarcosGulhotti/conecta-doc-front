import { Header } from "../../components/header";
import { LoginForm } from "../../components/loginForm";
import { StyledContainer } from "./style";

const LoginPage = () => {
  return (
    <StyledContainer>
      <Header />
      <LoginForm />
    </StyledContainer>
  );
};

export default LoginPage;
