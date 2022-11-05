import { View, Text } from "react-native";
import { Stack } from "@react-native-material/core";
import BasicContainer from "../components/BasicContainer";
import Todos from "../components/Todos";
import AddTodo from "../components/AddTodo";

const TodosScreen = ({ navigation }) => {
  return (
    <BasicContainer>
      <Stack spacing={20}>
        <View>
          <Text>
            This is todo component demo. Long press todo item to delete
          </Text>
        </View>
        <View>
          <AddTodo />
        </View>
        <View>
          <Todos />
        </View>
      </Stack>
    </BasicContainer>
  );
};

export default TodosScreen;
