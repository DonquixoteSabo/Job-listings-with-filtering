import * as TYPE from 'types/actionTypes';

// payload will take arrays with multiple object, I will define a little bit later
export const filterCompanies = (conditions: any[]) => {
  return {
    type: TYPE.FILTER,
    payload: conditions,
  };
};
