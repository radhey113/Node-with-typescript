
/**
 * Dependencies comes here
 */
import * as mongoose from 'mongoose';
import * as service from '../service/commonService';

export default {

    /** Mongodb connection here **/
    MONGO_CONNECTION: (MONGO_URI) => {

        mongoose.connect(MONGO_URI).then(success => {

            service.default.errorMessageColorCode(null,`Mongodb connected successfully`);
        }).catch(error => {

            service.default.errorMessageColorCode(`Mongodb Connection ${error}`, null);
            process.exit(0);
        });
    }
}



