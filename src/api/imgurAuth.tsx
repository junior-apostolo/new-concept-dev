export async function getAccessToken() {
  const authUrl = "https://api.imgur.com/oauth2/authorize";
  const tokenUrl = "https://api.imgur.com/oauth2/token";
  const clientId = "481fe2c0a1cd0ec";
  const clientSecret = "152192ab01e6e4f223fa0bdd6df4f2afd0e7b573";

  // Primeiro, preciso obter o código de autorização
  const authResponse = await fetch(authUrl, {
    method: "POST",
    headers: {
      Authorization: `Client-ID ${clientId}`,
    },
  });

  if (!authResponse.ok) {
    console.log("Entrei aqui")
    throw new Error(`HTTP error! status: ${authResponse.status}`);
  }

  const authData = await authResponse.json();
  const code = authData.code; // O código de autorização

  // Em seguida, obter o token de acesso
  const tokenResponse = await fetch(tokenUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: `client_id=${clientId}&client_secret=${clientSecret}&grant_type=authorization_code&code=${code}`,
  });

  if (!tokenResponse.ok) {
    throw new Error(`HTTP error! status: ${tokenResponse.status}`);
  }

  const tokenData = await tokenResponse.json();
  console.log(tokenData);
  return tokenData.access_token; // O token de acesso
}
