import { TODO_DELETE } from "./types";

const TodoDelete = (id) => {
  return {
    type: TODO_DELETE,
    payload: id,
  };
};

export default TodoDelete;
