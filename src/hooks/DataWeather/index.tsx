import React, {
    createContext,
    useState,
    useContext,
    useCallback,
  } from 'react';
import {DataWeather, DataWeatherHook} from '../../interfaces';
 

  const DataWeatherConText = createContext<DataWeatherHook>(
    {} as DataWeatherHook,
  );
  
  export const DataWeatherHookProvider:React.FC = ({children}) => {
    const [dataWeather, setDataweather] = useState({} as DataWeather)
    
    const setDataWeather = useCallback((weather: DataWeather)=>{
      try {
        setDataweather(weather)
      } catch (error) {
        console.log(error)
      }
    },[])

    return (
      <DataWeatherConText.Provider
        value={{
         setDataWeather,
         dataWeather
        }}>
        {children}
      </DataWeatherConText.Provider>
    )
  }
  
  export function useDataWeatherHook(): DataWeatherHook {
    const context = useContext(DataWeatherConText);
    return context;
  }