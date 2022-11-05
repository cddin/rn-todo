import { TODO_TOGGLE } from "./types";

const TodoToggle = (id) => {
  return {
    type: TODO_TOGGLE,
    payload: id,
  };
};

export default TodoToggle;
