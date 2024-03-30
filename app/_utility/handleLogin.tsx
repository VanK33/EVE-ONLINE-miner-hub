import axios from "axios";

// import generateSecureRandomString from "./generateSecureRandomString";
async function handleAuth() {
  // This function is used to handle the login process
  // It will redirect the user to the ESI login page
  // The SSO login page will redirect the user back to the callback page
  // The callback page will then redirect the user back to the home page
  // The home page will then display the user's character name and avatar
  // The user is now logged in
  const baseURL = "https://login.eveonline.com/v2/oauth/authorize/";
  const responseType = "code";
  const clientId = process.env.NEXT_PUBLIC_CLIENT_ID;
  const redirectURL = encodeURIComponent(
    process.env.NEXT_PUBLIC_REDIRECT_URL || "https://localhost:3000/callback/"
  );
  const scope = encodeURIComponent("esi-industry.read_character_mining.v1");
  // modify the url in the future if the route changes
  const url = process.env.NEXT_PUBLIC_API_URL + "/api/generate-state";
  // declare a state variable
  let state;

  try {
    const response = await axios.get(url);
    state = response.data.state;
  } catch (error) {
    console.error("Error obtaining state from server", error);
  }

  window.location.href = `${baseURL}?response_type=${responseType}&redirect_uri=${redirectURL}&client_id=${clientId}&scope=${scope}&state=${state}`;
  // return a state variable use to compare with the state variable from the callback page
}

export default handleAuth;
