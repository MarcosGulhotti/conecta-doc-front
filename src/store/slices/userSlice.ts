/* eslint-disable no-empty-pattern */
import { User, UserLogin } from "../types/userTypes";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";

const initialState: User = {
  name: "",
  email: "",
  age: "",
  gender: "",
  isDoc: null,
  createdAt: null,
  id: "",
  isUserLogged: false,
  userToken: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.age = action.payload.age;
      state.gender = action.payload.gender;
      state.isDoc = action.payload.isDoc;
      state.createdAt = action.payload.createdAt;
      state.id = action.payload.id;
    },
    loginUser: (state, action: PayloadAction<UserLogin>) => {
      state.isUserLogged = true;
      state.userToken = action.payload.token;
    },
    logoutUser: (state, action: PayloadAction<UserLogin>) => {
      state = initialState;
    },
  },
});

export const { setUser, loginUser, logoutUser } = userSlice.actions;

export const selectUser = (state: RootState) => state.userSlice;

export default userSlice.reducer;
