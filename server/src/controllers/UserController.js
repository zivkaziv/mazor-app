/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */
"use strict";
var UserBusiness = require("./../app/business/UserBusiness");
var jwt = require("jsonwebtoken");
var Constants = require("./../config/constants/constants");
var UserController = (function () {
    function UserController() {
    }
    UserController.prototype.login = function (req, res) {
        try {
            var email = req.body.email;
            var password = req.body.password;
            var user = {
                email: email,
                password: password
            };
            try {
                var userBusiness_1 = new UserBusiness();
                userBusiness_1.login(user, function (error, userFromDb) {
                    if (error) {
                        console.log(error);
                    }
                    else {
                        //in case we've got the user
                        userFromDb.lastLogin = new Date();
                        if (userFromDb.email) {
                            var token = jwt.sign(user, Constants.LOGIN_SECRET, {
                                expiresIn: 60 * 60 // expires in 1 hours
                            });
                            res.json({
                                success: true,
                                message: 'Enjoy your token!',
                                token: token,
                                email: userFromDb.email,
                                user: userFromDb
                            });
                            userBusiness_1.update(userFromDb._id, userFromDb, function (err, result) {
                                console.log('updated');
                            });
                        }
                        else {
                            res.status(401).send({ msg: 'Invalid email or password' });
                        }
                    }
                });
            }
            catch (err) {
                console.log(err);
            }
        }
        catch (e) {
            console.log(e);
            res.send({ "error": "error in your request" });
        }
    };
    UserController.prototype.create = function (req, res) {
        try {
            var user = req.body;
            user.lastLogin = new Date();
            var userBusiness = new UserBusiness();
            userBusiness.create(user, function (error, result) {
                if (error) {
                    res.send({ "error": "error" + error });
                }
                else {
                    var token = jwt.sign(user, Constants.LOGIN_SECRET, {
                        expiresIn: 60 * 60 // expires in 1 hours
                    });
                    res.json({
                        success: true,
                        message: 'Enjoy your token!',
                        token: token,
                        email: result.email,
                        user: result
                    });
                }
            });
        }
        catch (e) {
            console.log(e);
            res.send({ "error": "error in your request" });
        }
    };
    UserController.prototype.update = function (req, res) {
        try {
            console.log('ziv is the king!');
            var user = req.body;
            var _id = req.params._id;
            var userBusiness = new UserBusiness();
            userBusiness.update(_id, user, function (error, result) {
                if (error)
                    res.send({ "error": "error" });
                else
                    res.send({ "success": "success" });
            });
        }
        catch (e) {
            console.log(e);
            res.send({ "error": "error in your request" });
        }
    };
    UserController.prototype.delete = function (req, res) {
        try {
            var _id = req.params._id;
            var userBusiness = new UserBusiness();
            userBusiness.delete(_id, function (error, result) {
                if (error)
                    res.send({ "error": "error" });
                else
                    res.send({ "success": "success" });
            });
        }
        catch (e) {
            console.log(e);
            res.send({ "error": "error in your request" });
        }
    };
    UserController.prototype.retrieve = function (req, res) {
        try {
            var userBusiness = new UserBusiness();
            userBusiness.retrieve(function (error, result) {
                if (error)
                    res.send({ "error": "error" });
                else
                    res.send(result);
            });
        }
        catch (e) {
            console.log(e);
            res.send({ "error": "error in your request" });
        }
    };
    UserController.prototype.findById = function (req, res) {
        try {
            var _id = req.params._id;
            var userBusiness = new UserBusiness();
            userBusiness.findById(_id, function (error, result) {
                if (error)
                    res.send({ "error": "error" });
                else
                    res.send(result);
            });
        }
        catch (e) {
            console.log(e);
            res.send({ "error": "error in your request" });
        }
    };
    return UserController;
}());
module.exports = UserController;
//# sourceMappingURL=UserController.js.map