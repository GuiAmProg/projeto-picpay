export declare const UserType: {
    readonly COMMON: "COMMON";
    readonly MERCHANT: "MERCHANT";
};
export type UserType = (typeof UserType)[keyof typeof UserType];
