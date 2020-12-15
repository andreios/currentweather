<template>
  <div class="weather container">
    <h3>Please enter your ZIP code to retrieve today's weather</h3>
    <div class="form-row align-items-center">
      <label for="inputZip" class="col-form-label col-auto">ZIP Code</label>
      <div class="col-auto">
        <input
          type="text"
          class="form-control"
          id="inputZip"
          v-bind:class="{ 'is-invalid': !this.valid }"
        />
        <div class="invalid-feedback">
          Please enter a valid 5-digit ZIP code.
        </div>
      </div>
      <div class="col-auto">
        <span>Temperature Scale:</span>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name="inputTempScale"
            id="tempF"
            value="imperial"
            checked
          />
          <label class="form-check-label" for="tempF">°F</label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name="inputTempScale"
            id="tempC"
            value="metric"
          />
          <label class="form-check-label" for="tempC">°C</label>
        </div>
      </div>
      <div class="col-auto">
        <button type="button" class="btn btn-info" v-on:click="getWeatherData">
          Submit
        </button>
      </div>
    </div>
    <WeatherCard
      v-bind:weatherData="currentWeather"
      v-bind:baseURL="'http://openweathermap.org/img/wn/'"
      v-bind:iconSize="'@2x.png'"
      v-bind:tempScale="tempScale"
    ></WeatherCard>
  </div>
</template>

<script>
import WeatherCard from "./WeatherCard.vue";
import axios from "axios";

export default {
  name: "Weather",
  components: {
    WeatherCard,
  },
  props: [],
  data() {
    return {
      currentWeather: [],
      tempScale: "",
      valid: true,
    };
  },
  methods: {
    getWeatherData() {
      var zip = document.getElementById("inputZip").value;
      var inputTempScale = "";
      var tempF = document.getElementById("tempF");
      var tempC = document.getElementById("tempC");
      if (tempF.checked) {
        this.tempScale = "°F";
        inputTempScale = tempF.value;
      } else if (tempC.checked) {
        this.tempScale = "°C";
        inputTempScale = tempC.value;
      }

      this.validateData(zip);

      if (this.valid) {
        axios
          .get(
            "http://api.openweathermap.org/data/2.5/weather?zip=" +
              zip +
              "&appid=91d6288b232cdc7dbc9aa83fd5133e93&units=" +
              inputTempScale
          )
          .then((response) => {
            this.currentWeather = response.data;
          });
      }
    },
    validateData(zip) {
      var zipTest = /\d{5}/;
      if (!zipTest.test(zip)) {
        this.valid = false;
      } else {
        this.valid = true;
      }
    },
  },
};
</script>

<style scoped>
span {
  margin-left: 10px;
  margin-right: 5px;
}
.weather {
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