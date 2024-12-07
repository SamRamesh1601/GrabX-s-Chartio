import React from 'react';
import {GetStorage} from '../Hook/Common/useStorage';

interface User {
  name: string;
  email: string;
}

interface AppContextType {
  state: User | any | null;
  setState: (userData: User | any) => void;
  useLogout: () => void;
  isAuthenticated: boolean;
}

const AppContext = React.createContext<AppContextType | undefined>(undefined);

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({children}) => {
  const [state, setState] = React.useState<User | any | null>({});

  const useLogout = () => {
    setState(null);
  };

  React.useEffect(() => {
    const fetchUserData = async () => {
      const userData = await GetStorage();
      console.log('Async Storage Retrive :  ', userData);
      if (userData) {
        setState((prev: any) => ({
          ...prev,
          ...userData,
        }));
      }
    };

    fetchUserData();
  }, []);

  const authenticated = state && Object.keys(state).length !== 0 ? true : false;

  return (
    <AppContext.Provider value={{authenticated, ...state, setState, useLogout}}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = (): AppContextType => {
  const context = React.useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
