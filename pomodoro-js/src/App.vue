<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <todos-area></todos-area>
  </div>
</template>

<script>
import TodosArea from "./components/TodosArea.vue";

export default {
  name: "App",
  components: {
    TodosArea,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
