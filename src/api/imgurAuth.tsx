export async function getAccessToken() {
  const clientId = "accdfd12b9814d5";
  const clientSecret = "dece111afc2a0e5b730206d09dbb87c7634adc8c";
  const responseType = "token";
  const authUrl = `https://api.imgur.com/oauth2/authorize?client_id=${clientId}&response_type=${responseType}`;
  // const tokenUrl = "https://api.imgur.com/oauth2/token";
  
  // https://api.imgur.com/oauth2/authorize?client_id=YOUR_CLIENT_ID&response_type=REQUESTED_RESPONSE_TYPE&state=APPLICATION_STATE
  // const dataAuthorize = {
  //   client_id: clientId,
  //   response_type: responseType,
  // }

  // Primeiro, preciso obter o código de autorização
  const authResponse = await fetch(authUrl, {
    method: "POST",
    headers: {
      'Authorization': `Client-ID ${clientId}`,
    },
  })


  if (!authResponse.ok) {
    console.log("Entrei aqui", authResponse.status)
    // throw new Error(`HTTP error! status: ${authResponse.status}`);
  }


  const authData = await authResponse.json();
  console.log("Authorize",authData)
  const code = authData.code; // O código de autorização

  // Em seguida, obter o token de acesso
  // const tokenResponse = await fetch(tokenUrl, {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/x-www-form-urlencoded",
  //   },
  //   body: `client_id=${clientId}&client_secret=${clientSecret}&grant_type=authorization_code&code=${code}`,
  // });

  // if (!tokenResponse.ok) {
  //   console.log(`HTTP error! status: ${tokenResponse.status}`)
  //   // throw new Error(`HTTP error! status: ${tokenResponse.status}`);
  // }

  // const tokenData = await tokenResponse.json();
  // console.log(tokenData);
  // return tokenData.access_token; // O token de acesso
}
