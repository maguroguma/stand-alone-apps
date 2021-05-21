import { TodoItem, Todos } from "../../../src/models/TodoItem";

describe("TodoItem", () => {
  it("new instance", () => {
    const item = new TodoItem(0, "a first todo");

    expect(item.content).toEqual("a first todo");
  });

  it("edit content", () => {
    const item = new TodoItem(0, "a first todo");
    item.content = "renamed content";

    expect(item.content).toEqual("renamed content");
  });

  it("increment pomodoro", () => {
    const item = new TodoItem(0, "a first todo");
    item.incrementPomoCount();
    item.incrementPomoCount();
    item.incrementPomoCount();

    expect(item.pomoCount).toEqual(3);
  });
});

describe("Todos", () => {
  it("todos filter", () => {
    const todos = new Todos(
      [new TodoItem(0, "A"), new TodoItem(1, "B"), new TodoItem(2, "C")],
      3
    );
    const expected = [new TodoItem(0, "A"), new TodoItem(2, "C")];

    todos.getTodoItemById(1).isDone = true;
    const actual = todos.getInProgTodos();

    expect(actual).toEqual(expected);
    expect(actual).toStrictEqual(expected);
    expect(todos.getTodoItemById(0)).toBe(actual[0]);
  });

  it("filtered but they are the same", () => {
    const todos = new Todos(
      [new TodoItem(0, "A"), new TodoItem(1, "B"), new TodoItem(2, "C")],
      3
    );

    todos.getTodoItemById(1).isDone = true;
    const actual = todos.getInProgTodos();

    todos.getTodoItemById(0).content = "After A";
    expect(actual[0].content).toEqual("After A");
  });
});
