import { appointments } from "../../types";
import { StyledCardsContainer, StyledContainer, StyledDateContainer, StyledInfosContainer } from "./style";
import { isMonday, isTuesday, isWednesday, isThursday, isFriday, isSaturday, format } from "date-fns";
import pt from "date-fns/locale/pt-BR";
import { formatInTimeZone, zonedTimeToUtc } from "date-fns-tz";

export const AppointmentsCard = (data: appointments) => {
  const formDate = (date: string) => {
    const formatedDate = new Date(date).toISOString().split("T")[0];

    const day = formatedDate.split("-")[2];

    const month = formatedDate.split("-")[1];

    const output = `${day}/${month}`;

    return output;
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
    </StyledContainer>
  );
};
