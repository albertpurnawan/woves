import React from 'react';
import { GoogleLogout } from 'react-google-login';
import { useHistory } from 'react-router-dom';

const clientId =process.env.REACT_APP_CLIENT_ID;

function Logout() {
  const History = useHistory();
  const onSuccess = () => {
    alert('Sign out successfully');
    History.push('/');
  };

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        render={(renderProps) => (
          <button onClick={renderProps.onClick} disabled={renderProps.disabled}>
            Logout
          </button>
        )}
        buttonText="Sign out"
        onLogoutSuccess={onSuccess}
      ></GoogleLogout>
    </div>
  );
}

export default Logout;
