export interface User {
    name: string;
    phone: string;
    role: 0 | 1;
    email: string;
    img: string;
    createAt: string;
    updateAt: string;
    __v?: string | number 
}

export type Customer = User & {
    password: string;
}
