/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */

import DataAccess = require('../DataAccess');
import IUserModel = require("./../../model/interfaces/UserModel");
import ChapterModel = require("../../model/ChapterModel");
import bcrypt = require('bcrypt-nodejs');

var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

class UserSchema {

    static get schema() {
        var schema = mongoose.Schema({
            email: {
                type: String,
                unique: true,
                required: true
            },
            password: {
                type: String,
                required: true
            },
            firstName: String,
            lastName: String,
            id: String,
            company: String,
            phoneNumber: String,
            passwordResetToken: String,
            passwordResetExpires: Date,
            licenseValidUntil: Date,
            purchaseDate: Date,
            paypalToken: String,
            birthday: Date,
            isDeleted: Boolean,
            lastLogin:Date,
            gender: String,
            location: String,
            picture: String,
            chapters: {type: Array, "default": []}
        });

        schema.pre('save', function (next) {
            var user = this;
            if (!user.isModified('password')) {
                return next();
            }
            bcrypt.genSalt(10, function (err, salt) {
                bcrypt.hash(user.password, salt, null, function (err, hash) {
                    user.password = hash;
                    next();
                });
            });
        });

        return schema;
    }
}

var schema = mongooseConnection.model("Users", UserSchema.schema);
export = schema;

