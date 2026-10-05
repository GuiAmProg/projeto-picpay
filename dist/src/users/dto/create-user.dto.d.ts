import { UserType } from '@prisma/client';
export declare class CreateUserDto {
    fullName: string;
    document: string;
    email: string;
    password: string;
    balance?: number;
    type: UserType;
}
