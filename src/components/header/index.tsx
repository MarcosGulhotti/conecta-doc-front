import logo from "../../assets/svgs/logo.svg";
import { StyledContainer, StyledNavigationContainer } from "./style";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const token = localStorage.getItem("token") || null;

  const navigate = useNavigate();

  const logOut = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <StyledContainer>
      <img onClick={() => navigate("/")} src={logo} alt="Logo" />
      <StyledNavigationContainer>
        <ul>
          <li>
            <p onClick={() => navigate("/")}>Início</p>
          </li>
          <li>
            <p onClick={() => navigate("/dashboard")}>Agendamentos</p>
          </li>
          <li>
            <p onClick={() => navigate("/schedules")}>Calendario</p>
          </li>
          <li
            onClick={() => {
              {
                token ? logOut() : navigate("/login");
              }
            }}
            className="LoginLi"
          >
            <p
              onClick={() => {
                {
                  token ? logOut() : navigate("/login");
                }
              }}
            >
              {token ? "Sair" : "Entrar"}
            </p>{" "}
            <i
              onClick={() => {
                {
                  token ? logOut() : navigate("/login");
                }
              }}
              className="fa-solid fa-arrow-right-to-bracket"
            ></i>
          </li>
        </ul>
      </StyledNavigationContainer>
    </StyledContainer>
  );
};
