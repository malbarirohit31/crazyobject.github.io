import {defineStore} from "pinia"
import {ref} from "vue"
import axios from "axios"

const useWeatherStore = defineStore("Weather",{
    id:"Weather",
    state:()=>{
        return {
            city:ref(""),
            weatherData:ref({}),
            loading:ref(false),
            errorText:ref(""),
        }
    },
    actions:{
        async getWeatherInfo(){
            this.loading=true
            this.weatherData={}
            this.errorText = ""
            try{
                const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=fa61acc6500e6dff8ca4904f7529e86f&units=metric`);
                const json = response.data;
                this.weatherData = {
                    cityName:json.name+", "+json.sys.country,
                    clouds:json.clouds,
                    wind:json.wind,
                    visibility:json.visibility,
                    main:json.main,
                    weather:json.weather,
                }
            } catch (error) {
                this.errorText = error.message;
              } finally {
                this.loading=false
              }
        }
    }
})

export default useWeatherStore