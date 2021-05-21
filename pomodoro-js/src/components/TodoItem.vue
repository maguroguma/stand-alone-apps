<template>
  <div>
    <input type="text" v-model="content" />
    <button>編集</button>
    <button v-if="!isDone" @click="toggleIsDone({ id })">完了</button>
    <button v-else @click="toggleIsDone({ id })">戻す</button>
    <button @click="disappear({ id })">削除</button>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import * as mutations from "../store/mutation-types";

export default {
  name: "TodoItem",
  props: {
    id: Number,
  },
  computed: {
    ...mapGetters(["getTodoItemById"]),
    // 双方向算出プロパティ
    content: {
      get() {
        return this.getTodoItemById(this.id).content;
      },
      set(value) {
        this.editContent({
          id: this.id,
          content: value,
        });
      },
    },
    isDone() {
      return this.getTodoItemById(this.id).isDone;
    },
    isDeleted() {
      return this.getTodoItemById(this.id).isDeleted;
    },
  },
  methods: {
    ...mapMutations({
      editContent: mutations.EDIT_CONTENT,
      toggleIsDone: mutations.TOGGLE_IS_DONE,
      disappear: mutations.REMOVE_TODO,
    }),
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
