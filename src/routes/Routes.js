"use strict";
exports.__esModule = true;
var express_1 = require("express");
var User_1 = require("../model/User");
var Routers = /** @class */ (function () {
    function Routers() {
        this.router = express_1.Router();
        this.routes();
    }
    Routers.prototype.GetPosts = function (req, res) {
        User_1["default"].find({}, {}, {})
            .then(function (Data) {
            var statusCode = req.statusCode;
            res.json({
                statusCode: statusCode,
                Data: Data
            });
        })["catch"](function (Error) {
            var statusCode = req.statusCode;
            res.json({
                statusCode: statusCode,
                Error: Error
            });
        });
    };
    Routers.prototype.GetPost = function (req, res) {
        User_1["default"].findOne({})
            .then(function (Data) {
        })["catch"](function (Error) {
        });
    };
    Routers.prototype.CreatePost = function (req, res) {
    };
    Routers.prototype.UpdatePost = function (req, res) {
    };
    Routers.prototype.DeletePost = function (req, res) {
    };
    Routers.prototype.routes = function () {
        this.router.get('/', this.GetPosts);
        this.router.get('/:slug', this.GetPost);
    };
    return Routers;
}());
;
/** Creating singleton class object **/
var Routes = new Routers();
Routes.routes();
exports["default"] = Routes.router;
