import {AxiosResponse} from "axios";
import AxiosInstance from "@/framework/network/interceptor/AxiosInstance";
import Network from "@/framework/common/static/Network";
import IUserApi from "@/core/api/IUserApi";
import ApiResponse from "@/core/shared/dto/ApiResponse";
import UserGetResponseDto from "@/framework/network/dto/user/UserGetResponseDto";

class UserApi implements IUserApi {
    /** Singleton */
    private static INSTANCE: IUserApi;

    public static getInstance() {
        if (!this.INSTANCE) {
            this.INSTANCE = new UserApi();
        }
        return this.INSTANCE;
    }

    constructor() {
    }

    /** Methods */
    public get(): Promise<AxiosResponse<ApiResponse<UserGetResponseDto>>> {
        return AxiosInstance.get<ApiResponse<UserGetResponseDto>>(Network.getEndpoints().user.get)
    }

    // public login_fake(body: UserLoginRequestDto): Promise<AxiosResponse<UserLoginResultDto>> {
    //     return new Promise<AxiosResponse>((resolve, _) => {
    //         let response: AxiosResponse<UserLoginResultDto>;
    //         if (body.email === "business.qorpi@gmail.com" && body.password === "123456") {
    //             response = {
    //                 headers: null!,
    //                 data: {
    //                     login: {
    //                         token: "uigubu34twguhygye345rgpoi32ub"
    //                     },
    //                     profile: {
    //                         userId: "hjvvbnk54h54456dhr456s",
    //                         email: "arash.mros@gmail.com",
    //                         createDate: "2022-12-23T12:54",
    //                         fullName: "Arash Malekpoor",
    //                         lastLoginDate: "2023-01-23T12:54"
    //                     }
    //                 },
    //                 config: null!,
    //                 status: 200,
    //                 statusText: "OK"
    //             };
    //         } else {
    //             response = {
    //                 headers: null!,
    //                 data: null!,
    //                 config: null!,
    //                 status: 401,
    //                 statusText: "UNAUTHORIZED"
    //             };
    //         }
    //
    //         resolve(response);
    //     });
    // }
}

export default UserApi;
