import algoliasearch from 'algoliasearch/lite'
import Head from 'next/head'
import Link from 'next/link'
import {
  Highlight,
  Hits,
  InstantSearch,
  SearchBox,
} from 'react-instantsearch-dom'

const searchClient = algoliasearch(
  '6BLKRGRMME',
  '6377d2745e6c648afb372085c7234e4c'
)
function Hit(props) {
  return (
    <Link href={'/product?sku=' + props.hit.sku}>
      <a className="flex w-full gap-3 ">
        <figure className="max-h-[80px] w-1/3 max-w-[80px]">
          <img
            src={props.hit.image}
            className="object-contain w-full h-full"
            align="left"
            alt={props.hit.name}
          />
        </figure>
        <div className="flex-1 p-3">
          <h2 className="font-bold">{props.hit.title}</h2>
          <div>
            {props.hit.variant_title} ({props.hit.sku})
          </div>
          <p>
            <Highlight attribute="description" hit={props.hit} />
          </p>
          <div className="hit-price">${props.hit.price}</div>
        </div>
      </a>
    </Link>
  )
}
const Search = () => (
  <>
    <Head>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/instantsearch.css@7.3.1/themes/reset-min.css"
        integrity="sha256-t2ATOGCtAIZNnzER679jwcFcKYfLlw01gli6F6oszk8="
        crossOrigin="anonymous"
      />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/instantsearch.css@7.4.5/themes/satellite-min.css"
        integrity="sha256-TehzF/2QvNKhGQrrNpoOb2Ck4iGZ1J/DI4pkd2oUsBc="
        crossOrigin="anonymous"
      />
    </Head>
    <style
      dangerouslySetInnerHTML={{
        __html: `
        .ais-Hits-item{
            --tw-bg-opacity: 1;
            background-color: hsla(var(--b1) / var(--tw-bg-opacity));
        }
    `,
      }}
    ></style>
    <InstantSearch searchClient={searchClient} indexName="shopify_products">
      <div className="sticky top-0 z-10 p-3 shadow bg-base-100 opacity-90 focus-within:opacity-100">
        <SearchBox />
      </div>
      <Hits hitComponent={Hit} />
    </InstantSearch>
  </>
)
export default Search
