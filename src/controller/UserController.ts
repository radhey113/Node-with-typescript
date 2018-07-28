
/**
 * Dependencies here
 */
import { Request, Response, NextFunction } from 'express'
import User from "../model/User";

class UserController {


    constructor() {}

    /**
     * Get all users
     * @param {e.Request} req
     * @param {e.Response} res
     * @constructor
     */
    public GetUsers(req: Request, res: Response): void {

        User.find({}, {}, { lean: true })
            .then( Data => {

                const statusCode: any = res.statusCode;
                res.json({
                    statusCode,
                    Data
                });

            }).catch(Error => {

            const statusCode: any = res.statusCode;
            res.json({
                statusCode,
                Error
            });
        });
    }

    /**
     * Get User API to save User
     * @param {e.Request} req
     * @param {e.Response} res
     * @constructor
     */
    public GetUser(req: Request, res: Response): void {

        const slug: string = req.params.slug;

        User.findOne({ slug }, { }, { lean: true })
            .then( Data => {

                let statusCode: any = res.statusCode;
                res.json({
                    statusCode,
                    Data
                });

            }).catch(Error => {

            let statusCode: any = res.statusCode;
            res.json({
                statusCode,
                Error
            });
        });

    }

    /**
     * POST API to save User
     * @param {e.Request} req API request which holds data
     * @param {e.Response} res API response which will return respose to front-end
     * @constructor
     */
    public SaveUser(req: Request, res: Response): void {

        new User(req.body).save()
            .then( Data => {

                let statusCode: any = res.statusCode;
                res.json({
                    statusCode,
                    Data
                });

            }).catch(Error => {

            let statusCode: any = res.statusCode;
            res.json({
                statusCode,
                Error
            });
        });
    }

    /**
     * POST API to update User Details
     * @param {e.Request} req API request which holds data
     * @param {e.Response} res API response which will return respose to front-end
     * @constructor
     */
    public UpdateUser(req: Request, res: Response): void {

        const slug: any = req.body.slug;
        let dataToUpdate: object = req.body;

        User.findOneAndUpdate({ slug }, { $set: dataToUpdate }, { new: true })
            .then(Data => {

                if(!Data)
                    throw `Data not found`;

                let statusCode: any = res.statusCode;
                res.json({
                    statusCode,
                    Data
                });
            }).catch(Error => {

            let statusCode: any = res.statusCode;
            res.json({
                statusCode,
                Error
            });
        });
    }

    /**
     * POST API to delete User Details
     * @param {e.Request} req API request which holds data
     * @param {e.Response} res API response which will return respose to front-end
     * @constructor
     */
    public DeleteUser(req: Request, res: Response): void {

        const slug: any = req.body.slug;

        User.remove({ slug })
            .then(Data => {

                let statusCode: any = res.statusCode;
                res.json({
                    statusCode,
                    Data
                });
            }).catch(Error => {

            let statusCode: any = res.statusCode;
            res.json({
                statusCode,
                Error
            });
        });
    }

}

export default new UserController();