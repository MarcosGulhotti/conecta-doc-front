// import { useState } from "react";
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

interface UserLogin {
  email: string;
  password: string;
}

export const LoginForm = () => {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const schema = yup.object().shape({
    email: yup.string().required().email(),
    password: yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserLogin>({
    resolver: yupResolver(schema),
  });

  const handleSubmitFunction = async (data: UserLogin) => {
    try {
      const req = await api.post("/user/signin", data, {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      });

      const getUser = await api.get(`/user/${data.email}`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          Authorization: `Bearer: ${req.data.token}`,
        },
      });

      dispatch(setUser(getUser.data));

      localStorage.setItem("token", req.data.token);
      navigate("/schedules");
    } catch (error) {
      toast.error("Email ou senha invalidos");
    }
  };

  return (
    <StyledContainer>
      <form onSubmit={handleSubmit(handleSubmitFunction)}>
        <Input register={register("email")} icon="fa-solid fa-envelope" placeholder="Digite seu email" />
        <Input type="password" register={register("password")} icon="fa-solid fa-key" placeholder="Digite sua senha" />
        <p>
          Ainda não possui uma conta? Crie <span onClick={() => navigate("/register")}>aqui</span>
        </p>
        <Button animated={false} text="Enviar" type="submit" height="45px" width="250px" />
      </form>
    </StyledContainer>
  );
};
