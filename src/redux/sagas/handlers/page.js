import { call, put, delay } from 'redux-saga/effects';
import { setPage } from '../../ducks/page';
import requestGetPage from '../requests/page';

// eslint-disable-next-line no-unused-vars
export default function* handleGetPage(action) {
  try {
    yield delay(3000);
    const response = yield call(requestGetPage);
    const { data } = response;
    yield put(setPage(data));
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
}
