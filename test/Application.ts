import EasilyFactory from "../src/lib/core/factory/EasilyFactory";

import EasilyExpress from "../src/lib/core/express/EasilyExpress";

import Controllers from "./Controllers"

import EasilyApplication from "../src/lib/interface/EasilyApplication";
import EasilyLauncher from "../src/lib/decorators/launcher";

@EasilyLauncher
class Application implements EasilyApplication{
    Run(){
        const application =  EasilyFactory.create(new EasilyExpress(),Controllers);
        application.start(8080)
    }

}

