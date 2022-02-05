import { UserPosition } from "../../interfaces"
import api from "../api/api"

//This Api key will be deleted soon
const apikey= 'ba530446fff56ef43771f4bc7b017f6d';

export const GetWeatherData = (async(location:UserPosition)=>{
    try {
        const response = await api.get(`/weather?lat=${location.lat?.toString()}&lon=${location.lon?.toString()}&lang=pt&units=metric&appid=${apikey}`)
        return response.data;
    } 
    catch (error) {
        console.log(error)
    }
})

