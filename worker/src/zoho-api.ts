import { Env, getAccessToken } from "./zoho-auth";

export async function zohoFetch(
  env: Env,
  path: string,
  options: RequestInit = {}
): Promise<Response> {
  const token = await getAccessToken(env);

  const url = `${env.ZOHO_API_BASE}${path}${path.includes("?") ? "&" : "?"}organization_id=${env.ZOHO_ORG_ID}`;

  const resp = await fetch(url, {
    ...options,
    headers: {
      Authorization: `Zoho-oauthtoken ${token}`,
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
  });

  return resp;
}

export async function fetchAllProducts(env: Env) {
  const allProducts: any[] = [];
  let page = 1;
  let hasMore = true;

  while (hasMore) {
    const resp = await zohoFetch(
      env,
      `/products?per_page=200&page=${page}&show_in_storefront=true`
    );
    const data = (await resp.json()) as any;

    if (data.products && data.products.length > 0) {
      allProducts.push(...data.products);
      page++;
      hasMore = data.products.length === 200;
    } else {
      hasMore = false;
    }
  }

  return allProducts;
}

export async function fetchProduct(env: Env, productId: string) {
  const resp = await zohoFetch(env, `/products/${productId}`);
  const data = (await resp.json()) as any;
  return data.product || null;
}

export async function fetchCategories(env: Env) {
  const resp = await zohoFetch(env, `/categories`);
  const data = (await resp.json()) as any;
  return data.categories || [];
}
