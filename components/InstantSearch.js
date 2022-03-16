import { Consumer } from './Provider'

const InstantSearch = () => (
  <>
    <div className="sticky top-0 z-10 shadow navbar bg-base-100 opacity-90 focus-within:opacity-100">
      <form data-svelte-search="true" className="flex-1 w-full">
        <div className="w-full form-control">
          <div className="flex-1 w-full rounded input-group">
            <input
              type="text"
              placeholder="Search…"
              className="flex-1 input input-bordered"
            />
            <button className="btn btn-square">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </form>
    </div>
    <ul className="w-full divide-y menu bg-base-100">
      <Consumer>
        {({ products, setProduct } = {}) => {
          return products?.map((p) => (
            <li key={p.sku}>
              <a
                onClick={(e) => {
                  e.preventDefault()
                  setProduct(p)
                }}
                href={'/product?sku=' + p.sku}
                className="flex w-full gap-3 "
              >
                <figure className="max-h-[80px] min-h-[80px] w-1/3 max-w-[80px] bg-base-200"></figure>
                <div className="flex-1 p-3">
                  <h2 className="font-bold">{p.title}</h2>
                  <div>
                    {p.name} ({p.sku})
                  </div>
                </div>
              </a>
            </li>
          ))
        }}
      </Consumer>
    </ul>
  </>
)
export default InstantSearch
