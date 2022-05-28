import React from 'react';
import { GoogleLogout } from 'react-google-login';

const clientId = "296887885938-qees5b9b1ls59aj8c6dfnvpbbs1q0nnc.apps.googleusercontent.com";
const Logout = () => {
    const onSuccess = () => {
        alert('Logout made successfully');
    };
    return (
        <div>
            <GoogleLogout
                clientId={clientId}
                buttonText="Logout"
                onLogoutSuccess={onSuccess}
            ></GoogleLogout>
        </div>
    )
}

export default Logout;
