import express,{Application} from "express"

class EasilyExpress {
    private readonly _application:Application;
    constructor() {
        this._application = express();
    }

    get application():Application {
        return this._application;
    }
}
export default  EasilyExpress;