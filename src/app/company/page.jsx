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
                                  <li><Link href={'/company'}>Company</Link></li>
                              </ul>
                              <h1>Company</h1>
                              {/* <p className='fontSize16 fontWeight400 blackText_Clr mb_24'>{page.subTitle}</p> */}
                              <p className='fontSize16 fontWeight400 blackText_Clr mb_24'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus quod fugiat corrupti, aut accusamus, porro esse, corporis nisi qui excepturi nostrum in? Maxime maiores nostrum eius cumque velit architecto ullam.</p>
                              <button className='mainbtn'>Contact Us</button>
                          </div>
                      </div>
                      <div className='col-lg-5 offset-lg-1'>
                          <div className="hero-banner_img" >
                              <img src="/assets/img/gallery_img/01653488601.jpeg"
                                  alt="company" />


                          </div>
                      </div>
                  </div>
              </div>
          </section>


          <section className='companyHistory_sec'>
            <div className='container'>

                  <div className='companyHistoryGrid'>

                      <div> ISO 9001 CERTIFIED</div>

                      <div>

                          OPERATION & MAINTENANCE SERVICE PROVIDER
                      </div>

                      <div>
                          POWER PLANT SPECIALIST
                      </div>
                      <div>
                          15+ YEARS & COUNTING
                      </div>

                      <div>
                          200+ SATISFIED CUSTOMER
                      </div>
                      
                      <div>
                          500+ EMPLOYEES
                      </div>
                      <div>
                          ISO 45001 CERTIFIED
                      </div>
                      <div>PRESENT IN GCC & INDIA</div>
                </div>

                 


               

                 

            

               

             

                  
            </div>
          </section>
    </>
  )
}

export default page
