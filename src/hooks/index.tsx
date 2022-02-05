import React from 'react';
import {UserPositionHookProvider} from './UserPosition'
import {DataWeatherHookProvider} from './DataWeather'
import {GlobalLoadingHookProvider} from './Loading'

const AppProvider: React.FC = ({children}) => {
    return (
      <GlobalLoadingHookProvider>
          <UserPositionHookProvider>
            <DataWeatherHookProvider>
              {children}
            </DataWeatherHookProvider>
          </UserPositionHookProvider>
      </GlobalLoadingHookProvider>
    )
}   

export default AppProvider;