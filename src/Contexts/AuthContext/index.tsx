import { createContext, useEffect, useState } from 'react'
import API from '../../api/api'
import { GenericContextComponent } from '../Contexts'
import { AuthStates } from './AuthContext'

export const AuthCtx = createContext<any>({})

const AuthContext = ({children}: GenericContextComponent) => {
  const [authenticationState, setAuthenticationState] = useState<AuthStates>('loading');
  const [authDetails, setAuthDetails] = useState();
  
  useEffect(() => {
    const promise = (async () => {
      const response = await API.get('user').json();
    })()

    return () => {
      Promise.resolve(promise)
    }
  }, []);

  return (
    <AuthCtx.Provider value={{}}>
      {children}
    </AuthCtx.Provider>
  )
}

export default AuthContext