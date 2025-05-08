export async function onRequest(context) {
  return new Response(JSON.stringify({
    apiUrl: context.env.VITE_API_URL,
    clientId: context.env.VITE_DISCORD_CLIENT_ID,
    redirectUri: context.env.VITE_DISCORD_REDIRECT_URI,
    frontendUrl: context.env.VITE_FRONTEND_URL
  }), {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
  });
} 