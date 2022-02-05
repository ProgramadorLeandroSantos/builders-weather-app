import { getCurrentPositionAsync} from 'expo-location';
import { showMessage } from 'react-native-flash-message';
import {UserPosition} from '../../interfaces';
import {GetUserLocationPermission}  from '../GetUserLocationPermission';

export const GetUserLocation = (async ()=>{

    try {
        const hasPermission = await GetUserLocationPermission();

        if(hasPermission === true){
          const response = await getCurrentPositionAsync()
          const current: UserPosition = {latitude: response.coords.latitude, longitude: response.coords.longitude}
          return current
        }else{
          showMessage({
            type: 'info',
            message: 'ATENÇÃO!',
            description: 'Para a utilização do app é necessário permitir o uso da localização',
            titleStyle: {
              paddingTop: 20,
              textAlign: 'center',
            },
            textStyle: {
              textAlign: 'center',
            },
            duration: 5000,
          });
        }
       
      } catch (error) {
        console.log(error)
        showMessage({
          type: 'danger',
          message: 'Desculpe!',
          description: 'Estamos com problemas para localizar seu dispositivo',
          titleStyle: {
            paddingTop: 20,
            textAlign: 'center',
          },
          textStyle: {
            textAlign: 'center',
          },
          duration: 5000,
        });
      }
})
