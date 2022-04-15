interface User {
  id: string;
  email: string;
  name: string;
  age: string;
  gender: string;
  isDoc: boolean | null;
  createdAt: Date | null;
}

interface appointments {
  id: string;
  user: User;
  doctor: User;
  status: string;
  schedule: string;
}

export type { appointments };
