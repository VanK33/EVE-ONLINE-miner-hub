import { useRouter } from "next/router";
import React, { useEffect } from "react";

const CallbackPage = () => {
  const router = useRouter();

  useEffect(() => {
    const { code, state } = router.query;
    // ensure code and state exist in the query
    if (code && state) {
      //TODO: import sendAuthInfo from _utility/sendAuthInfo.tsx and call it here
      // This function will send the code and state to the server
      // if auth successful, set localStorage.setItem("authState", "true")
      // if auth successful, redirect to /?
      // if auth failed, redirect to /?
    }
  }, [router]);

  return <div>Processing authentication ... </div>;
};

export default CallbackPage;
