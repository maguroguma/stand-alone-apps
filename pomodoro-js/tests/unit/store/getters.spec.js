import { getters } from "../../../src/store/index";
import { TodoItem, Todos } from "../../../src/models/TodoItem";

let state = null;

beforeEach(() => {
  state = {
    todos: new Todos(
      [
        new TodoItem(0, "フロントの勉強"),
        new TodoItem(1, "AWSの勉強"),
        new TodoItem(2, "TypeScriptの勉強"),
      ],
      3
    ),
  };
});

describe("getters", () => {
  it("in progress todos", () => {
    state.todos.getTodoItemById(1).isDone = true;
    const actual = getters.inProgTodosIds(state);

    expect(actual).toStrictEqual([0, 2]);
  });

  it("done todos", () => {
    state.todos.getTodoItemById(0).isDone = true;
    state.todos.getTodoItemById(2).isDone = true;
    const actual = getters.doneTodosIds(state);

    expect(actual).toStrictEqual([0, 2]);
  });

  it("get todo item by id", () => {
    const actual = getters.getTodoItemById(state)(1);

    expect(actual).toStrictEqual(new TodoItem(1, "AWSの勉強"));
  });
});
