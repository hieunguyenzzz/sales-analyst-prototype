import fetchGraphqlApi from "../../libs/api/fetch-graphql-api";
const query = `{
  orders(first:10){
    edges{
      node{
        lineItems(first:10){
          edges{
            node{
              product{
                id
                title
              }
              variant{
                id
                title
                sku
                
              }
              originalUnitPriceSet{
                presentmentMoney{
                  amount
                  
                  currencyCode
                }
              }
            }
          }
        }
      }
      
    }
    pageInfo{
      hasNextPage
      
      
    }
  }
}`;
export default async function handler(req, res) {
  const result = await fetchGraphqlApi(query, { variables: {} });
  res.status(200).json(result);
}
