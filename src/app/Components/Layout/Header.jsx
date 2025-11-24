"use client";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import { Dropdown } from "react-bootstrap";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleClick = (event) => {
    setIsActive((current) => !current);
  };

  const [searchText, setSearchText] = useState("");

  const parentClasses = `
  search-popup 
  ${isOpen ? "opened" : ""} 
  ${searchText.length > 0 ? "showDropdown" : ""}
`.trim();
  const handleSearchClick = (e) => {
    setIsOpen((current) => !current);
    console.log('clicked');
  }
  useEffect(() => {
    const body = document.body;
    if (isOpen) {
      body.classList.add("search-popup-active");
    } else {
      body.classList.remove("search-popup-active");
    }

    // Cleanup if component unmounts
    return () => body.classList.remove("search-popup-active");
  }, [isOpen]);
  const dropdownRef = useRef();


  // const handleMenuClose = () => {
  //   dropdownRef.current?.click();
  //   handleToggleClick();
  //   setIsActive(false);
  // };

  return (

    <div className="sticky-top">
      <div className="topHeader">
        <div className="container">
          <div>
            <div className="displayFlex alignItem_center gap30">
              <div>
                <select className="langSelect">
                  <option value="en">English</option>
                  <option value="ar">Arabic</option>
                  <option value="hi">Hindi</option>
                </select>
              </div>
              <div>
                <Dropdown className="phnoSelect">
                  <Dropdown.Toggle variant="success" id="dropdown-basic">

                    <div className="displayInlineFlex alignItem_center gap12">
                      <div>
                        <img src="/assets/img/phonetop_icon.svg" alt="phone" />
                      </div>
                      <div>
                        UAE :&nbsp;
                      <Link href="tel:+971504712069">+971504712069</Link>

                      
                      </div> 
                    </div>
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="/service-page/online_safety_testing"> Bahrain :&nbsp;
                      <Link href="tel:+97366622536">+97366622536</Link></Dropdown.Item>
                    <Dropdown.Item href="/service-page/offline_valve_testing">
  Saudi :&nbsp;
                        <Link href="tel:+966507745097">+966507745097</Link>
                    </Dropdown.Item>
                   

                    <Dropdown.Item href="/service-page/offline_valve_testing">
                      India :&nbsp;
                      <Link href="tel:+919498660803">+919498660803</Link></Dropdown.Item>


                  </Dropdown.Menu>
                </Dropdown>
              </div>


            </div>
            {/* <div className="displayFlex alignItem_center gap30"> */}
           
            <div>
              <ul className="socialMediaLink">
               <li>
                  <button className="circleIconbtn" onClick={handleSearchClick}>
                    <img className="whiteFilter" src="/assets/img/tabler_search.svg" alt="search" />
                  </button>
               </li>
                <li>
                  <Link href="https://wa.me/966507745097" target="_blank">
                    <img style={{width:'24px'}} src="/assets/img/ic_baseline-whatsapp.svg" alt="whatsapp" />
                  </Link>
                </li>
                <li>
                  <Link href="https://www.facebook.com/people/Power-Tech-Group-Companies/61558411207892/" target="_blank">
                    <img src="/assets/img/icons_facebook.svg" alt="fb" />
                  </Link>
                </li>
                <li>
                  <Link href="https://www.instagram.com/cpdti.chennai/" target="_blank">
                    <img src="/assets/img/icons_instagram.svg" alt="insta" />
                  </Link>
                </li>
                <li>
                  <Link href="https://www.linkedin.com/company/powertechdevelopment/" target="_blank">
                    <img src="/assets/img/icons_linkedin.svg" alt="linkedin" />
                  </Link>
                </li>

                <li>
                  <Link href="https://x.com/powertechgroup" target="_blank">
                    <img src="/assets/img/x-twitter.svg" alt="twitter" />
                  </Link>
                </li>
                <li>
                  <Link href="https://www.youtube.com/@chennaipowerdesalinationtr3180" target="_blank">
                    <img src="/assets/img/youtube_icon.svg" alt="youtube" />
                  </Link>
                </li>


              </ul>
            </div>
            </div>
          {
            isOpen && (
              <div className={parentClasses}>
                <form action="#" onSubmit={(e) => e.preventDefault()}>
                  <div className="form-group">
                    <input type="search" name="search-field" placeholder="Search Here..." value={searchText}
                      onChange={(e) => setSearchText(e.target.value)} onFocus={() => setIsOpen(true)} required="" />
                    <button type="submit" onClick={() => setIsOpen(false)}>
                      <img src="/assets/img/ic_round-close.svg" alt="close" />
                    </button>
                  </div>
                </form>

                {/* Dropdown: only show when user types */}
                {searchText.length > 0 && (
                <div className="searchDropdown">
                  <ul>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. </li>
                    <li>Commodi ducimus doloremque perferendis aut amet hic, modi pariatur! Animi, officiis natus, neque repellat laboriosam repellendus perferendis cupiditate cumque, reiciendis eum ad.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                  </ul>
                </div>
                )}
              </div>
            )
          }
        </div>

      </div>

      <header>
        <div className="container">
          <nav>
            <div className="mobileHeader">
              <div className="brandlogo">
                <Link href={"/"} prefetch>
                  <img
                    src="/assets/img/gptc_full.png"
                    alt="Logo"
                  />
                </Link>
              </div>

              <div className="mobileToggle">
                <button className="emptyBtn" onClick={handleToggleClick}>
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
              </div>
            </div>
            <div
              className={isActive ? " navbarCollapse show" : "navbarCollapse"}
            >
              <div className="margin_auto">
                <ul>
                  <li>
                    <Link href={"/"} prefetch>
                      Home
                    </Link>
                  </li>
                  <li>
                    {/* <Link href={"/about-us"} prefetch>
                      About Us
                    </Link> */}



                    <Dropdown>
                      <Dropdown.Toggle id="dropdown-basic">
                        Company
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item href={'/company'}>About Us </Dropdown.Item>
                        <Dropdown.Item href={'/leadership-team'}>Leadership team</Dropdown.Item>
                        <Dropdown.Item href={'/group-companies'}>Group companies</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                  </li>
                  <li >
                    {/* <Link href="#" prefetch>
                      Services
                    </Link> */}
                    <Dropdown className="serviceDropdown">
                      <Dropdown.Toggle   id="dropdown-basic">
                        Services
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item href="/service-page/online_safety_testing">Online Safety Valve Testing (Trevi  Type)</Dropdown.Item>
                        <Dropdown.Item href="/service-page/offline_valve_testing">Offline Valve Testing</Dropdown.Item>
                        <Dropdown.Item href="/service-page/alltype_valve_services">All Types of Valve Servicing</Dropdown.Item>
                        <Dropdown.Item href="/service-page/technical_manpower_supply_for_power_plant_refineries_and_water_plant">Technical Manpower supply for Power plant refineries and Water plant</Dropdown.Item>
                        <Dropdown.Item href="/service-page/online_seal_leaking">Online Leak Sealing – SYLMASATA & Conventional</Dropdown.Item>
                        <Dropdown.Item href="/service-page/hot_tapping">Hot Tapping & Insertion of S-Type( Gate Valve Online)</Dropdown.Item>
                        <Dropdown.Item href="/service-page/heat_exchanger">Heat Exchanger, Maintenance & Supply</Dropdown.Item>
                        <Dropdown.Item href="/service-page/ro_plant_epc_contracts">RO Plant EPC Contracts Upto 2MIGPDA</Dropdown.Item>
                        <Dropdown.Item href="/service-page/solar_plant_epc">Solar Plant EPC upto  5MW & Maintenance</Dropdown.Item>
                        <Dropdown.Item href="/service-page/ro_membrane">RO Plants Retro  Fitting</Dropdown.Item>
                        <Dropdown.Item href="/service-page/upvc_aluminiumdoors_windowsfabrication">UPVC & Aluminium Doors & Windows Fabrication & Installation</Dropdown.Item>

                      </Dropdown.Menu>
                    </Dropdown>

                  </li>
                  <li>
                    <Link href={"/appreciations"} prefetch>
                      Appreciations
                    </Link>
                  </li>
                  <li>
                    <Link href={"/brochures"} prefetch>
                      Brochures
                    </Link>
                  </li>
                  <li>
                  
                      <Dropdown>
                        <Dropdown.Toggle id="dropdown-basic">
                        Gallery
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                        <Dropdown.Item href={'/photo-gallery'}>Photo Gallery</Dropdown.Item>
                          <Dropdown.Item href="#">Video Gallery</Dropdown.Item>
                        <Dropdown.Item href={'/our-branches'}>Our Branches</Dropdown.Item>
                        <Dropdown.Item href={'/trainings'}>Trainings</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                  </li>
                  {/* <li>
                    <Link href="#" prefetch>
                      Credentials’
                    </Link>
                  </li> */}
                 
                
                  <li>
                    <Link href={'/careers'} prefetch>
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link href={"/contact-us"} prefetch>
                      Contact Us
                    </Link>
                  </li>



                </ul>
              </div>
              <div>


                <div className="certifiedLogo">
                  <img src="/assets/img/logo2.jpg" alt="logo" />
                </div>

              </div>

            </div>
          </nav>
        </div>
      </header>
      {/* popup search */}
    
    </div>


  );
};

export default Header;
