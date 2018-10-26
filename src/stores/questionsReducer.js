import { fromJS } from 'immutable';
import { createAction, handleActions } from 'redux-actions';
import set from 'lodash/set';
import map from 'lodash/map';

import getQuestions from './getQuestions';

export const SET_SORT = 'question/SET_SORT';

const questions = getQuestions();

const initialState = fromJS({
  questions: questions.map((q) => q.reduce((res, o) => set(res, o.key, o.label), {})),
  answers: questions.map((q) => map(q, 'key')),
});

const setSort = createAction(SET_SORT);

const reducer = handleActions({
  [setSort]: (state, { payload }) => state.setIn(['answers', payload.qId], fromJS(payload.order)),
}, initialState);

export {
  setSort,
};

export default reducer;
