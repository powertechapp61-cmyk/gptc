import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <>
            <section className='hero-banner'>
                <div className="container height100per">
                    <div className='row alignItem_center height100per' >
                        <div className='col-lg-6'>
                            <div className='innerpage_bnrContent'>
                                <ul className='page_breadcrumb'>
                                    <li><Link href={"/"}> Home</Link></li>
                                    <li><img src="/assets/img/rightIcon.svg" alt='right icon' /> </li>
                                    <li> About Us</li>
                                    <li><img src="/assets/img/rightIcon.svg" alt='right icon' /> </li>
                                    <li><Link href={'/group-companies'}>Group companies</Link></li>
                                </ul>
                                <h1>Group companies</h1>
                                {/* <p className='fontSize16 fontWeight400 blackText_Clr mb_24'>{page.subTitle}</p> */}
                                <p className='fontSize16 fontWeight400 blackText_Clr mb_24'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus quod fugiat corrupti, aut accusamus, porro esse, corporis nisi qui excepturi nostrum in? Maxime maiores nostrum eius cumque velit architecto ullam.</p>
                                <Link href="/contact-us" className='mainbtn'>Contact Us</Link>
                            </div>
                        </div>
                        <div className='col-lg-5 offset-lg-1'>
                            <div className="hero-banner_img" >
                                <img src="/assets/img/company-photo/sl5.jpg"
                                    alt="company" />


                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='groupcompanies_sec'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-4'>
                            <div className='groupCompanyItem'>
                                <div>
                                    <div className='groupCompanylogo'>
                                        <img src="/assets/img/ptd.png" alt='ptd' />
                                    </div>

                                    <h2> Sam Technical Service Contracting Est W.L.L, Bahrain</h2>
                                    <p> Operation & Maintenance of Power & Water, oil & Gas Plants & EPC Contractors & Human Resource Providers</p>

                                </div>

                                <div className='displayFlex alignItem_center justifyContent_spacebetween'>
                                    <div className='displayInlineFlex alignItem_center gap12'>
                                        <div>

                                            <Link href="https://wa.me/97334010755" target="_blank">
                                                <img className='width34px' src="/assets/img/whatsappIcon.svg" alt='whatsapp' />

                                            </Link>
                                        </div>
                                        <div>      <Link href={'mailto:gm@powertechdevelopment.com'}>
                                            <img className='width34px' src="/assets/img/mail_icon.svg" alt='mail' />
                                        </Link></div>

                                    </div>
                                    <div>
                                        <Link href="#">
                                            <img className='width34px' src="/assets/img/link.svg" alt='link' />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='col-lg-4'>
                            <div className='groupCompanyItem'>
                                <div>
                                    <div className='groupCompanylogo'>
                                        <img src="/assets/img/gptc.png" alt='gptc' />
                                    </div>

                                    <h2> Global Power Tech Testing & Contracting L.L.C, UAE</h2>
                                    <p> Power & Water, Solar Plants, EPC Contractors, Electrical HT Cable Pulling / Transformer & Switchgear Erection, Trevi Test, Valve Servicing, Hot Tapping, Heat Exchanger Maintenance & Supply, Electrical testing of Cable & Transformer</p>
                                </div>
                                <div className='displayFlex alignItem_center justifyContent_spacebetween'>
                                    <div className='displayInlineFlex alignItem_center gap12'>
                                        <div>

                                            <Link href="https://wa.me/971504712069" target="_blank">
                                                <img className='width34px' src="/assets/img/whatsappIcon.svg" alt='whatsapp' />

                                            </Link>
                                        </div>
                                        <div>      <Link href={'mailto:global@powertechdevelopment.com'}>
                                            <img className='width34px' src="/assets/img/mail_icon.svg" alt='mail' />
                                        </Link></div>

                                    </div>
                                    <div>
                                        <Link href="#">
                                            <img className='width34px' src="/assets/img/link.svg" alt='link' />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>



                    <div className='col-lg-4'>
                        <div className='groupCompanyItem'>
                            <div>
                                <div className='groupCompanylogo'>
                                        <img src="/assets/img/stsc.png" alt='stsc' />
                                </div>

                                <h2> SAM Technical Service Contracting Est, Saudi Arabia</h2>
                                <p>  Operation& Maintenanceof Power &Water,oil &Gas Plants &EPC Contractors & Human Resource Providers, Trevi testing & all types of valves & actuators servicing, online leak sealing, Heat Exchanger Maintenance & Supply, Hot Tapping</p>
                            </div>
                            <div className='displayFlex alignItem_center justifyContent_spacebetween'>
                                <div className='displayInlineFlex alignItem_center gap12'>
                                    <div>

                                        <Link href="https://wa.me/966507745097" target="_blank">
                                            <img className='width34px' src="/assets/img/whatsappIcon.svg" alt='whatsapp' />

                                        </Link>
                                    </div>
                                    <div>      <Link href={'mailto:samtech@powertechdevelopment.com'}>
                                        <img className='width34px' src="/assets/img/mail_icon.svg" alt='mail' />
                                    </Link></div>

                                </div>
                                <div>
                                    <Link href="#">
                                        <img className='width34px' src="/assets/img/link.svg" alt='link' />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>




                <div className='col-lg-4'>
                    <div className='groupCompanyItem'>
                        <div>
                            <div className='groupCompanylogo'>
                                        <img src="/assets/img/cpdti.png" alt='cpdti' />
                            </div>

                            <h2>Chennai Power & Desalination Training Institute, India</h2>
                            <p>O&M Trainingforfreshgraduatesanddiploma holders, 210/600W Thermal Simulator Training, EHS training & 100% in house placements</p>
                        </div>
                        <div className='displayFlex alignItem_center justifyContent_spacebetween'>
                            <div className='displayInlineFlex alignItem_center gap12'>
                                <div>

                                    <Link href="https://wa.me/919750172525" target="_blank">
                                        <img className='width34px' src="/assets/img/whatsappIcon.svg" alt='whatsapp' />

                                    </Link>
                                </div>
                                <div>      <Link href={'mailto:chennai.power.padi@gmail.com'}>
                                    <img className='width34px' src="/assets/img/mail_icon.svg" alt='mail' />
                                </Link></div>

                            </div>
                            <div>
                                <Link href="#">
                                    <img className='width34px' src="/assets/img/link.svg" alt='link' />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>




                <div className='col-lg-4'>
                    <div className='groupCompanyItem'>
                        <div>
                            <div className='groupCompanylogo'>
                                        <img src="/assets/img/pemi_logo.jpg" alt='pemi_logo' />
                            </div>

                            <h2>POWERTECH ELECTRO MECHANICAL INDUSTRIES Pvt.(Ltd)</h2>
                            <p>Solar EPC & Maintenance, RO Plants, Import & Export of Scrap / Aluminium / UPVC Profiles, and Dismantling of Power & Industrial Plants.</p>
                        </div>
                        <div className='displayFlex alignItem_center justifyContent_spacebetween'>
                            <div className='displayInlineFlex alignItem_center gap12'>
                                <div>

                                    <Link href="https://wa.me/917092255005" target="_blank">
                                        <img className='width34px' src="/assets/img/whatsappIcon.svg" alt='whatsapp' />

                                    </Link>
                                </div>
                                <div>      <Link href={'mailto:enquiry@pemiindia.com'}>
                                    <img className='width34px' src="/assets/img/mail_icon.svg" alt='mail' />
                                </Link></div>

                            </div>
                            <div>
                                <Link href="#">
                                    <img className='width34px' src="/assets/img/link.svg" alt='link' />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='col-lg-4'>
                    <div className='groupCompanyItem'>
                        <div>
                            <div className='groupCompanylogo'>
                                        <img src="/assets/img/ib-badooda.png" alt='ib-badooda' />
                            </div>

                            <h2>IBN Badooda Electro Mechanical Workshop, Bahrain</h2>
                            <p>UPVC and Aluminium Doors and Windows Fabrication</p>
                        </div>
                        <div className='displayFlex alignItem_center justifyContent_spacebetween'>
                            <div className='displayInlineFlex alignItem_center gap12'>
                                <div>

                                    <Link href="https://wa.me/97334010755" target="_blank">
                                        <img className='width34px' src="/assets/img/whatsappIcon.svg" alt='whatsapp' />

                                    </Link>
                                </div>
                                <div>      <Link href={'mailto:gm@powertechdevelopment.com.com'}>
                                    <img className='width34px' src="/assets/img/mail_icon.svg" alt='mail' />
                                </Link></div>

                            </div>
                            <div>
                                <Link href="#">
                                    <img className='width34px' src="/assets/img/link.svg" alt='link' />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='col-lg-4'>
                    <div className='groupCompanyItem'>
                        <div>
                            <div className='groupCompanylogo'>
                                        <img src="/assets/img/ptintl.png" alt='ptintl' />
                            </div>

                            <h2>Power Tech International, India</h2>
                            <p>A Premier Government approved placement agency L NO : B-1192/CHEN/PER/100/5/9405/2018</p>
                        </div>
                        <div className='displayFlex alignItem_center justifyContent_spacebetween'>
                            <div className='displayInlineFlex alignItem_center gap12'>
                                <div>

                                    <Link href="https://wa.me/919498660799" target="_blank">
                                        <img className='width34px' src="/assets/img/whatsappIcon.svg" alt='whatsapp' />

                                    </Link>
                                </div>
                                <div>      <Link href={'mailto:hrptg@ptijobs.in'}>
                                    <img className='width34px' src="/assets/img/mail_icon.svg" alt='mail' />
                                </Link></div>

                            </div>
                            <div>
                                <Link href="#">
                                    <img className='width34px' src="/assets/img/link.svg" alt='link' />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>




                <div className='col-lg-4'>
                    <div className='groupCompanyItem'>
                        <div>
                            <div className='groupCompanylogo'>
                                        <img src="/assets/img/vtts.png" alt='vtts' />
                            </div>

                            <h2> Valve Tech Testing & Services, Bahrain</h2>
                            <p>Online/Offline Safety valve Testing & Calibration & servicing of all types of valves & actuators & Hot Tapping, Heat Exchanger Maintenance & Supply</p>
                        </div>
                        <div className='displayFlex alignItem_center justifyContent_spacebetween'>
                            <div className='displayInlineFlex alignItem_center gap12'>
                                <div>

                                    <Link href="https://wa.me/97334010755" target="_blank">
                                        <img className='width34px' src="/assets/img/whatsappIcon.svg" alt='whatsapp' />

                                    </Link>
                                </div>
                                <div>      <Link href={'mailto:enquiry@powertechtesting.com'}>
                                    <img className='width34px' src="/assets/img/mail_icon.svg" alt='mail' />
                                </Link></div>

                            </div>
                            <div>
                                <Link href="#">
                                    <img className='width34px' src="/assets/img/link.svg" alt='link' />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='col-lg-4'>
                    <div className='groupCompanyItem'>
                        <div>
                            <div className='groupCompanylogo'>
                                        <img src="/assets/img/ptts.png" alt='ptts' />
                            </div>

                            <h2>Power Tech Testing & Services, India</h2>
                            <p>Online/Offline Safety valve Testing & Calibration, servicing of all types of valves & actuators, Hot Tapping, Heat Exchanger Maintenance & Supply</p>
                        </div>
                        <div className='displayFlex alignItem_center justifyContent_spacebetween'>
                            <div className='displayInlineFlex alignItem_center gap12'>
                                <div>

                                    <Link href="https://wa.me/919498660803" target="_blank">
                                        <img className='width34px' src="/assets/img/whatsappIcon.svg" alt='whatsapp' />

                                    </Link>
                                </div>
                                <div>      <Link href={'mailto:valvetests@gmail.com'}>
                                    <img className='width34px' src="/assets/img/mail_icon.svg" alt='mail' />
                                </Link></div>

                            </div>
                            <div>
                                <Link href="#">
                                    <img className='width34px' src="/assets/img/link.svg" alt='link' />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>



                <div className='col-lg-4'>
                    <div className='groupCompanyItem'>
                        <div>
                        <div>
                            <div className='groupCompanylogo'>
                                            <img src="/assets/img/sams_logo.jpg" alt='sams' />
                            </div>
                        </div>

                        <h2> SAMS Building Contracting L.L.C</h2>
                        <p>Turn Key Construction of Buildings, Interior works like UPVC, Aluminium Doors & Windows, MEP Works & STP</p>
                      </div>
                        <div className='displayFlex alignItem_center justifyContent_spacebetween'>
                            <div className='displayInlineFlex alignItem_center gap12'>
                                <div>

                                    <Link href="https://wa.me/971504712069" target="_blank">
                                        <img className='width34px' src="/assets/img/whatsappIcon.svg" alt='whatsapp' />

                                    </Link>
                                </div>
                                <div>      <Link href={'mailto:global@powertechdevelopment.com'}>
                                    <img className='width34px' src="/assets/img/mail_icon.svg" alt='mail' />
                                </Link></div>

                            </div>
                            <div>
                                <Link href="#">
                                    <img className='width34px' src="/assets/img/link.svg" alt='link' />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>



                <div className='col-lg-4'>
                    <div className='groupCompanyItem'>
                        <div>
                            <div className='groupCompanylogo'>
                                        <img src="/assets/img/q-power.png" alt='Q-Power Tech Mechanical Contracting' />
                            </div>

                            <h2>Q-Power Tech Mechanical Contracting, Qatar</h2>
                            <p> Operation & Maintenance of Power & Water, oil & Gas Plants & EPC Contractors & Human Resource Providers, Online testing & calibration of valves & actuators, Valve Servicing, Hot Tapping, Heat Exchanger Maintenance & Supply</p>
                        </div>
                        <div className='displayFlex alignItem_center justifyContent_spacebetween'>
                            <div className='displayInlineFlex alignItem_center gap12'>
                                <div>

                                    <Link href="https://wa.me/971504712069" target="_blank">
                                        <img className='width34px' src="/assets/img/whatsappIcon.svg" alt='whatsapp' />

                                    </Link>
                                </div>
                                <div>      <Link href={'mailto:gm@qpowertech.com'}>
                                    <img className='width34px' src="/assets/img/mail_icon.svg" alt='mail' />
                                </Link></div>

                            </div>
                            <div>
                                <Link href="#">
                                    <img className='width34px' src="/assets/img/link.svg" alt='link' />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>



                <div className='col-lg-4'>
                    <div className='groupCompanyItem'>
                        <div>
                            <div className='groupCompanylogo'>
                                        <img src="/assets/img/knowledge_city.png" alt='knowledge_city' />
                            </div>

                            <h2> Knowledge City, India</h2>
                            <p> Social arm of Power Tech Group of Companies for EDUCATIONAL EXCELLENCE & EMPOWERMENT. A Skill Development & Placement Centre</p>
                           </div>
                            <div className='displayFlex alignItem_center justifyContent_spacebetween'>
                                <div className='displayInlineFlex alignItem_center gap12'>
                                    <div>

                                        <Link href="https://wa.me/919629607322" target="_blank">
                                            <img className='width34px' src="/assets/img/whatsappIcon.svg" alt='whatsapp' />

                                        </Link>
                                    </div>
                                    <div>      <Link href={'mailto:head.knowledgecity@gmail.com'}>
                                        <img className='width34px' src="/assets/img/mail_icon.svg" alt='mail' />
                                    </Link></div>

                                </div>
                                <div>
                                    <Link href="#">
                                        <img className='width34px' src="/assets/img/link.svg" alt='link' />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </section >
        </>
    )
}

export default page
