"use strict";
/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */
var express = require("express");
var HeroRoutes = require("../routes/HeroRoutes");
var LoginRoutes = require("../routes/LoginRoutes");
var app = express();
var Routes = (function () {
    function Routes() {
    }
    Object.defineProperty(Routes.prototype, "routes", {
        get: function () {
            app.use("/", new HeroRoutes().routes);
            app.use("/", new LoginRoutes().routes);
            return app;
        },
        enumerable: true,
        configurable: true
    });
    return Routes;
}());
module.exports = Routes;
//# sourceMappingURL=Routes.js.map