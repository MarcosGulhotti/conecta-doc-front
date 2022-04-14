import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../store/hooks";
import { Button } from "../button";
import { Input } from "../input";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";
import { setUser } from "../../store/slices/userSlice";
import { StyledContainer } from "./style";
import toast from "react-hot-toast";

interface User {
  id: string;
  email: string;
  name: string;
  password: string;
  age: string;
  gender: string;
  isDoc: boolean;
  createdAt?: Date;
}

export const RegisterForm = () => {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  //   const {} = useAppSelector((state) => state.userSlice);

  const [errorModal, setErrorModal] = useState(false);
  const [isDoc, setIsDoc] = useState(true);

  const schema = yup.object().shape({
    email: yup.string().required().email("Por favor adicione um email válido"),
    password: yup.string().required(),
    name: yup.string().required(),
    age: yup.number().required(),
    gender: yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<User>({
    resolver: yupResolver(schema),
  });

  const handleSubmitFunction = async (data: User) => {
    try {
      const date = new Date();
      data.createdAt = date;
      data.isDoc = isDoc;

      if (data.gender === "Qual genero você se identica?") {
        throw new Error("Você precisa se identificar com algum gênero");
      }

      const req = await api.post("/user/signup", data, {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      });

      dispatch(setUser(req.data));

      navigate("/login");
    } catch (error) {
      toast.error("Algo deu errado na criação do usuário");
      reset();
    }
  };

  return (
    <StyledContainer>
      {/* <img src={logo} alt="Logo" onClick={() => navigate("/")} /> */}
      <form onSubmit={handleSubmit(handleSubmitFunction)}>
        <Input register={register("email")} icon="fa-solid fa-envelope" placeholder="Digite seu email" />
        <Input type="password" register={register("password")} icon="fa-solid fa-key" placeholder="Digite sua senha" />
        <Input register={register("name")} icon="fa-solid fa-user" placeholder="Digite seu nome" />
        <Input register={register("age")} icon="fa-solid fa-id-card" placeholder="Digite sua idade" />
        <Input
          register={register("gender")}
          icon="fa-solid fa-user"
          placeholder="Digite seu genero"
          select
          selectValues={["Masculino", "Feminino", "Não binário", "Outro"]}
        />
        <p>
          Já possui uma conta? Entre <span onClick={() => navigate("/login")}>aqui</span>
        </p>
        <Button animated={false} text="Enviar" type="submit" height="45px" width="250px" />
      </form>
    </StyledContainer>
  );
};
