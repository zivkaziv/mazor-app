/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */

import UserRepository = require("./../repository/UserRepository");
import IUserBusiness = require("./interfaces/UserBusiness");
import IUserModel = require("./../model/interfaces/UserModel");
import UserModel = require("./../model/UserModel");
import bcrypt = require('bcrypt-nodejs');


class UserBusiness implements IUserBusiness {
    private _userRepository: UserRepository;

    constructor () {
        this._userRepository = new UserRepository();
    }

    create (item: IUserModel, callback: (error: any, result: any) => void) {
        this._userRepository.create(item, callback);
    }

    retrieve (callback: (error: any, result: any) => void) {
        this._userRepository.retrieve(callback);
    }

    update (_id: string, item: IUserModel, callback: (error: any, result: any) => void) {

        this._userRepository.findById(_id, (err, res) => {
            if (err) {
                callback(err, res);
            }else {
                this._userRepository.update(res._id, item, callback);
            }

        });
    }

    delete (_id: string, callback:(error: any, result: any) => void) {
        this._userRepository.delete(_id , callback);
    }

    findById (_id: string, callback: (error: any, result: IUserModel) => void) {
        this._userRepository.findById(_id, callback);
    }

    comparePassword = function (password:string, user:IUserModel, callback:(error: any, isMatch: boolean) => void) {
    bcrypt.compare(password, user.password, function (err, isMatch) {
        callback(err, isMatch);
    });
};

    login(user:any, callback: (error: any, result: any) => void) {
        console.log(user);
        this._userRepository.findByCondition({email: user.email }, (error, foundUser) => {
            if (error) {
                console.log(error);
            } else {
                console.log(foundUser);
                if (foundUser) {
                    this.comparePassword(user.password, foundUser, (err, isMatch) => {
                        if (err) {
                            console.log(err);
                        } else {
                            if (isMatch) {
                                callback(null, foundUser);
                            }else{
                                callback(null, {});
                            }
                        }
                    });
                }else{
                    callback(null, {});
                }
            }
        });
    }
}


Object.seal(UserBusiness);
export = UserBusiness;