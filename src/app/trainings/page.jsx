"use client";
import React from 'react'
import Link from "next/link";
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
const page = () => {
    const items = [
        {
            type: "image",
            src: "/assets/img/trainings/ai_training_by_ibm.jpg",
            thumb: "/assets/img/trainings/ai_training_by_ibm.jpg",
            caption: "AI Training by IBM to CPDTI students 2025 Batch",
        },

        {
            type: "image",
            src: "/assets/img/trainings/ban_airport_training.jpg",
            thumb: "/assets/img/trainings/ban_airport_training.jpg",
            caption: "BANGALORE INTERNATIONAL AIRPORT TRAINING",
        },

        {
            type: "image",
            src: "/assets/img/trainings/hse_courses.jpg",
            thumb: "/assets/img/trainings/hse_courses.jpg",
            caption: "HSE Courses",
        },

        {
            type: "image",
            src: "/assets/img/trainings/hse_training_passport.png",
            thumb: "/assets/img/trainings/hse_training_passport.png",
            caption: "HSE Training passport",
        },
        {
            type: "image",
            src: "/assets/img/trainings/recognised_by governer_of_india.jpg",
            thumb: "/assets/img/trainings/recognised_by governer_of_india.jpg",
            caption: "Recognised by Governer of India- 2017",
        },
        {
            type: "image",
            src: "/assets/img/trainings/sudanKosti_power_plant_training.jpg",
            thumb: "/assets/img/trainings/sudanKosti_power_plant_training.jpg",
            caption: "SUDAN KOSTI POWER PLANT TRAINING",
        },
    ];
  return (

    <>
          <section className='hero-banner'>
              <div className='container'>
                  <div className='row alignItem_center' >
                      <div className='col-lg-6'>
                          <div className='innerpage_bnrContent'>
                              <ul className='page_breadcrumb'>
                                  <li><Link href={"/"}> Home</Link></li>
                                  <li><img src="/assets/img/rightIcon.svg" alt='right icon' /> </li>
                                  <li>Our Infrastructure</li>
                                  <li><img src="/assets/img/rightIcon.svg" alt='right icon' /> </li>
                                  <li><Link href={'/trainings'}>Trainings</Link></li>
                              </ul>
                              <h1>Trainings</h1>
                              <p>There are many variations of passages available but the majority have suffered alteration in some form by injected humour randomised words which don&apos;t look even slightly believable. If you are going to use passage.

                              </p>
                               <Link href="/contact-us" className='mainbtn'>Contact Us</Link>
                          </div>
                      </div>
                      <div className='col-lg-5 offset-lg-1'>
                          <div className='hero-banner_img'>
                              <img className="img-1" src="/assets/img/trainings/ai_training_by_ibm.jpg" alt="gallery" />
                          </div>
                      </div>
                  </div>
              </div>
          </section>

          <section className='trainings_sec'>
            <div className='container'>
                  <LightGallery
                      speed={500}
                      plugins={[lgZoom, lgThumbnail]}
                  >
                      {items.map((item, i) => (

                          <a key={i}
                              href={item.src}
                              data-sub-html={`<h4>${item.caption}</h4>`}
                              data-poster={item.type === "video" ? item.thumb : undefined}
                          >
                              <img
                                  src={item.thumb}
                                  alt={item.caption}
                              />
                              <div className='galleryhover'><h5>{item.caption}</h5></div>
                          </a>
                      ))}
                  </LightGallery>

            </div>
          </section>
    </>
  )
}

export default page
