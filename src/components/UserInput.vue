<template>
  <div class="userinput container">
    <h3>Please enter your ZIP code to retrieve today's weather</h3>
    <div class="form-row align-items-center">
        <label for="inputZip" class="col-form-label col-auto">ZIP Code</label>
        <div class="col-auto">
            <input type="text" class="form-control" id="inputZip" >
        </div>
        <div class="col-auto">
        <span>Temperature Scale:</span>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inputTempScale" id="tempF" value="imperial" checked>
                <label class="form-check-label" for="tempF">°F</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inputTempScale" id="tempC" value="metric">
                <label class="form-check-label" for="tempC">°C</label>
            </div>
        </div>
        <div class="col-auto">
            <button type="button" class="btn btn-info">Submit</button>
        </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "UserInput",
});
</script>

<style scoped>
span {
    margin-left: 10px;
    margin-right: 5px;
}
.userinput {
  margin: 20px;
  font-family: neue-kabel, sans-serif;
  font-weight: 400;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>