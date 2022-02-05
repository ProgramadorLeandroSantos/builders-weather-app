import React, {useState } from 'react';
import { BtnConfirm,TextConfirm } from './styles';
import {BtnProps} from '../../interfaces';
import {GetPeriod, GetUserLocation} from '../../services';
import { useUserPositionHook } from '../../hooks/UserPosition';
import { useNavigation } from '@react-navigation/native';
import { Animated } from 'react-native';

const BtnConfirmTerm:React.FC<BtnProps> = ({title})=>{
   const {setUserLocation} = useUserPositionHook();
   const {navigate} = useNavigation()
   const [btnPosition, setBtnPosition] = useState( new Animated.Value(-100))

   // animation
   Animated.timing(
    btnPosition,   
        {
            toValue: 50,
            duration: 1000,
            useNativeDriver: false,
        }
    ).start()


   return (
       <Animated.View style={{
            position: 'absolute',
            bottom: btnPosition,
            justifyContent: 'center',
            alignItems: 'center',
        }}
       >
           <BtnConfirm 
                onPress={()=>{
                    const location = GetUserLocation()
                    const period = GetPeriod()
                    location
                    .then(currentLocation=> {
                        if(currentLocation){
                            setUserLocation(currentLocation)
                            navigate(`${period}` as any)
                        }
                    })
                    .catch(error=> console.log(error))       
                                 
                }}
            >
               <TextConfirm>{title}</TextConfirm>
           </BtnConfirm>
       </Animated.View>

   )
}

export default BtnConfirmTerm;

