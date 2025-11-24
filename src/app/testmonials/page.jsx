"use client";
import React from 'react'
import Slider from 'react-slick';
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
const Page = () => {


    const onInit = () => {
        console.log("✅ LightGallery initialized successfully!");
    };


    const testimonialSlider = {
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 3,
        slidesToScroll: 3,
        lazyLoad: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    centerPadding: "0px",
                    centerMode: false,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    centerPadding: "0px",
                    centerMode: false,
                },
            },
        ],
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

    const clientSay = [
        {
            id: 1,
            year: "February 27, 2025",
            Desc: "PTD received &apos;Best Employee Accommodation Management and Maintenance &apos; from ALBA CEO for the year 2024, Post various audits from ALBA Team",
        },
        {
            id: 2,
            year: 'October 16, 2024',
            Desc: "Power Tech Group is now ISO 14001 Certified , along with the previously held ISO 9001 and ISO 45001 Certification, Recently we completed the Integrated Management System Audit for all 3 certifications and got certified",
        },
        {
            id: 3,
            year: 'August 11, 2024',
            Desc: "PTD Successfully completed GT T1C Nozzle Replacement Mitsubishi works for ALBA Block 4 Expansion Project and received a letter of Appreciation for our support and completion of the Project from MHI Team.",
        },
        {
            id: 4,
            year: "July 28, 2024",
            Desc: 'PTD has secured 3 Year long term contract with ALBA Power Station 5 for Mechanical, Electrical and Instrumentation Department.',
        },
        {
            id: 5,
            year: "December 21, 2022",
            Desc: "Power Tech Group is happy to share that our company  has been awarded a Silver EcoVadis Medal. This result places our company among the top 25 percent of companies assessed by EcoVadis.",
        },
        {
            id: 6,
            year: "November 30, 2022",
            Desc: "PTD Successfully Completed GT Major Outage with NMES (ACWA POWER) for the NOMAC ALDUR-II Plant,  PTD Also completed Unplanned GT-12 Outage in ALDUR-1 for AEOM",
        },
        {
            id: 7,
            year: "April 15, 2022",
            Desc: "Power Tech recently completed GPIC Turnaround 2022 in Bahrain, providing close to 100 resources from Instrumentation, Electrical and Mechanical Stream",
        },

    ];

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
    return (
        <>
            <section className='hero-banner'>
                <div className='container'>
                    <div className='row alignItem_center' >
                        <div className='col-lg-6'>
                            <div className='innerpage_bnrContent'>
                                <h1>Credentials</h1>
                                <p>We are grateful to our clients for giving us the opportunity to work for them; it is a tremendous source of encouragement for our team when our work is recognized. Numerous business leaders from Saudi Arabia and overseas have expressed appreciation for our team thus far.</p>
                                <Link href="/contact-us" className='mainbtn'>Contact Us</Link>
                            </div>
                        </div>
                        <div className='col-lg-5 offset-lg-1'>
                            <div className='hero-banner_img'>
                                <img className="img-1" src="/assets/img/industry_illu.jpg" alt="about us img" />
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

                        <Tab eventKey="referenceTab" title="Reference"
                        >   
                        <div className='row'>

                            {clientSay.map((item) => (
                                <div className='col-lg-4 mb_50' key={item.id}>
                                <div className="testimonialItem">
                                    <div>
                                        <div className='quoteRightImg'>
                                            <img src="/assets/img/quote.svg" alt='quote' />
                                        </div>
                                        <h3>{item.year}</h3>
                                        <p>{item.Desc}</p>
                                    </div>
                                    <div className='displayFlex alignItem_center justifyContent_spacebetween'>
                                        <div className='displayFlex alignItem_center gap12 dpProfile'>
                                            <div className=''>
                                                <img src="/assets/img/dp.jpg" alt='sdd' />
                                            </div>
                                            <div>
                                                <h5>Raj kumar</h5>
                                                <span>UI / UX</span>
                                            </div>
                                        </div>
                                        <div>
                                            <ul className='displayFlex alignItem_center gap12 emptyList'>
                                                <li>
                                                    <img src="/assets/img/star_fill.svg" alt='star' />
                                                </li>
                                                <li>
                                                    <img src="/assets/img/star_fill.svg" alt='star' />
                                                </li>
                                                <li>
                                                    <img src="/assets/img/star_empty.svg" alt='star' />
                                                </li>
                                                <li>
                                                    <img src="/assets/img/star_empty.svg" alt='star' />
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            ))}
                            </div>
                        </Tab>

                    </Tabs>
                </div>
            </section>
        </>
    )
}

export default Page
