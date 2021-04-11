import * as TYPE from 'types/actionTypes';

import data from 'api/data.json';

const initialState = data;

const reducer = (
  state = initialState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case TYPE.FILTER:
      return state;
    default:
      return state;
  }
};

export default reducer;
