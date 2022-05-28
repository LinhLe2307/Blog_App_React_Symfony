import React from "react";
import GoogleLogin from "react-google-login";

const responseGoogle = (response) => {
  console.log(response);
};

function Login() {
  return (
    <GoogleLogin
      clientId="909295472775-jaa5ivjtf0s45mb7tc79j8tps1nb8vee.apps.googleusercontent.com"
      buttonText="Login"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={"single_host_origin"}
    />
  );
}

export default Login;
