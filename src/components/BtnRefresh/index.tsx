import React, { useCallback, useEffect, useState } from 'react';
import { BtnConfirm,TextConfirm } from './styles';
import {BtnProps, DataWeather} from '../../interfaces';
import {GetUserLocation, GetWeatherData} from '../../services';
import { useUserPositionHook } from '../../hooks/UserPosition';
import { useDataWeatherHook } from '../../hooks/DataWeather';
import { useGlobalLoadingHook } from '../../hooks/Loading';
import { Animated } from 'react-native';

const BtnRefresh:React.FC<BtnProps> = ({title})=>{
   const {setUserLocation} = useUserPositionHook()
   const {setDataWeather} = useDataWeatherHook()
   const {setIsGlobalLoading} = useGlobalLoadingHook()
   const [btnPosition, setBtnPosition] = useState( new Animated.Value(-100));;

   // animation
   Animated.timing(
    btnPosition,   
        {
            toValue: 20,
            duration: 2000,
            useNativeDriver: false,
        }
    ).start();

    const getWeather = useCallback(()=>{
        setIsGlobalLoading(true)
        const location = GetUserLocation()
            location
            .then(currentLocation=> {
                if(currentLocation){
                    setUserLocation(currentLocation)
                            
                    const service = GetWeatherData({
                        lat: currentLocation.latitude,
                        lon: currentLocation.longitude
                    });

                    service.then((data)=>{
                        const objct = {
                            name: data.name,
                            country: data.sys.country,
                            description: data.weather[0].description,
                            feels_like: data.main.feels_like,
                            temp:data.main.temp,
                            temp_max: data.main.temp_max,
                            temp_min: data.main.temp_min,
                        } as DataWeather
                    
                        setDataWeather(objct)
                    })
                    .catch(error => console.log(error))
                }
            })
            .catch(error=> console.log(error))   
            .finally(()=> setIsGlobalLoading(false))  
    },[])


    useEffect(()=>{
        getWeather();
        return ()=> {}
    },[])
   

   return (
       <Animated.View style={{
            position: 'absolute',
            bottom: btnPosition,
        }}
       >
           <BtnConfirm onPress={()=> getWeather()}>
               <TextConfirm>{title}</TextConfirm>
           </BtnConfirm>
       </Animated.View>

   )
}

export default BtnRefresh;