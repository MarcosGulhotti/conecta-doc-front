import { User } from "../../store/types/userTypes";
import { StyledCardsContainer, StyledContainer, StyledDateContainer, StyledInfosContainer } from "./style";

interface Treatements {
    id: string;
    user: User;
    doctor: User;
    status: string;
    schedule: string;
}

export const TreatementCard = (data: Treatements) => {

    const formDate = (date: string) => {
        const formatedDate = new Date(date).toISOString().split("T")[0]

        const day = formatedDate.split("-")[2]

        const month = formatedDate.split("-")[1]

        const output = `${day}/${month}`

        return output
    }
    return (
        <StyledContainer>
            <StyledDateContainer>
                <p>
                    {formDate(data.schedule)}
                </p>
            </StyledDateContainer>
            <StyledInfosContainer>
                <p>{data.user.name}</p>
                <StyledCardsContainer>
                    <div>{data.user.gender}</div>
                    <div>{data.user.age} Anos</div>
                </StyledCardsContainer>
            </StyledInfosContainer>
        </StyledContainer>
    )
}