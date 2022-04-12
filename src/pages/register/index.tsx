import { Header } from "../../components/header";
import { RegisterForm } from "../../components/registerForm";
import { StyledContainer } from "./style";

const RegisterPage = () => {
  return (
    <StyledContainer>
      <Header />
      <RegisterForm />
    </StyledContainer>
  );
};

export default RegisterPage;
