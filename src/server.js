"use strict";
exports.__esModule = true;
var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var compression = require("compression");
var helmet = require("helmet");
var logger = require("morgan");
var cors = require("cors");
/** Routes **/
var Routes_1 = require("./routes/Routes");
var server = /** @class */ (function () {
    function server() {
        this.app = express();
        this.config();
        this.routes();
    }
    server.prototype.config = function () {
        /** Mongoose configuration to connect mongodb **/
        var MONGO_URI = 'mongodb://127.0.0.1/demo_dev';
        mongoose.connect(MONGO_URI || process.env.MONGO_URI);
        /** Configure middleware **/
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(bodyParser.json());
        this.app.use(compression());
        this.app.use(helmet());
        this.app.use(logger('dev'));
        this.app.use(cors());
    };
    server.prototype.routes = function () {
        var router = express.Router();
        this.app.use('/', router);
        this.app.use('/api/v1/posts', Routes_1["default"]);
    };
    return server;
}());
/** Exporting new server **/
exports["default"] = server;
