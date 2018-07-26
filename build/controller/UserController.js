"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User_1 = require("../model/User");
var UserController = /** @class */ (function () {
    function UserController() {
    }
    /**
     * Get all users
     * @param {e.Request} req
     * @param {e.Response} res
     * @constructor
     */
    UserController.prototype.GetUsers = function (req, res) {
        User_1.default.find({}, {}, { lean: true })
            .then(function (Data) {
            var statusCode = res.statusCode;
            res.json({
                statusCode: statusCode,
                Data: Data
            });
        }).catch(function (Error) {
            var statusCode = res.statusCode;
            res.json({
                statusCode: statusCode,
                Error: Error
            });
        });
    };
    /**
     * Get User API to save User
     * @param {e.Request} req
     * @param {e.Response} res
     * @constructor
     */
    UserController.prototype.GetUser = function (req, res) {
        var slug = req.params.slug;
        User_1.default.findOne({ slug: slug }, {}, { lean: true })
            .then(function (Data) {
            var statusCode = res.statusCode;
            res.json({
                statusCode: statusCode,
                Data: Data
            });
        }).catch(function (Error) {
            var statusCode = res.statusCode;
            res.json({
                statusCode: statusCode,
                Error: Error
            });
        });
    };
    /**
     * POST API to save User
     * @param {e.Request} req API request which holds data
     * @param {e.Response} res API response which will return respose to front-end
     * @constructor
     */
    UserController.prototype.SaveUser = function (req, res) {
        new User_1.default(req.body).save()
            .then(function (Data) {
            var statusCode = res.statusCode;
            res.json({
                statusCode: statusCode,
                Data: Data
            });
        }).catch(function (Error) {
            var statusCode = res.statusCode;
            res.json({
                statusCode: statusCode,
                Error: Error
            });
        });
    };
    /**
     * POST API to update User Details
     * @param {e.Request} req API request which holds data
     * @param {e.Response} res API response which will return respose to front-end
     * @constructor
     */
    UserController.prototype.UpdateUser = function (req, res) {
        var slug = req.body.slug;
        var dataToUpdate = req.body;
        User_1.default.findOneAndUpdate({ slug: slug }, { $set: dataToUpdate }, { new: true })
            .then(function (Data) {
            if (!Data)
                throw "Data not found";
            var statusCode = res.statusCode;
            res.json({
                statusCode: statusCode,
                Data: Data
            });
        }).catch(function (Error) {
            var statusCode = res.statusCode;
            res.json({
                statusCode: statusCode,
                Error: Error
            });
        });
    };
    /**
     * POST API to delete User Details
     * @param {e.Request} req API request which holds data
     * @param {e.Response} res API response which will return respose to front-end
     * @constructor
     */
    UserController.prototype.DeleteUser = function (req, res) {
        var slug = req.body.slug;
        User_1.default.remove({ slug: slug })
            .then(function (Data) {
            var statusCode = res.statusCode;
            res.json({
                statusCode: statusCode,
                Data: Data
            });
        }).catch(function (Error) {
            var statusCode = res.statusCode;
            res.json({
                statusCode: statusCode,
                Error: Error
            });
        });
    };
    return UserController;
}());
exports.default = new UserController();
