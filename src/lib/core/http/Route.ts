import {Model} from "../../interface/Model";
import {METHOD_METADATA, PARAM_METADATA, PATH_METADATA} from "../metadata/MetaData";

class Route {
    private readonly instance:Model;
    constructor(controllers:Model) {
        this.instance = controllers;
    }
    public resolveRoute():Model{
        for (let i in this.instance) {
            //获取控制器原型
            const prototype = Object.getPrototypeOf(this.instance[i]);
            // 筛选出类的 methodName
            const methodsNames = Object
                .getOwnPropertyNames(prototype)
                .filter(item => item!=="constructor"&&prototype[item]);
            //解析出每个控制器的路由信息
            this.instance[i] = methodsNames.map(methodName => {
                const fn = prototype[methodName];
                // 取出定义的 metadata
                const route = Reflect.getMetadata(PATH_METADATA, fn);
                const method = Reflect.getMetadata(METHOD_METADATA, fn);
                return {
                    route,
                    method,
                    fn,
                    methodName,
                }
            })
        }
        return this.instance;
    }
}

export default Route;