import { IContract } from "../../core/core.types";

export interface IContractsState {
    items: IContract[];
    loading: boolean,
    error: boolean
}