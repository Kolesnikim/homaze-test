import { createSlice, PayloadAction} from '@reduxjs/toolkit';
import { IContract } from "../../api/types";

export interface IContractsState {
  items: IContract[];
  loading: boolean,
  error: boolean
}

const initialState: IContractsState = {
  items: [],
  loading: false,
  error: false
};

export const contractsSlice = createSlice({
  name: 'contracts',
  initialState,
  reducers: {
    loadContracts: (state) => {
      return {
        ...state,
        loading: true,
        error: false
      }
    },
    addContracts: (state, action: PayloadAction<IContract[]>) => {
      return {
        ...state,
        items: action.payload,
        loading: false,
        error: false
      }
      },
    loadingFailed: (state) => {
      return {
        ...state,
        items: [],
        loading: false,
        error: true
      }
    },
  },
});

export const { actions: contractsActions, reducer: contractsReducer } =
  contractsSlice;