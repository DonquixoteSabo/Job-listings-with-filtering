//types
import * as TYPE from 'types/actionTypes';
import { State } from 'types/state';
//API
import data from 'api/data.json';
import { filterArray } from 'utils/filterArray';

const initialState: State = {
  companies: data,
  filteredCompanies: data,
  filters: [],
};

const reducer = (
  state: State = initialState,
  action: { type: string; payload: string }
) => {
  switch (action.type) {
    case TYPE.FILTER:
      const filteredCompanies = filterArray(state.companies, state.filters);
      return { ...state, filteredCompanies };
    case TYPE.ADD_FILTERS:
      return {
        ...state,
        filters: [...state.filters, action.payload],
      };
    case TYPE.DELETE_FILTER:
      const filters = state.filters.filter(
        (item: string) => item !== action.payload
      );
      return {
        ...state,
        filters,
      };
    case TYPE.DELETE_FILTERS:
      return {
        ...state,
        filters: [],
      };
    default:
      return state;
  }
};

export { reducer };
