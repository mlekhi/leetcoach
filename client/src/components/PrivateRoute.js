import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const PrivateRoute = ({ element }) => {
  const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0();

  useEffect(() => {
    console.log('PrivateRoute useEffect called');
    console.log('isLoading:', isLoading);
    console.log('isAuthenticated:', isAuthenticated);

    if (!isLoading && !isAuthenticated) {
      console.log('User is not authenticated, redirecting...');
      loginWithRedirect();
    }
  }, [isLoading, isAuthenticated, loginWithRedirect]);

  if (isLoading) {
    console.log('Loading...');
    return <div>Loading...</div>;
  }

  console.log('User is authenticated:', isAuthenticated);

  return isAuthenticated ? element : <Navigate to="/" />;
};

export default PrivateRoute;
