import { Effect, ForkEffect, call, put, takeEvery } from 'redux-saga/effects';

import { contractsActions } from './slice';
import { ContractsApi } from "../../core/core.api";
import { IContract } from "../../core/core.types";

export function* watchLoadContracts(): Generator<Effect, void> {
  try {
    const contracts = yield call(ContractsApi.getAll);

    yield put(contractsActions.addContracts(contracts as IContract[]));
  } catch (e) {
    yield put(contractsActions.loadingFailed());
  }
}

export function* watchContractsSagas(): Generator<ForkEffect, void> {
  yield takeEvery(contractsActions.loadContracts, watchLoadContracts);
}

const contractsSagas = watchContractsSagas;

export default contractsSagas;
