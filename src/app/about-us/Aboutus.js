"use client";
import React, { useRef, useState } from 'react'
import Marquee from "react-fast-marquee";
import Link from 'next/link'
import cn from "classnames";
const AboutUs = () => {
    const marqueeRef = useRef(null);
    const data = [
        { 
            id:1,
            year:"February 27, 2025",
            Desc:"PTD received &apos;Best Employee Accommodation Management and Maintenance &apos; from ALBA CEO for the year 2024, Post various audits from ALBA Team",
        },
        {
            id:2,
            year:'October 16, 2024',
            Desc:"Power Tech Group is now ISO 14001 Certified , along with the previously held ISO 9001 and ISO 45001 Certification, Recently we completed the Integrated Management System Audit for all 3 certifications and got certified",
        },
        {
            id:3,
            year:'August 11, 2024',
            Desc:"PTD Successfully completed GT T1C Nozzle Replacement Mitsubishi works for ALBA Block 4 Expansion Project and received a letter of Appreciation for our support and completion of the Project from MHI Team.",
        },
        {
            id:4,
            year:"July 28, 2024",
            Desc:'PTD has secured 3 Year long term contract with ALBA Power Station 5 for Mechanical, Electrical and Instrumentation Department.',
        },
        {
            id:5,
            year:"December 21, 2022",
            Desc:"Power Tech Group is happy to share that our company  has been awarded a Silver EcoVadis Medal. This result places our company among the top 25 percent of companies assessed by EcoVadis.",
        },
        {
            id:6,
            year:"November 30, 2022",
            Desc:"PTD Successfully Completed GT Major Outage with NMES (ACWA POWER) for the NOMAC ALDUR-II Plant,  PTD Also completed Unplanned GT-12 Outage in ALDUR-1 for AEOM",
        },
        {
            id:7,
            year:"April 15, 2022",
            Desc:"Power Tech recently completed GPIC Turnaround 2022 in Bahrain, providing close to 100 resources from Instrumentation, Electrical and Mechanical Stream",
        },
      
    ];

    const [activeIndex, setActiveIndex] = useState(0);
    // const [activeKey, setActiveKey] = useState('0');

    // Used to determine which items appear above the active item
    const halfwayIndex = Math.ceil(data.length / 2);

    // Usd to determine the height/spacing of each item
    const itemHeight = 100;
    

    // Used to determine at what point an item is moved from the top to the bottom
    const shuffleThreshold = halfwayIndex * itemHeight;

    // Used to determine which items should be visible. this prevents the "ghosting" animation
    const visibleStyleThreshold = shuffleThreshold / 2;

    const determinePlacement = (itemIndex) => {
        // If these match, the item is active
        if (activeIndex === itemIndex) return 0;

        if (itemIndex >= halfwayIndex) {
            if (activeIndex > itemIndex - halfwayIndex) {
                return (itemIndex - activeIndex) * itemHeight;
            } else {
                return -(data.length + activeIndex - itemIndex) * itemHeight;
            }
        }

        if (itemIndex > activeIndex) {
            return (itemIndex - activeIndex) * itemHeight;
        }

        if (itemIndex < activeIndex) {
            if ((activeIndex - itemIndex) * itemHeight >= shuffleThreshold) {
                return (data.length - (activeIndex - itemIndex)) * itemHeight;
            }
            return -(activeIndex - itemIndex) * itemHeight;
        }
    };

    const handleClick = (direction) => {
        setActiveIndex((prevIndex) => {
            if (direction === "next") {
                if (prevIndex + 1 > data.length - 1) {
                    return 0;
                }
                return prevIndex + 1;
            }

            if (prevIndex - 1 < 0) {
                return data.length - 1;
            }

            return prevIndex - 1;
        });
    };

    return (
        <>
            <section className='hero-banner'>
                <div className='container'>
                    <div className='row alignItem_center' >
                        <div className='col-lg-6'>
                            <div className='innerpage_bnrContent'>
                                <h1>About Us</h1>
                                <p>There are many variations of passages available but the majority have suffered alteration in some form by injected humour randomised words which don&apos;t look even slightly believable. If you are going to use passage.

                                </p>
                                <Link href="/contact-us" className='mainbtn'>Contact Us</Link>
                            </div>
                        </div>
                        <div className='col-lg-5 offset-lg-1'>
                            <div className='hero-banner_img'>
                                <img className="img-1" src="/assets/img/aboutus_right.jpeg" alt="about us img" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="about-area">
                <div className="container">
                    <div className="row g-4 align-items-center">
                        <div className="col-lg-6">
                            <div className="about-left wow fadeInLeft">
                                <div className="about-img">
                                    <div className="row g-4">
                                        <div className="col-md-6">
                                            <img className="img-1" src="/assets/img/01.jpg" alt="first" />
                                            <div className="about-experience mt-4">
                                                <div className="about-experience-icon">
                                                    <img src="/assets/img/customerSatisfaction.svg" alt="customerSatisfaction" />
                                                </div>
                                                <span className="text-start">200+ SATISFIED<br /> CUSTOMER</span>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <img className="img-2" src="/assets/img/02.jpg" alt="second" />
                                            <img className="img-3 mt-4" src="/assets/img/03.jpg" alt="third" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-right wow fadeInRight">
                                <div className="site-heading mb-3">
                                    <span className="site-title-tagline">--- About Us ---</span>
                                    <h2 className="site-title">
                                        Our Edukation System <span>Inspires</span> You More.
                                    </h2>
                                </div>
                                <p className='tranquilPondText_Clr fontSize16 fontWeight400'>GLOBAL POWER TECH an ISO 9001 and ISO 45001 company is Unique in Indian sub-continent and GCC countries, as ONE-STOP-SHOP for total power plant services in the areas of Repairs & Retrofits, EPC contracts.

                                </p>
                                <div className="about-content">
                                    <div className="row">
                                        <div className="col-md-7">
                                            <div className="about-item">
                                                <div className="about-item-icon">
                                                    <img src="/assets/img/serviceprovider.svg" alt="Service Provide" />
                                                </div>
                                                <div className="about-item-content">
                                                    <h5>Maintenance Service Provider</h5>
                                                    <p className='tranquilPondText_Clr fontSize16 fontWeight400'>We ensure smooth operations with reliable maintenance solutions.</p>
                                                </div>
                                            </div>
                                            <div className="about-item">
                                                <div className="about-item-icon">
                                                    <img src="/assets/img/search-country.svg" alt="Present in GCC & INDIA" />
                                                </div>
                                                <div className="about-item-content">
                                                    <h5>Present in GCC & INDIA</h5>
                                                    <p className='tranquilPondText_Clr fontSize16 fontWeight400'>Our strong presence spans major regions in GCC and India today.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-5">
                                            <div className="about-quote">
                                                <p>It is a long established fact that a reader will be distracted by the
                                                    content of
                                                    a page when looking at its reader for the long words layout.</p>

                                                <div className='about-quote-icon'>
                                                    <img src="/assets/img/quote-right.svg" alt='quote-right' />
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="about-bottom">
                                    <button href="about.html" className="mainbtn">Discover More</button>
                                    <div className="about-phone">
                                        <div className="icon">
                                            <img src="/assets/img/phone_icon.svg" alt='phone' />
                                        </div>
                                        <div className="number">
                                            <span>Call Now</span>
                                            <Link href="tel:919498660803">+919498660803</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='ourStory_sec'>
                <div className='container'>
                    <div className="site-heading">
                        <h2 className="site-title textalign_center">
                            Our <span>Story</span>
                        </h2>
                    </div>
                    <div className='ourStorySecCircle'>
                        <div className='row'>
                            <div className='col-lg-5'>
                                <div className="bigcircle">
                                    <div className="position_relative">
                                        <div>
                                            <h2 className=" fontSize34 blackText_Clr fontWeight600 mb_16">
                                                {data[activeIndex].year}
                                            </h2>
                                            <p className="tranquilPondText_Clr fontSize16 fontWeight400">
                                                {data[activeIndex].Desc}
                                            </p>
                                        </div>

                                    </div>

                                </div>
                            </div>
                            <div className='col-lg-2'>


                                <div className="halfEllipeControl">
                                    <div className="positionRelative">
                                        <button
                                            className="topArrowBtn"
                                            onClick={() => handleClick("prev")}
                                        >
                                            <img src="/assets/img/arrow-top.svg" alt="TopArrowIcon" />
                                        </button>
                                    </div>
                                    <div className="centerActive">
                                        <img src="/assets/img/radioChecked.svg" alt='radioChecked' />
                                    </div>
                                    <div className="positionRelative">
                                        <button
                                            className="BottomArrowBtn"
                                            onClick={() => handleClick("next")}
                                        >
                                            <img src="/assets/img/arrow_bottom.svg" alt="BottomArrowIcon" />
                                        </button>
                                    </div>
                                </div>


                            </div>
                            <div className='col-lg-5'>
                                <div className="ourStoryTab">
                                    <ul>
                                        {data.map((item, i) => (
                                            <li
                                                key={item.id}
                                                onClick={() => setActiveIndex(i)}
                                                style={{
                                                    transform: `translateY(${determinePlacement(i)}px)`,
                                                }}
                                                className={cn("carousel-item", {
                                                    active: activeIndex === i,
                                                    visible:
                                                        Math.abs(determinePlacement(i)) <= visibleStyleThreshold,
                                                })}>
                                                <h5>
                                                    {typeof item.year ==="string" && item.year.length > 25
                                                        ? `${item.year.slice(0, 25)}...`
                                                        : item.year}
                                                </h5>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='clientlogosec'>
                <div className="site-heading">
                    {/* <span className="site-title-tagline textalign_center">--- Client ---</span> */}
                    <h2 className="site-title textalign_center">
                        <span>Valve Services</span> - Human Resource <br /> & Manpower Supply
                    </h2>
                </div>
                <div className="customerLogos">

                    <Marquee direction="left" ref={marqueeRef} speed={70} className="marquee" loop={0}>
                        <div className='clientLogo_item'>
                            <img src="/assets/img/clientlogo/c1.jpg" alt='' />
                        </div>
                        <div className='clientLogo_item'>
                            <img src="/assets/img/clientlogo/c2.jpg" alt='' />
                        </div>
                        <div className='clientLogo_item'>
                            <img src="/assets/img/clientlogo/c3.jpg" alt='' />
                        </div>
                        <div className='clientLogo_item'>
                            <img src="/assets/img/clientlogo/c4.jpg" alt='' />
                        </div>
                        <div className='clientLogo_item'>
                            <img src="/assets/img/clientlogo/c5.jpg" alt='' />
                        </div>
                        <div className='clientLogo_item'>
                            <img src="/assets/img/clientlogo/c6.jpg" alt='' />
                        </div>
                        <div className='clientLogo_item'>
                            <img src="/assets/img/clientlogo/c7.jpg" alt='' />
                        </div>
                        <div className='clientLogo_item'>
                            <img src="/assets/img/clientlogo/c8.jpg" alt='' />
                        </div>
                        <div className='clientLogo_item'>
                            <img src="/assets/img/clientlogo/c9.jpg" alt='' />
                        </div>
                        <div className='clientLogo_item'>
                            <img src="/assets/img/clientlogo/c10.jpg" alt='' />
                        </div>
                        <div className='clientLogo_item'>
                            <img src="/assets/img/clientlogo/c11.jpg" alt='' />
                        </div>
                        <div className='clientLogo_item'>
                            <img src="/assets/img/clientlogo/c12.jpg" alt='' />
                        </div>
                        <div className='clientLogo_item'>
                            <img src="/assets/img/clientlogo/c13.jpg" alt='' />
                        </div>
                        <div className='clientLogo_item'>
                            <img src="/assets/img/clientlogo/c14.jpg" alt='' />
                        </div>
                        <div className='clientLogo_item'>
                            <img src="/assets/img/clientlogo/c15.jpg" alt='' />
                        </div>
                    </Marquee>
                    <Marquee className="marquee" direction="right" loop={0} speed={70} >
                        <div className='clientLogo_item'>
                            <img src="/assets/img/clientlogo/c16.jpg" alt='' />
                        </div>
                        <div className='clientLogo_item'>
                            <img src="/assets/img/clientlogo/c17.jpg" alt='' />
                        </div>
                        <div className='clientLogo_item'>
                            <img src="/assets/img/clientlogo/c18.jpg" alt='' />
                        </div>
                        <div className='clientLogo_item'>
                            <img src="/assets/img/clientlogo/c19.jpg" alt='' />
                        </div>
                        <div className='clientLogo_item'>
                            <img src="/assets/img/clientlogo/c20.jpg" alt='' />
                        </div>
                        <div className='clientLogo_item'>
                            <img src="/assets/img/clientlogo/c21.jpg" alt='' />
                        </div>
                        <div className='clientLogo_item'>
                            <img src="/assets/img/clientlogo/c22.jpg" alt='' />
                        </div>
                        <div className='clientLogo_item'>
                            <img src="/assets/img/clientlogo/c23.jpg" alt='' />
                        </div>
                        <div className='clientLogo_item'>
                            <img src="/assets/img/clientlogo/c24.jpg" alt='' />
                        </div>
                        <div className='clientLogo_item'>
                            <img src="/assets/img/clientlogo/c25.jpg" alt='' />
                        </div>
                        <div className='clientLogo_item'>
                            <img src="/assets/img/clientlogo/c26.jpg" alt='' />
                        </div>
                        <div className='clientLogo_item'>
                            <img src="/assets/img/clientlogo/c27.jpg" alt='' />
                        </div>
                        <div className='clientLogo_item'>
                            <img src="/assets/img/clientlogo/c28.jpg" alt='' />
                        </div>
                        <div className='clientLogo_item'>
                            <img src="/assets/img/clientlogo/c29.jpg" alt='' />
                        </div>
                        <div className='clientLogo_item'>
                            <img src="/assets/img/clientlogo/c30.jpg" alt='' />
                        </div>
                        <div className='clientLogo_item'>
                            <img src="/assets/img/clientlogo/c31.jpg" alt='' />
                        </div>
                    </Marquee>


                </div>
            </section>
        </>

    )
}

export default AboutUs;
