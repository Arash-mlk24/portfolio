import HomeController from "@/framework/controller/home/HomeController";
import IControllerFactory from "@/core/factory/IControllerFactory";
import IHomeController from "@/core/controller/IHomeController";
import IUserApi from "@/core/api/IUserApi";

class ControllerFactory implements IControllerFactory {
    private readonly _userApi: IUserApi

    constructor(userApi: IUserApi) {
        this._userApi = userApi
    }

    public getHomeController(): IHomeController {
        return new HomeController(this._userApi);
    }
}

export default ControllerFactory;
