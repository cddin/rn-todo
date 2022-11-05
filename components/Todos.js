import { View, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { store } from "../store";
import TodoItem from "./TodoItem";
import TodoToggle from "../actions/todoToggle";
import TodoDelete from "../actions/todoDelete";

const Todos = ({}) => {
  const { todos } = useSelector((state) => state.todoReducer);

  const onPress = (id) => {
    store.dispatch(TodoToggle(id));
  };

  const onLongPress = (id) => {
    store.dispatch(TodoDelete(id));
  };

  return (
    <View style={styles.container}>
      {todos.map((item, index) => (
        <TodoItem
          key={`_${index}`}
          data={item}
          onPress={onPress}
          onLongPress={onLongPress}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default Todos;
