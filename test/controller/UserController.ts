import {Controller, Get, Post} from "../../src/lib/decorators/controller";

@Controller("/")
export class UserController {

    @Get("/user")
    public userList(){
        return {name:"yqf"}
    }

    @Post("/user")
    public updateUser(){

    }
}