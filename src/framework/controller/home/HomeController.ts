import IHomeController from "@/core/controller/IHomeController";
import IUserApi from "@/core/api/IUserApi";

class HomeController implements IHomeController {
    private _userApi: IUserApi;

    constructor(userApi: IUserApi) {
        this._userApi = userApi;
    }


}

export default HomeController;
