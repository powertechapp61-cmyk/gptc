import React from 'react'

const page = () => {
    return (
        <>
            <section className='hero-banner'>
                <div className='container'>
                    <div className='row alignItem_center' >
                        <div className='col-lg-6'>
                            <div className='innerpage_bnrContent'>
                                <h1>Brochures</h1>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

                            </div>
                        </div>
                        <div className='col-lg-5 offset-lg-1'>
                            <div className='hero-banner_img'>
                                <img className="img-1" src="/assets/img/trainings/recognised_by governer_of_india.jpg" alt="about us img" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='brochure_sec'>
                <div className="container">
                    <div className='brochureframe'>
                        <h5 className='fontSize20 fontWeight600 blackText_Clr mb_24'>Download Brochures</h5>
                    <div className='row'>
                        <div className='col-lg-3'>
                            <div className='brochure_item'>
                                <div>
                                    <img src="/assets/img/pdf-download.svg" alt="pdf download" />
                                </div>
                                <div>
                                    <h5>Mechanical Maintenance</h5>
                                </div>
                               


                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div className='brochure_item'>
                                <div>
                                    <img src="/assets/img/pdf-download.svg" alt="pdf download" />
                                </div>
                                <div>
                                    <h5>Electrical Maintenance</h5>
                                </div>
                               



                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div className='brochure_item'>
                                <div>
                                    <img src="/assets/img/pdf-download.svg" alt="pdf download" />
                                </div>
                                <div>  <h5>Fabrication</h5></div>
                              



                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div className='brochure_item'>
                                <div>
                                    <img src="/assets/img/pdf-download.svg" alt="pdf download" />
                                </div>
                                <div><h5>Valve Testing</h5></div>
                               


                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div className='brochure_item'>
                                <div>
                                    <img src="/assets/img/pdf-download.svg" alt="pdf download" />
                                </div>
                                <div> <h5>Manpower</h5></div>


                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div className='brochure_item'>
                                <div>
                                    <img src="/assets/img/pdf-download.svg" alt="pdf download" />
                                </div>
                                <div><h5>Powerplant O & M</h5></div>


                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default page
