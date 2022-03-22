import Hero from '@components/Hero'
import Layout from '@components/Layout'
import Divider from '@components/UI/Divider'
import React from 'react'

export default function Contact({
  image = {
    src: 'https://uploads-ssl.webflow.com/615fecbd6a34450a0d2be0c2/61647341b798c820c85cf272_leon-6awfTPLGaCE-unsplash-min.jpg',
    width: 375,
    height: 250,
    alt: 'Our office in Berlin',
  },
}) {
  return (
    <>
      <Hero
        heading={`Contact`}
        description={`You're alwas more than welcome to reach out to us regarding exciting new projects`}
      />
      <div className="divider-section" />
      <div className="container mt-12">
        <div className="grid items-baseline gap-8 md:grid-cols-2 lg:grid-cols-3">
          <h2 className="h2">{'Studio info'}</h2>
          <p className="whitespace-pre-line md:mt-0 lg:col-span-2">
            {`Pannierstraße 64
              12043
              Berlininfo@something.com
              +43 60 60 60 60`}
          </p>
          <div className="col-span-full">
            <Divider />
          </div>
          <h2 className="h2">{'Contact us'}</h2>
          <form className="flex flex-col space-y-6 whitespace-pre-line md:mt-0 lg:col-span-2">
            <div className="field Form_inputmain lg:max-w-lg">
              <div className="Form_inputbox">
                <input
                  required
                  className="bg-transparent Form_input"
                  type="text"
                  name="customer[name]"
                  id="CustomerName"
                  autoComplete="name"
                  autoCorrect="off"
                  autoCapitalize="off"
                  placeholder="Your Name"
                />
                <label
                  className="Form_label opacity-70"
                  htmlFor="CustomerEmail"
                >
                  Your Name
                </label>
                <div className="Form_inputunderline" />
              </div>
            </div>
            <div className="field Form_inputmain lg:max-w-lg">
              <div className="Form_inputbox">
                <input
                  required
                  className="bg-transparent Form_input"
                  type="email"
                  name="customer[email]"
                  id="CustomerEmail"
                  autoComplete="email"
                  autoCorrect="off"
                  autoCapitalize="off"
                  placeholder="Your Email"
                />
                <label
                  className="Form_label opacity-70"
                  htmlFor="CustomerEmail"
                >
                  Your Email
                </label>
                <div className="Form_inputunderline" />
              </div>
            </div>
            <div className="field Form_inputmain lg:max-w-lg">
              <div className="Form_inputbox">
                <textarea
                  type="text"
                  placeholder="Your message"
                  cols={6}
                  className="Form_input min-h-[80px] bg-transparent"
                />
                <label
                  className="Form_label opacity-70"
                  htmlFor="CustomerEmail"
                >
                  Your Message
                </label>
                <div className="Form_inputunderline" />
              </div>
            </div>

            <button className="btn-animated !mt-20 inline-block self-start">
              Submit your message
            </button>
          </form>
        </div>
      </div>
    </>
  )
}
Contact.Layout = Layout
