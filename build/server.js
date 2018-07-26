"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var compression = require("compression");
var helmet = require("helmet");
var logger = require("morgan");
var cors = require("cors");
var constants = require("./util/Constants");
/** Routes **/
var Routes_1 = require("./routes/Routes");
var Server = /** @class */ (function () {
    function Server() {
        this.app = express();
        this.config();
        this.routes();
    }
    Server.prototype.config = function () {
        /** Mongoose configuration to connect mongodb **/
        var MONGO_URI = 'mongodb://127.0.0.1/demo_dev_tsc';
        mongoose.connect(MONGO_URI || process.env.MONGO_URI);
        /** Configure middleware **/
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(bodyParser.json());
        this.app.use(compression());
        /** Adds some extra parameters to request headers for securing our data **/
        this.app.use(helmet());
        this.app.use(logger('dev'));
        this.app.use(cors());
    };
    Server.prototype.routes = function () {
        var router = express.Router();
        this.app.use('/', router);
        this.app.use(constants.default.API.UserRoutes.user, Routes_1.default);
    };
    return Server;
}());
/** Exporting new server **/
exports.default = new Server().app;
