export default async function handler(req, res) {
  const result = await fetch('https://ks.saleanalyst.net/api/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `{
        products(
          take: 10
          where: {
            OR: [{ sku: { contains: "${req.query.s}" } }, { name: { contains: "${req.query.s}" } }]
          }
        ) {
          id
          name
          sku
        }
      }
      `,
    }),
  })
    .then((res) => res.json())
    .catch((e) => {
      console.error(e)
    })
  res.status(200).json(result)
}
