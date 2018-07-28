

/** Common service singleton class **/
class commonService {

    constructor(){}

    encription(){}

    decription(){}

    generateToken(){}

    handleError(){}

    handleSuccess(){}

    public errorMessageColorCode(error, success){

        if(error)
            console.log(`\x1b[31m`+error);
        else
            console.log(`\x1b[32m`+success);

        return
    }

}

/** Exporting singleton object **/
export default new commonService();