import { call } from 'typed-redux-saga/macro';
import { testSaga, expectSaga } from 'redux-saga-test-plan';
import { getCategoriesAndDocuments } from '../../../utlis/firebase/firebase.utils';
import {
  FetchCategoriesSuccess,
  fetchCategoriesSuccess,
  fetchCategoriesFailed,
} from '../category.action';

import {
  fetchCategoriesAsync,
  onFetchCategories,
  categoriesSaga,
} from '../category.saga';
import CATEGORIES_ACTION_TYPES from '../category.types';
import { throwError } from 'redux-saga-test-plan/providers';

describe('category sagas', () => {
  test('onFetchCategories', () => {
    testSaga(onFetchCategories)
      .next()
      .takeLatest(
        CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START,
        fetchCategoriesAsync
      )
      .next()
      .isDone();
  });

  test('fetchCategoryAsync success', () => {
    const mockCategoriesArray = [
      { id: 1, name: 'Category 1' },
      { id: 2, name: 'Category 2' },
    ];

    return expectSaga(fetchCategoriesAsync)
      .provide([[call(getCategoriesAndDocuments), mockCategoriesArray]])
      .put(fetchCategoriesSuccess(mockCategoriesArray))
      .run();
  });
  test('fetchCategoriesAsync failure', () => {
    const mockError = new Error('An error occured');
    return expectSaga(fetchCategoriesAsync)
      .provide([[call(getCategoriesAndDocuments), throwError(mockError)]])
      .put(fetchCategoriesFailed(mockError))
      .run();
  });
});
