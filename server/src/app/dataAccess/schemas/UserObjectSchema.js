/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */
"use strict";
var DataAccess = require("../DataAccess");
var bcrypt = require("bcrypt-nodejs");
var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;
var UserSchema = (function () {
    function UserSchema() {
    }
    Object.defineProperty(UserSchema, "schema", {
        get: function () {
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
                lastLogin: Date,
                gender: String,
                location: String,
                picture: String,
                chapters: { type: Array, "default": [] }
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
        },
        enumerable: true,
        configurable: true
    });
    return UserSchema;
}());
var schema = mongooseConnection.model("Users", UserSchema.schema);
module.exports = schema;
//# sourceMappingURL=UserObjectSchema.js.map