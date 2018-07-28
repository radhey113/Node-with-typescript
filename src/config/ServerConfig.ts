/**
 * SERVER configuration here
 */
class SERVER_CONFIG {

    public PORT: any = process.env.SERVER_PORT || '4000';
    public HOST: string = '0.0.0.0';

    constructor() {

        let ENV = process.env.NODE_ENV;

        if(ENV === "production"){

            this.HOST      = '0.0.0.0';
            this.PORT      =   process.env.SERVER_PORT || 4001;

        }

    };
}

/** Exporting SERVER CONFIG **/
export default new SERVER_CONFIG();