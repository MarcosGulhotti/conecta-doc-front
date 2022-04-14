import { Button } from "../button";
import logo from "../../assets/svgs/logo.svg";
import { StyledButtonContainer, StyledContainer, StyledTextContainer } from "./style";
import { useState } from "react";
import { PatientExists } from "../patientExistsModal";
import { PatienteNotExistsModal } from "../patientNotExistsModal";

interface CloseModal {
  closeModal: () => void;
}

export const CreateScheduleCard = ({ closeModal }: CloseModal) => {
  const [patientExists, setPatientsExists] = useState<boolean>(false);
  const [secondModal, setSecondModal] = useState<boolean>(false);

  const ChangeModalPatientExists = () => {
    setSecondModal(true);
    setPatientsExists(true);
  };

  const ChangeModalPatientNotExists = () => {
    setSecondModal(true);
    setPatientsExists(false);
  };

  return (
    <div>
      <StyledContainer>
        {secondModal ? (
          <>
            {patientExists ? (
              <>
                <PatientExists closeMainModal={closeModal} closeModal={() => setSecondModal(false)} />
              </>
            ) : (
              <>
                <PatienteNotExistsModal closeMainModal={closeModal} closeModal={() => setSecondModal(false)} />
              </>
            )}
          </>
        ) : (
          <>
            <div className="IconsDiv">
              <i onClick={closeModal} className="fa-solid fa-circle-xmark CloseButton"></i>
            </div>
            <img src={logo} alt="Logo" />
            <StyledTextContainer>
              <h1>Vamos lá!</h1>
              <p>Antes de criar um novo agendamento, certifique-se se o paciente já está cadastrado no sistema</p>
            </StyledTextContainer>
            <StyledButtonContainer>
              <Button animated={false} func={ChangeModalPatientExists} width="250px" height="50px" type="button" text="Paciente existente" />
              <Button animated={false} func={ChangeModalPatientNotExists} width="250px" height="50px" type="button" text="Paciente não existente" />
            </StyledButtonContainer>
          </>
        )}
      </StyledContainer>
    </div>
  );
};
