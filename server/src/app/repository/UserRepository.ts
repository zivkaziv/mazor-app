/**
 * Created by Ziv Kalderon on 15-06-2016.
 */

import UserModel = require("./../model/UserModel");
import IUserModel = require("./../model/interfaces/UserModel");
import UserSchema = require("../dataAccess/schemas/UserObjectSchema");
import RepositoryBase = require("./BaseRepository");

class UserRepository  extends RepositoryBase<IUserModel> {
    constructor () {
        super(UserSchema);
    }
}

Object.seal(UserRepository);
export = UserRepository;