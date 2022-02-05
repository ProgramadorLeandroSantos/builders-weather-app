import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as Screens from '../screens';

const App = createNativeStackNavigator();

const AppRoute: React.FC = () => {

  return (
    <App.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <App.Screen name="Splash" component={Screens.Splash} />
       <App.Screen 
        name="Day" 
        component={Screens.Day} 
        options={{
          gestureEnabled: false
        }}
      />

      <App.Screen 
        name="Everning" 
        component={Screens.Everning} 
        options={{
          gestureEnabled: false
        }}
      />

      <App.Screen 
        name="Night" 
        component={Screens.Night} 
        options={{
          gestureEnabled: false
        }}
      />
      
    </App.Navigator>
  );
};

export default AppRoute;