import { User } from "../../store/types/userTypes";
import { StyledContainer } from "./style";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { isBefore, isToday } from "date-fns";
import api from "../../services/api";
import { Input } from "../input";
import { InputDate } from "../dateInput";
import { Button } from "../button";
import logo from "../../assets/svgs/logo.svg";
import toast from "react-hot-toast";

interface CreatePatient extends User {
  date: Date;
}

interface CloseModal {
  closeModal: () => void;
  closeMainModal?: () => void;
}

export const PatienteNotExistsModal = ({ closeModal, closeMainModal }: CloseModal) => {
  const token = localStorage.getItem("token") || "null";

  const schema = yup.object().shape({
    email: yup.string().required().email(),
    password: yup.string().required(),
    name: yup.string().required(),
    age: yup.number().required(),
    gender: yup.string().required(),
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

      if (data.gender === "Selecione o gênero do paciente") {
        toast.error("Você precisa identificar o gênero do paciente");
        throw new Error("Você precisa identificar o gênero do paciente");
      }

      data.isDoc = false;

      await api.post(`/schedule/create_user`, data, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          Authorization: `Bearer ${token}`,
        },
      });

      closeModal();
    } catch (error) {
      // toast.error("Algo deu errado com o agendamento da consulta");
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
        <Input type="password" register={register("password")} icon="fa-solid fa-key" placeholder="Digite senha do paciente" />
        <Input register={register("name")} icon="fa-solid fa-user" placeholder="Digite o nome do paciente" />
        <Input register={register("age")} icon="fa-solid fa-id-card" placeholder="Digite a idade do paciente" />
        <Input
          register={register("gender")}
          icon="fa-solid fa-user"
          placeholder=""
          presentation="Selecione o gênero do paciente"
          select
          selectValues={["Masculino", "Feminino", "Não binário", "Outro"]}
        />
        <InputDate register={register("date")} icon="fa-solid fa-calendar" placeholder="" />
        <Button animated={false} text="Enviar" type="submit" height="45px" width="250px" />
      </form>
    </StyledContainer>
  );
};
