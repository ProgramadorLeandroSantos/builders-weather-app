import React, {
    createContext,
    useState,
    useContext,
    useCallback,
  } from 'react';
import {UserPositionHook, UserPosition} from '../../interfaces';
 

  const UserPositionConText = createContext<UserPositionHook>(
    {} as UserPositionHook,
  );
  
  export const UserPositionHookProvider:React.FC = ({children}) => {
    const [userPosition, setUserPosition] = useState({} as UserPosition)
    
    const setUserLocation = useCallback((location: UserPosition)=>{
      try {
        setUserPosition(location)
      } catch (error) {
        console.log(error)
      }
    },[])

    return (
      <UserPositionConText.Provider
        value={{
         userPosition,
         setUserLocation,
        }}>
        {children}
      </UserPositionConText.Provider>
    )
  }
  
  export function useUserPositionHook(): UserPositionHook {
    const context = useContext(UserPositionConText);
    return context;
  }