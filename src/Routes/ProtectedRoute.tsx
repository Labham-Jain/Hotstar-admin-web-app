import { AuthCtx } from '../Contexts/AuthContext';
import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';

interface Props {
  children: JSX.Element;
}

const ProtectedRoute = ({children}: Props) => {
  const {state} = useContext(AuthCtx)
  switch (state) {
    case 'authenticated':
      return children;
    case 'unauthenticated':
      return <Navigate to="/login" />;
    default:
      return null
  }
}

export default ProtectedRoute