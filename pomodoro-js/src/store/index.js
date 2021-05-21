import Vue from "vue";
import Vuex from "vuex";

import { TodoItem, Todos } from "../../src/models/TodoItem";
import * as mutations from "./mutation-types";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // TODO: ページの初期化時にストレージから取得する
    todos: new Todos(
      [
        new TodoItem(0, "フロントの勉強"),
        new TodoItem(1, "AWSの勉強"),
        new TodoItem(2, "TypeScriptの勉強"),
      ],
      3
    ),
  },
  getters: {
    // リストのフィルタリング（IDのみ）
    inProgTodosIds: (state) => {
      return state.todos.getInProgTodoIds();
    },
    doneTodosIds: (state) => {
      return state.todos.getDoneTodosIds();
    },

    // リストから単一オブジェクトの取得（引数を取るgetter）
    getTodoItemById: (state) => (id) => {
      return state.todos.getTodoItemById(id);
    },
  },
  mutations: {
    [mutations.ADD_TODO_ITEM](state, payload) {
      state.todos.addTodoItem(payload.content);
    },
    [mutations.TOGGLE_IS_DONE](state, payload) {
      const isDone = state.todos.getTodoItemById(payload.id).isDone;
      state.todos.getTodoItemById(payload.id).isDone = !isDone;
    },
    [mutations.EDIT_CONTENT](state, payload) {
      state.todos.getTodoItemById(payload.id).content = payload.content;
    },
    [mutations.REMOVE_TODO](state, payload) {
      state.todos.getTodoItemById(payload.id).isDeleted = true;
    },
    [mutations.INCREMENT_POMO_COUNT](state, payload) {
      state.todos.getTodoItemById(payload.id).incrementPomoCount();
    },
  },
  actions: {},
  modules: {},
});
