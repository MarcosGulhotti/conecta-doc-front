import logo from "../../assets/svgs/logo.svg";
import { StyledContainer, StyledNavigationContainer } from "./style";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  const navigateTo = (path: string) => {
    navigate(path);
  };

  return (
    <StyledContainer>
      <img onClick={() => navigateTo("/")} src={logo} alt="Logo" />
      <StyledNavigationContainer>
        <ul>
          <li>
            <p onClick={() => navigateTo("/")}>Início</p>
          </li>
          <li>
            <p onClick={() => navigateTo("/dashboard")}>Agendamentos</p>
          </li>
          <li>
            <p onClick={() => navigateTo("/schedules")}>Calendario</p>
          </li>
          <li onClick={() => navigateTo("/login")} className="LoginLi">
            <p onClick={() => navigateTo("/login")}>Entrar</p>{" "}
            <i
              onClick={() => navigateTo("/login")}
              className="fa-solid fa-arrow-right-to-bracket"
            ></i>
          </li>
        </ul>
      </StyledNavigationContainer>
    </StyledContainer>
  );
};
