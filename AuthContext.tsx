import React, {useContext, useState} from 'react';

export const AuthContext = React.createContext<any>(null);

export function AuthContextWrapper({children}: {children: React.ReactNode}) {
  const [loginState, setLoginState] = useState({
    loading: false,
    username: '',
    password: '',
    usernameError: '',
    passwordError: '',
  });

  const [signupState, setSignupState] = useState({
    username: '',
    password: '',
  });

  const AuthContextValue = {
    loginState: loginState,
    setLoginState: setLoginState,
    signupState: signupState,
    setSignupState: setSignupState,
  };

  return (
    <AuthContext.Provider value={AuthContextValue}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  const {loginState, setLoginState, signupState, setSignupState} =
    useContext(AuthContext);

  return {
    loginState: {
      loading: loginState.loading,
      username: loginState.username,
      password: loginState.password,
      usernameError: loginState.usernameError,
      passwordError: loginState.passwordError,
    },
    setLoginState: setLoginState,
  };
}
