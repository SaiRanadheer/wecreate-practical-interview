import { takeLatest } from 'redux-saga/effects';

import { PAGE_LOADING } from '../ducks/page';
import handleGetPage from './handlers/page';

import { FORM_SUBMIT_LOADING } from '../ducks/form';
import handleFormSubmit from './handlers/form';

export default function* watcherSaga() {
  yield takeLatest(PAGE_LOADING, handleGetPage);
  yield takeLatest(FORM_SUBMIT_LOADING, handleFormSubmit);
}
