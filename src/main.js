/*
Name:  Andrew Luehrs
Class: CIS131-W01
Date:  12/14/2020
Assn:  Final Project - Current Weather

Base JS file that imports the App component and performs basic Vue setup. 
*/

import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
