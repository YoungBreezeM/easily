import {Model} from "../src/lib/interface/Model";
import {UserController} from "./controller/UserController";


const Controllers:Model ={
    "userController":new UserController()
};


export default Controllers;