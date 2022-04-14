import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import api from "../../services/api";
import { User } from "../../store/types/userTypes";
import { Button } from "../button";
import { InputDate } from "../dateInput";
import { Input } from "../input";
import { isBefore, isToday } from "date-fns";
import { StyledContainer } from "./style";
import toast from "react-hot-toast";
import logo from "../../assets/svgs/logo.svg";

interface CreatePatient extends User {
  date: Date;
}

interface CloseModal {
  closeModal: () => void;
  closeMainModal?: () => void;
}

export const PatientExists = ({ closeModal, closeMainModal }: CloseModal) => {
  const token = localStorage.getItem("token") || "null";

  const schema = yup.object().shape({
    email: yup.string().required().email(),
    date: yup.date().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CreatePatient>({
    resolver: yupResolver(schema),
  });

  const handleSubmitFunction = async (data: CreatePatient) => {
    try {
      const date = new Date();

      if (!isToday(data.date)) {
        if (isBefore(data.date, date)) {
          toast.error("A data precisa ser valida");
          throw new Error("A data precisa ser valida");
        }
      }

      const req = await api.get(`/user/${data.email}`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          Authorization: `Bearer ${token}`,
        },
      });

      const id = req.data.id;

      const newDate = { date: new Date(data.date).toISOString().split("T")[0] };

      await api.post(`/schedule/${id}/create`, newDate, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          Authorization: `Bearer ${token}`,
        },
      });

      closeModal();
    } catch (error) {
      toast.error("Usuário não existe");
      // reset();
    }
  };

  return (
    <StyledContainer>
      <div className="IconsDiv">
        <i onClick={closeModal} className="fa-solid fa-arrow-left BackButton"></i>
        <i onClick={closeMainModal} className="fa-solid fa-circle-xmark CloseButton"></i>
      </div>
      <img src={logo} alt="Logo" />
      <form onSubmit={handleSubmit(handleSubmitFunction)}>
        <Input register={register("email")} icon="fa-solid fa-envelope" placeholder="Digite o email do paciente" />
        <InputDate register={register("date")} icon="fa-solid fa-calendar" placeholder="Digite sua idade" />
        <Button animated={false} text="Enviar" type="submit" height="45px" width="250px" />
      </form>
    </StyledContainer>
  );
};
