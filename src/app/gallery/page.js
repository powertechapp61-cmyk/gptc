'use client';
import { useState } from 'react'

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
            // caption: "Sample Photo 1",
        },

        {
            type: "image",
            src: "/assets/img/gallery_img/01652965823.jpg",
            thumb: "/assets/img/gallery_img/01652965823.jpg",
            // caption: "Sample Photo 1",
        },

        {
            type: "image",
            src: "/assets/img/gallery_img/01652965841.jpg",
            thumb: "/assets/img/gallery_img/01652965841.jpg",
            // caption: "Sample Photo 1",
        },

        {
            type: "image",
            src: "/assets/img/gallery_img/01653046118.png",
            thumb: "/assets/img/gallery_img/01653046118.png",
            // caption: "Sample Photo 1",
        },


        {
            type: "image",
            src: "/assets/img/gallery_img/01653208757.jpeg",
            thumb: "/assets/img/gallery_img/01653208757.jpeg",
            // caption: "Sample Photo 1",
        },

        {
            type: "image",
            src: "/assets/img/gallery_img/01653488601.jpeg",
            thumb: "/assets/img/gallery_img/01653488601.jpeg",
            // caption: "Sample Photo 1",
        },

        {
            type: "image",
            src: "/assets/img/gallery_img/01653488832.jpg",
            thumb: "/assets/img/gallery_img/01653488832.jpg",
            // caption: "Sample Photo 1",
        },
        {
            type: "image",
            src: "/assets/img/gallery_img/01653914691.jpg",
            thumb: "/assets/img/gallery_img/01653914691.jpg",
            // caption: "Sample Photo 1",
        },
        {
            type: "image",
            src: "/assets/img/gallery_img/01653916847.jpg",
            thumb: "/assets/img/gallery_img/01653916847.jpg"
            // caption: "Sample Photo 1",
        },

        {
            type: "image",
            src: "/assets/img/gallery_img/01653921366.jpg",
            thumb: "/assets/img/gallery_img/01653921366.jpg"
            // caption: "Sample Photo 1",
        },

        {
            type: "image",
            src: "/assets/img/gallery_img/01656237658.jpeg",
            thumb: "/assets/img/gallery_img/01656237658.jpeg"
            // caption: "Sample Photo 1",
        },


        {
            type: "image",
            src: "/assets/img/gallery_img/01669019977.jpg",
            thumb: "/assets/img/gallery_img/01669019977.jpg"
            // caption: "Sample Photo 1",
        },

        {
            type: "image",
            src: "/assets/img/gallery_img/01671609843.jpg",
            thumb: "/assets/img/gallery_img/01671609843.jpg"
            // caption: "Sample Photo 1",
        },

        {
            type: "image",
            src: "/assets/img/gallery_img/01677246901.jpg",
            thumb: "/assets/img/gallery_img/01677246901.jpg"
            // caption: "Sample Photo 1",
        },


        {
            type: "image",
            src: "/assets/img/gallery_img/01678702720.jpeg",
            thumb: "/assets/img/gallery_img/01678702720.jpeg"
            // caption: "Sample Photo 1",
        },

        {
            type: "image",
            src: "/assets/img/gallery_img/01678702763.jpeg",
            thumb: "/assets/img/gallery_img/01678702763.jpeg"
            // caption: "Sample Photo 1",
        },




        {
            type: "image",
            src: "/assets/img/gallery_img/01678702813.jpeg",
            thumb: "/assets/img/gallery_img/01678702813.jpeg"
            // caption: "Sample Photo 1",
        },
        {
            type: "image",
            src: "/assets/img/gallery_img/01678702850.jpeg",
            thumb: "/assets/img/gallery_img/01678702850.jpeg"
            // caption: "Sample Photo 1",
        },


        {
            type: "image",
            src: "/assets/img/gallery_img/01695359593.jpg",
            thumb: "/assets/img/gallery_img/01695359593.jpg"
            // caption: "Sample Photo 1",
        },

        {
            type: "image",
            src: "/assets/img/gallery_img/01695359599.jpg",
            thumb: "/assets/img/gallery_img/01695359599.jpg"
            // caption: "Sample Photo 1",
        },


        {
            type: "image",
            src: "/assets/img/gallery_img/01696864148.jpeg",
            thumb: "/assets/img/gallery_img/01696864148.jpeg"
            // caption: "Sample Photo 1",
        },


        {
            type: "image",
            src: "/assets/img/gallery_img/01696864197.jpeg",
            thumb: "/assets/img/gallery_img/01696864197.jpeg"
            // caption: "Sample Photo 1",
        },

        {
            type: "image",
            src: "/assets/img/gallery_img/01696864248.jpeg",
            thumb: "/assets/img/gallery_img/01696864248.jpeg"
            // caption: "Sample Photo 1",
        },


        {
            type: "image",
            src: "/assets/img/gallery_img/01696864271.jpeg",
            thumb: "/assets/img/gallery_img/01696864271.jpeg"
            // caption: "Sample Photo 1",
        },


        {
            type: "image",
            src: "/assets/img/gallery_img/01696864443.jpeg",
            thumb: "/assets/img/gallery_img/01696864443.jpeg"
            // caption: "Sample Photo 1",
        },


        {
            type: "image",
            src: "/assets/img/gallery_img/01700033506.jpeg",
            thumb: "/assets/img/gallery_img/01700033506.jpeg"
            // caption: "Sample Photo 1",
        },


        {
            type: "image",
            src: "/assets/img/gallery_img/01727516371.jpeg",
            thumb: "/assets/img/gallery_img/01727516371.jpeg"
            // caption: "Sample Photo 1",
        },



        {
            type: "image",
            src: "/assets/img/gallery_img/01727516442.jpeg",
            thumb: "/assets/img/gallery_img/01727516442.jpeg"
            // caption: "Sample Photo 1",
        },


        {
            type: "image",
            src: "/assets/img/gallery_img/01727516978.jpeg",
            thumb: "/assets/img/gallery_img/01727516978.jpeg"
            // caption: "Sample Photo 1",
        },


        {
            type: "image",
            src: "/assets/img/gallery_img/01727517010.jpeg",
            thumb: "/assets/img/gallery_img/01727517010.jpeg"
            // caption: "Sample Photo 1",
        },

        {
            type: "image",
            src: "/assets/img/gallery_img/01727517284.jpeg",
            thumb: "/assets/img/gallery_img/01727517284.jpeg"
            // caption: "Sample Photo 1",
        },

        {
            type: "image",
            src: "/assets/img/gallery_img/01727517390.jpeg",
            thumb: "/assets/img/gallery_img/01727517390.jpeg"
            // caption: "Sample Photo 1",
        },

        {
            type: "image",
            src: "/assets/img/gallery_img/01727517800.jpeg",
            thumb: "/assets/img/gallery_img/01727517800.jpeg"
            // caption: "Sample Photo 1",
        },
        {
            type: "image",
            src: "/assets/img/gallery_img/01727518084.jpeg",
            thumb: "/assets/img/gallery_img/01727518084.jpeg"
            // caption: "Sample Photo 1",
        },
        {
            type: "image",
            src: "/assets/img/gallery_img/01727518484.jpeg",
            thumb: "/assets/img/gallery_img/01727518484.jpeg"
            // caption: "Sample Photo 1",
        },

        {
            type: "image",
            src: "/assets/img/gallery_img/01727528174.jpeg",
            thumb: "/assets/img/gallery_img/01727528174.jpeg"
            // caption: "Sample Photo 1",
        },

        {
            type: "image",
            src: "/assets/img/gallery_img/01727528235.jpeg",
            thumb: "/assets/img/gallery_img/01727528235.jpeg"
            // caption: "Sample Photo 1",
        },


        {
            type: "image",
            src: "/assets/img/gallery_img/01727528283.jpeg",
            thumb: "/assets/img/gallery_img/01727528283.jpeg"
            // caption: "Sample Photo 1",
        },

        {
            type: "image",
            src: "/assets/img/gallery_img/01727528309.jpeg",
            thumb: "/assets/img/gallery_img/01727528309.jpeg"
            // caption: "Sample Photo 1",
        },


        {
            type: "image",
            src: "/assets/img/gallery_img/01727528341.jpeg",
            thumb: "/assets/img/gallery_img/01727528341.jpeg"
            // caption: "Sample Photo 1",
        },

        {
            type: "image",
            src: "/assets/img/gallery_img/01727528390.jpeg",
            thumb: "/assets/img/gallery_img/01727528390.jpeg"
            // caption: "Sample Photo 1",
        },

        {
            type: "image",
            src: "/assets/img/gallery_img/01727528425.jpeg",
            thumb: "/assets/img/gallery_img/01727528425.jpeg"
            // caption: "Sample Photo 1",
        },

        {
            type: "image",
            src: "/assets/img/gallery_img/01727528489.jpeg",
            thumb: "/assets/img/gallery_img/01727528489.jpeg"
            // caption: "Sample Photo 1",
        },

        {
            type: "image",
            src: "/assets/img/gallery_img/01727779197.jpg",
            thumb: "/assets/img/gallery_img/01727779197.jpg"
            // caption: "Sample Photo 1",
        },


        {
            type: "image",
            src: "/assets/img/gallery_img/01729073316.jpeg",
            thumb: "/assets/img/gallery_img/01729073316.jpeg"
            // caption: "Sample Photo 1",
        },

        {
            type: "image",
            src: "/assets/img/gallery_img/01729073384.jpeg",
            thumb: "/assets/img/gallery_img/01729073384.jpeg"
            // caption: "Sample Photo 1",
        },
        {
            type: "image",
            src: "/assets/img/gallery_img/01748237710.jpeg",
            thumb: "/assets/img/gallery_img/01748237710.jpeg"
            // caption: "Sample Photo 1",
        },
        {
            type: "image",
            src: "/assets/img/gallery_img/01753081052.jpeg",
            thumb: "/assets/img/gallery_img/01753081052.jpeg"
            // caption: "Sample Photo 1",
        },

        {
            type: "image",
            src: "/assets/img/gallery_img/01753081065.jpeg",
            thumb: "/assets/img/gallery_img/01753081065.jpeg"
            // caption: "Sample Photo 1",
        },

        {
            type: "image",
            src: "/assets/img/gallery_img/01757575015.jpeg",
            thumb: "/assets/img/gallery_img/01757575015.jpeg"
            // caption: "Sample Photo 1",
        },
        {
            type: "image",
            src: "/assets/img/gallery_img/01757577763.jpeg",
            thumb: "/assets/img/gallery_img/01757577763.jpeg"
            // caption: "Sample Photo 1",
        },
        {
            type: "image",
            src: "/assets/img/gallery_img/01757587417.jpeg",
            thumb: "/assets/img/gallery_img/01757587417.jpeg"
            // caption: "Sample Photo 1",
        },

        {
            type: "image",
            src: "/assets/img/gallery_img/01757587654.jpeg",
            thumb: "/assets/img/gallery_img/01757587654.jpeg"
            // caption: "Sample Photo 1",
        },

        {
            type: "image",
            src: "/assets/img/gallery_img/01652964927.jpg",
            thumb: "/assets/img/gallery_img/01652964927.jpg"
            // caption: "Sample Photo 1",
        },

        {
            type: "image",
            src: "/assets/img/gallery_img/01652964974.jpg",
            thumb: "/assets/img/gallery_img/01652964974.jpg"
            // caption: "Sample Photo 1",
        },

        {
            type: "image",
            src: "/assets/img/gallery_img/01652965555.jpg",
            thumb: "/assets/img/gallery_img/01652965555.jpg"
            // caption: "Sample Photo 1",
        },

        {
            type: "image",
            src: "/assets/img/gallery_img/01652965589.jpg",
            thumb: "/assets/img/gallery_img/01652965589.jpg"
            // caption: "Sample Photo 1",
        },

        {
            type: "image",
            src: "/assets/img/gallery_img/01652965655.jpg",
            thumb: "/assets/img/gallery_img/01652965655.jpg"
            // caption: "Sample Photo 1",
        },

        {
            type: "image",
            src: "/assets/img/gallery_img/01652965744.jpg",
            thumb: "/assets/img/gallery_img/01652965744.jpg"
            // caption: "Sample Photo 1",
        },


        {
            type: "image",
            src: "/assets/img/gallery_img/01652965793.jpg",
            thumb: "/assets/img/gallery_img/01652965793.jpg"
            // caption: "Sample Photo 1",
        },
    ];

    return (
        <>
            <section className='hero-banner'>
                <div className='container'>
                    <div className='row alignItem_center' >
                        <div className='col-lg-6'>
                            <div className='innerpage_bnrContent'>
                                <h1>Gallery</h1>
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
                                <img
                                    src={item.thumb}
                                    alt={item.caption}
                                />
                            </a>
                        ))}
                    </LightGallery>


                </div>
            </section>
        </>
    )
}

export default GalleryPage;
