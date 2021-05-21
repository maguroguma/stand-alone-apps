<template>
  <div id="todos-area">
    <todo-add></todo-add>
    <div>TODOリスト</div>
    <div id="todo-list">
      <todo-item
        v-for="id in inProgTodosIds"
        :key="id"
        :tid="id"
        :id="'item-' + id"
      ></todo-item>
    </div>
    <div>完了したTODOリスト</div>
    <div id="done-list">
      <todo-item
        v-for="id in doneTodosIds"
        :key="id"
        :tid="id"
        :id="'item-' + id"
      ></todo-item>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import TodoItem from "./TodoItem.vue";
import TodoAdd from "./TodoAdd.vue";

export default {
  name: "TodosArea",
  components: {
    TodoItem,
    TodoAdd,
  },
  computed: {
    ...mapGetters(["inProgTodosIds", "doneTodosIds"]),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
