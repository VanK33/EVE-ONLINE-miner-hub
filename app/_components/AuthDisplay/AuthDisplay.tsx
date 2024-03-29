"use client";
import React, { useState, useEffect } from "react";
import defaultLoginImage from "../../../assets/eve-auth/eve-sso-login-black-large.png";
import Image from "next/image";
import Avatar from "../Avatar/Avatar";
import handleAuth from "@/app/_utility/handleLogin";

const AuthDisplay = () => {
  const [AuthState, setAuthState] = useState(false);

  // This useEffect hook is used to check if the user is already logged in
  useEffect(() => {
    const storedAuthState = localStorage.getItem("authState");
    if (storedAuthState === "true") {
      setAuthState(true);
    }
  }, []);

  const handleLogin = () => {
    handleAuth();
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
