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

interface Treatements {
    id: string;
    user: User;
    doctor: User;
    status: string;
    schedule: string;
}

export type { Treatements }