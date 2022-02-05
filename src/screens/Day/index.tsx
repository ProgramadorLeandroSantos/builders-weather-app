import React, { useEffect, useState } from 'react';
import {BackHandler, ImageBackground,Image, Animated,ActivityIndicator} from 'react-native';
import {Text,DataLabel,DataResult,LocationText,LocationLabel} from './styles';
import BgDay from '../../../assets/img/day.jpg'
import FooterImage from '../../../assets/footers/day.png';
import SunImage from '../../../assets/icons/day.png';
import {BtnRefresh} from '../../components';
import {useGlobalLoadingHook} from '../../hooks/Loading';
import {useDataWeatherHook} from '../../hooks/DataWeather';

const Day: React.FC = ()=>{
    useEffect(()=>{
        BackHandler.addEventListener('hardwareBackPress',()=> true)
    },[])
    const {isGlobalLoading} = useGlobalLoadingHook();
    const {dataWeather} = useDataWeatherHook();
    const [footerImgY, setFooterImgY] = useState(new Animated.Value(-230))
    const [sunImgY, setSunImgY] = useState(new Animated.Value(-330))
    const [tempOpacity, setTempOpacity] = useState(new Animated.Value(0))
    const [dataOpacity, setDataOpacity] = useState(new Animated.Value(0))

    //animations
    Animated.timing(footerImgY,{
         toValue: 130,
         duration: 1300,
        useNativeDriver: false,
    }).start();

    Animated.timing(sunImgY,{
        toValue: 270,
        duration: 2000,
        useNativeDriver: false,
    }).start();

    Animated.timing(tempOpacity,{
        toValue: 1,
        duration: 2300,
        useNativeDriver: false,
    }).start();

    Animated.timing(dataOpacity,{
        toValue: 1,
        duration: 3100,
        useNativeDriver: false,
    }).start();
       

    return (
        <ImageBackground 
            source={BgDay} 
            resizeMode="cover"
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >

            <Animated.View
                 style={{
                    height: 150,
                    width: '100%',
                    position: 'absolute',
                    top: 100,
                    opacity: tempOpacity,
                }}
            >   
                {isGlobalLoading ? 
                (
                  <ActivityIndicator size="large" color="#FFFF" />
                ) 
                : 
                (
                  <Text>{Math.round(dataWeather?.temp||0)
                  ?? `--`}°C</Text>
                )
                }
                
            </Animated.View>
           
            <Animated.View
                style={{
                    height: 80,
                    position: 'absolute',
                    top: sunImgY,
                }}
            >
                <Image 
                    source={SunImage}
                    resizeMode="stretch"
                    width={0}
                    height={0}
                />
            </Animated.View>
          
            <Animated.View 
                style={{
                    height: 359,
                    position: 'absolute',
                    bottom: footerImgY,
                }}
            >
                <Image 
                    source={FooterImage}
                    resizeMode="stretch"
                    width={0}
                    height={0}
                />

                <Animated.View
                    style={{
                        position: 'absolute',
                        flexDirection: 'column',
                        width: '100%',
                        bottom: 125,
                        opacity: dataOpacity,
                    }}
                >   
                    {isGlobalLoading ? 
                    (
                        <ActivityIndicator size="large" color="#FFFF" />
                    )
                    :
                    (
                    <>
                        <LocationLabel>{dataWeather.description?.toUpperCase() ?? `--`}</LocationLabel>
                        <LocationText>
                            {dataWeather.country != undefined ? 
                                dataWeather.name+' - '+dataWeather.country :
                                 '--'}
                        </LocationText>
                    </>
                    )
                    }
                </Animated.View>

                <Animated.View
                    style={{
                        position: 'absolute',
                        flexDirection: 'column',
                        bottom: -15,
                        width: '100%',
                        opacity: dataOpacity,
                    }}
                >
                    <Animated.View
                         style={{
                            flexDirection: 'row',
                            width: '100%',
                            justifyContent: 'space-around',
                            paddingLeft: 7,
                            paddingRight: 10,
                            alignItems: 'center',
                            opacity: dataOpacity,
                        }}
                    >
                        <DataLabel>Temperatura máxima</DataLabel>
                        {isGlobalLoading ? 
                        (  
                            <ActivityIndicator size="large" color="#FFFF" />
                        )
                        :
                        (
                            <DataResult>{Math.round(dataWeather.temp_max|| 0) ??'--'}°C</DataResult>
                        )
                        }
                      
                      
                    </Animated.View>

                    <Animated.View
                        style={{
                            flexDirection: 'row',
                            width: '100%',
                            justifyContent: 'space-around',
                            paddingLeft: 7,
                            paddingRight: 10,
                            alignItems: 'center',
                            opacity: dataOpacity,
                        }}
                        
                    >   
                        <DataLabel>Temperatura mínima</DataLabel>
                        {isGlobalLoading?
                        ( <ActivityIndicator size="large" color="#FFFF" />)
                        :
                        (<DataResult>{Math.round(dataWeather.temp_min||0) ??'--'}°C</DataResult>)

                        }
                        
                       
                    </Animated.View>

                    <Animated.View
                        style={{
                            flexDirection: 'row',
                            width: '100%',
                            justifyContent: 'space-around',
                            alignItems: 'center',
                            opacity: dataOpacity,
                        }}
                    >
                        <DataLabel>Sensação térmica</DataLabel>

                        {isGlobalLoading ? 
                        (  <ActivityIndicator size="large" color="#FFFF" />)
                        : 
                        (<DataResult>{Math.round(dataWeather.feels_like||0) ??'--'}°C</DataResult>)
                        }
                      
                    </Animated.View>
                </Animated.View>
            </Animated.View>
            <BtnRefresh title='Atualizar'/>
        </ImageBackground>
    )
}

export default Day;