import { TODO_ADD } from "./types";

const TodoToggle = (title) => {
  return {
    type: TODO_ADD,
    payload: title,
  };
};

export default TodoToggle;
