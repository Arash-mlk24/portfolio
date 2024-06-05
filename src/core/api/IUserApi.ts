import {AxiosResponse} from "axios";
import UserGetResponseDto from "@/framework/network/dto/user/UserGetResponseDto";
import ApiResponse from "@/core/shared/dto/ApiResponse";

interface IUserApi {
    get(): Promise<AxiosResponse<ApiResponse<UserGetResponseDto>>>
}

export default IUserApi;
