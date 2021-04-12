import * as TYPE from 'types/actionTypes';

export const filterCompanies = (conditions: any[]) => {
  return {
    type: TYPE.FILTER,
    payload: conditions,
  };
};
