<template>
  <div class="header">
    <h1>{{title}}</h1>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: ['title']
};
</script>

<style scoped>
.header {
  font-family: neue-kabel, sans-serif;
  font-weight: 700;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: rgb(28, 69, 102);
  color: white;
 }
</style>