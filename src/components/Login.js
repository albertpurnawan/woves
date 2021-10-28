import React from "react";
//import google
import { GoogleLogin } from "react-google-login";

// refresh token
import { refreshTokenSetup } from "../utils/refreshToken";

// import router
import { useHistory } from "react-router-dom";
require("dotenv").config();

const clientId = process.env.REACT_APP_CLIENT_ID;

function Login() {
  const History = useHistory();
  const onSuccess = (res) => {
    console.log("Login Success: currentUser:", res.profileObj);
    alert(`Logged in successfully welcome ${res.profileObj.name}`);
    refreshTokenSetup(res);
    History.push("/main");
  };

  const onFailure = (res) => {
    console.log("Login failed: res:", res);
    alert(`Please re-login`);
  };

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Sign in with Google"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        style={{ marginTop: "100px" }}
        isSignedIn={true}
      />
    </div>
  );
}

export default Login;
