import {Application} from "express"
import Logger from "../logger/Logger";
import EasilyExpress from "../express/EasilyExpress";
import {Model} from "../../interface/Model";
import Route from "../http/Route";
import RouterRegister from "../http/RouterRegister";


/**
 * @class EasilyHotFactory 创建实例工厂
 * */
class EasilyFactory {
    private static _port:number = 3000;

    private static _application:Application;
    /**
     * @method create 绑定数据,创建实例
     * @param examples 要进行创建的实例框架
     * @param Controllers 要绑定的数据
     * */
    public static create(examples:EasilyExpress,Controllers:Model):EasilyFactory{
        this._application = examples.application;
        const routerTable = new Route(Controllers).resolveRoute();
        const routerList = new RouterRegister(routerTable).register();
        routerList.forEach(router=>{
           this._application.use(router);
        });
        return this;
    }

    /**
     * @method start 启动web 服务
     * @param port 可选参数　启动端口
     * */
    public static start(port?:number){
        this._application.listen(port || this._port, () => {
            Logger.info("服务器已经启动");
            Logger.info("端口为:" + (port || this._port))
        });
    }

    start(port?:number) {
        this.start(port)
    }
}

export default EasilyFactory;