//Name:  Andrew Luehrs
//Class: CIS131-W01
//Date:  12/14/2020
//Assn:  Final Project - Current Weather

//Gets input from user, calls api, and sends data to card.
<template>
  <div class="weather container">
    <h3>Please enter your ZIP code to retrieve today's weather</h3>
    <!--bootstrap form objects-->
    <div class="form-row align-items-center">
      <!--gets zip code-->
      <label for="inputZip" class="col-form-label col-auto">ZIP Code</label>
      <div class="col-auto">
        <input
          type="text"
          class="form-control"
          id="inputZip"
          v-bind:class="{ 'is-invalid': !this.valid }"> <!--toggles validation display-->
        <div class="invalid-feedback"><!--displays if invalid via bootstrap-->
          Please enter a valid 5-digit ZIP code.
        </div>
      </div>
      <!--gets temp scale-->
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
        <!-- calls routine to call api -->
        <button type="button" class="btn btn-info" v-on:click="getWeatherData">
          Submit
        </button>
      </div>
    </div>
    <!--displays current weather using component, passing attribute values with v-bind-->
    <WeatherCard
      v-bind:weatherData="currentWeather"
      v-bind:baseURL="'http://openweathermap.org/img/wn/'"
      v-bind:iconSize="'@2x.png'"
      v-bind:tempScale="tempScale"
    ></WeatherCard>
  </div>
</template>

<script>
//import subcomponents
import WeatherCard from "./WeatherCard.vue";
import axios from "axios";

//makes this componenet available to app.vue
export default {
  name: "Weather",
  components: {
    WeatherCard,
  },
  props: [],
  data() {
    return {
      currentWeather: [],   //holds data returned from api
      tempScale: "",
      valid: true,   //used for validation
    };
  },
  methods: {
    //gets data from form
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
      //calls open weather API
      if (this.valid) {
        axios
          .get(     //need to change this to https to work on netlify.  DON'T do it till after it's graded!!
            "https://api.openweathermap.org/data/2.5/weather?zip=" +
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
      //validates zip code and sets valid flag
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