<template>
  <div>
    <input type="text" v-model="content" />
    <button @click="addAndReset">TODOの追加</button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import * as mutations from "../store/mutation-types";

export default {
  name: "TodoAdd",
  data() {
    return {
      content: "",
    };
  },
  methods: {
    ...mapMutations({
      addTodoItem: mutations.ADD_TODO_ITEM,
    }),
    addAndReset() {
      this.addTodoItem({ content: this.content });
      this.content = "";
    },
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
