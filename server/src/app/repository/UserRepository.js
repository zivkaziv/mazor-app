/**
 * Created by Ziv Kalderon on 15-06-2016.
 */
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var UserSchema = require("../dataAccess/schemas/UserObjectSchema");
var RepositoryBase = require("./BaseRepository");
var UserRepository = (function (_super) {
    __extends(UserRepository, _super);
    function UserRepository() {
        return _super.call(this, UserSchema) || this;
    }
    return UserRepository;
}(RepositoryBase));
Object.seal(UserRepository);
module.exports = UserRepository;
//# sourceMappingURL=UserRepository.js.map