export default async function handler(req, res) {
  const result = await fetch('https://ks.saleanalyst.net/api/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `{
        products{
          id
          name
          sku
        }
        orders{
          id
          product{
            name
            sku
          }
          price
          qty
          created_at
          
        }
      }`,
    }),
  })
    .then((res) => res.json())
    .catch((e) => {
      console.error(e)
    })
  res.status(200).json(result)
}
