import React from "react";
import renderer from "react-test-renderer";
import TodoItem from "./TodoItem";
import { fireEvent, render } from "@testing-library/react-native";

const mockToggleTodoItemFn = jest.fn();
const mockDeleteTodoItemFn = jest.fn();
const data = { title: "xxx", id: 123 };
const elemenToTest = (
  <TodoItem
    data={data}
    onPress={mockToggleTodoItemFn}
    onLongPress={mockDeleteTodoItemFn}
  />
);

describe('<TodoItem data={{ title: "xxx" }} />', () => {
  it("has 1 child", () => {
    const tree = renderer.create(elemenToTest).toJSON();
    expect(tree.children.length).toBe(1);
  });
  //
  it("renders correctly across screens", () => {
    const tree = renderer.create().toJSON();
    expect(tree).toMatchSnapshot();
  });
  //
  it("press to trigger toggle with data id 123", () => {
    const { getByText } = render(elemenToTest);
    fireEvent.press(getByText("xxx"));
    expect(mockToggleTodoItemFn).toBeCalledWith(123);
  });
  //
  it("long press to trigger delete with data id 123", () => {
    const { getByText } = render(elemenToTest);
    fireEvent.press(getByText("xxx"));
    fireEvent(getByText("xxx"), "onLongPress");
    expect(mockToggleTodoItemFn).toBeCalledWith(123);
  });
});
