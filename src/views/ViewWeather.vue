<script setup>
import useWeatherStore from "@/stores/weather.store.js"
import {watch} from "vue"
const weatherStore = useWeatherStore();
</script>
<template>
  <div class="weather">
    <div class="form">
        <div class="field">
          <label class="label">Fetch weather of desired city.</label>
          <div class="control has-icons-left has-icons-right">
            <input class="input is-success" type="text" v-model="weatherStore.city" placeholder="Enter city name and hit enter" @keypress.enter="weatherStore.getWeatherInfo"> 
            <span class="icon is-small is-left">
              <i class="fas fa-user"></i>
            </span>
            <span class="icon is-small is-right">
              <i class="fas fa-check"></i>
            </span>
          </div>
        </div>
        <div class="field is-grouped">
          <div class="control">
            <button class="button is-link" @click="weatherStore.getWeatherInfo">Submit</button>
          </div>
        </div>
    </div>
    <div class="weatherDetails">      
      <div class="loading" v-show="weatherStore.loading">Loading...</div>
      <div v-show="weatherStore.errorText"><p class="help is-danger">{{ weatherStore.errorText }}</p></div>
      <div class="weather" v-if="Object.keys(weatherStore.weatherData).length!==0">  
            <div>
              <h2 class="display-2"><strong>{{weatherStore.weatherData.main.temp}}°C</strong></h2>
              <p class="text-muted mb-0">Feels like : {{weatherStore.weatherData.main.feels_like}}</p>
              <p class="text-muted mb-0">{{weatherStore.weatherData.cityName}}</p>
              <p class="text-muted mb-0">{{weatherStore.weatherData.weather[0].description}}</p>
            </div>
      </div>
    </div>
  </div>
</template>