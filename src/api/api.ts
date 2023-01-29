import axios from "axios"
import { IContractsAPi } from "./types";


export const api = axios.create({
    withCredentials: true,
    baseURL: 'https://63d4fcd120b08498cbc58cc2.mockapi.io/api',
    headers: {
        "Access-Control-Allow-Origin": "*",
    }
})

export const ContractsApi : IContractsAPi = {
    getAll: async function () {
        const response = await api.request({
            url: `/contracts`,
            method: "GET",
        })

        return response.data;
    },
}
