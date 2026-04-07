export interface Env {
  ZOHO_CLIENT_ID: string;
  ZOHO_CLIENT_SECRET: string;
  ZOHO_REFRESH_TOKEN: string;
  ZOHO_ORG_ID: string;
  ZOHO_ACCOUNTS_URL: string;
  ZOHO_API_BASE: string;
  ALLOWED_ORIGIN: string;
}

// In-memory token cache (per worker instance)
let cachedToken: string | null = null;
let tokenExpiresAt = 0;

export async function getAccessToken(env: Env): Promise<string> {
  // Return cached token if still valid (with 5 min buffer)
  if (cachedToken && Date.now() < tokenExpiresAt - 300000) {
    return cachedToken;
  }

  const params = new URLSearchParams({
    grant_type: "refresh_token",
    client_id: env.ZOHO_CLIENT_ID,
    client_secret: env.ZOHO_CLIENT_SECRET,
    refresh_token: env.ZOHO_REFRESH_TOKEN,
  });

  const resp = await fetch(`${env.ZOHO_ACCOUNTS_URL}/oauth/v2/token`, {
    method: "POST",
    body: params,
  });

  const data = (await resp.json()) as {
    access_token?: string;
    expires_in?: number;
    error?: string;
  };

  if (data.error || !data.access_token) {
    throw new Error(`Zoho auth failed: ${data.error || "no access_token"}`);
  }

  cachedToken = data.access_token;
  tokenExpiresAt = Date.now() + (data.expires_in || 3600) * 1000;

  return cachedToken;
}
