import { contractsReducer } from './contracts/slice';

const rootReducer = {
  contracts: contractsReducer,
};

export default rootReducer;
