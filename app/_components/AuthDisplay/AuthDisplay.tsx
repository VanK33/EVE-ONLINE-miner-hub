"use client";
import React, { useState } from "react";
import defaultLoginImage from "../../../assets/eve-auth/eve-sso-login-black-large.png";
import Image from "next/image";
import Avatar from "../Avatar/Avatar";
// import handleLogin from "@/app/_utility/handleLogin";

const AuthDisplay = () => {
  const [AuthState, setAuthState] = useState(false);

  const handleLogin = () => {
    setAuthState(true);
  };

  return (
    // This component is used to display the login button if the user is not logged in
    <div>
      $
      {AuthState ? (
        <div>
          <p>Character Name</p>
          <Avatar />
        </div>
      ) : (
        // use next/Image to prevent Type "staticImageData" is not assignable to type "string"
        <Image
          src={defaultLoginImage}
          alt="EVE Online SSO Login"
          onClick={handleLogin}
        />
      )}
    </div>
  );
};

export default AuthDisplay;
