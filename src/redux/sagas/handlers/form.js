import { call, put, delay } from 'redux-saga/effects';
import { completeFormSubmission } from '../../ducks/form';
import initiateFormSubmit from '../requests/form';

// eslint-disable-next-line no-unused-vars
export default function* handleFormSubmit(action) {
  try {
    yield delay(3000);
    const response = yield call(initiateFormSubmit);
    const { data } = response;
    yield put(completeFormSubmission(data));
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
}
