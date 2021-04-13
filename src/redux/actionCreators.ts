import * as TYPE from 'types/actionTypes';

export const filterCompanies = (conditions: string[]) => {
  return {
    type: TYPE.FILTER,
    payload: conditions,
  };
};
