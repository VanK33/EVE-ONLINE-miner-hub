import React from "react";
import { GetServerSideProps } from "next";
import handleEsiGetRequest from "../_utility/handleEsiGetRequest";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const code = context.query.code as string;
  const state = context.query.state as string;
  const url = process.env.NEXT_PUBLIC_API_URL + "/api/auth";
  // call handleEsiGetRequest to send the code and state to the backend
  const response = await handleEsiGetRequest(url, code, state);
  // if the response is true(not empty), redirect to the home page
  if (response) {
    localStorage.setItem("authState", "true");
    return {
      redirect: {
        destination: "/?authenticated=true",
        permanent: false,
      },
    };
    // else redirect to the error page
  } else {
    return {
      redirect: {
        destination: "/error", // not implemented yet
        permanent: false,
      },
    };
  }
};

const CallbackPage = () => {
  return <div>Processing authentication ... </div>;
};

export default CallbackPage;
