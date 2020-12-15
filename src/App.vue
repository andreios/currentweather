<template>
  <div id="app">
    <Header title="Current Weather" />
    <UserInput></UserInput>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import UserInput from "./components/UserInput.vue";

export default {
  name: "App",
  components: {
    Header,
    UserInput,
  },
};
</script>

<style>
#app {
  text-align: center;
  color: #2c3e50;
}
</style>
