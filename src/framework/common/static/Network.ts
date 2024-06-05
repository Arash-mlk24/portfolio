interface EndpointConfig {
    user: {
        get: string
    },
    auth: {
        login: string
    }
}

class Network {
    private static baseLocalUrl: string = "http://localhost:5000";
    private static baseStageUrl: string = "https://backend-sample.darkube.app";
    private static baseProductionUrl: string = "https://api.sample.com";

    private static endpoint: EndpointConfig = {
        user: {
            get: "/api/User"
        },
        auth: {
            login: "/api/Auth"
        }
    }

    // TODO: Set base url based on env
    public static getBaseUrl = (): string => Network.baseLocalUrl;
    public static getEndpoints = (): EndpointConfig => Network.endpoint;
}

export default Network;
