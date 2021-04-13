import { Company } from 'types/company';

export const filterArray = (currentState: Company[], conditions: string[]) => {
  const filteredState = currentState.filter((item: Company) => {
    const values = [
      item.position,
      item.role,
      item.level,
      ...item.languages,
      ...item.tools,
    ];
    let flag = true;
    for (const condition of conditions) {
      if (!values.includes(condition)) {
        flag = false;
      }
    }
    return flag;
  });
  return filteredState;
};
