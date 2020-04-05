import "reflect-metadata"
import {METHOD_METADATA, PATH_METADATA} from "../core/metadata/MetaData";
import {Method} from "../core/http/Method";


export const Controller = (path:string)=>{
    return (target:any)=>{
        console.log("control")
        Reflect.defineMetadata(PATH_METADATA,path,target);
    }
};

const createMethodDecorator = (method:string) => (path?: string): MethodDecorator => {
    return (target:Object, key, descriptor:any) => {
        Reflect.defineMetadata(PATH_METADATA, path, descriptor.value);

        Reflect.defineMetadata(METHOD_METADATA, method, descriptor.value);
    }
};

export const Get = createMethodDecorator(Method.GET);

export const Post = createMethodDecorator(Method.POST);

export const Put = createMethodDecorator(Method.PUT);

export const Delete = createMethodDecorator(Method.DELETE);

