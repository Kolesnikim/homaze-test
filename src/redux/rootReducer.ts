import { contractsReducer } from './counter/slice';

const rootReducer = {
  contracts: contractsReducer,
};

export default rootReducer;
