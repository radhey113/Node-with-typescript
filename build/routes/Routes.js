"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var UserController_1 = require("../controller/UserController");
var Routers = /** @class */ (function () {
    function Routers() {
        this.router = express_1.Router();
        this.routes();
    }
    Routers.prototype.routes = function () {
        this.router.get('/', UserController_1.default.GetUsers);
        this.router.get('/:slug', UserController_1.default.GetUser);
        this.router.post('/', UserController_1.default.SaveUser);
        this.router.put('/', UserController_1.default.UpdateUser);
        this.router.delete('/', UserController_1.default.DeleteUser);
    };
    return Routers;
}());
/** Creating singleton class object **/
var Routes = new Routers();
Routes.routes();
exports.default = Routes.router;
