import Vue from "vue";
import Vuex from "vuex";

import { TodoItem, Todos } from "../../src/models/TodoItem";
import * as mutTypes from "./mutation-types";

Vue.use(Vuex);

const state = {
  // TODO: ページの初期化時にストレージから取得する
  todos: new Todos(
    [
      new TodoItem(0, "フロントの勉強"),
      new TodoItem(1, "AWSの勉強"),
      new TodoItem(2, "TypeScriptの勉強"),
    ],
    3
  ),
};

export const getters = {
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
};

export const mutations = {
  [mutTypes.ADD_TODO_ITEM](state, payload) {
    state.todos.addTodoItem(payload.content);
  },
  [mutTypes.TOGGLE_IS_DONE](state, payload) {
    const isDone = state.todos.getTodoItemById(payload.id).isDone;
    state.todos.getTodoItemById(payload.id).isDone = !isDone;
  },
  [mutTypes.EDIT_CONTENT](state, payload) {
    state.todos.getTodoItemById(payload.id).content = payload.content;
  },
  [mutTypes.REMOVE_TODO](state, payload) {
    state.todos.getTodoItemById(payload.id).isDeleted = true;
  },
  [mutTypes.INCREMENT_POMO_COUNT](state, payload) {
    state.todos.getTodoItemById(payload.id).incrementPomoCount();
  },
};

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions: {},
  modules: {},
});
