interface User {
  id: string;
  email: string;
  name: string;
  age: string;
  gender: string;
  isDoc: boolean | null;
  createdAt: Date | null;
  isUserLogged: boolean;
  userToken: string | null;
}

interface UserLogin {
  token: string;
}

export type { User, UserLogin };
