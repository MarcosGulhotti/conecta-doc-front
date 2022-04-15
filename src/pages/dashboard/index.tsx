import { useEffect, useState } from "react";
import { Header } from "../../components/header";
import { IndicatorCard } from "../../components/indicatorCard";
import { AppointmentsCard } from "../../components/appointmentCard";
import api from "../../services/api";
import { appointments } from "../../types";
import { DivisorDiv, FixInScreen, PatientsContainer, StyledContainer } from "./style";
import { useNavigate } from "react-router-dom";
import noData from "../../assets/svgs/noData.svg";

const DashboardPage = () => {
  const token = localStorage.getItem("token") || null;

  const [totalTreatment, setTotalTreatment] = useState<number>(0);
  const [canceledTreatment, setCanceledTreatment] = useState<number>(0);
  const [treatements, setTreatements] = useState<Array<appointments>>([]);

  const navigate = useNavigate();

  const getTreatments = async () => {
    const req = await api.get("/doctor/patients/all", {
      headers: {
        "Access-Control-Allow-Origin": "*",
        Authorization: `Bearer: ${token}`,
      },
    });

    const allTreat: Array<appointments> = [];
    const canceledTreat: Array<appointments> = [];

    const date = new Date().toISOString().split("T")[0];

    req.data.forEach((elm: appointments) =>
      elm.status === "Agendado" && new Date(elm.schedule).toISOString().split("T")[0].split("-")[2] === date.split("-")[2] ? allTreat.push(elm) : null
    );

    req.data.forEach((elm: appointments) =>
      elm.status === "Cancelado" && new Date(elm.schedule).toISOString().split("T")[0].split("-")[2] === date.split("-")[2] ? canceledTreat.push(elm) : null
    );

    setTreatements(allTreat);
    setTotalTreatment(allTreat.length);
    setCanceledTreatment(canceledTreat.length);
  };

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
    getTreatments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  console.log(treatements);

  return (
    <div>
      <Header />
      <StyledContainer>
        <IndicatorCard text="Total de atendimentos para hoje" number={totalTreatment} />
        <h1>Agendamentos do dia</h1>
        <IndicatorCard text="Atendimentos cancelados" number={canceledTreatment} />
      </StyledContainer>
      <DivisorDiv />
      <FixInScreen>
        <PatientsContainer>
          {treatements.length === 0 ? (
            <img src={noData} alt="No Data Image" />
          ) : (
            <>
              {treatements.map((elm, i) => (
                <AppointmentsCard refreshAppointments={() => getTreatments()} key={i} data={elm} />
              ))}
            </>
          )}
        </PatientsContainer>
      </FixInScreen>
    </div>
  );
};

export default DashboardPage;
