
import * as express from 'express';
import * as mongoose from 'mongoose';

import * as bodyParser from 'body-parser';
import * as compression from 'compression';

import * as helmet from 'helmet';
import * as logger from 'morgan';

import * as cors from 'cors';
import * as constants from './util/Constants';

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
        const MONGO_URI = 'mongodb://127.0.0.1/demo_dev_tsc';
        mongoose.connect(MONGO_URI || process.env.MONGO_URI);

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
