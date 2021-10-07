let initialState = {
  products: [],
};

// here will add the reducer
// a reducer will take the old state and return the new state
// also a reducer will an action as a second paramter.

// we pass as default state value the initialState, this will be used
// the first time we run the app, since the state will be undefined.
export default (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case "ADD":
      return { ...state, payload };
    case "REMOVE":
      return state.filter((ele) => ele.id != payload.id);
    default:
      return state;
  }
};

// we will add the action here, but idealy we need to separate them into their own files
export const addToCart = (product) => {
  return {
    type: "ADD",
    payload: product,
  };
};

export const removeFromCart = (product) => {
  return {
    type: "REMOVE",
    payload: product,
  };
};
