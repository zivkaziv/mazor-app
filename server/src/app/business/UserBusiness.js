/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */
"use strict";
var UserRepository = require("./../repository/UserRepository");
var bcrypt = require("bcrypt-nodejs");
var UserBusiness = (function () {
    function UserBusiness() {
        this.comparePassword = function (password, user, callback) {
            bcrypt.compare(password, user.password, function (err, isMatch) {
                callback(err, isMatch);
            });
        };
        this._userRepository = new UserRepository();
    }
    UserBusiness.prototype.create = function (item, callback) {
        this._userRepository.create(item, callback);
    };
    UserBusiness.prototype.retrieve = function (callback) {
        this._userRepository.retrieve(callback);
    };
    UserBusiness.prototype.update = function (_id, item, callback) {
        var _this = this;
        this._userRepository.findById(_id, function (err, res) {
            if (err) {
                callback(err, res);
            }
            else {
                _this._userRepository.update(res._id, item, callback);
            }
        });
    };
    UserBusiness.prototype.delete = function (_id, callback) {
        this._userRepository.delete(_id, callback);
    };
    UserBusiness.prototype.findById = function (_id, callback) {
        this._userRepository.findById(_id, callback);
    };
    UserBusiness.prototype.login = function (user, callback) {
        var _this = this;
        console.log(user);
        this._userRepository.findByCondition({ email: user.email }, function (error, foundUser) {
            if (error) {
                console.log(error);
            }
            else {
                console.log(foundUser);
                if (foundUser) {
                    _this.comparePassword(user.password, foundUser, function (err, isMatch) {
                        if (err) {
                            console.log(err);
                        }
                        else {
                            if (isMatch) {
                                callback(null, foundUser);
                            }
                            else {
                                callback(null, {});
                            }
                        }
                    });
                }
                else {
                    callback(null, {});
                }
            }
        });
    };
    return UserBusiness;
}());
Object.seal(UserBusiness);
module.exports = UserBusiness;
//# sourceMappingURL=UserBusiness.js.map