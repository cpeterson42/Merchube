import React from 'react'

import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import ServicesCard from '../components/services-card'
import projectStyles from '../style.module.css'
import styles from './index.module.css'

const Home = (props) => {
  return (
    <div className={styles['container']}>
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
      <Navigation rootClassName="root-class-name"></Navigation>
      <main className={styles['main']}>
        <div
          className={` ${styles['hero']} ${projectStyles['section-container']} `}
        >
          <div
            className={` ${styles['max-width']} ${projectStyles['max-content-container']} `}
          >
            <div className={styles['heading-container']}>
              <h1
                className={` ${styles['text']} ${projectStyles['heading2']} `}
              >
                We create merch that fans keep at the top of their drawers.
              </h1>
              <span
                className={` ${styles['text01']} ${projectStyles['content']} `}
              >
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
                className={` ${styles['primary']} ${projectStyles['button-primary']} ${projectStyles['button-lg']} ${projectStyles['button']} `}
              >
                Get in touch with us
              </a>
            </div>
          </div>
        </div>
        <div
          className={` ${styles['services']} ${projectStyles['section-container']} `}
        >
          <div
            className={` ${styles['max-width1']} ${projectStyles['max-content-container']} `}
          >
            <div className={styles['heading-container1']}>
              <div className={styles['text-container']}>
                <span className={styles['text09']}>our services</span>
                <h2 className={styles['text10']}>
                  We handle everything it takes to get merch to your fans
                </h2>
              </div>
            </div>
            <div className={styles['cards-container']}>
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
        <div
          className={` ${styles['process']} ${projectStyles['section-container']} `}
        >
          <div
            className={` ${styles['max-width2']} ${projectStyles['max-content-container']} `}
          >
            <span className={styles['text11']}>Our process</span>
            <h2
              className={` ${styles['text12']} ${projectStyles['heading2']} `}
            >
              How to get started
            </h2>
            <div className={styles['step']}>
              <span className={styles['text13']}>01</span>
              <div className={styles['container1']}>
                <span
                  className={` ${styles['text14']} ${projectStyles['cardheading']} `}
                >
                  Contact us by email or with the form below
                </span>
                <span
                  className={` ${styles['text15']} ${projectStyles['content']} `}
                >
                  We will set up a quick introductory meeting to get your design
                  vision, answer any questions you have, and begin preliminary
                  designs.
                </span>
              </div>
            </div>
            <div className={styles['step1']}>
              <span className={styles['text16']}>02</span>
              <div className={styles['container2']}>
                <span
                  className={` ${styles['text17']} ${projectStyles['cardheading']} `}
                >
                  Our designers work with you to bring your vision to life
                </span>
                <span
                  className={` ${styles['text18']} ${projectStyles['content']} `}
                >
                  Our designers will work with you throughout the design process
                  to make sure all published designs exceed your expectations.
                  If you aren&apos;t initially satisfied, they will continue to
                  iterate until you are.
                </span>
              </div>
            </div>
            <div className={styles['step2']}>
              <span className={styles['text19']}>03</span>
              <div className={styles['container3']}>
                <span
                  className={` ${styles['text20']} ${projectStyles['cardheading']} `}
                >
                  We launch your store, and begin fulfilling orders
                </span>
                <span
                  className={` ${styles['text21']} ${projectStyles['content']} `}
                >
                  Depending on projected order volume, we can fulfill directly
                  or with print-on-demand. We accept 30 day returns on all
                  purchases, for any reason.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className={projectStyles['section-container']}>
          <div
            className={` ${styles['max-width3']} ${projectStyles['max-content-container']} `}
          >
            <h2
              className={` ${styles['text22']} ${projectStyles['heading2']} `}
            >
              Our business model
            </h2>
            <span
              className={` ${styles['text23']} ${projectStyles['content']} `}
            >
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
        <div
          id="contactpage"
          className={` ${styles['banner']} ${projectStyles['section-container']} `}
        >
          <div
            className={` ${styles['max-width4']} ${projectStyles['max-content-container']} `}
          >
            <span className={styles['text29']}>
              Want to get started, or have further questions?
            </span>
            <h2
              className={` ${styles['text30']} ${projectStyles['heading2']} `}
            >
              Contact us for a free consultation!
            </h2>
          </div>
          <div className={styles['container4']}>
            <div className={styles['container5']}>
              <div className={styles['container6']}></div>
            </div>
            <div className={styles['container7']}>
              <div className={styles['container8']}></div>
            </div>
            <form
              action="https://formsubmit.co/5a2bffba4386501e4709b29c59b5d726"
              method="POST"
              enctype="application/x-www-form-urlencoded"
              className={styles['form']}
            >
              <label className={styles['text31']}>
                Your Email (never shared or sold)
              </label>
              <input
                type="text"
                name="email"
                required
                placeholder="your-email@example.com"
                className={` ${styles['textinput']} ${projectStyles['input']} `}
              />
              <label
                className={` ${styles['text32']} ${projectStyles['content']} `}
              >
                Message
              </label>
              <input
                type="text"
                name="message"
                required
                placeholder="Message"
                className={` ${styles['textinput1']} ${projectStyles['input']} `}
              />
              <button
                type="submit"
                className={` ${styles['button']} ${projectStyles['button']} `}
              >
                <span>
                  <span>Submit</span>
                  <br></br>
                </span>
              </button>
            </form>
          </div>
        </div>
      </main>
      <div
        className={` ${styles['footer']} ${projectStyles['section-container']} `}
      >
        <div className={projectStyles['max-content-container']}>
          <div className={styles['top-part']}>
            <div className={styles['links-container']}>
              <div className={styles['contact-container']}>
                <span
                  className={` ${styles['text36']} ${projectStyles['content']} `}
                >
                  Or, contact us directly at:
                </span>
                <span
                  className={` ${styles['text37']} ${projectStyles['content']} `}
                >
                  <span>partner@merchube.com</span>
                  <br></br>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles['separator']}></div>
      </div>
    </div>
  )
}

export default Home
