//Name:  Andrew Luehrs
//Class: CIS131-W01
//Date:  12/14/2020
//Assn:  Final Project - Current Weather

//Displays returned weather info.
<template>
  <div class="weatherCard">
    <h3>Current Weather in {{weatherData.name}}</h3>
    <!--bootstrap card-->
    <div class="card mb-3 border-dark" style="max-width: 400px">
      <div class="row no-gutters">
        <div class="col-md-4">
          <!--displays weather icon-->
          <img v-bind:src="this.baseURL + this.weatherData.weather[0].icon + this.iconSize" class="card-img" alt="" />
        </div>
        <div class="col-md-8">
          <div class="card-body text-white bg-dark">
            <h2 class="card-title">{{weatherData.main.temp}} {{this.tempScale}}</h2>
            <h3 class="card-title">{{weatherData.weather[0].main}}</h3>
            <p class="card-text">{{weatherData.weather[0].description}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WeatherCard',
  props: ['weatherData','baseURL','iconSize','tempScale']
};
</script>

<style scoped>
.weatherCard {
  font-family: neue-kabel, sans-serif;
  font-weight: 400;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 50px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>