"use strict";
exports.__esModule = true;
var debug = require("debug");
var http = require("http");
var server_1 = require("./server");
/** ts Debuger **/
debug('ts-express:server');
/** Call normalizePort funciton to check a port is valid or not **/
var port = normalizePort(process.env.PORT || 3000);
/** set port to server config **/
server_1["default"].set('port', port);
/**
 * Creating server using http
 * @type {module:http.Server}
 */
var server = http.createServer(server_1["default"]);
/**
 * Assigning port to server for listen
 */
server.listen(port);
/**
 * Handling error as well as success of server listener
 */
server.on('error', onError);
server.on('listening', onListening);
/**
 * normalize the port behalf of string or number and return
 * value could be number or string or boolean
 * @param {number | string} val
 * @returns {number | string | boolean}
 */
function normalizePort(val) {
    /****
     *  The radix parameter is used to specify which numeral system to be used,
     *  for example, a radix of 16 (hexadecimal) indicates that the number in
     *  the string should be parsed from a hexadecimal number to a decimal number.
     * @type {number}
     */
    var port = typeof val === 'string' ? parseInt(val, 10) : val;
    if (isNaN(port)) {
        return val;
    }
    else if (port >= 0) {
        return port;
    }
    else {
        return false;
    }
}
/**
 * It is Server onError listener,whenever error occure server will
 * trigger this onError function
 * @param {NodeJS.ErrnoException} error
 */
function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }
    var bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;
    switch (error.code) {
        case 'EACCES':
            console.error(bind + " requires elevated privileges");
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + " is already in use");
            process.exit(1);
            break;
        default:
            throw error;
    }
}
/** On listener if server is successfully running **/
function onListening() {
    var addr = server.address();
    var bind = typeof addr === 'string' ? "pipe " + addr : "port " + addr.port;
    console.log("Server listening on port " + port);
    debug("Listening on " + bind);
}
