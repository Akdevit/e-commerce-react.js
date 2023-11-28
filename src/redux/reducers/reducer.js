const INIT_STATE = {
  carts: [],
};

const INIT_STATE_WISH = {
  Wishcarts: [],
};


export const cartreducers = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "ADD_CART":
      return {
        ...state,
        carts: [...state.carts, action.payload],
      };
    case "DEL_CART":
      const deta = state.carts.filter((el) => el.id !== action.payload);
      return {
        ...state,
        carts: deta,
      };
    default:
      return state;
  }
};

export const Wishcartreducers = (state = INIT_STATE_WISH, action) => {
  switch (action.type) {
    case "ADD_Wish":
      return {
        ...state,
        Wishcarts: [...state.Wishcarts, action.payload],
      };
      case "WISH_DEL":
        const deta = state.Wishcarts.filter((el) => el.id !== action.payload);
        return {
          ...state,
          Wishcarts: deta,
        };
    default:
      return state;
  }
};

