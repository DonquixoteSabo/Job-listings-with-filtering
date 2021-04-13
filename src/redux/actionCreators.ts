import * as TYPE from 'types/actionTypes';

export const filterCompanies = () => {
  return {
    type: TYPE.FILTER,
  };
};

export const addFilter = (filter: string) => {
  return {
    type: TYPE.ADD_FILTERS,
    payload: filter,
  };
};

export const deleteFilter = (filter: string) => {
  return {
    type: TYPE.DELETE_FILTER,
    payload: filter,
  };
};

export const deleteFilters = () => {
  return {
    type: TYPE.DELETE_FILTERS,
  };
};
