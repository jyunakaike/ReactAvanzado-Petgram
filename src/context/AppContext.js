import React, { createContext, useState } from 'react';

const AppContext = createContext(null);

const AppProvider = (props) => {
  // const [isAuth, setIsAuth] = useState(false);
  const [isAuth, setIsAuth] = useState(()=> {
    return window.sessionStorage.getItem('token')
  });
  
  // const activateAuth = () => setIsAuth(true);

  const value = {
    isAuth,
    activateAuth: token => {
      setIsAuth(true)
      window.sessionStorage.setItem('token', token)
    }
  }

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  )
}


export {
  AppContext,
  AppProvider
} 
