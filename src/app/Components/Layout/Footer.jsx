'use client';
import Link from 'next/link';

const Footer = () => {


  // const items = [
  //   {
  //     type: "image",
  //     src: "/assets/img/gallery_img/01652965804.jpg",
  //     thumb: "/assets/img/gallery_img/01652965804.jpg",
  //     // caption: "Sample Photo 1",
  //   },

  //   {
  //     type: "image",
  //     src: "/assets/img/gallery_img/01652965823.jpg",
  //     thumb: "/assets/img/gallery_img/01652965823.jpg",
  //     // caption: "Sample Photo 1",
  //   },

  //   {
  //     type: "image",
  //     src: "/assets/img/gallery_img/01652965841.jpg",
  //     thumb: "/assets/img/gallery_img/01652965841.jpg",
  //     // caption: "Sample Photo 1",
  //   },

  //   {
  //     type: "image",
  //     src: "/assets/img/gallery_img/01653046118.png",
  //     thumb: "/assets/img/gallery_img/01653046118.png",
  //     // caption: "Sample Photo 1",
  //   },


  //   {
  //     type: "image",
  //     src: "/assets/img/gallery_img/01653208757.jpeg",
  //     thumb: "/assets/img/gallery_img/01653208757.jpeg",
  //     // caption: "Sample Photo 1",
  //   },

  //   {
  //     type: "image",
  //     src: "/assets/img/gallery_img/01653488601.jpeg",
  //     thumb: "/assets/img/gallery_img/01653488601.jpeg",
  //     // caption: "Sample Photo 1",
  //   },
  // ];
  return (
    <>

      {/* <div className="topFooter">
        <div className="container"> 
        <ul>
            <li>
             <span>Brochure</span>
              </li>
            <li>
           <img src="/assets/img/pdf-download.svg" alt="pdf download" />
              <span>Mechanical Maintenance</span>
              </li>
            <li>
             <img src="/assets/img/pdf-download.svg" alt="pdf download" />
             <span>Electrical Maintenance</span>
              </li>
            <li>
             <img src="/assets/img/pdf-download.svg" alt="pdf download" />
              <span>Fabrication</span>
              </li>
            <li>
             <img src="/assets/img/pdf-download.svg" alt="pdf download" />
              <span>Valve Testing</span>
              </li>
            <li>
              <img src="/assets/img/pdf-download.svg" alt="pdf download" />
              <span>Manpower</span>
            </li>
            <li>
              <img src="/assets/img/pdf-download.svg" alt="pdf download" />
              <span>Powerplant O & M</span>
            </li>
        </ul>
        </div>
    </div> */}
      <footer>
        <div className="container">
          <div className='row mb_40'>
            <div className='col-lg-4 mobspaceMb_24'>
              <h2>About Us</h2>
              <p className='fontSize16 fontWeight400 whiteText_Clr mb_24'>GLOBAL POWER TECH an ISO 9001 and ISO 45001 company is Unique in Indian sub-continent and GCC countries, as ONE-STOP-SHOP for total power plant services in the areas of Repairs & Retrofits, EPC contracts.</p>


            </div>
            <div className='col-lg-2 mobspaceMb_24'>
              <h2>Quick Links</h2>


              <ul className='quicklinks'>
                <li>
                  <Link href={"/"} prefetch>
                    <img className='whiteFilter' src="/assets/img/stepPoint.svg" alt='step point' />
                    <span>Home</span>
                    
                  </Link>
                </li>
                <li>
                  <Link href={"/about-us"} prefetch>
                    <img className='whiteFilter' src="/assets/img/stepPoint.svg" alt='step point' />
                    <span>About Us</span>
                  </Link>
                </li>
                <li>
                  <Link href={"/group-companies"} prefetch>
                    <img className='whiteFilter' src="/assets/img/stepPoint.svg" alt='step point' />
                    <span>Group Companies</span>

                  </Link>
                </li>
                <li>
                  <Link href={"/appreciations"} prefetch>
                    <img className='whiteFilter' src="/assets/img/stepPoint.svg" alt='step point' />
                    <span>Appreciations</span>

                  </Link>
                </li>
              
                <li>
                  <Link href={'/photo-gallery'} prefetch>
                    <img className='whiteFilter' src="/assets/img/stepPoint.svg" alt='step point' />
                    <span> Photo Gallery</span>

                  </Link>
                </li>
                <li>
                  <Link href={'/our-branches'} prefetch>
                    <img className='whiteFilter' src="/assets/img/stepPoint.svg" alt='step point' />
                    <span>Our Branches</span>

                  </Link>
                </li>
                <li>
                  <Link href={'/trainings'} prefetch>
                    <img className='whiteFilter' src="/assets/img/stepPoint.svg" alt='step point' />
                    <span>Trainings</span>

                  </Link>
                </li>
                <li>
                  <Link href={'/careers'} prefetch>
                    <img className='whiteFilter' src="/assets/img/stepPoint.svg" alt='step point' />
                    <span>Careers</span>

                  </Link>
                </li>
                <li>
                  <Link href={"/contact-us"} prefetch>
                    <img className='whiteFilter' src="/assets/img/stepPoint.svg" alt='step point' />
                    <span> Contact Us</span>

                  </Link>
                </li>



              </ul>
            </div>

            <div className='col-lg-2 mobspaceMb_24'>
              <h2>Quick Code</h2>

              <div className='qrCodeLink'>
                <img src="/assets/img/qrcode.png" alt="qrcode" />
              </div>

            </div>
            <div className='col-lg-4'>
              <h2>Location</h2>

              <iframe height="300" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15742.951351187497!2d77.55047730000001!3d9.444372999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1763365346692!5m2!1sen!2sin" style={{
                border: 0, width: "100%"
              }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              {/* <Link target='_blank' className='whiteText_Clr textDecoration_none  fontWeight400 fontSize16' href="https://maps.app.goo.gl/ECLS7hB7t8YHagqh8">
                <div className='displayInlineFlex gap16 mb_24'>
                <div>
                    <img className='width20px' src="/assets/img/gis_location-poi.svg" alt="location" />
                </div>

                <div>
                
                  <p className='whiteText_Clr fontWeight400 fontSize16 mb_8'>Building No#9324, Street Mughttal</p>
                  <p className='whiteText_Clr fontWeight400 fontSize16 mb_8'>Ibn Slnan Street, AL Naseem Dist,</p>
                  <p className='whiteText_Clr fontWeight400 fontSize16'>Rabigh - Saudi Arabia</p>
                </div>
              </div>
              </Link> */}

              {/* <div className='displayInlineFlex gap16 mb_24'>
                <div>
                  <img className='blackFilter width18px' src="/assets/img/phonetop_icon.svg" alt="phone" />
                </div>

                <div>
                  <ul className='emptyList'>
                    <li className='mb_8 whiteText_Clr fontWeight400 fontSize16'>India :&nbsp;
                      <Link className='whiteText_Clr textDecoration_none  fontWeight400 fontSize16' href="tel:+919498660803">+919498660803</Link></li>
                    <li className='mb_8 whiteText_Clr fontWeight400 fontSize16'>Bahrain :&nbsp;
                      <Link className='whiteText_Clr textDecoration_none fontWeight400 fontSize16' href="tel:+97366622536">+97366622536</Link></li>
                    <li className='mb_8 whiteText_Clr fontWeight400 fontSize16'>UAE :&nbsp;
                      <Link className='whiteText_Clr textDecoration_none fontWeight400 fontSize16' href="tel:+971504712069">+971504712069</Link></li>
                    <li className='mb_8 whiteText_Clr fontWeight400 fontSize16'>Saudi :&nbsp;
                      <Link className='whiteText_Clr textDecoration_none fontWeight400 fontSize16' href="tel:+966507745097">+966507745097</Link></li>
                  </ul>

                </div>
              </div> */}

            </div>
            {/* <div className='col-lg-3'>
              <h2>Gallery</h2>
              <div className='lightGalleryFooter mb_24'>
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
              <Link className='fontSize16 fontWeight400 bainganiText_Clr' href="/gallery">View More</Link>
            </div> */}

          </div>

          <div className='copyRightsec'>
            <p className='whiteText_Clr  fontWeight400 fontSize14 textalign_center'>Copyright ©  <Link href={"/"} prefetch>GLOBAL POWER TECH</Link> {new Date().getFullYear()}. All rights reserved.</p>
          </div>
        </div>
      </footer>




    </>
  );
}

export default Footer;
