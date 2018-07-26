
import { Router } from 'express';
import UserController from '../controller/UserController';

class Routers {
    public router: Router;

    constructor(){
        this.router = Router();
        this.routes();
    }

    routes(){
        this.router.get('/', UserController.GetUsers);
        this.router.get('/:slug', UserController.GetUser);
        this.router.post('/', UserController.SaveUser);
        this.router.put('/',  UserController.UpdateUser);
        this.router.delete('/', UserController.DeleteUser);
    }

}

/** Creating singleton class object **/
const Routes =  new Routers();
Routes.routes();

export default Routes.router;

