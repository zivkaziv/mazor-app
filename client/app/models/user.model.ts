export class User {
    _id:string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    id: string;
    company: string;
    birthday: Date;
    phoneNumber: string;
    passwordResetToken: string;
    passwordResetExpires: Date;
    purchaseDate: Date;
    paypalToken: string;
    lastLogin: Date;
    gender: string;
    location: string;
    picture: string;
    chapters: [{}];
    constructor() {}
}