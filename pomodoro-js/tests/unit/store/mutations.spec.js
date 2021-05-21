import { mutations } from "../../../src/store/index";
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

describe("mutations", () => {
  it("ADD_TODO_ITEM", () => {
    mutations.ADD_TODO_ITEM(state, { content: "4つ目のTODO" });

    expect(state.todos.getTodoItemById(0).content).toEqual("フロントの勉強");
    expect(state.todos.getTodoItemById(1).content).toEqual("AWSの勉強");
    expect(state.todos.getTodoItemById(2).content).toEqual("TypeScriptの勉強");
    expect(state.todos.getTodoItemById(3).content).toEqual("4つ目のTODO");
  });

  it("TOGGLE_IS_DONE", () => {
    mutations.TOGGLE_IS_DONE(state, { id: 1 });

    expect(state.todos.getTodoItemById(0).isDone).toEqual(false);
    expect(state.todos.getTodoItemById(1).isDone).toEqual(true);
    expect(state.todos.getTodoItemById(2).isDone).toEqual(false);
  });

  it("EDIT_CONTENT", () => {
    mutations.EDIT_CONTENT(state, { id: 1, content: "GCPの勉強" });

    expect(state.todos.getTodoItemById(0).content).toEqual("フロントの勉強");
    expect(state.todos.getTodoItemById(1).content).toEqual("GCPの勉強");
    expect(state.todos.getTodoItemById(2).content).toEqual("TypeScriptの勉強");
  });

  it("REMOVE_TODO", () => {
    mutations.REMOVE_TODO(state, { id: 1 });

    expect(state.todos.getTodoItemById(0).isDeleted).toEqual(false);
    expect(state.todos.getTodoItemById(1).isDeleted).toEqual(true);
    expect(state.todos.getTodoItemById(2).isDeleted).toEqual(false);
  });

  it("INCREMENT_POMO_COUNT", () => {
    mutations.INCREMENT_POMO_COUNT(state, { id: 0 });
    mutations.INCREMENT_POMO_COUNT(state, { id: 1 });
    mutations.INCREMENT_POMO_COUNT(state, { id: 1 });

    expect(state.todos.getTodoItemById(0).pomoCount).toEqual(1);
    expect(state.todos.getTodoItemById(1).pomoCount).toEqual(2);
    expect(state.todos.getTodoItemById(2).pomoCount).toEqual(0);
  });
});
