import Script from 'next/script'

function Polyfill() {
  return (
    <Script src="https://polyfill.io/v3/polyfill.min.js?features=scroll"></Script>
  )
}

export default Polyfill
