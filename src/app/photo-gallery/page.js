'use client';
import { useState } from 'react'
import Link from 'next/link'
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


const GalleryPage = () => {


    const onInit = () => {
        console.log("✅ LightGallery initialized successfully!");
    };


    // const [open, setOpen] = useState(false);


    const items = [
        {
            type: "image",
            src: "/assets/img/gallery_img/01652965804.jpg",
            thumb: "/assets/img/gallery_img/01652965804.jpg",
            caption: "Actuator Servicing and Installation at site",
        },

        {
            type: "image",
            src: "/assets/img/gallery_img/01652965823.jpg",
            thumb: "/assets/img/gallery_img/01652965823.jpg",
            caption: "GAS TURBINE WORKS",
        },

        {
            type: "image",
            src: "/assets/img/gallery_img/01652965841.jpg",
            thumb: "/assets/img/gallery_img/01652965841.jpg",
            caption: "TRAINING ROOM - PTD BAHRAIN",
        },

        {
            type: "image",
            src: "/assets/img/gallery_img/01653046118.png",
            thumb: "/assets/img/gallery_img/01653046118.png",
            caption: "Power Tech Group",
        },


        {
            type: "image",
            src: "/assets/img/gallery_img/01653208757.jpeg",
            thumb: "/assets/img/gallery_img/01653208757.jpeg",
            caption: "Electrical Works by Team PT",
        },

        {
            type: "image",
            src: "/assets/img/gallery_img/01653488601.jpeg",
            thumb: "/assets/img/gallery_img/01653488601.jpeg",
            caption: "ALDUR AUDIT AT PTD OFFICE",
        },

        {
            type: "image",
            src: "/assets/img/gallery_img/01653488832.jpg",
            thumb: "/assets/img/gallery_img/01653488832.jpg",
            caption: "Seawater RO Membrane Replacement works",
        },
        {
            type: "image",
            src: "/assets/img/gallery_img/01653914691.jpg",
            thumb: "/assets/img/gallery_img/01653914691.jpg",
            caption: "STOMO CUSTOMER RATING_ EXCELLENT",
        },
        {
            type: "image",
            src: "/assets/img/gallery_img/01653916847.jpg",
            thumb: "/assets/img/gallery_img/01653916847.jpg",
            caption: "SWRO Membrane Replacement works",
        },

        {
            type: "image",
            src: "/assets/img/gallery_img/01653921366.jpg",
            thumb: "/assets/img/gallery_img/01653921366.jpg",
            caption: "HSE training for PTD Employees",
        },

        {
            type: "image",
            src: "/assets/img/gallery_img/01656237658.jpeg",
            thumb: "/assets/img/gallery_img/01656237658.jpeg",
            caption: "Valve , Gear Box Servicing @ ALDUR",
        },


        {
            type: "image",
            src: "/assets/img/gallery_img/01669019977.jpg",
            thumb: "/assets/img/gallery_img/01669019977.jpg",
            caption: "GT12 Successful Completion Celebration - PTD Team with PTD GM and ALDUR GM",
        },

        {
            type: "image",
            src: "/assets/img/gallery_img/01671609843.jpg",
            thumb: "/assets/img/gallery_img/01671609843.jpg",
            caption: "ECOVADIS SUSTAINABILITY RATING - SILVER MEDA FOR POWER TECH GROUP- TOP 25% of the companies assessed",
        },

        {
            type: "image",
            src: "/assets/img/gallery_img/01677246901.jpg",
            thumb: "/assets/img/gallery_img/01677246901.jpg",
            caption: "Powertech Development",
        },


        {
            type: "image",
            src: "/assets/img/gallery_img/01678702720.jpeg",
            thumb: "/assets/img/gallery_img/01678702720.jpeg",
            caption: "CABLE LAYING WORKS at SULB",
        },

        {
            type: "image",
            src: "/assets/img/gallery_img/01678702763.jpeg",
            thumb: "/assets/img/gallery_img/01678702763.jpeg",
            caption: "GAS SKID Maintenance Works at Bahrain Steel",
        },
        {
            type: "image",
            src: "/assets/img/gallery_img/01678702813.jpeg",
            thumb: "/assets/img/gallery_img/01678702813.jpeg",
            caption: "Valve and Gear Box Overhauling works",
        },
        {
            type: "image",
            src: "/assets/img/gallery_img/01678702850.jpeg",
            thumb: "/assets/img/gallery_img/01678702850.jpeg",
            caption: "Online Safety Valve Testing",
        },


        {
            type: "image",
            src: "/assets/img/gallery_img/01695359593.jpg",
            thumb: "/assets/img/gallery_img/01695359593.jpg",
            caption: "PTT 1",
        },

        {
            type: "image",
            src: "/assets/img/gallery_img/01695359599.jpg",
            thumb: "/assets/img/gallery_img/01695359599.jpg",
            caption: "PTT",
        },


        {
            type: "image",
            src: "/assets/img/gallery_img/01696864148.jpeg",
            thumb: "/assets/img/gallery_img/01696864148.jpeg",
            caption: "Valve Tech workshop photos",
        },


        {
            type: "image",
            src: "/assets/img/gallery_img/01696864197.jpeg",
            thumb: "/assets/img/gallery_img/01696864197.jpeg",
            caption: "Workshop VTTS",
        },

        {
            type: "image",
            src: "/assets/img/gallery_img/01696864248.jpeg",
            thumb: "/assets/img/gallery_img/01696864248.jpeg",
            caption: "ALDUR CONTRACTOR DAY",
        },


        {
            type: "image",
            src: "/assets/img/gallery_img/01696864271.jpeg",
            thumb: "/assets/img/gallery_img/01696864271.jpeg",
            caption: "HSE Recognition at ALDUR",
        },


        {
            type: "image",
            src: "/assets/img/gallery_img/01696864443.jpeg",
            thumb: "/assets/img/gallery_img/01696864443.jpeg",
            caption: "ALDUR HSE AWARD TO PTD TEAM",
        },


        {
            type: "image",
            src: "/assets/img/gallery_img/01700033506.jpeg",
            thumb: "/assets/img/gallery_img/01700033506.jpeg",
            caption: "PTD Team working on GT",
        },


        {
            type: "image",
            src: "/assets/img/gallery_img/01727516371.jpeg",
            thumb: "/assets/img/gallery_img/01727516371.jpeg",
            caption: "Ss Seamless piping works for Tankers @ UAE",
        },



        {
            type: "image",
            src: "/assets/img/gallery_img/01727516442.jpeg",
            thumb: "/assets/img/gallery_img/01727516442.jpeg",
            caption: "Pump Installation & Repair Works",
        },


        {
            type: "image",
            src: "/assets/img/gallery_img/01727516978.jpeg",
            thumb: "/assets/img/gallery_img/01727516978.jpeg",
            // caption: "Sample Photo 1", pending
        },


        {
            type: "image",
            src: "/assets/img/gallery_img/01727517010.jpeg",
            thumb: "/assets/img/gallery_img/01727517010.jpeg",
            caption: "Online Leak Sealing Works @ NOMAC KSA",
        },

        {
            type: "image",
            src: "/assets/img/gallery_img/01727517284.jpeg",
            thumb: "/assets/img/gallery_img/01727517284.jpeg",
            caption: "Online Leak Sealing using Clamp Fabrication",
        },

        {
            type: "image",
            src: "/assets/img/gallery_img/01727517390.jpeg",
            thumb: "/assets/img/gallery_img/01727517390.jpeg",
            caption: "PTD Camp Inspection Audit by ALBA Team",
        },

        {
            type: "image",
            src: "/assets/img/gallery_img/01727517800.jpeg",
            thumb: "/assets/img/gallery_img/01727517800.jpeg",
            caption: "ALBA Team Visit to PTD office",
        },
        {
            type: "image",
            src: "/assets/img/gallery_img/01727518084.jpeg",
            thumb: "/assets/img/gallery_img/01727518084.jpeg",
            caption: "Boiler Retubing works for EWA",
        },
        {
            type: "image",
            src: "/assets/img/gallery_img/01727518484.jpeg",
            thumb: "/assets/img/gallery_img/01727518484.jpeg",
            caption: "Flowmeter Repair & Installation Works",
        },

        {
            type: "image",
            src: "/assets/img/gallery_img/01727528174.jpeg",
            thumb: "/assets/img/gallery_img/01727528174.jpeg",
            caption: "In-situ Actuator Service Works",
        },

        {
            type: "image",
            src: "/assets/img/gallery_img/01727528235.jpeg",
            thumb: "/assets/img/gallery_img/01727528235.jpeg",
            caption: "In-situ Valve Service Works",
        },


        {
            type: "image",
            src: "/assets/img/gallery_img/01727528283.jpeg",
            thumb: "/assets/img/gallery_img/01727528283.jpeg",
            caption: "DMF Valve Fixing Works",
        },

        {
            type: "image",
            src: "/assets/img/gallery_img/01727528309.jpeg",
            thumb: "/assets/img/gallery_img/01727528309.jpeg",
            caption: "DM Plant Works",
        },


        {
            type: "image",
            src: "/assets/img/gallery_img/01727528341.jpeg",
            thumb: "/assets/img/gallery_img/01727528341.jpeg",
            caption: "Level Transmitter Modification & Installation works",
        },

        {
            type: "image",
            src: "/assets/img/gallery_img/01727528390.jpeg",
            thumb: "/assets/img/gallery_img/01727528390.jpeg",
            caption: "Catalyst Loading and Unloading Works 1",
        },

        {
            type: "image",
            src: "/assets/img/gallery_img/01727528425.jpeg",
            thumb: "/assets/img/gallery_img/01727528425.jpeg",
            caption: "Catalyst Loading and Unloading Works",
        },

        {
            type: "image",
            src: "/assets/img/gallery_img/01727528489.jpeg",
            thumb: "/assets/img/gallery_img/01727528489.jpeg",
            caption: "Online Leak Sealing Injection Method",
        },

        {
            type: "image",
            src: "/assets/img/gallery_img/01727779197.jpg",
            thumb: "/assets/img/gallery_img/01727779197.jpg",
            caption: "Aldur Safety Walk done by PTD Management",
        },


        {
            type: "image",
            src: "/assets/img/gallery_img/01729073316.jpeg",
            thumb: "/assets/img/gallery_img/01729073316.jpeg",
            caption: "Electricity Water Authority Visit to our Workshop for Boiler Works",
        },

        {
            type: "image",
            src: "/assets/img/gallery_img/01729073384.jpeg",
            thumb: "/assets/img/gallery_img/01729073384.jpeg",
            caption: "EWA- WTD and PTD Kick Off Meeting for 3 years Valve contract",
        },
        {
            type: "image",
            src: "/assets/img/gallery_img/01748237710.jpeg",
            thumb: "/assets/img/gallery_img/01748237710.jpeg",
            caption: "Valve Servicing at Rabigh KSA",
        },
        {
            type: "image",
            src: "/assets/img/gallery_img/01753081052.jpeg",
            thumb: "/assets/img/gallery_img/01753081052.jpeg",
            caption: "Removal, inspection, overhaul, testing, QC approval, and re installation of various size valves",
        },

        {
            type: "image",
            src: "/assets/img/gallery_img/01753081065.jpeg",
            thumb: "/assets/img/gallery_img/01753081065.jpeg",
            caption: "STSC On-Site Valve Overhaul Operation",
        },

        {
            type: "image",
            src: "/assets/img/gallery_img/01757575015.jpeg",
            thumb: "/assets/img/gallery_img/01757575015.jpeg",
            caption: "CSP Tower Solar – Concentrated Solar Power, Tower Type system using heliostats and central receiver.",
        },
        {
            type: "image",
            src: "/assets/img/gallery_img/01757577763.jpeg",
            thumb: "/assets/img/gallery_img/01757577763.jpeg",
            caption: "Expert heliostat mirror fixing and alignment for CSP Tower Solar plants",
        },
        {
            type: "image",
            src: "/assets/img/gallery_img/01757587417.jpeg",
            thumb: "/assets/img/gallery_img/01757587417.jpeg",
            caption: "Manager supervising heliostat mirror fixing at the CSP Tower Solar Project in Dubai",
        },

        {
            type: "image",
            src: "/assets/img/gallery_img/01757587654.jpeg",
            thumb: "/assets/img/gallery_img/01757587654.jpeg",
            caption: "CSP TOWER - Solar Heliostat mirror fixing",
        },

        {
            type: "image",
            src: "/assets/img/gallery_img/01652964927.jpg",
            thumb: "/assets/img/gallery_img/01652964927.jpg",
            caption: "OUR EMPLOYEES AT ALDUR",
        },

        {
            type: "image",
            src: "/assets/img/gallery_img/01652964974.jpg",
            thumb: "/assets/img/gallery_img/01652964974.jpg",
            caption: "PTD EMPLOYEES AT POWER PLANT",
        },

        {
            type: "image",
            src: "/assets/img/gallery_img/01652965555.jpg",
            thumb: "/assets/img/gallery_img/01652965555.jpg",
            caption: "POWER TECH EMPLOYEES",
        },

        {
            type: "image",
            src: "/assets/img/gallery_img/01652965589.jpg",
            thumb: "/assets/img/gallery_img/01652965589.jpg",
            caption: "PTD ACCOMODATION PHOTOS",
        },

        {
            type: "image",
            src: "/assets/img/gallery_img/01652965655.jpg",
            thumb: "/assets/img/gallery_img/01652965655.jpg",
            caption: "BOILER RE TUBING WORK WITH EWA, BAHRAIN",
        },

        {
            type: "image",
            src: "/assets/img/gallery_img/01652965744.jpg",
            thumb: "/assets/img/gallery_img/01652965744.jpg",
            caption: "PTD- NOMAC Team",
        },


        {
            type: "image",
            src: "/assets/img/gallery_img/01652965793.jpg",
            thumb: "/assets/img/gallery_img/01652965793.jpg"
            // caption: "Sample Photo 1" pening,
        },


        {
            type: "image",
            src: " /assets/img/gallery_img/EWA valve fixing completed and collected 1valve for servicing 3.jpg",
            thumb: "/assets/img/gallery_img/EWA valve fixing completed and collected 1valve for servicing 3.jpg",
            caption: "EWA valve fixing completed and collected 1valve for servicing 3",
        },


        {
            type: "image",
            src: "/assets/img/gallery_img/EWA valve fixing completed and collected 1valve for servicing.jpg",
            thumb: "/assets/img/gallery_img/EWA valve fixing completed and collected 1valve for servicing.jpg",
            caption: "EWA valve fixing completed and collected 1valve for servicing",
        },



        {
            type: "image",
            src: "/assets/img/gallery_img/GPTC Solar Project L&T 5GW.jpg",
            thumb: "/assets/img/gallery_img/GPTC Solar Project L&T 5GW.jpg",
            caption: "GPTC Solar Project L&T 5GW",
        },


        {
            type: "image",
            src: "/assets/img/gallery_img/ISO IMS External Recertification Audit (9001, 45001, 14001).jpeg",
            thumb: "/assets/img/gallery_img/ISO IMS External Recertification Audit (9001, 45001, 14001).jpeg",
            caption: "ISO IMS External Recertification Audit (9001, 45001, 14001)",
        },


        {
            type: "image",
            src: "/assets/img/gallery_img/PTD GM received awared from Alba in 2025, Bahrain.jpg",
            thumb: "/assets/img/gallery_img/PTD GM received awared from Alba in 2025, Bahrain.jpg",
            caption: "PTD GM received awared from Alba in 2025, Bahrain",
        },

        {
            type: "image",
            src: "/assets/img/gallery_img/Samtech visited Nomac Red sea team.jpg",
            thumb: "/assets/img/gallery_img/Samtech visited Nomac Red sea team.jpg",
            caption: "Samtech visited Nomac Red sea team",
        },


        {
            type: "image",
            src: "/assets/img/gallery_img/Top Recruiter 2025 to PTD by Naukri Gulf.jpg",
            thumb: "/assets/img/gallery_img/Top Recruiter 2025 to PTD by Naukri Gulf.jpg",
            caption: "Top Recruiter 2025 to PTD by Naukri Gulf.jpg",
        },


        {
            type: "image",
            src: "/assets/img/gallery_img/24 inch Gasline Valve replacement NOMAC 1.jpg",
            thumb: "/assets/img/gallery_img/24 inch Gasline Valve replacement NOMAC 1.jpg",
            caption: "24 inch Gasline Valve replacement NOMAC 1",
        },


        {
            type: "image",
            src: "/assets/img/gallery_img/24 inch Gasline Valve replacement NOMAC 2.jpg",
            thumb: "/assets/img/gallery_img/24 inch Gasline Valve replacement NOMAC 2.jpg",
            caption: "24 inch Gasline Valve replacement NOMAC 2",
        },

        {
            type: "image",
            src: "/assets/img/gallery_img/24 inch Gasline Valve replacement NOMAC 3.jpg",
            thumb: "/assets/img/gallery_img/24 inch Gasline Valve replacement NOMAC 3.jpg",
            caption: "24 inch Gasline Valve replacement NOMAC 3",
        },

        {
            type: "image",
            src: "/assets/img/gallery_img/24 inch Gasline Valve replacement NOMAC 4.jpg",
            thumb: "/assets/img/gallery_img/24 inch Gasline Valve replacement NOMAC 4.jpg",
            caption: "24 inch Gasline Valve replacement NOMAC 4",
        },
        {
            type: "image",
            src: "/assets/img/gallery_img/24 inch Gasline Valve replacement NOMAC 5.jpg",
            thumb: "/assets/img/gallery_img/24 inch Gasline Valve replacement NOMAC 5.jpg",
            caption: "24 inch Gasline Valve replacement NOMAC 5",
        },

        {
            type: "image",
            src: "/assets/img/gallery_img/24 inch Gasline Valve replacement NOMAC.jpg",
            thumb: "/assets/img/gallery_img/24 inch Gasline Valve replacement NOMAC.jpg",
            caption: "24 inch Gasline Valve replacement NOMAC",
        },

        {
            type: "image",
            src: "/assets/img/gallery_img/32 inch Actuator.jpg",
            thumb: "/assets/img/gallery_img/32 inch Actuator.jpg",
            caption: "32 inch Actuator.jpg",
        },

        {
            type: "image",
            src: "/assets/img/gallery_img/AI Training by IBM to CPDTI students 2025 Batch.jpg",
            thumb: "/assets/img/gallery_img/AI Training by IBM to CPDTI students 2025 Batch.jpg",
            caption: "AI Training by IBM to CPDTI students 2025 Batch",
        },

        {
            type: "image",
            src: "/assets/img/gallery_img/Condenser Rubber Tubing patch work for GE 2.jpg",
            thumb: "/assets/img/gallery_img/Condenser Rubber Tubing patch work for GE 2.jpg",
            caption: "Condenser Rubber Tubing patch work for GE 2",
        },
        {
            type: "image",
            src: "/assets/img/gallery_img/Condenser Rubber Tubing patch work for GE 3.jpg",
            thumb: "/assets/img/gallery_img/Condenser Rubber Tubing patch work for GE 3.jpg",
            caption: "Condenser Rubber Tubing patch work for GE 3",
        },
        {
            type: "image",
            src: "/assets/img/gallery_img/Condenser Rubber Tubing patch work for GE.jpg",
            thumb: "/assets/img/gallery_img/Condenser Rubber Tubing patch work for GE.jpg",
            caption: "Condenser Rubber Tubing patch work for GE",
        },
        {
            type: "image",
            src: "/assets/img/gallery_img/EWA valve fixing completed and collected 1valve for servicing 2.jpg",
            thumb: "/assets/img/gallery_img/EWA valve fixing completed and collected 1valve for servicing 2.jpg",
            caption: "EWA valve fixing completed and collected 1valve for servicing",
        },
        {
            type: "image",
            src: "/assets/img/gallery_img/site-visit-rabigh.jpeg",
            thumb: "/assets/img/gallery_img/site-visit-rabigh.jpeg",
            caption: "Site Visit Rabigh",
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
                                    <li><Link href={'/photo-gallery'}>Photo Gallery</Link></li>
                                </ul>
                                <h1>Photo Gallery</h1>
                                <p>There are many variations of passages available but the majority have suffered alteration in some form by injected humour randomised words which don&apos;t look even slightly believable. If you are going to use passage.

                                </p>
                                <Link href="/contact-us" className='mainbtn'>Contact Us</Link>
                            </div>
                        </div>
                        <div className='col-lg-5 offset-lg-1'>
                            <div className='hero-banner_img'>
                                <img className="img-1" src="/assets/img/gallery_img/01696864443.jpeg" alt="gallery" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='gallerySec'>
                <div className='container'>

                    <LightGallery
                        onInit={onInit}
                        speed={500}
                        plugins={[lgZoom, lgThumbnail]}
                    >
                        {items.map((item, i) => (

                            <a key={i}
                                href={item.src}
                                data-sub-html={`<h4>${item.caption}</h4>`}
                                data-poster={item.type === "video" ? item.thumb : undefined}
                            >
                                <img src={item.thumb} alt={item.caption} />
                                <div className='galleryhover'><h5>{item.caption}</h5></div>
                            </a>
                        ))}
                </LightGallery>


            </div>
        </section >
        </>
    )
}

export default GalleryPage;
