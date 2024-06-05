import axios, {InternalAxiosRequestConfig} from "axios";
import StorageKey from "@/framework/common/static/StorageKey";
import Network from "@/framework/common/static/Network";

class AxiosInstanceGenerator {
    private static getTokenFromRedux = (): string => {
        return localStorage.getItem(StorageKey.TOKEN) ?? "";
    }

    public static getInstance() {
        let AxiosInstance = axios.create({
            baseURL: Network.getBaseUrl(),
            headers: {
                "Content-Type": "application/json",
            },
        });

        AxiosInstance.interceptors.request.use(
            async (request): Promise<InternalAxiosRequestConfig<any>> => {
                try {
                    if (request.headers && request.url !== Network.getEndpoints().auth.login) {
                        request.headers.Authorization = `Bearer ${AxiosInstanceGenerator.getTokenFromRedux() ?? ""}`
                    }
                    return request
                } catch (err) {
                    return Promise.reject(err);
                }
            },
            function (error) {
                return Promise.reject(error);
            },
        )

        return AxiosInstance;
    }
}


export default AxiosInstanceGenerator.getInstance();
