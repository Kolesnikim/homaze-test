export interface IContractsAPi {
    getAll: () => Promise<IContract[]>
}

export type TProjectState = 'In progress' | 'Negotiation' |  'Done' | 'Cancelled';

export interface IRoom {
    id: string,
    name: string,
}

export interface IContract {
    id: string;
    customerName: string,
    projectId: string,
    address: string,
    rooms: IRoom[],
    updated_timestmp: number,
    totalProject: number,
    projectState: TProjectState
}