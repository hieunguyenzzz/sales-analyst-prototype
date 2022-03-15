import fetchGraphqlApi from "../../libs/api/fetch-graphql-api";

export default async function handler(req, res) {
  const { query, variables } = req.body;
  const result = await fetchGraphqlApi(query, { variables });
  res.status(200).json(result);
}
