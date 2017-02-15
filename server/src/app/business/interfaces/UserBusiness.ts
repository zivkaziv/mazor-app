/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */

import BaseBusiness = require("./../BaseBusiness");
import IUserModel = require("./../../model/interfaces/UserModel");

interface UserBusiness extends BaseBusiness<IUserModel> {
    login: (user:any, callback: (error: any, result: any) => void) => void;
}
export = UserBusiness;