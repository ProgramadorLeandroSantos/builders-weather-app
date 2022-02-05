import React, { useEffect } from 'react';
import {View} from 'react-native';
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';
import { GetPeriod } from '../../services';

const Splash: React.FC = ()=>{
    const {navigate} = useNavigation();
    const period = GetPeriod()

    return (
        <View style={{
            flex: 1,
            justifyContent:'center',
            alignItems: 'center',
        }}>
            <LottieView 
                source={require('../../../assets/splash/splash.json')} 
                autoPlay
                loop={false}
                autoSize
                onAnimationFinish={()=> navigate(period as any)}
            />
        </View>
    )
}

export default Splash;