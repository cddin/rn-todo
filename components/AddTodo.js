import { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Button, TextInput, HStack } from "@react-native-material/core";
import { store } from "../store";
import TodoAdd from "../actions/todoAdd";

const AddTodo = ({}) => {
  const [addTxt, setAddTxt] = useState();

  const onAddPress = () => {
    store.dispatch(TodoAdd(addTxt));
    setAddTxt("");
  };

  const onChangeText = (val) => {
    setAddTxt(val);
  };
  return (
    <HStack spacing={10}>
      <Button
        variant="outlined"
        title="Add +"
        onPress={onAddPress}
        disabled={!addTxt}
      />
      <TextInput
        placeholder="type here to add"
        onChangeText={onChangeText}
        value={addTxt}
        style={styles.txtInput}
      />
    </HStack>
  );
};

const styles = StyleSheet.create({
  container: {
    // padding: 20,
  },
  txtInput: {
    padding: 0,
    flex: 1,
  },
});

export default AddTodo;
