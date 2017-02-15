/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */

import express = require("express");
import UserBusiness = require("./../app/business/UserBusiness");
import IBaseController = require("./BaseController");
import IHeroModel = require("./../app/model/interfaces/HeroModel");
import jwt = require('jsonwebtoken');
import IUserModel = require("../app/model/interfaces/UserModel");
import UserModel = require("../app/model/UserModel");
var Constants = require("./../config/constants/constants");

class UserController {

    login(req: express.Request, res: express.Response): void {
        try {
            var email = req.body.email;
            var password = req.body.password;

           var user = {
                email: email,
                password: password
            };

            try {
                let userBusiness = new UserBusiness();
                userBusiness.login(user, (error, userFromDb) => {
                    if(error){
                        console.log(error);
                    }else {
                        //in case we've got the user
                        userFromDb.lastLogin = new Date();
                        if (userFromDb.email){
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
                            userBusiness.update(userFromDb._id, userFromDb, (err, result) => {
                                console.log('updated');
                            });
                        }else{
                            res.status(401).send({ msg: 'Invalid email or password' });
                        }
                    }
                });
            } catch (err) {
                console.log(err);
            }
        }catch (e)  {
            console.log(e);
            res.send({"error": "error in your request"});
        }
    }


    create(req: express.Request, res: express.Response): void {
        try {

            var user: IUserModel = <IUserModel>req.body;
            user.lastLogin = new Date();
            var userBusiness = new UserBusiness();
            userBusiness.create(user, (error, result) => {
                if (error){
                    res.send({"error": "error" + error});
                } else{
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
        catch (e)  {
            console.log(e);
            res.send({"error": "error in your request"});

        }
    }
    update(req: express.Request, res: express.Response): void {
        try {
            console.log('ziv is the king!');
            var user: IUserModel = <IUserModel>req.body;
            var _id: string = req.params._id;
            var userBusiness = new UserBusiness();
            userBusiness.update(_id, user, (error, result) => {
                if(error) res.send({"error": "error"});
                else res.send({"success": "success"});
            });
        }
        catch (e)  {
            console.log(e);
            res.send({"error": "error in your request"});

        }
    }
    delete(req: express.Request, res: express.Response): void {
        try {

            var _id: string = req.params._id;
            var userBusiness = new UserBusiness();
            userBusiness.delete(_id, (error, result) => {
                if(error) res.send({"error": "error"});
                else res.send({"success": "success"});
            });
        }
        catch (e)  {
            console.log(e);
            res.send({"error": "error in your request"});

        }
    }
    retrieve(req: express.Request, res: express.Response): void {
        try {

            var userBusiness = new UserBusiness();
            userBusiness.retrieve((error, result) => {
                if(error) res.send({"error": "error"});
                else res.send(result);
            });
        }
        catch (e)  {
            console.log(e);
            res.send({"error": "error in your request"});

        }
    }
    findById(req: express.Request, res: express.Response): void {
        try {

            var _id: string = req.params._id;
            var userBusiness = new UserBusiness();
            userBusiness.findById(_id, (error, result) => {
                if(error) res.send({"error": "error"});
                else res.send(result);
            });
        }
        catch (e)  {
            console.log(e);
            res.send({"error": "error in your request"});

        }
    }
}
export = UserController;