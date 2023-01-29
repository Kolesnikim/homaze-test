import axios from "axios"
import { IContractsAPi } from "./core.types";
export const coreApi = axios.create({
    withCredentials: true,
    baseURL: 'https://63d4fcd120b08498cbc58cc2.mockapi.io/api',
    headers: {
        "Access-Control-Allow-Origin": "*",
    }
})

export const ContractsApi : IContractsAPi = {
    getAll: async function () {
        const response = await coreApi.request({
            url: `/contracts`,
            method: "GET",
        })

        return response.data;
    },
}
