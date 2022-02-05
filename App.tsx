import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import {StatusBar} from 'react-native';
import AppRoute from './src/routes/index';
import FlashMessage from "react-native-flash-message";
import AppProvider from './src/hooks'

const App: React.FC = () => {

  return (
    <NavigationContainer>
      <StatusBar
              barStyle={'light-content'}
              backgroundColor="transparent"
              translucent
      />
      <AppProvider>
        <AppRoute />
      </AppProvider>
      <FlashMessage position="top" />
    </NavigationContainer>
  );
};

export default App;