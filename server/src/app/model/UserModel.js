/**
 * Created by Ziv Kalderon on 15-06-2016.
 */
"use strict";
var UserModel = (function () {
    function UserModel(userModel) {
        this._userModel = userModel;
    }
    Object.defineProperty(UserModel.prototype, "email", {
        get: function () {
            return this._userModel.email;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserModel.prototype, "password", {
        get: function () {
            return this._userModel.password;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserModel.prototype, "passwordResetToken", {
        get: function () {
            return this._userModel.passwordResetToken;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserModel.prototype, "passwordResetExpires", {
        get: function () {
            return this._userModel.passwordResetExpires;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserModel.prototype, "gender", {
        get: function () {
            return this._userModel.gender;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserModel.prototype, "picture", {
        get: function () {
            return this._userModel.picture;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserModel.prototype, "chapters", {
        get: function () {
            return this._userModel.chapters;
        },
        enumerable: true,
        configurable: true
    });
    return UserModel;
}());
Object.seal(UserModel);
module.exports = UserModel;
//# sourceMappingURL=UserModel.js.map