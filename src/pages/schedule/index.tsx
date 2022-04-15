import { useEffect, useState } from "react";
import { Header } from "../../components/header";
import { AppointmentsCard } from "../../components/appointmentCard";
import api from "../../services/api";
import { FixInRightSide, FixInScreen, PatientsContainer } from "./style";
import { getWeekOfMonth } from "date-fns";
import { sortTreatmentsMonth, sortTreatmentsWeek } from "./utils";
import { appointments } from "../../types";
import { SwitchButton } from "../../components/switchButton";
import { Button } from "../../components/button";
import Modal from "react-modal";
import { CreateScheduleCard } from "../../components/createScheduleCard";
import { useNavigate } from "react-router-dom";
import noData from "../../assets/svgs/noData.svg";

const customStyles = {
  content: {
    width: "100vw",
    height: "100vh",
    background: "rgba(0, 0, 0, 0.5)",
    margin: 0,
    padding: 0,
    top: 0,
    left: 0,
    border: "none",
    borderRadius: 0,
  },
};

const SchedulePage = () => {
  const token = localStorage.getItem("token") || null;
  const navigate = useNavigate();

  const [appointmentsMonth, setAppointmentsMonth] = useState<Array<appointments>>([]);
  const [appointmentsWeek, setAppointmentsWeek] = useState<Array<appointments>>([]);

  const [monthView, setMonthView] = useState<boolean>(true);
  const [modal, setModal] = useState<boolean>(false);

  const getTreatments = async () => {
    const req = await api.get("/doctor/patients/all", {
      headers: {
        "Access-Control-Allow-Origin": "*",
        Authorization: `Bearer: ${token}`,
      },
    });

    const allAppointmentsMonth: Array<appointments> = [];
    const allAppointmentsWeek: Array<appointments> = [];

    const date = new Date().toISOString().split("T")[0];

    req.data.forEach((elm: appointments) => {
      const Week = new Date(elm.schedule).toISOString().split("T")[0];

      if (elm.status === "Agendado" && new Date(elm.schedule).toISOString().split("T")[0].split("-")[1] === date.split("-")[1]) {
        allAppointmentsMonth.push(elm);
      }

      if (elm.status === "Agendado" && Week.split("-")[1] === date.split("-")[1] && getWeekOfMonth(new Date(Week)) === getWeekOfMonth(new Date(date))) {
        allAppointmentsWeek.push(elm);
      }
    });

    const sortedTreatmentsWeek = sortTreatmentsWeek(allAppointmentsWeek);

    const sortedTreatmentsMonth = sortTreatmentsMonth(allAppointmentsMonth);

    setAppointmentsMonth(sortedTreatmentsMonth);
    setAppointmentsWeek(sortedTreatmentsWeek);
  };
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
    getTreatments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [modal, token, monthView]);

  return (
    <div>
      <Header />
      <FixInRightSide>
        <SwitchButton
          monthOrWeek={monthView}
          textButtonLeft="Semanal"
          textButtonRight="Mensal"
          funcButtonLeft={() => setMonthView(false)}
          funcButtonRight={() => setMonthView(true)}
        />
      </FixInRightSide>
      <FixInScreen>
        <PatientsContainer>
          {monthView ? (
            appointmentsMonth === undefined ? (
              <img src={noData} alt="No Data Image" />
            ) : (
              appointmentsMonth.map((elm, i) => <AppointmentsCard refreshAppointments={() => getTreatments()} key={i} data={elm} />)
            )
          ) : appointmentsWeek.length === 0 ? (
            <img src={noData} alt="No Data Image" />
          ) : (
            appointmentsWeek.map((elm, i) => <AppointmentsCard refreshAppointments={() => getTreatments()} key={i} data={elm} />)
          )}
        </PatientsContainer>
      </FixInScreen>
      <FixInRightSide>
        <Button animated={false} type="button" width="250px" height="55px" func={() => setModal(true)} text="Criar nova consulta" />
      </FixInRightSide>
      {modal && (
        <Modal ariaHideApp={false} isOpen={modal} onRequestClose={() => setModal(false)} style={customStyles}>
          <CreateScheduleCard closeModal={() => setModal(false)} />
        </Modal>
      )}
    </div>
  );
};

export default SchedulePage;
