export const INPUT_VALUE = 'INPUT_VALUE';
export const EMPTY_VALUE = 'EMPTY_VALUE';

export const inputValue = (name, value) => {
  return {
    type: 'INPUT_VALUE',
    name,
    value,
  };
};

export const emptyValue = () => {
  return {
    type: 'EMPTY_VALUE',
  };
};
