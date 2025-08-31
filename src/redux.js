const { createStore } = require("redux");

const initialState = {
  numOfLaptops: 100,
};

const buyLaptop = () => {
  return {
    type: "BUY_LAPTOP",
  };
};

const reducer = (state = initialState, action) => {
  if (action.type === "BUY_LAPTOP") {
    return { numOfLaptops: state.numOfLaptops };
  } else {
    return state;
  }
};

const store = createStore(reducer);
