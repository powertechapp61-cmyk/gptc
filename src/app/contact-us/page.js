import Link from 'next/link';
import React from 'react'

const Page = () => {
    return (
        <>
            <section className='hero-banner mb_80'>
                <div className='container'>
                    <div className='row alignItem_center' >
                        <div className='col-lg-6'>
                            <div className='innerpage_bnrContent'>
                                <h1>Contact us</h1>
                                <p>There are many variations of passages available but the majority have suffered alteration in some form by injected humour randomised words which don&apos;t look even slightly believable. If you are going to use passage.

                                </p>
                               
                            </div>
                        </div>
                        <div className='col-lg-5 offset-lg-1'>
                            <div className='hero-banner_img'>
                                <img className="img-1" src="/assets/img/company-photo/sl3.jpg" alt="about us img" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* <section className='contactus_sec'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <div className='addressDetail'>
                                <h5>Company Locations and contacts worldwide</h5>
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className="accountCreationFrame">
                                <h2 className="ruinedSmoresText_clr fontSize18 fontWeight700 mb_8">
                                    Schedule Demo
                                </h2>
                                <p className="midnightSkyText_clr fontSize14 fontWeight400 mb_34">
                                    Request a demo by filling the form
                                </p>

                                <form>

                                    <div className='row'>
                                        <div className='col-lg-6'>
                                            <div className="mb_24">
                                                <input placeholder='First name'
                                                    type="text"
                                                    name="name"
                                                    className="mainInput"
                                                />
                                            </div>
                                        </div>
                                        <div className='col-lg-6'>
                                            <div className="mb_24">
                                                <input placeholder='Last name'
                                                    type="text"
                                                    name="name"
                                                    className="mainInput"
                                                />
                                            </div>
                                        </div>
                                    </div>


                                    <div className='row'>
                                        <div className='col-lg-6'>
                                            <div className="mb_24">
                                                <input placeholder='Company name'
                                                    type="text"
                                                    name="name"
                                                    className="mainInput"
                                                />
                                            </div>
                                        </div>
                                        <div className='col-lg-6'>
                                            <div className="mb_24">
                                                <input placeholder='Email Address'
                                                    type="text"
                                                    name="name"
                                                    className="mainInput"
                                                />
                                            </div>
                                        </div>
                                    </div>


                                    <div className='row'>
                                        <div className='col-lg-6'>
                                            <div className="mb_24">
                                                <input placeholder='Phone Number'
                                                    type="text"
                                                    name="name"
                                                    className="mainInput"
                                                />
                                            </div>
                                        </div>
                                        <div className='col-lg-6'>
                                            <div className="mb_24">
                                                <input placeholder='Job Title'
                                                    type="text"
                                                    name="name"
                                                    className="mainInput"
                                                />
                                            </div>
                                        </div>
                                    </div>


                                    <div className='row'>
                                        <div className='col-lg-6'>
                                            <div className="mb_24">
                                                <input placeholder='Country'
                                                    type="text"
                                                    name="name"
                                                    className="mainInput"
                                                />
                                            </div>
                                        </div>
                                        <div className='col-lg-6'>
                                            <div className="mb_24">
                                              
                                                <select className="mainInput">
                                            <option></option>
                                         </select>
                                            </div>
                                        </div>
                                    </div>


                                    <button style={{ width:"100%" }}
                                        type="submit"
                                        className="mainbtn"
                                    >
                                        Submit
                                    </button>
                                </form>
                            </div>

                        </div>
                    </div>

                </div>

            </section> */}

            <section className='leadsGeneration_sec'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <div className="site-heading">
                                <h2 className="site-title">
                                    How can we <span> help you ?</span>
                                </h2>
                                <p className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_24'>Let us know how we can help you with your existing or future projects, and one of our sales or support representatives will contact you shortly.</p>
                            </div>
                        </div>
                    </div>


                    <div className='leadsGen-wrapper'>
                        <div className='row'>
                            <div className='col-lg-6'>
                                <div className='leadsGen-img'>
                                    <img src="/assets/img/leadsGen_img.png" alt='lead gen' />
                                </div>
                            </div>
                            <div className='col-lg-6'>
                                <div className='leadGenFrame'>
                                    <h2 className='mb_24'>Connect with Sam Tech , by completing the form below</h2>
                                    <form>

                                        <div className='row'>
                                            <div className='col-lg-6'>
                                                <div className="mb_24">
                                                    <input placeholder='First name'
                                                        type="text"
                                                        name="name"
                                                        className="mainInput"
                                                    />
                                                </div>
                                            </div>
                                            <div className='col-lg-6'>
                                                <div className="mb_24">
                                                    <input placeholder='Last name'
                                                        type="text"
                                                        name="name"
                                                        className="mainInput"
                                                    />
                                                </div>
                                            </div>
                                        </div>


                                        <div className='row'>
                                            <div className='col-lg-6'>
                                                <div className="mb_24">
                                                    <input placeholder='Company name'
                                                        type="text"
                                                        name="name"
                                                        className="mainInput"
                                                    />
                                                </div>
                                            </div>
                                            <div className='col-lg-6'>
                                                <div className="mb_24">
                                                    <input placeholder='Email Address'
                                                        type="text"
                                                        name="name"
                                                        className="mainInput"
                                                    />
                                                </div>
                                            </div>
                                        </div>


                                        <div className='row'>
                                            <div className='col-lg-6'>
                                                <div className="mb_24">
                                                    <input placeholder='Phone Number'
                                                        type="text"
                                                        name="name"
                                                        className="mainInput"
                                                    />
                                                </div>
                                            </div>
                                            <div className='col-lg-6'>
                                                <div className="mb_24">
                                                    <input placeholder='Job Title'
                                                        type="text"
                                                        name="name"
                                                        className="mainInput"
                                                    />
                                                </div>
                                            </div>
                                        </div>


                                        <div className='row'>
                                            <div className='col-lg-6'>
                                                <div className="mb_24">
                                                    <input placeholder='Country'
                                                        type="text"
                                                        name="name"
                                                        className="mainInput"
                                                    />
                                                </div>
                                            </div>
                                            <div className='col-lg-6'>
                                                <div className="mb_24">

                                                    <select className="mainInput">
                                                        <option>Select Category</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>


                                        <button
                                            type="submit"
                                            className="mainbtn"
                                        >
                                            Submit
                                        </button>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>



            <section>
                <div className='container'>
                    {/* <div className='addressDetail'> */}
                        <div className='row'>

                            <div className='col-lg-6'>
                                <div className='addressItem'>
                                    <div>
                                        <h2>Bahrain Office</h2>
                                        <p>Sam Technical Service Contracting Est W.L.L</p>
                                    </div>


                                    <ul>
                                        <li>
                                            <img className='width24px ' src="/assets/img/gis_location-poi.svg" />
                                            <span>Building 1506, Road 4819, Block 948, Lhassay, Manama, Bahrain</span>
                                        </li>
                                        <li>
                                            <div className='width24px'>
                                            <img className='width20px blackFilter' src="/assets/img/phonetop_icon.svg" />
                                            </div>
                                            <span>
                                                <Link href="tel:97337164858">+973 3716 4858</Link> ,
                                                <Link href="tel:97377900018">+973 7790 0018</Link>
                                            </span>
                                        </li>
                                        <li>
                                        <img className='width24px blackFilter' src="/assets/img/ic_baseline-whatsapp.svg" alt='whatsapp' />

                                            <Link href="https://wa.me/97334010755" target="_blank">
                                                973 3401 0755
                                            </Link>
                                        </li>
                                        <li>
                                        <img className='width24px' src="/assets/img/mail_icon.svg" alt='mail' />

                                            <Link href={'mailto:gm@powertechdevelopment.com'}>
                                                gm@powertechdevelopment.com
                                            </Link>
                                        </li>
                                    </ul>

                                </div>
                            </div>

                            <div className='col-lg-6'>
                                <div className='addressItem'>
                                    <div>
                                        <h2> Saudi Arabia Office</h2>
                                        <p>Sam Technical Service Contracting</p>
                                    </div>


                                    <ul>
                                        <li>
                                            <img className='width24px' src="/assets/img/gis_location-poi.svg" />
                                            <span> Building No#9324, Street Mughttal Ibn Slnan Street, Al Naseem Dist, Rabigh Saudi Arabia</span>
                                        </li>
                                        <li>
                                            <div className='width24px'>
                                                <img className='blackFilter width20px' src="/assets/img/phonetop_icon.svg" />
                                            </div>
                                            <span>
                                                <Link href="tel:966507745097">+966 507745097</Link>
                                            </span>
                                        </li>
                                        <li>
                                        <img className='width24px blackFilter' src="/assets/img/ic_baseline-whatsapp.svg" alt='whatsapp' />

                                            <Link href="https://wa.me/966507745097" target="_blank">
                                                966 507745097
                                            </Link>
                                        </li>
                                        <li>
                                            <img className='width24px' src="/assets/img/mail_icon.svg" alt='mail' />

                                            <Link href={'mailto:samtech@powertechdevelopment.com'}>
                                                samtech@powertechdevelopment.com
                                            </Link>
                                        </li>
                                    </ul>

                                </div>
                            </div>

                            <div className='col-lg-6'>
                                <div className='addressItem'>
                                    <div>
                                        <h2>UAE Office</h2>
                                        <p>Global Power Tech Contracting</p>
                                    </div>


                                    <ul>
                                        <li>
                                            <img className='width24px' src="/assets/img/gis_location-poi.svg" />
                                            <span>WH.no2 Shabra A1 jurf industrial Area 2 Ajman UAE</span>
                                        </li>
                                        <li>
                                            <div className='width24px'>
                                            <img className='width20px blackFilter' src="/assets/img/phonetop_icon.svg" />
                                            </div>
                                            <span>
                                                <Link href="tel:971504712069">971504712069</Link>
                                            </span>
                                        </li>
                                        <li>
                                        <img className='width24px blackFilter' src="/assets/img/ic_baseline-whatsapp.svg" alt='whatsapp' />

                                            <Link href="https://wa.me/971504712069" target="_blank">
                                                971 50 471 2069
                                            </Link>
                                        </li>
                                        <li>
                                            <img className='width24px' src="/assets/img/mail_icon.svg" alt='mail' />

                                            <Link href={'mailto:global@powertechdevelopment.com'}>
                                                global@powertechdevelopment.com ,
                                            </Link>
                                        </li>
                                    </ul>

                                </div>
                            </div>

                            <div className='col-lg-6'>
                                <div className='addressItem'>
                                    <div>
                                        <h2>Chennai office</h2>
                                        <p>Power Tech Testing And Services</p>
                                    </div>


                                    <ul>
                                        <li>
                                            <img className='width24px' src="/assets/img/gis_location-poi.svg" />
                                            <span>40 A, Padavattamman Koil First Street, Padi, Chennai – 600050.</span>
                                        </li>
                                        <li>
                                            <div className='width24px'>
                                            <img className='width20px blackFilter' src="/assets/img/phonetop_icon.svg" />
                                            </div>
                                            <span>
                                                <Link href="tel:919498660803">+91 94986 60803</Link>
                                            </span>
                                        </li>
                                        <li>
                                        <img className='width24px blackFilter ' src="/assets/img/ic_baseline-whatsapp.svg" alt='whatsapp' />

                                            <Link href="https://wa.me/919498660803" target="_blank">
                                                +91 94986 60803
                                            </Link>
                                        </li>
                                        <li>
                                            <img className='width24px' src="/assets/img/mail_icon.svg" alt='mail' />

                                            <Link href={'mailto:enquiry@powertechtesting.com'}>
                                                enquiry@powertechtesting.com
                                            </Link>
                                        </li>
                                    </ul>

                                </div>
                            </div>

                        </div>
                    {/* </div> */}
                </div>
            </section>
        </>
    )
}

export default Page;
