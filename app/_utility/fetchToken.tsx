interface TokenResponse {
  code: string;
  state: string;
}

// This function is used to fetch the access and refresh token from EVE Online ESI API
async function fetchToken(
  clientId: string,
  url: string,
  scope: string,
  state: string
): Promise<TokenResponse> {
  const response = await fetch(
    `https://login.eveonline.com/v2/oauth/authorize?response_type=code&redirect_uri=${url}&client_id=${clientId}&scope=${scope}&state=${state}`
  );
  const data = await response.json();
  return data;
}

export default fetchToken;
