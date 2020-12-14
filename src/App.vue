<template>
  <div id="app">
    <Header title="Current Weather" />
  </div>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  name: "App",
  components: {
    Header,
  },
};
</script>

<style>
#app {
  text-align: center;
  color: #2c3e50;
}
</style>
