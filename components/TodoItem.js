import { View, StyleSheet, Text, Pressable } from "react-native";

const TodoItem = ({ data, onPress, onLongPress }) => {
  return (
    <Pressable
      onPress={() => onPress(data.id)}
      onLongPress={() => onLongPress(data.id)}
    >
      <View style={styles.container}>
        <Text style={data?.isDone ? styles.done : styles.notDone}>
          {data.title}
        </Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 5,
    marginBottom: 5,
    borderColor: "#aeaeae",
    borderStyle: "solid",
    borderWidth: 1,
  },
  done: {
    color: "#aeaeae",
    textDecorationLine: "line-through",
    textDecorationStyle: "solid",
  },
  notDone: {
    color: "#000000",
  },
});

export default TodoItem;
