export const incremet = (number) => {
  return {
    type: "INCREMENT",
    payload: number,
  };
};

export const decremet = () => {
  return {
    type: "DECREMENT",
  };
};

export const login = () => {
  return {
    type: "LOGIN",
  };
};
