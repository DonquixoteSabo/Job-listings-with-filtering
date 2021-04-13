//types
import * as TYPE from 'types/actionTypes';
import { State } from 'types/state';
//API
import data from 'api/data.json';
import { filterArray } from 'utils/filterArray';

const initialState: State = { companies: data, filteredCompanies: data };

const reducer = (
  state: State = initialState,
  action: { type: string; payload: string[] }
) => {
  switch (action.type) {
    case TYPE.FILTER:
      const filteredCompanies = filterArray(state.companies, action.payload);

      return { ...state, filteredCompanies };
    default:
      return state;
  }
};

export { reducer };
