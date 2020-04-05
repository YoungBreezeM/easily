
import {IRouteMap} from "./IRouteMap";

export interface Model{
    [modelName:string]:Array<IRouteMap>|object;
}