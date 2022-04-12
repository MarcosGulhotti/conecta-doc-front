import { useNavigate } from "react-router-dom";
import { Button } from "../../components/button";
import { Header } from "../../components/header";
import { StyledContainer } from "./style";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <StyledContainer>
        <div>
          <p className="MainText">
            Aqui na{" "}
            <span>
              Connecta<span className="Doc">Doc</span>,
            </span>
            todos se preocupam com a sua saúde.
          </p>
          <p className="SubText">
            Encontre profissionais de saúde de forma rápida, segura e confiável.
          </p>
          <Button
            type="button"
            height="55px"
            width="200px"
            text="Agendar"
            func={() => navigate("schedules")}
            details
          />
        </div>
      </StyledContainer>
    </>
  );
};

export default HomePage;