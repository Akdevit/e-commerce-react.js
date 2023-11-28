export const ADD = (item) => {
  return {
    type: "ADD_CART",
    payload: item,
  };
};

export const Wish = (item) => {
  return {
    type: "ADD_Wish",
    payload: item,
  };
};

export const DEL = (id) => {
  return {
    type: "DEL_CART",
    payload: id,
  };
};

export const WishDEL = (id) => {
  return {
    type: "WISH_DEL",
    payload: id,
  };
};

