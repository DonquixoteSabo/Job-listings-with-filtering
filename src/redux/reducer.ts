//types
import * as TYPE from 'types/actionTypes';
import { State } from 'types/state';
//API
import data from 'api/data.json';

const initialState: State = { companies: data, filteredCompanies: data };

// payload will take arrays with multiple object, I will define these objects a little bit later :D
const reducer = (
  state: State = initialState,
  action: { type: string; payload: any[] }
) => {
  switch (action.type) {
    case TYPE.FILTER:
      return state;
    default:
      return state;
  }
};

export { reducer };
