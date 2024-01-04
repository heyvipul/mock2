import React, { useState } from 'react';
import { createContext } from 'react';

export const AuthContext = createContext();

function AuthContextProvider({children}) {

  const [isAuth,setIsAuth] = useState(false);
  const [token,setToken] = useState("");
  const [user,setUser] = useState("")
  // console.log(isAuth);
  // console.log(token);
  // console.log(user);

  return(
    <AuthContext.Provider value={{isAuth,token,setIsAuth,setToken,setUser,user}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider;
