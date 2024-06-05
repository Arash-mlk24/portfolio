import IControllerFactory from "@/core/factory/IControllerFactory";
import ControllerFactory from "@/core/contract/ControllerFactory";
import UserApi from "@/framework/network/api/user/UserApi";
import IUserApi from "@/core/api/IUserApi";

class AppContainer {
    private static INSTANCE: AppContainer;
    public static getInstance() {
        if (!this.INSTANCE) {
            this.INSTANCE = new AppContainer()
        }
        return this.INSTANCE
    }

    private readonly controllerFactory: IControllerFactory;

    constructor() {
        const userApi: IUserApi = new UserApi();

        this.controllerFactory = new ControllerFactory(userApi);
    }

    /** methods */
    public getControllers(): IControllerFactory {
        return this.controllerFactory;
    };
}

export default AppContainer;
