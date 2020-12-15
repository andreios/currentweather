<template>
  <div id="app">
    <Header title="Current Weather" />
    <Weather></Weather>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Weather from "./components/Weather.vue";

export default {
  name: "App",
  components: {
    Header,
    Weather,
  },
  props: []
};
//api key:  91d6288b232cdc7dbc9aa83fd5133e93
</script>

<style>
#app {
  text-align: center;
  color: #2c3e50;
}
</style>
