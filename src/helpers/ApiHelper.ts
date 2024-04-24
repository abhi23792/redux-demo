import axios from "axios";
import { ApiConfig } from "../config/ApiConfig";

const getConfig: ApiConfig = {
    baseUrl: "http://localhost:8000",
    method: "get"
};

export const get = async (url: string): Promise<any> => {
    return await axios({
        ...getConfig,
        url: `${getConfig.baseUrl}/${url}`,
    }).then((response) => {
        return {
            status: response.status,
            data: response.data
        }
    }).catch((error) => {
        return {
            status: error.status,
            data: error.response
        }
    })
}