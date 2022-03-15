import { SHOPIFY_API_TOKEN, SHOPIFY_API_URL } from "../const";
console.log({ SHOPIFY_API_TOKEN, SHOPIFY_API_URL });
const fetchGraphqlApi = async (query, { variables } = {}, fetchOptions) => {
  try {
    const res = await fetch(SHOPIFY_API_URL, {
      method: "POST",
      headers: {
        "X-Shopify-Access-Token": SHOPIFY_API_TOKEN,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    });

    const { data, errors, status } = await res.json();

    if (errors) {
      throw new Error(errors, status);
    }

    return { data, res };
  } catch (err) {
    console.error(
      `${err} \n Most likely related to an unexpected output. e.g the store might be protected with password or not available.`
    );
  }
};
export default fetchGraphqlApi;
