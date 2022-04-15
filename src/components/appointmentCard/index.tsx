import toast from "react-hot-toast";
import api from "../../services/api";
import { appointments } from "../../types";
import { StyledCardsContainer, StyledContainer, StyledDateContainer, StyledInfosContainer } from "./style";

interface AppointmentCardProps {
  data: appointments;
  refreshAppointments: () => void;
}

export const AppointmentsCard = ({ data, refreshAppointments }: AppointmentCardProps) => {
  const token = localStorage.getItem("token") || null;

  const formDate = (date: string) => {
    const formatedDate = new Date(date).toISOString().split("T")[0];

    const day = formatedDate.split("-")[2];

    const month = formatedDate.split("-")[1];

    const output = `${day}/${month}`;

    return output;
  };

  const cancelSchedule = async () => {
    await api.patch(
      `/schedule/${data.id}/cancel`,
      {},
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
          Authorization: `Bearer: ${token}`,
        },
      }
    );

    toast.success("Atendimento cancelado com sucesso!.");
    refreshAppointments();
  };

  return (
    <StyledContainer>
      <StyledDateContainer>
        <p>{formDate(data.schedule)}</p>
      </StyledDateContainer>
      <StyledInfosContainer>
        <p>{data.user.name}</p>
        <StyledCardsContainer>
          <div>{data.user.gender}</div>
          <div>{data.user.age} Anos</div>
        </StyledCardsContainer>
      </StyledInfosContainer>
      <i onClick={cancelSchedule} className="fa-solid fa-circle-xmark CloseButton"></i>
    </StyledContainer>
  );
};
