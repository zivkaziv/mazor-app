/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */
"use strict";
var express = require("express");
var UserController = require("./../../controllers/UserController");
var router = express.Router();
var HeroRoutes = (function () {
    function HeroRoutes() {
        this._userController = new UserController();
    }
    Object.defineProperty(HeroRoutes.prototype, "routes", {
        get: function () {
            var controller = this._userController;
            router.post("/auth/login", controller.login);
            router.post("/auth/account", controller.create);
            router.put("/auth/account", controller.update);
            router.delete("/auth/account", controller.delete);
            return router;
        },
        enumerable: true,
        configurable: true
    });
    return HeroRoutes;
}());
Object.seal(HeroRoutes);
module.exports = HeroRoutes;
//# sourceMappingURL=LoginRoutes.js.map