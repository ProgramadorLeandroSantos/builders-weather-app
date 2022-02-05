import React, {
    createContext,
    useState,
    useContext,
    useCallback,
  } from 'react';
import {LoadingPropsHook} from '../../interfaces';
 

  const GlobalLoadingConText = createContext<LoadingPropsHook>(
    {} as LoadingPropsHook,
  );
  
  export const GlobalLoadingHookProvider:React.FC = ({children}) => {
    const [isGlobalLoading, setIsLoading] = useState<boolean>(false)
    
    const setIsGlobalLoading = useCallback((loading: boolean)=>{
      try {
        setIsLoading(loading)
      } catch (error) {
        console.log(error)
      }
    },[])

    return (
      <GlobalLoadingConText.Provider
        value={{
           isGlobalLoading,
           setIsGlobalLoading,
        }}>
        {children}
      </GlobalLoadingConText.Provider>
    )
  }
  
  export function useGlobalLoadingHook(): LoadingPropsHook {
    const context = useContext(GlobalLoadingConText);
    return context;
  }