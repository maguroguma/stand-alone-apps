<template>
  <div>
    <todo-add></todo-add>
    <div>TODOリスト</div>
    <todo-item v-for="id in inProgTodosIds" :key="id" :id="id"></todo-item>
    <div>完了したTODOリスト</div>
    <todo-item v-for="id in doneTodosIds" :key="id" :id="id"></todo-item>
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
    nameAndAge() {
      return this.name + this.age;
    },
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
