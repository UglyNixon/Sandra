interface UserRoles {
    id: number;
    value: string;
}
export interface User{
    name: string;
    id: number;
    isActivate: boolean;
    gender: string;
    roles: UserRoles[];
    email: string;
    phone: string;

}
export interface UserSchema {
    authDate?:User;
}
