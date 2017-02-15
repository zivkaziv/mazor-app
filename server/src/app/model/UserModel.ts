/**
 * Created by Ziv Kalderon on 15-06-2016.
 */

import IUserModel = require('./interfaces/UserModel');
import ChapterModel = require("./ChapterModel");

class UserModel {

    private _userModel: IUserModel;

    constructor(userModel: IUserModel) {
        this._userModel = userModel;
    }

    get email (): string {
        return this._userModel.email;
    }

    get password (): string {
        return this._userModel.password;
    }

    get passwordResetToken (): string {
        return this._userModel.passwordResetToken;
    }

    get passwordResetExpires (): Date {
        return this._userModel.passwordResetExpires;
    }

    get gender (): string {
        return this._userModel.gender;
    }

    get picture (): string {
        return this._userModel.picture;
    }

    get chapters (): [ChapterModel] {
        return this._userModel.chapters;
    }
}
Object.seal(UserModel);
export =  UserModel;

