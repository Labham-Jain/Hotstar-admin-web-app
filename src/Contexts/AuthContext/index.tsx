import { createContext, useEffect, useState } from 'react'
import ResponseJSON from '../../../@types/ResponseJSON'
import API from '../../api/api'
import { GenericContextComponent } from '../Contexts'
import { AuthCtxType, AuthStates } from './AuthContext'

export const AuthCtx = createContext<AuthCtxType>({
  state: 'loading',
  details: undefined
})

const AuthContext = ({children}: GenericContextComponent) => {
  const [authenticationState, setAuthenticationState] = useState<AuthCtxType['state']>('loading');
  const [authDetails, setAuthDetails] = useState<AuthCtxType['details']>();
  
  useEffect(() => {
    const promise = (async () => {
      const response: ResponseJSON = await (await API.get('user')).json();

      switch (response.status) {
        case 200:
          setAuthenticationState('authenticated');
          setAuthDetails(response.data);
          break;
        case 403:
          setAuthenticationState('unauthenticated');
          break;
        default:
          // handle toast message
          break;
      }

    })()

    return () => {
      Promise.resolve(promise)
    }
  }, []);


  const value: AuthCtxType = {
    state: authenticationState,
    details: authDetails
  }

  useEffect(() => {
    console.log(authenticationState);
  }, [authenticationState]);

  return (
    <AuthCtx.Provider value={value}>
      {children}
    </AuthCtx.Provider>
  )
}

export default AuthContext