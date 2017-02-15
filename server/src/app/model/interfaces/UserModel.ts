/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */

import mongoose = require("mongoose");
import ChapterModel = require("../ChapterModel");

interface UserModel extends mongoose.Document {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    id: string;
    company: string;
    phoneNumber: string;
    passwordResetToken: string;
    passwordResetExpires: Date;
    licenseValidUntil:Date;
    purchaseDate: Date;
    paypalToken: string;
    birthday:Date;
    isDeleted: boolean;
    lastLogin: Date;
    gender: string;
    location: string;
    picture: string;
    chapters: [ChapterModel];
}

export = UserModel ;
