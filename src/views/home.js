import React from 'react'

import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import ServicesCard from '../components/services-card'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
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
      </Helmet>
      <Navigation rootClassName="navigation-root-class-name"></Navigation>
      <main className="home-main">
        <div className="home-hero section-container">
          <div className="home-max-width max-content-container">
            <div className="home-heading-container">
              <h1 className="home-text heading1">
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
                  Our designers create designs your fans will love, with regular
                  new releases as your brand evolves.
                </span>
                <br></br>
                <br></br>
                <span>
                  When you partner with us, our e-commerce experts create and
                  maintain a custom store front, manage inventory, and handle
                  all order logistics so that you can focus on creating content.
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
                  We will set up a quick introductory meeting to get your design
                  vision, answer any questions you have, and begin preliminary
                  designs.
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
                  Our designers will work with you throughout the design process
                  to make sure all published designs exceed your expectations.
                  If you aren&apos;t initially satisfied, they will continue to
                  iterate until you are.
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
                no-commitment model means you can back out at any time, for any
                reason. We are confident that we can deliver a fantastic
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
  )
}

export default Home
