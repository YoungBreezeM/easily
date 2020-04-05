import realTime from "../utils/realTime";
/**
 * @namespace 日志管理
 *
 * */
class Logger {
    private static _flag:String = "----->";

    private static _style(){
        return "["+realTime()+"]"+"   "+this._flag+"   ";
    }
    public static info(message:String):void{
        console.log("\x1B[36m"+this._style()+message);
    }
    public static warn(message:String):void{
        console.log("\x1B[33m"+this._style()+message);
    }
    public static error(message:String):void{
        console.log("\x1B[31m"+this._style()+message);
    }

}

export default Logger;