/*
 * 内容をもつ（編集が可能）
 * 完了済みフラグを持つ（フラグがチェックされると、「完了リスト」に追加される、チェックを外すとTodoリストに戻せる）
 * 削除フラグを持つ（フラグがチェックされると、画面から削除される、ストレージには持っておく）
 * アサインフラグがある（現在どのタスクを処理しているかを表す）
 * ポモドーロ数がある（アサインされたタスクに何ポモドーロ消費したか）
 * 作成日がある（日時オブジェクトは注入する）
 * IDがある（エンティティだと考える、一意性が必要だが、外部から注入できるようにしたい）
 * */
export class TodoItem {
  constructor(id, content) {
    this.id = id;
    this.content = content;

    this.isDone = false;
    this.isDeleted = false;
    this.isAssigned = false;

    this._pomoCount = 0;
  }

  get pomoCount() {
    return this._pomoCount;
  }
  incrementPomoCount() {
    this._pomoCount++;
  }
}

export class Todos {
  constructor(todoList, nextId) {
    this.todoList = todoList;
    this.nextId = nextId;
  }

  getTodoItemById(id) {
    return this.todoList.find((el) => el.id === id);
  }

  addTodoItem(newContent) {
    const newTodoItem = new TodoItem(this.nextId, newContent);
    this.nextId++;
    this.todoList.push(newTodoItem);
  }

  // オブジェクトのリストを返す（JSの挙動確認用）
  getInProgTodos() {
    return this.todoList.filter((item) => !item.isDone);
  }
  getDoneTodos() {
    return this.todoList.filter((item) => item.isDone);
  }

  // 削除されていないidのリストを返す
  getInProgTodoIds() {
    const res = [];
    this.todoList.forEach((el) => {
      if (!el.isDeleted && !el.isDone) {
        res.push(el.id);
      }
    });
    return res;
  }
  getDoneTodosIds() {
    const res = [];
    this.todoList.forEach((el) => {
      if (!el.isDeleted && el.isDone) {
        res.push(el.id);
      }
    });
    return res;
  }
}
