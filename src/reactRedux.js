import { type } from "@testing-library/user-event/dist/type";

export const IncAction = () => async (dispatch) => {
  dispatch({
    type: "INCREMENT",
  });
};

export const DecAction = () => async (dispatch) => {
  dispatch({
    type: "DECREMENT",
  });
};
