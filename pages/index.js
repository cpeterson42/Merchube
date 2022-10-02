import React from 'react'
import Head from 'next/head'

import Navigation from '../components/navigation'
import ServicesCard from '../components/services-card'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Merchube</title>
          <meta
            name="description"
            content="We create merch that fans keep at the top of their drawers"
          />
          <meta property="og:title" content="Merchube" />
          <meta
            property="og:description"
            content="We create merch that fans keep at the top of their drawers"
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/1853de93-f8be-4775-89fe-6958242f83ab/559b70d7-93c2-4336-9e7d-283be30654d5?org_if_sml=1"
          />
        </Head>
        <Navigation rootClassName="navigation-root-class-name"></Navigation>
        <main className="home-main">
          <div className="home-hero section-container">
            <div className="home-max-width max-content-container">
              <div className="home-heading-container">
                <h1 className="home-text heading2">
                  We create merch that fans keep at the top of their drawers.
                </h1>
                <span className="home-text01 content">
                  <span>
                    At Merchube, we believe high quality merchandise is an
                    essential tool for building community on YouTube.
                  </span>
                  <br></br>
                  <br></br>
                  <span>
                    {' '}
                    Our designers create designs your fans will love, with
                    regular new releases as your brand evolves.
                  </span>
                  <br></br>
                  <br></br>
                  <span>
                    When you partner with us, our e-commerce experts create and
                    maintain a custom store front, manage inventory, and handle
                    all order logistics so that you can focus on creating
                    content.
                  </span>
                </span>
                <a
                  href="#contactpage"
                  className="home-primary button-primary button-lg button"
                >
                  Get in touch with us
                </a>
              </div>
            </div>
          </div>
          <div className="home-services section-container">
            <div className="home-max-width1 max-content-container">
              <div className="home-heading-container1">
                <div className="home-text-container">
                  <span className="home-text09">our services</span>
                  <h2 className="home-text10">
                    We handle everything it takes to get merch to your fans
                  </h2>
                </div>
              </div>
              <div className="home-cards-container">
                <ServicesCard
                  text="Design"
                  text1="We work with you to create designs your fans love, with regular new releases"
                  image_src="/playground_assets/file-document-200w.png"
                ></ServicesCard>
                <ServicesCard
                  text="Storefront"
                  text1="We design, host, and maintain a professional storefront to create a great purchasing experience"
                ></ServicesCard>
                <ServicesCard
                  text="Operations"
                  text1="We manage printing, fulfillment, and returns to ensure every fan is satisfied with their purchase"
                  image_src="/playground_assets/dice-5-200h.png"
                ></ServicesCard>
              </div>
            </div>
          </div>
          <div className="home-process section-container">
            <div className="home-max-width2 max-content-container">
              <span className="home-text11">Our process</span>
              <h2 className="home-text12 heading2">How to get started</h2>
              <div className="home-step">
                <span className="home-text13">01</span>
                <div className="home-container1">
                  <span className="home-text14 cardheading">
                    Contact us by email or with the form below
                  </span>
                  <span className="home-text15 content">
                    We will set up a quick introductory meeting to get your
                    design vision, answer any questions you have, and begin
                    preliminary designs.
                  </span>
                </div>
              </div>
              <div className="home-step1">
                <span className="home-text16">02</span>
                <div className="home-container2">
                  <span className="home-text17 cardheading">
                    Our designers work with you to bring your vision to life
                  </span>
                  <span className="home-text18 content">
                    Our designers will work with you throughout the design
                    process to make sure all published designs exceed your
                    expectations. If you aren&apos;t initially satisfied, they
                    will continue to iterate until you are.
                  </span>
                </div>
              </div>
              <div className="home-step2">
                <span className="home-text19">03</span>
                <div className="home-container3">
                  <span className="home-text20 cardheading">
                    We launch your store, and begin fulfilling orders
                  </span>
                  <span className="home-text21 content">
                    Depending on projected order volume, we can fulfill directly
                    or with print-on-demand. We accept 30 day returns on all
                    purchases, for any reason.
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="section-container">
            <div className="home-max-width3 max-content-container">
              <h2 className="home-text22 heading2">Our business model</h2>
              <span className="home-text23 content">
                <span>
                  All of our services come at no cost to you, and our
                  no-commitment model means you can back out at any time, for
                  any reason. We are confident that we can deliver a fantastic
                  experience for you and your fans, and put our money where our
                  mouths are.
                </span>
                <br></br>
                <br></br>
                <span>
                  {' '}
                  Our revenue comes as a percentage of sales to align our
                  interests with yours - if you and your fans aren&apos;t happy,
                  neither are we. 
                </span>
                <br></br>
              </span>
            </div>
          </div>
          <div id="contactpage" className="home-banner section-container">
            <div className="home-max-width4 max-content-container">
              <span className="home-text29">
                Want to get started, or have further questions?
              </span>
              <h2 className="home-text30 heading2">
                Contact us for a free consultation!
              </h2>
            </div>
            <div className="home-container4">
              <div className="home-container5">
                <div className="home-container6"></div>
              </div>
              <div className="home-container7">
                <div className="home-container8"></div>
              </div>
              <form
                action="https://formsubmit.co/5a2bffba4386501e4709b29c59b5d726"
                method="POST"
                enctype="application/x-www-form-urlencoded"
                className="home-form"
              >
                <label className="home-text31">
                  Your Email (never shared or sold)
                </label>
                <input
                  type="text"
                  name="email"
                  required
                  placeholder="your-email@example.com"
                  className="home-textinput input"
                />
                <label className="home-text32 content">Message</label>
                <input
                  type="text"
                  name="message"
                  required
                  placeholder="Message"
                  className="home-textinput1 input"
                />
                <button type="submit" className="home-button button">
                  <span>
                    <span>Submit</span>
                    <br></br>
                  </span>
                </button>
              </form>
            </div>
          </div>
        </main>
        <div className="home-footer section-container">
          <div className="max-content-container">
            <div className="home-top-part">
              <div className="home-links-container">
                <div className="home-contact-container">
                  <span className="home-text36 content">
                    Or, contact us directly at:
                  </span>
                  <span className="home-text37 content">
                    <span>partner@merchube.com</span>
                    <br></br>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="home-separator"></div>
        </div>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            position: relative;
            min-height: 100vh;
            overflow-x: hidden;
            align-items: center;
            flex-direction: column;
          }
          .home-main {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-hero {
            position: relative;
            padding-top: 128px;
          }
          .home-max-width {
            margin-top: var(--dl-space-space-threeunits);
          }
          .home-heading-container {
            flex: 1;
            display: flex;
            max-width: 100%;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-text {
            color: var(--dl-color-scheme-darkblue);
            text-align: center;
            margin-bottom: 1.5em;
          }
          .home-text01 {
            color: var(--dl-color-scheme-black);
            width: 100%;
            text-align: center;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .home-primary {
            margin-bottom: var(--dl-space-space-threeunits);
            text-decoration: none;
          }
          .home-services {
            display: flex;
            padding-top: var(--dl-space-space-fiveunits);
            flex-direction: column;
            background-color: var(--dl-color-scheme-lightbrown);
          }
          .home-max-width1 {
            flex-direction: column;
          }
          .home-heading-container1 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-end;
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: row;
            justify-content: space-between;
          }
          .home-text-container {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text09 {
            color: var(--dl-color-scheme-brown);
            font-style: normal;
            text-align: center;
            font-weight: 700;
            margin-bottom: 4px;
            letter-spacing: 0.1em;
            text-transform: uppercase;
          }
          .home-text10 {
            font-size: 3em;
            font-family: DM Serif Display;
            font-weight: 400;
            line-height: 63px;
            letter-spacing: 0.01em;
            text-decoration: none;
          }
          .home-cards-container {
            width: 100%;
            display: flex;
            grid-gap: 20px;
            flex-wrap: wrap;
            padding-bottom: 1em;
          }
          .home-process {
            height: 100%;
            padding-top: 5em;
            padding-bottom: 3em;
            background-color: var(--dl-color-scheme-lightblue);
          }
          .home-max-width2 {
            align-items: flex-start;
            flex-direction: column;
            justify-content: space-between;
          }
          .home-text11 {
            color: var(--dl-color-scheme-white);
            font-style: normal;
            text-align: center;
            font-weight: 700;
            margin-bottom: 4px;
            letter-spacing: 0.1em;
            text-transform: uppercase;
          }
          .home-text12 {
            color: var(--dl-color-scheme-white);
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .home-step {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            border-color: rgba(255, 255, 255, 0.2);
            border-width: 1px;
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: row;
            padding-bottom: 53px;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 1px;
          }
          .home-text13 {
            color: var(--dl-color-scheme-white);
            width: 1em;
            font-size: 64px;
            font-style: normal;
            font-weight: 500;
            line-height: 61px;
            margin-right: 180px;
          }
          .home-container1 {
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text14 {
            color: var(--dl-color-scheme-white);
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text15 {
            color: var(--dl-color-scheme-white80);
          }
          .home-step1 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            border-color: rgba(255, 255, 255, 0.2);
            border-width: 1px;
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: row;
            padding-bottom: 53px;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 1px;
          }
          .home-text16 {
            color: var(--dl-color-scheme-white);
            width: 1em;
            font-size: 64px;
            font-style: normal;
            font-weight: 500;
            line-height: 61px;
            margin-right: 180px;
          }
          .home-container2 {
            width: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text17 {
            color: var(--dl-color-scheme-white);
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text18 {
            color: var(--dl-color-scheme-white80);
          }
          .home-step2 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            border-color: rgba(255, 255, 255, 0.2);
            border-width: 1px;
            flex-direction: row;
            padding-bottom: 53px;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 1px;
          }
          .home-text19 {
            color: var(--dl-color-scheme-white);
            width: 1em;
            font-size: 64px;
            font-style: normal;
            font-weight: 500;
            line-height: 61px;
            margin-right: 180px;
          }
          .home-container3 {
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text20 {
            color: var(--dl-color-scheme-white);
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text21 {
            color: var(--dl-color-scheme-white80);
          }
          .home-max-width3 {
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
          }
          .home-text22 {
            text-align: center;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text23 {
            color: var(--dl-color-scheme-black80);
            width: auto;
            text-align: center;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .home-banner {
            height: 100%;
            padding-top: 6em;
            padding-bottom: 6em;
            background-color: var(--dl-color-scheme-brown);
          }
          .home-max-width4 {
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
          }
          .home-text29 {
            color: var(--dl-color-scheme-white);
            font-style: normal;
            text-align: center;
            font-weight: 700;
            margin-bottom: 4px;
            letter-spacing: 0.1em;
            text-transform: uppercase;
          }
          .home-text30 {
            color: var(--dl-color-scheme-white);
            text-align: center;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-container4 {
            flex: 0 0 auto;
            width: 90%;
            height: 282px;
            display: flex;
            max-width: 700px;
            align-items: flex-start;
            justify-content: center;
          }
          .home-container5 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-container6 {
            flex: 0 0 auto;
            width: auto;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-container7 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-container8 {
            flex: 0 0 auto;
            width: auto;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-form {
            flex: 1;
            width: 100%;
            height: 100%;
            position: relative;
            margin-top: var(--dl-space-space-twounits);
            margin-bottom: 0px;
            padding-bottom: var(--dl-space-space-unit);
          }
          .home-text31 {
            left: 0px;
            color: #ffffff;
            right: 0px;
            width: 100%;
            bottom: 266px;
            height: auto;
            margin: auto;
            position: absolute;
            font-size: 1.1em;
            text-align: center;
            font-family: DM Sans;
            font-weight: 400;
            line-height: 1.3;
            text-decoration: none;
          }
          .home-textinput {
            top: 2em;
            left: 0px;
            width: 100%;
            position: absolute;
          }
          .home-text32 {
            top: 5em;
            left: 0px;
            color: var(--dl-color-scheme-white);
            right: 0px;
            width: 100%;
            margin: auto;
            position: absolute;
            text-align: center;
          }
          .home-textinput1 {
            top: 7.5em;
            left: 0px;
            right: 0px;
            width: 100%;
            height: var(--dl-size-size-medium);
            margin: auto;
            position: absolute;
          }
          .home-button {
            left: 0px;
            right: 0px;
            width: var(--dl-size-size-large);
            bottom: 0px;
            margin: auto;
            position: absolute;
          }
          .home-footer {
            height: 235px;
            margin-bottom: 12px;
          }
          .home-top-part {
            width: 100%;
            display: flex;
            align-items: stretch;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-links-container {
            width: 50%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-contact-container {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text36 {
            color: var(--dl-color-scheme-brown);
            font-style: normal;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-text37 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-separator {
            width: 100%;
            height: 1px;
            margin-top: var(--dl-space-space-twounits);
            margin-bottom: var(--dl-space-space-twounits);
            background-color: #d9d9d9;
          }
          @media (max-width: 991px) {
            .home-heading-container {
              max-width: 100%;
              margin-bottom: 42px;
            }
          }
          @media (max-width: 767px) {
            .home-text13 {
              margin-right: var(--dl-space-space-fourunits);
            }
            .home-text16 {
              margin-right: var(--dl-space-space-fourunits);
            }
            .home-text19 {
              margin-right: var(--dl-space-space-fourunits);
            }
            .home-top-part {
              align-items: center;
              flex-direction: column;
              justify-content: space-between;
            }
            .home-links-container {
              width: 100%;
              align-items: flex-start;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
              flex-direction: row;
            }
          }
          @media (max-width: 479px) {
            .home-text13 {
              margin-right: var(--dl-space-space-twounits);
            }
            .home-text16 {
              margin-right: var(--dl-space-space-twounits);
            }
            .home-text19 {
              margin-right: var(--dl-space-space-twounits);
            }
            .home-top-part {
              align-items: center;
              flex-direction: column;
            }
            .home-contact-container {
              align-items: flex-start;
              margin-bottom: 0px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
