import {Model} from "../../interface/Model";
import {Router} from "express"
class RouterRegister {
    private readonly _routerTable:Model;
    private routerList:Array<Router> =[];
    constructor(routerTable:Model) {
        this._routerTable = routerTable;
    }
    public register():Array<Router>{
        for (let x in this._routerTable) {
            for (let r in this._routerTable[x]) {
                // @ts-ignore
                const {route,method,fn} = this._routerTable[x][r];
                const router = Router();
                // @ts-ignore
                this.routerList.push(router[method](route,(request,response)=>{
                    response.end(JSON.stringify(fn()))
                }))
            }

        }
        return this.routerList;

    }
}

export default RouterRegister;