interface User {
  id: string;
  email: string;
  name: string;
  age: string;
  gender: string;
  password?: string;
  isDoc: boolean | null;
  createdAt: Date | null;
}

export type { User };
