const IsNullOrWhiteSpace = (value: string) => {
  return value === null || value.match(/^ *$/) !== null;
};

export default IsNullOrWhiteSpace;
