"use client";
import React from 'react'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';


import LightGallery from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// If you want you can use SCSS instead of css
import 'lightgallery/scss/lightgallery.scss';
import 'lightgallery/scss/lg-zoom.scss';

// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import Link from 'next/link';

const page = () => {
    const onInit = () => {
        console.log("✅ LightGallery initialized successfully!");
    };





    const crCopiesItems = [
        {
            type: "image",
            src: "/assets/img/testmonials/c1.jpg",
            thumb: "/assets/img/testmonials/c1.jpg",
            caption: "Company Registration Certificate – Sam Technical Service Contracting Est",
        },
        {
            type: "image",
            src: "/assets/img/testmonials/c2.jpg",
            thumb: "/assets/img/testmonials/c2.jpg",
            caption: "Company Registration Certificate – Valve Tech Testing",
        },
        {
            type: "image",
            src: "/assets/img/testmonials/company-registration-certificate-sam-tech.png",
            thumb: "/assets/img/testmonials/company-registration-certificate-sam-tech.png",
            caption: "Company Registration Certificate – Sam Tech",
        },
        {
            type: "image",
            src: "/assets/img/testmonials/vat-certificate.jpg",
            thumb: "/assets/img/testmonials/vat-certificate.jpg",
            caption: "VAT Certificate",
        },
    ]


    const isoItems = [
        {
            type: "image",
            src: "/assets/img/testmonials/c3.jpg",
            thumb: "/assets/img/testmonials/c3.jpg",
            caption: "ISO - Quality Assured",
        },
        {
            type: "image",
            src: "/assets/img/testmonials/c4.jpg",
            thumb: "/assets/img/testmonials/c4.jpg",
            caption: "ISO- Occupational Safety",
        },
        {
            type: "image",
            src: "/assets/img/testmonials/c5.jpg",
            thumb: "/assets/img/testmonials/c5.jpg",
            caption: "ISO - Green Business",
        },
    ]

 

    const appLetterItems = [
        {
            type: "image",
            src: "/assets/img/testmonials/c6.jpg",
            thumb: "/assets/img/testmonials/c6.jpg",
            caption: "Business Appreciation Letter- Mitsubishi , Japan",
        },
        {
            type: "image",
            src: "/assets/img/testmonials/c7.jpg",
            thumb: "/assets/img/testmonials/c7.jpg",
            caption: "Electricity Water Authority - Hawar Power And Water Station - Appreciation Letter - PTD",
        },
        {
            type: "image",
            src: "/assets/img/testmonials/c8.jpg",
            thumb: "/assets/img/testmonials/c8.jpg",
            caption: "NOMAC Appreciation Letter- Sam Technical Service Contracting Est",
        },
        {
            type: "image",
            src: "/assets/img/testmonials/vat4.jpg",
            thumb: "/assets/img/testmonials/vat4.jpg",
            caption: "VAT Certificate",
        },

        {
            type: "image",
            src: "/assets/img/testmonials/c55.jpg",
            thumb: "/assets/img/testmonials/c55.jpg",
            caption: "GE – Fieldcore – Complyworks Contractor Verification Card with Score of 100",
        },

        {
            type: "image",
            src: "/assets/img/testmonials/5.jpg",
            thumb: "/assets/img/testmonials/5.jpg",
            caption: "Thanks and Appreciation - MTM-L-148- GPIC",
        },
        {
            type: "image",
            src: "/assets/img/testmonials/7.jpg",
            thumb: "/assets/img/testmonials/7.jpg",
            caption: "Customer Ratings",
        },

        {
            type: "image",
            src: "/assets/img/testmonials/eco.jpeg",
            thumb: "/assets/img/testmonials/eco.jpeg",
            caption: "ECOVADIS SUSTAINABILITY RATING - SILVER MEDA FOR POWER TECH GROUP - TOP 25% of the companies assessed by Ecovadis",
        },


        {
            type: "image",
            src: "/assets/img/testmonials/certificate_for_outstanding_worker_one.jpeg",
            thumb: "/assets/img/testmonials/certificate_for_outstanding_worker_one.jpeg",
            caption: "Certificate For Outstanding Worker Accommodation Management & Maintenance in 2024 1",
        },

        {
            type: "image",
            src: "/assets/img/testmonials/certificate_for_outstanding_worker_two.jpg",
            thumb: "/assets/img/testmonials/certificate_for_outstanding_worker_two.jpg",
            caption: "Certificate For Outstanding Worker Accommodation Management & Maintenance in 2024",
        },
    ]


    const referencePos = [
        {
            type: "image",
            src: "/assets/img/testmonials/engie_fadhili.jpg",
            thumb: "/assets/img/testmonials/engie_fadhili.jpg",
            caption: "ENGIE FADHILI O&M COMPANY ONLINE SAFETY VALVE TESTING",
        },
        {
            type: "image",
            src: "/assets/img/testmonials/nomac_red_sea_long_term_manpower.jpg",
            thumb: "/assets/img/testmonials/nomac_red_sea_long_term_manpower.jpg",
            caption: "NOMAC RED SEA LONG TERM MANPOWER",
        },

    ]

    
  return (
    <>
          <section className='hero-banner'>
              <div className='container'>
                  <div className='row alignItem_center' >
                      <div className='col-lg-6'>
                          <div className='innerpage_bnrContent'>
                              <h1>Appreciations</h1>
                              <p>We are grateful to our clients for giving us the opportunity to work for them; it is a tremendous source of encouragement for our team when our work is recognized. Numerous business leaders from Saudi Arabia and overseas have expressed appreciation for our team thus far.</p>
                              <Link  href="/contact-us" className='mainbtn'>Contact Us</Link>
                          </div>
                      </div>
                      <div className='col-lg-5 offset-lg-1'>
                          <div className='hero-banner_img'>
                              <img className="img-1" src="/assets/img/company-photo/slider1.jpg" alt="about us img" />
                          </div>
                      </div>
                  </div>
              </div>
          </section>



          <section className='ourInfrastructure_sec'>
              <div className='container textalign_center'>
                  <Tabs
                      defaultActiveKey="appreciationLetterTab"
                      id="uncontrolled-tab-example"
                      className="stscTab"
                  >
                      <Tab eventKey="crCopiesTab" title="CR Copies data">
                          <div className="crCopiesTab">
                              <LightGallery
                                  onInit={onInit}
                                  speed={500}
                                  plugins={[lgZoom, lgThumbnail]}
                              >
                                  {crCopiesItems.map((crCopiesItem, i) => (

                                      <a key={i}
                                          href={crCopiesItem.src}
                                          data-sub-html={`<h4>${crCopiesItem.caption}</h4>`}
                                          data-poster={crCopiesItem.type === "video" ? crCopiesItem.thumb : undefined}
                                      >
                                          <img
                                              src={crCopiesItem.thumb}
                                              alt={crCopiesItem.caption}
                                          />

                                          <h5>{crCopiesItem.caption}</h5>
                                      </a>
                                  ))}
                              </LightGallery>
                          </div>

                      </Tab>
                      <Tab eventKey="isoCertificateTab" title="ISO Certificate">

                          <div className="isoTab">
                              <LightGallery
                                  onInit={onInit}
                                  speed={500}
                                  plugins={[lgZoom, lgThumbnail]}
                              >
                                  {isoItems.map((isoItem, i) => (

                                      <a key={i}
                                          href={isoItem.src}
                                          data-sub-html={`<h4>${isoItem.caption}</h4>`}
                                          data-poster={isoItem.type === "video" ? isoItem.thumb : undefined}
                                      >
                                          <img
                                              src={isoItem.thumb}
                                              alt={isoItem.caption}
                                          />
                                          <h5>{isoItem.caption}</h5>
                                      </a>
                                  ))}
                              </LightGallery>
                          </div>
                      </Tab>
                      <Tab eventKey="appreciationLetterTab" title="Appreciation letter data">


                          <div className=" appLetterTab">
                              <LightGallery
                                  onInit={onInit}
                                  speed={500}
                                  plugins={[lgZoom, lgThumbnail]}
                              >
                                  {appLetterItems.map((appLtrItem, i) => (

                                      <a key={i}
                                          href={appLtrItem.src}
                                          data-sub-html={`<h4>${appLtrItem.caption}</h4>`}
                                          data-poster={appLtrItem.type === "video" ? appLtrItem.thumb : undefined}
                                      >
                                          <img
                                              src={appLtrItem.thumb}
                                              alt={appLtrItem.caption}
                                          />
                                          <h5>{appLtrItem.caption}</h5>
                                      </a>
                                  ))}
                              </LightGallery>
                          </div>
                      </Tab>

                      <Tab eventKey="referenceTab" title="Reference and PO's"
                      >
                          
                          <div className="appLetterTab">
                              <LightGallery
                                  onInit={onInit}
                                  speed={500}
                                  plugins={[lgZoom, lgThumbnail]}
                              >
                                  {referencePos.map((referencePoItem, i) => (

                                      <a key={i}
                                          href={referencePoItem.src}
                                          data-sub-html={`<h4>${referencePoItem.caption}</h4>`}
                                          data-poster={referencePoItem.type === "video" ? referencePoItem.thumb : undefined}
                                      >
                                          <img
                                              src={referencePoItem.thumb}
                                              alt={referencePoItem.caption}
                                          />
                                          <h5>{referencePoItem.caption}</h5>
                                      </a>
                                  ))}
                              </LightGallery>
                          </div>
                      </Tab>

                  </Tabs>
              </div>
          </section>
    </>
  )
}

export default page
