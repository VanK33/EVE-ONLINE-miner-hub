import generateSecureRandomString from "./generateSecureRandomString";
function handleLogin() {
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
  const state = generateSecureRandomString(16);
  window.location.href = "http://localhost:3000/api/auth/login";
}

export default handleLogin;
