import productList from "../../data.json";
let initialState = {
  products: productList,
};

// here will add the reducer
// a reducer will take the old state and return the new state
// also a reducer will an action as a second paramter.

// we pass as default state value the initialState, this will be used
// the first time we run the app, since the state will be undefined.
export default (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case "FILTER":
      return productList.filter((ele) => ele.category == payload.category);
    case "RESET":
      return productList;
    default:
      return productList;
  }
};

// we will add the action here, but idealy we need to separate them into their own files

export const categoryFilter = (category) => {
  return {
    type: "FILTER",
    payload: category,
  };
};
export const resetFilter = () => {
  return {
    type: "RESET",
  };
};
