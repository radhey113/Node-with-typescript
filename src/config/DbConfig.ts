/**
 * Database configuration here
 */
class DbConfig {

    public DB_NAME: string = 'mongodb';
    public CONNECTOR: string = 'mongodb';
    public PORT: any = 27017;

    public MONGO_URI: string = 'mongodb://127.0.0.1/demo_dev_tsc';
    public DATABASE: string = 'demo_dev_tsc';
    public USER: string = '';

    public PASSWORD: string = '';

    constructor() {

        let ENV = process.env.NODE_ENV;

        if(ENV === "production"){

            this.MONGO_URI =   process.env.MONGO_URI || "mongodb://127.0.0.1:27017/demo";
            this.DATABASE  =   "demo";
            this.USER      =   "";

            this.PASSWORD  =   "";
            this.PORT      =   process.env.PORT || 27017;

        }

    };
}

/** Exporting db config **/
export default new DbConfig();
