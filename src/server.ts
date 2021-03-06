
/** Require module for server **/
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as compression from 'compression';

import * as helmet from 'helmet';
import * as logger from 'morgan';
import * as cors from 'cors';

import * as constants from './util/Constants';
import * as config from './config';
import * as dbConnection from './dbConnection/DbConnection';

/** Routes **/
import Router from './routes/Routes';

class Server {

    public app : express.Application;

    constructor(){
        this.app = express();
        this.config();
        this.routes()
    }

    public config(){

        /** Mongoose configuration to connect mongodb **/
        const MONGO_URI: string = config["default"].Db_Config["default"].MONGO_URI;
        dbConnection.default.MONGO_CONNECTION(MONGO_URI);

        /** Configure middleware **/
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(bodyParser.json());
        this.app.use(compression());

        /** Adds some extra parameters to request headers for securing our data **/
        this.app.use(helmet());
        this.app.use(logger('dev'));
        this.app.use(cors());
    }

    public routes(){

        let router: express.Router = express.Router();
        this.app.use('/', router);
        this.app.use(constants.default.API.UserRoutes.user, Router);
    }

}

/** Exporting new server **/
export default new Server().app;
