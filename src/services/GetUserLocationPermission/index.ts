
import { requestForegroundPermissionsAsync } from 'expo-location';

export const GetUserLocationPermission = (async ()=>{
    try {
        const {status} = await requestForegroundPermissionsAsync()
        if(status === 'granted'){
          return true
        }else{
          return false
        }
      
      } catch (error) {
        console.log(error)
      }
})

