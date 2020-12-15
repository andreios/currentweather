//Name:  Andrew Luehrs
//Class: CIS131-W01
//Date:  12/14/2020
//Assn:  Final Project - Current Weather

//Root app template.  Contains a header object and the weather object.

<template>
  <div id="app">
    <!--loads sub components-->
    <Header title="Current Weather" />
    <Weather></Weather>
  </div>
</template>

<script>
//import subcomponents
import Header from "./components/Header.vue";
import Weather from "./components/Weather.vue";

//makes this component available to main.js
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
