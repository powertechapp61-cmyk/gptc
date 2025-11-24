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
    const tabData = [
        {
            key: "bahrainTab",
            title: "Bahrain - Building Picture and Workshop",
            items: [
                {
                    src: "/assets/img/bahrain/powertech_bahrain_two.jpeg",
                    thumb: "/assets/img/bahrain/powertech_bahrain_two.jpeg",
                    caption: "Power Tech Group Building Bahrain (2)",
                    type: "image"
                },
                {
                    src: "/assets/img/bahrain/powertech_bahrain_one.jpeg",
                    thumb: "/assets/img/bahrain/powertech_bahrain_one.jpeg",
                    caption: "Power Tech Group Building Bahrain",
                    type: "image"
                },
                {
                    src: "/assets/img/bahrain/powertech_bahrain_three.jpg",
                    thumb: "/assets/img/bahrain/powertech_bahrain_three.jpg",
                    caption: "Power Tech Group Building Bahrain",
                    type: "image"
                },
                {
                    src: "/assets/img/bahrain/ptd_conference_room.jpg",
                    thumb: "/assets/img/bahrain/ptd_conference_room.jpg",
                    caption: "PTD Conference room",
                    type: "image"
                },
                {
                    src: "/assets/img/bahrain/ptd_employees_accomodation.jpeg",
                    thumb: "/assets/img/bahrain/ptd_employees_accomodation.jpeg",
                    caption: "PTD Employees accomodation",
                    type: "image"
                },
                {
                    src: "/assets/img/bahrain/ptd_nomac_hse_audit.jpeg",
                    thumb: "/assets/img/bahrain/ptd_nomac_hse_audit.jpeg",
                    caption: "PTD Nomac HSE Audit",
                    type: "image"
                },
                {
                    src: "/assets/img/bahrain/ptd_upvc_factory_inside.jpeg",
                    thumb: "/assets/img/bahrain/ptd_upvc_factory_inside.jpeg",
                    caption: "PTD UPVC Factory Inside",
                    type: "image"
                },
                {
                    src: "/assets/img/bahrain/ptd_upvc_factory.jpeg",
                    thumb: "/assets/img/bahrain/ptd_upvc_factory.jpeg",
                    caption: "PTD UPVC Factory",
                    type: "image"
                },
                {
                    src: "/assets/img/bahrain/valve-tech-workshop-in-bahrain.jpeg",
                    thumb: "/assets/img/bahrain/valve-tech-workshop-in-bahrain.jpeg",
                    caption: "Valve Tech workshop in Bahrain",
                    type: "image"
                }
            ],
        },
        {
            key: "saudiTab",
            title: "Saudi - Office & Rabigh Picture",
            items: [
                { src: "/assets/img/bahrain/saudi1.jpg", thumb: "/assets/img/bahrain/saudi1_thumb.jpg", caption: "Saudi Office", type: "image" },
            ],
        },
        {
            key: "indiaTab",
            title: "India - CPDTI & Dindigul Workshop Picture",
            items: [
                { src: "/assets/img/india_branch/cpdti_Institute_chennai_india.jpg", thumb: "/assets/img/india_branch/cpdti_Institute_chennai_india.jpg", caption: "CPDTI Institute, Chennai, India", type: "image" },
                { src: "/assets/img/india_branch/dindigul-office.jpg", thumb: "/assets/img/india_branch/dindigul-office.jpg", caption: "dindigul office", type: "image" },
                { src: "/assets/img/india_branch/dindigul-training-center.png", thumb: "/assets/img/india_branch/dindigul-training-center.png", caption: "Dindigul Training center", type: "image" },
            ],
        },
        {
            key: "uaeTab",
            title: "UAE Workshop & Ajman Photos",
            items: [
                { src: "/assets/img/bahrain/uae1.jpg", thumb: "/assets/img/bahrain/uae1_thumb.jpg", caption: "Ajman Workshop", type: "image" },
            ],
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
                                    <li><Link href={'/our-branches'}>Our Branches</Link></li>
                                </ul>
                                <h1>Our Branches</h1>
                                <p>There are many variations of passages available but the majority have suffered alteration in some form by injected humour randomised words which don&apos;t look even slightly believable. If you are going to use passage.

                                </p>
                                <Link href="/contact-us" className='mainbtn'>Contact Us</Link>
                            </div>
                        </div>
                        <div className='col-lg-5 offset-lg-1'>
                            <div className='hero-banner_img'>
                                <img className="img-1" src="/assets/img/all_logo.jfif" alt="gallery" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className='ourBranches_sec'>
                <div className='container'>
                    <Tabs defaultActiveKey="bahrainTab" id="uncontrolled-tab-example" className="stscTab">
                        {tabData.map((tab) => (
                            <Tab key={tab.key} eventKey={tab.key} title={tab.title}>
                                <LightGallery speed={500} plugins={[lgZoom, lgThumbnail]}>
                                    {tab.items.map((item, i) => (
                                        <a
                                            key={i}
                                            href={item.src}
                                            data-sub-html={`<h4>${item.caption}</h4>`}
                                            data-poster={item.type === "video" ? item.thumb : undefined}
                                        >
                                            <img src={item.thumb} alt={item.caption} />
                                            <div className='galleryhover'><h5>{item.caption}</h5></div>
                                        </a>
                                    ))}
                                </LightGallery>
                            </Tab>
                        ))}
                    </Tabs>
                </div>
            </section>
        </>
    )
}

export default page
