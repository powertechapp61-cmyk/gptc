"use client";
import Link from 'next/link'
import React, { useRef, useState, useEffect } from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import LeaderShipTeam from '../Components/LeaderShipTeam';
import Image from 'next/image';

const Mainpage = () => {
  const [active, setActive] = useState("side_tab1");
  // const [isTabsVisible, setIsTabsVisible] = useState(window.innerWidth >= 800);


  // useEffect(() => {
  //   const handleResize = () => {
  //     setIsTabsVisible(window.innerWidth >= 800);
  //   };
  //   window.addEventListener("resize", handleResize);
  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);

  const [isTabsVisible, setIsTabsVisible] = useState(false);

  useEffect(() => {
    // Runs only in the client
    // setIsTabsVisible(window.innerWidth >= 800);

    // const handleResize = () => {
    //   setIsTabsVisible(window.innerWidth >= 800);
    // };

    const checkSize = () => {
      setIsTabsVisible(window.innerWidth > 1026); // desktop only above 1026px
    };

    // window.addEventListener("resize", handleResize);

    // return () => window.removeEventListener("resize", handleResize);
    checkSize();
    window.addEventListener("resize", checkSize);

    return () => window.removeEventListener("resize", checkSize);
  }, []);


  const tabs = [
    {
      id: "side_tab1", title: "Gas Turbine Services", content: (
        <>
          <div className='mb_24'>
            <img src="/assets/img/gas-turbine.jpg" alt="Gas Turbine" />
          </div>
          <p className='spitsbergenBlueText_clr fontSize16 fontWeight400 mb_16'>We undertake capital overhauls of Turbo generator, Turbo compressor, Gas Turbines, assess present condition, identify defects, future failure predictions and improve the efficiency of equipment.</p>
          <p className='spitsbergenBlueText_clr fontSize16 fontWeight400 mb_16'>PTD has experienced crew Specialized in GT and ST works, having rich experience GT Major, Minor, Combustion Inspection, Turbine Hot Gas Path Inspection, GT Upgrade, Crew having complete exposure to GE, Siemens and ALSTOM turbines</p>
          <Link className='mainbtn' href="#">To know more Click Here</Link>


        </>
      )
    },
    {
      id: "side_tab2", title: "Steam Turbine Services", content: (
        <>
          <div className='mb_24'>
            <img src="/assets/img/steam-turbine.jpg" alt="steam-turbine" />
          </div>

          <p className='spitsbergenBlueText_clr fontSize16 fontWeight400 mb_16'>Based on our vast Steam turbine knowledge Power Tech Development offers its Services for any Impulse or Reaction steam turbine, regardless of manufacturer and application
            Our Steam Turbine Team offers servicing of specific components to overall steam turbine health solutions.</p>

          <p className='spitsbergenBlueText_clr fontSize16 fontWeight400 mb_16'>Our portfolio of developed steam turbine solutions, reverse engineering capabilities and steam turbine spare parts packages cover major fleets from Operations and maintenance to performance and lifetime improvement.</p>




          <p className='spitsbergenBlueText_clr fontSize16 fontWeight400 mb_16'><span className='fontWeight600'>Upgrades :</span> Our integrated approach allows us to find the ideal solution for your plant, budget, and strategy. Steam turbines upgrades not only help extend the life of the turbine but also improve overall steam turbine performance</p>
          <p className='spitsbergenBlueText_clr fontSize16 fontWeight400 mb_16'><span className='fontWeight600'>Maintenance and Repairs :</span> Power Tech Development can provide quick and effective Steam Turbine Engineering services to any location. Steam turbine maintenance teams leverage specialized tools and technicians to assist with repairs from rotors to blading.</p>
          <p className='spitsbergenBlueText_clr fontSize16 fontWeight400 mb_16'><span className='fontWeight600'>Parts :</span> For complete steam turbine overhaul service we offer standard and tailor-made parts for all types of steam turbines. PTD uses precisely fabricated parts to replace steam turbine components, address issues and increase the life of a steam turbine power system.</p>



          <Link className='mainbtn' href="#">To know more Click Here</Link>
        </>
      )
    },
    {
      id: "side_tab3", title: "Operation and Maintenance", content: (
        <>
          <div className='mb_24'>
            <img src="/assets/img/operation-maintenance.jpg" alt="operation-maintenance" />
          </div>



          <p className='spitsbergenBlueText_clr fontSize16 fontWeight400 mb_16'>Power Tech Development is having more than a decade experience in doing Gas Turbine Maintenance and Steam turbine maintenance projects, Boiler Maintenance and also providing Quality Technical Manpower for Operation and Maintenance to various plants across GCC Countries</p>

          <h5 className='blackText_Clr fontSize16 fontWeight600 mb_16'>Our Esteemed Client List- Huge Market Share in the Power Plant and Oil & Gas Industry</h5>

          <div className='esteemed_clientlist mb_34'>
            <div>
              <img src="/assets/img/engie.jpg" alt="engie" />
            </div>
            <div>
              <img src="/assets/img/clientlogo/c1.jpg" alt="c1" />
            </div>

            <div>
              <img src="/assets/img/c7.jpg" alt="c7" />
            </div>

            <div>
              <img src="/assets/img/clientlogo/c3.jpg" alt="c3" />
            </div>

            <div>
              <img src="/assets/img/c17.jpg" alt="c17" />
            </div>

            <div>
              <img src="/assets/img/c31.jpg" alt="c31" />
            </div>





          </div>

          <div>

          </div>

          <Link className='mainbtn' href="#">To know more Click Here</Link>


        </>
      )
    }, {
      id: "side_tab4", title: "Online/Offline Safety Valve Testing & Calibration", content: (
        <>
          <p className='spitsbergenBlueText_clr fontSize16 fontWeight400 mb_12'>THE ONLY THING MORE IMPORTANT THAN A SAFETY VALVE IS HOW YOU TEST IT”</p>
          <p className='spitsbergenBlueText_clr fontSize16 fontWeight400 mb_16'>AccuTEST Safety Valve Test System- Online Safety Valve Testing</p>
          <h4 className='blackText_Clr fontSize16 fontWeight600'>Test online</h4>
          <p className='spitsbergenBlueText_clr fontSize16 fontWeight400 mb_16'>Safety valves are essential to the protection of lives and property, so regular testing is crucial to ensure that valves are functioning properly. But can you really be sure of the results if the test is not conducted under the stress of everyday conditions? Unsurpassed for accuracy, reliability and safety, the advanced technology of AccuTEST was developed to test safety valves while in position, under a full load, for consistently superior, reproducible results</p>
          <div className='row'>
            <div className='mobspaceMb_24 col-lg-5'>
              <img src="/assets/img/gallery_img/01727516978.jpeg" alt="operation-maintenance" />
            </div>
            <div className='col-lg-7'>
              <h4 className='blackText_Clr fontSize16 fontWeight600 mb_12'>Advantages</h4>

              <ul className='mb_24'>
                <li className="spitsbergenBlueText_clr fontSize16 fontWeight400 mb_8">Totally automated operation, battery operated motor battery life under normal usage.</li>
                <li className="spitsbergenBlueText_clr fontSize16 fontWeight400 mb_8">Set pressures automatically calculated by measuring lift force, line pressure and acoustic trigger</li>
                <li className="spitsbergenBlueText_clr fontSize16 fontWeight400 mb_8">Universal mounting assembly ensures use on all types of exposed spindle valves.</li>
                <li className="spitsbergenBlueText_clr fontSize16 fontWeight400 mb_8">Easy one-handed mounting with innovative iris plate and self-aligning spindle adapter.</li>
                <li className="spitsbergenBlueText_clr fontSize16 fontWeight400 mb_8">Full range of spindle adapters available in metric, coarse and fine threads</li>
                <li className="spitsbergenBlueText_clr fontSize16 fontWeight400 mb_8">No hydraulics, cylinders, or hand jack.</li>
                <li className="spitsbergenBlueText_clr fontSize16 fontWeight400 mb_8">Lightweight, compact design for portability in the plant.</li>
                <li className="spitsbergenBlueText_clr fontSize16 fontWeight400">Load rig allows for lift forces up to 4,500 kg (10,000 Ib)</li>
              </ul>



              <Link className='mainbtn' href="/service-page/technical_manpower_supply_for_power_plant_refineries_and_water_plant">To know more Click Here</Link>

            </div>
          </div>



        </>
      )
    }, {
      id: "side_tab5", title: "Boiler Maintenance and Commissioning", content: (
        <>
          <p className='spitsbergenBlueText_clr fontSize16 fontWeight400 mb_16'>Online leak sealing today is the leak-sealing solutions of choice as it saves energy, prevents and expensive and unwanted shutdown and can address a wide variety of leaks. With the combination of engineering solutions support from global experts, we have leak sealing compounds that can address a wide variety of steam, chemical, hydrocarbon and gas leaks at temperature up to 700° C. We have highly trained, highly skilled technicians who can handle the adverse situations very tactically and bring downs the situation to normal conditions.</p>



          <div className='row '>
            <div className='col-lg-5 mobspaceMb_24'>
              <div>
                <img src="/assets/img/boiler-maintenance.jpg" alt="Boiler Maintenance and Commissioning" />
              </div>
            </div>
            <div className='col-lg-7'>
              <h4 className='blackText_Clr fontSize16 fontWeight600 mb_12'>Services we provide</h4>

              <ul className='mb_24'>
                <li className="spitsbergenBlueText_clr fontSize16 fontWeight400 mb_8">Boiler Installation and Commissioning</li>
                <li className="spitsbergenBlueText_clr fontSize16 fontWeight400 mb_8">Boiler Re-Tubing</li>
                <li className="spitsbergenBlueText_clr fontSize16 fontWeight400 mb_8">Boiler Maintenance and Servicing</li>
                <li className="spitsbergenBlueText_clr fontSize16 fontWeight400 mb_8">Inspection Testing and Calibration of Safety Valves .</li>
                <li className="spitsbergenBlueText_clr fontSize16 fontWeight400">Have completed various projects with EWA , Power plants and across Industries</li>
              </ul>
              <Link className='mainbtn' href="#">To know more Click Here</Link>

            </div>
          </div>








        </>
      )
    }, {
      id: "side_tab6", title: "Heat Exchange Desing Commisiion and Maintenance", content: (
        <>
          <div className='mb_24'>
            <img src="/assets/img/heatExchanger.png" alt="heat exchanger" />
          </div>
          <p className='spitsbergenBlueText_clr fontSize16 fontWeight400 mb_16'>A heat exchanger is an apparatus where the exchange of heat energy occurs between two different fluids at different temperatures.</p>
          <p className='spitsbergenBlueText_clr fontSize16 fontWeight400 mb_16'>The most used is what is known as “tubular beam and cloak exchanger “, as its large surface structure allows to exchange large quantities of heat.</p>

          <p className='spitsbergenBlueText_clr fontSize16 fontWeight400 mb_16'>This type of exchanger has a cylindrical shape, formed by a container called the mantle, where a bundle of tubes passes through each of them, both of which are crossed by the fluids.</p>

          <p className='spitsbergenBlueText_clr fontSize16 fontWeight400 mb_16'>Power Tech has the executed various projects of Design and commissioning of Heat exchangers across various industries and also carried out maintenance of the same,</p>

          <ul className='mb_24'>
            <li className='spitsbergenBlueText_clr fontSize16 fontWeight400 mb_16'>Tube Bundle extraction.</li>
            <li className='spitsbergenBlueText_clr fontSize16 fontWeight400 mb_16'>Re- Tubing or cleaning of the existing bundles.</li>
            <li className='spitsbergenBlueText_clr fontSize16 fontWeight400 mb_16'>Insertion of the Bundles.</li>
            <li className='spitsbergenBlueText_clr fontSize16 fontWeight400 mb_16'>Hydro Test and handover.</li>

          </ul>

          <Link className='mainbtn' href="/">To know more Click Here</Link>
        </>
      )
    }, {
      id: "side_tab7", title: "Online Leak Sealing & Hot Tapping Services", content: (
        <>

          <p className='spitsbergenBlueText_clr fontSize16 fontWeight400 mb_16'>Online leak sealing today is the leak-sealing solutions of choice as it saves energy, prevents and expensive and unwanted shutdown and can address a wide variety of leaks. With the combination of engineering solutions support from global experts, we have leak sealing compounds that can address a wide variety of steam, chemical, hydrocarbon and gas leaks at temperature up to 700° C. We have highly trained, highly skilled technicians who can handle the adverse situations very tactically and bring downs the situation to normal conditions</p>

          <p className='spitsbergenBlueText_clr fontSize16 fontWeight400 mb_16'>Power Tech has combined with SYLMASTA to offer one of the kind unique Repair kits which can be used for the sealing solutions.</p>

          <div className='row'>
            <div className='col-lg-4'>
              <div className='mobspaceMb_24'>
                <img src="/assets/img/online-leak-sealing.png" alt="online-leak-sealing" />
              </div>
            </div>
            <div className='col-lg-8'>

              <p className='spitsbergenBlueText_clr fontSize16 fontWeight400 mb_16'>Fixing a burst or leaking pipe has never been easier thanks to the SylWrap range of leak repair products.</p>

              <p className='spitsbergenBlueText_clr fontSize16 fontWeight400 mb_16'>Repairs can be carried out to pipes of all materials and diameters in under 30 minutes without the need for any formal training. Each product comes with full instructions explaining how it should be used; simply follow those and your leaking pipe can be fixed in not time at all.</p>


              <p className='spitsbergenBlueText_clr fontSize16 fontWeight400 mb_16'>Sylmasta pipe repair products are used in both small domestic plumbing jobs and large scale industrial repairs. Sylmasta count several of the United Kingdom’s water companies among their regular users and have also supplied solutions to desalination plants, wastewater treatment works, nuclear power stations, pumping stations, petrochemical plants, quarry wash plants, freight ships and dry risers</p>

              <Link className='mainbtn' href="#">To know more Click Here</Link>

            </div>
          </div>



        </>
      )
    }, {
      id: "side_tab8", title: "Hot Tapping", content: (
        <>
          <p className='spitsbergenBlueText_clr fontSize16 fontWeight400 mb_16'>When Hot Tapping Makes the Difference: Minimizing Disruption and Maximizing Efficiency</p>
          <p className='spitsbergenBlueText_clr fontSize16 fontWeight400 mb_16'>In the world of pipeline management, efficiency and minimal disruption are key. That&apos;s where hot tapping comes in, a specialized technique that allows you to connect to existing pipelines without interrupting the flow. This blog post dives into the benefits of hot tapping and the scenarios where it shines.</p>
          <p className='spitsbergenBlueText_clr fontSize16 fontWeight400 mb_16'>Uninterrupted Operations: Imagine needing to upgrade your pipeline system. Traditionally, this would mean shutting down the entire operation, resulting in lost production, frustrated customers, and significant financial losses. Enter hot tapping. This innovative method lets you seamlessly add new branches or isolate sections for maintenance all while the pipeline remains active. It's like performing surgery on a running engine – a feat of engineering brilliance.</p>
          <p className='spitsbergenBlueText_clr fontSize16 fontWeight400 mb_16'>Safety and Environmental Benefits: Beyond avoiding costly downtime, hot tapping also prioritizes safety and environmental responsibility. By eliminating the need for depressurization, the risks associated with handling highly pressurized systems are significantly reduced. Additionally, hot tapping minimizes product loss and prevents harmful gas emissions, making it a sustainable choice for your business and the planet.</p>
          <p className='spitsbergenBlueText_clr fontSize16 fontWeight400 mb_24'>Cost-Effective Efficiency: Let&apos;s talk numbers. By eliminating the need for lengthy shutdowns and complex rewelding procedures, hot tapping offers tangible cost savings. Less planning, reduced manpower requirements, and faster project completion times all add up to a more efficient and financially advantageous solution.</p>


          <div className='row mb_24'>
            <div className='col-lg-4'>
              <div className='mobspaceMb_24'>
                <img src="/assets/img/hot_tapping_detail.png" alt='Hot Tapping' />
              </div>
            </div>
            <div className='col-lg-8'>
              <h4 className='blackText_Clr fontSize16 fontWeight600 mb_12'>But Is Hot Tapping Always the Answer?</h4>

              <p className='spitsbergenBlueText_clr fontSize16 fontWeight400 mb_16'>While hot tapping boasts impressive advantages, it&apos;s crucial to acknowledge that it's not a one-size-fits-all solution. This complex procedure requires extensive expertise and specialized equipment. Therefore, it's essential to carefully evaluate your specific needs and consider alternative methods before making a decision. Hot tapping thrives when:</p>

              <ul>
                <li className='spitsbergenBlueText_clr fontSize16 fontWeight400 mb_12'>Shutting down the pipeline is impractical or financially detrimental.</li>
                <li className='spitsbergenBlueText_clr fontSize16 fontWeight400 mb_12'>Minimizing downtime and maintaining operations is paramount.</li>
                <li className='spitsbergenBlueText_clr fontSize16 fontWeight400'>Safety and environmental considerations are high priorities.</li>

              </ul>
            </div>
          </div>







          <h4 className='blackText_Clr fontSize16 fontWeight600 mb_12'>Conclusion</h4>

          <p className='spitsbergenBlueText_clr fontSize16 fontWeight400 mb_24'>Hot tapping is more than just a fancy technique; it&apos; s a game-changer in the world of pipeline management.By prioritizing efficiency, safety, and sustainability, it offers a clear advantage for maintaining and upgrading your system with minimal disruption.If you&apos; re looking for a way to keep your operations flowing while optimizing your pipeline network, hot tapping might just be the answer you&apos;ve been searching for</p>



          <Link className='mainbtn' href="#">To know more Click Here</Link>
        </>
      )
    }, {
      id: "side_tab9", title: "HRSG Pressure Wave & Chemical Cleaning", content: (
        <>
          <div className='mb_24'>
            <img src="/assets/img/gallery_img/01652965793.jpg" alt='HRSG Pressure Wave' />
          </div>
          <p className='spitsbergenBlueText_clr fontSize16 fontWeight400 mb_16'>Power Tech has trained, certified team who can work on removing hazardous waste / chemicals resulting from HRSG pressure wave cleaning process and other process in varied industries</p>
          <p className='spitsbergenBlueText_clr fontSize16 fontWeight400 mb_24'>Power Tech along with OEMS have carried Pressure wave blasting procedures for various clients in GCC and also helped in disposing of Sulphur from the HRSG towers with the help of trained team.</p>


          <Link className='mainbtn' href="/service-page/solar_plant_epc">To know more Click Here</Link>

        </>
      )
    }, {
      id: "side_tab10", title: "Valve Servicing and Calibration", content: (
        <>
          <div className='mb_24'>
            <img src="/assets/img/calibration.jpg" alt='calibration' />
          </div>

          <p className='spitsbergenBlueText_clr fontSize16 fontWeight400 mb_16'>Our Group Company Valve Tech testing and services and Power Tech testing and services specialize in handling services for different type of Valves, Actuators, Pumps, Compressors etc, for more information pls visit <Link className='bainganiText_Clr' target='_blank' href="www.powertechtesting.com">www.powertechtesting.com</Link></p>

          <h4 className='blackText_Clr fontSize16 fontWeight600 mb_16'>Aldur-Bahrain</h4>

          <div className='row mb_24'>
            <div className='col-lg-6'>
              <div className='mobspaceMb_24'>
                <img src="/assets/img/aldur-bahrain_1.jpg" alt='aldur-bahrain' />
              </div>
            </div>
            <div className='col-lg-6'>
              <img src="/assets/img/aldur-bahrain_2.jpg" alt='aldur-bahrain' />
            </div>
          </div>

          <Link className='mainbtn' href="#">To know more Click Here</Link>

        </>
      )
    }, {
      id: "side_tab11", title: "Sand blasting of turbine blades", content: (
        <>

          <p className='spitsbergenBlueText_clr fontSize16 fontWeight400 mb_16'>DEWA, Dubai M station Gas turbine shot blasting by GPTC, NOMAC is our client.</p>

          <div className='row mb_24'>
            <div className='col-lg-4 mobspaceMb_24'>
              <img src="/assets/img/sand-blasting_2.jpg" alt='Sand blasting of turbine blades' />
            </div>
            <div className='col-lg-4 mobspaceMb_24'>
              <img src="/assets/img/sand-blasting_3.jpg" alt='Sand blasting of turbine blades' />
            </div>
            <div className='col-lg-4'>
              <img src="/assets/img/sand-blasting_1.jpg" alt='Sand blasting of turbine blades' />
            </div>
          </div>

          <Link className='mainbtn' href="#">To know more Click Here</Link>
        </>
      )
    },
    {
      id: "side_tab12", title: "Sea Water Reverse Osmosis(SWRO) membranes Works", content: (
        <>
          <div className='mb_24'>
            <img style={{ width: "100%" }} src="/assets/img/membranes_2.jpg" alt='membranes' />
          </div>
          <p className='spitsbergenBlueText_clr fontSize16 fontWeight400 mb_16'>Power Tech handles various project with related to Inspection and Replacement of Sea Water Reverse Osmosis (SWRO) membranes</p>


          <h4 className='blackText_Clr fontSize16 fontWeight600 mb_16'>Membrane replacement procedure in brief</h4>
          <ul className='mb_24'>
            <li className='spitsbergenBlueText_clr fontSize16 fontWeight400 mb_12'>Removal of membranes from the pressure vessel one by one with proper attention and mark each of them with respective pressure vessel KKS number and their respective positions.</li>
            <li className='spitsbergenBlueText_clr fontSize16 fontWeight400 mb_12'>Inspection of the membranes for any physical damages, fouling etc., and verify the condition of the O-Rings & inter connectors</li>
            <li className='spitsbergenBlueText_clr fontSize16 fontWeight400 mb_12'>Weighing of the removed membranes to ascertain the replacement criteria</li>
            <li className='spitsbergenBlueText_clr fontSize16 fontWeight400 mb_12'>Replace it with new membranes based on the replacement criteria</li>
            <li className='spitsbergenBlueText_clr fontSize16 fontWeight400'>Provision of personnel , Scaffolding and required tools and tagging for smooth execut</li>
          </ul>



          <div className='row mb_24'>
            <div className='col-lg-6 mobspaceMb_24'>
              <img style={{ width: "100%" }} src="/assets/img/membranes_1.jpg" alt='membranes' />
            </div>
            <div className='col-lg-6 mobspaceMb_24'>
              <img style={{ width: "100%" }} src="/assets/img/membranes_3.jpg" alt='membranes' />
            </div>

          </div>

          <Link className='mainbtn' href="#">To know more Click Here</Link>
        </>
      )
    },
    {
      id: "side_tab13", title: "Electrical Maintenance & Commissioning Services", content: (
        <>
          <p className='spitsbergenBlueText_clr fontSize16 fontWeight400 mb_16'>PTD Group has a strong skillset of Engineers and Technicians in the Electrical domain which helps us to offer the below services</p>


          <div className='row mb_24'>
            <div className='col-lg-4 mobspaceMb_24'>
              <img style={{ width: "100%" }} src="/assets/img/gallery_img/01653208757.jpeg" alt='Electrical Maintenance' />
            </div>
            <div className='col-lg-8'>
              <ul>
                <li className='spitsbergenBlueText_clr fontSize16 fontWeight400 mb_12'>Full plant and facility electrical maintenance services</li>
                <li className='spitsbergenBlueText_clr fontSize16 fontWeight400 mb_12'>HV & LV project works ranging from replacing or upgrading equipment to completely new installations</li>
                <li className='spitsbergenBlueText_clr fontSize16 fontWeight400 mb_12'>Maintenance of HV & LV Distribution Systems</li>
                <li className='spitsbergenBlueText_clr fontSize16 fontWeight400 mb_12'>Preventive Maintenance of Motors, Generators, actuators and breakers</li>
                <li className='spitsbergenBlueText_clr fontSize16 fontWeight400 mb_12'>Overhauling of Turbo Generators</li>
                <li className='spitsbergenBlueText_clr fontSize16 fontWeight400 mb_12'>Switchgear maintenance and cleaning</li>
                <li className='spitsbergenBlueText_clr fontSize16 fontWeight400 mb_12'>Power quality analysis</li>
                <li className='spitsbergenBlueText_clr fontSize16 fontWeight400 mb_12'>PLC maintenance and programming, repair and troubleshooting</li>
                <li className='spitsbergenBlueText_clr fontSize16 fontWeight400 mb_12'>Electrical testing and commissioning, which includes planned preventive and reactive maintenance, testing and commissioning services, and any emergency repairs required</li>
                <li className='spitsbergenBlueText_clr fontSize16 fontWeight400 mb_12'>Conduiting, Cable Laying, Termination and Cable tray works</li>
                <li className='spitsbergenBlueText_clr fontSize16 fontWeight400'>Design, Installation and commissioning of various Power projects</li>
              </ul>
            </div>
          </div>


          {/* <div className=''> */}

          <div className='deskFlexMobileBlock mb_24 gap16'>
          
          
            <div className=' mobspaceMb_24'>
              <img src="/assets/img/commissioning-services_3.jpg" alt='commissioning-services' />
            </div>
            <div className=' mobspaceMb_24'>
              <img src="/assets/img/commissioning-services_1.jpg" alt='commissioning-services' />
            </div>
            <div>
              <img src="/assets/img/commissioning-services_2.jpg" alt='commissioning-services' />
            </div>
          </div>
          <h4 className='blackText_Clr fontSize16 fontWeight600 mb_12'>MD SIR & GM-UAE</h4>

          <div className='mb_24'>
            <img src="/assets/img/md-gm-uae.jpg" alt='md-gm-uae' />
          </div>

          <h4 className='blackText_Clr fontSize16 fontWeight600 mb_12'>UAE Technical Team-Unit 1</h4>


          <div className='row mb_24'>
           
            <div className='col-lg-3 mb_24'>
              <img style={{ width: "100%" }} src="/assets/img/uae-tech-team-unit2.jpg" alt='uae-tech-team-unit2' />
            </div>
            <div className='col-lg-3 mb_24'>
              <img style={{ width: "100%" }} src="/assets/img/uae-tech-team-unit3.jpg" alt='uae-tech-team-unit3' />
            </div>
            <div className='col-lg-3 mb_24'>
              <img style={{ width: "100%" }} src="/assets/img/uae-tech-team-unit4.jpg" alt='uae-tech-team-unit4' />
            </div>
            <div className='col-lg-3 mb_24'>
              <img style={{ width: "100%" }} src="/assets/img/uae-tech-team-unit5.jpg" alt='uae-tech-team-unit5' />
            </div>
            <div className='col-lg-3'>
              <img style={{ width: "100%" }} src="/assets/img/uae-tech-team-unit1.jpg" alt='uae-tech-team-unit1' />
            </div>
          </div>

          <Link className='mainbtn' href="#">To know more Click Here</Link>
        </>
      )
    },
    {
      id: "side_tab14", title: "Pig Cleaning", content: (
        <>
          <p className='spitsbergenBlueText_clr fontSize16 fontWeight400 mb_16'>Pig cleaning of pipe lines, Fujairah F3 SAMSUNG EPC contractor</p>

          <div className='deskFlexMobileBlock mb_24 gap16'>
            <div className=' mobspaceMb_24'>
              <img src="/assets/img/pig-cleaning_1.jpg" alt='pig-cleaning' />
            </div>
            <div className=''>
              <img src="/assets/img/pig-cleaning_2.jpg" alt='pig-cleaning' />
            </div>

          </div>

          <Link className='mainbtn' href="#">To know more Click Here</Link>
        </>
      )
    },
    {
      id: "side_tab15", title: "Acid Cleaning of tanks & piping", content: (
        <>
          <p className='spitsbergenBlueText_clr fontSize16 fontWeight400 mb_16'>SHIPCO, Sharjah 1800MW power plant. Acid cleaning of tanks and hydro jetting</p>

          <div className='deskFlexMobileBlock mb_24 gap16'>
            <div className=' mobspaceMb_24'>
              <img src="/assets/img/acid-cleaning1.jpg" alt='acid cleaning' />
            </div>
            <div className=''>
              <img src="/assets/img/acid-cleaning2.jpg" alt='acid cleaning' />
            </div>

          </div>

          <Link className='mainbtn' href="#">To know more Click Here</Link>
        </>
      )
    },
    {
      id: "side_tab16", title: "Air Intake Filter replacement works", content: (
        <>
          <div className='mb_24'>
            <img src="/assets/img/filter-replacement.jpg" alt='acid cleaning' />
          </div>
          <p className='spitsbergenBlueText_clr fontSize16 fontWeight400 mb_16'>AIF replacement. In mirfa international Power company, Abudhabi</p>
          <Link className='mainbtn' href="#">To know more Click Here</Link>
        </>
      )
    },
    {
      id: "side_tab17", title: "DAF cleaning works", content: (
        <>

          <div className='deskFlexMobileBlock mb_24 gap16'>
            <div className=' mobspaceMb_24'>
              <img src="/assets/img/daf-cleaning-works_1.jpg" alt='daf-cleaning-works' />
            </div>
            <div className=''>
              <img src="/assets/img/daf-cleaning-works_2.jpg" alt='daf-cleaning-works' />
            </div>

          </div>
          <Link className='mainbtn' href="#">To know more Click Here</Link>
        </>
      )
    },
    {
      id: "side_tab18", title: "All types of AC/HVAC installation and servicing", content: (
        <>
          <p className='spitsbergenBlueText_clr fontSize16 fontWeight400 mb_16'>Installation in Abudhabi, kizad. CCU units</p>
          <div className='deskFlexMobileBlock mb_24 gap16'>
            <div className=' mobspaceMb_24'>
              <img src="/assets/img/allType_ac-hvac_1.jpg" alt='allType ac hvac' />
            </div>
            <div className=''>
              <img src="/assets/img/allType_ac-hvac_2.jpg" alt='allType ac hvac' />
            </div>
            <div className=' mobspaceMb_24'>
              <img src="/assets/img/allType_ac-hvac_3.jpg" alt='allType ac hvac' />
            </div>
          </div>
          <Link className='mainbtn' href="#">To know more Click Here</Link>
        </>
      )
    }
  ];



  const clientSay = [
    {
      id: 1,
      year: "February 27, 2025",
      Desc: "PTD received &apos;Best Employee Accommodation Management and Maintenance &apos; from ALBA CEO for the year 2024, Post various audits from ALBA Team",
    },
    {
      id: 2,
      year: 'October 16, 2024',
      Desc: "Power Tech Group is now ISO 14001 Certified , along with the previously held ISO 9001 and ISO 45001 Certification, Recently we completed the Integrated Management System Audit for all 3 certifications and got certified",
    },
    {
      id: 3,
      year: 'August 11, 2024',
      Desc: "PTD Successfully completed GT T1C Nozzle Replacement Mitsubishi works for ALBA Block 4 Expansion Project and received a letter of Appreciation for our support and completion of the Project from MHI Team.",
    },
    {
      id: 4,
      year: "July 28, 2024",
      Desc: 'PTD has secured 3 Year long term contract with ALBA Power Station 5 for Mechanical, Electrical and Instrumentation Department.',
    },
    {
      id: 5,
      year: "December 21, 2022",
      Desc: "Power Tech Group is happy to share that our company  has been awarded a Silver EcoVadis Medal. This result places our company among the top 25 percent of companies assessed by EcoVadis.",
    },
    {
      id: 6,
      year: "November 30, 2022",
      Desc: "PTD Successfully Completed GT Major Outage with NMES (ACWA POWER) for the NOMAC ALDUR-II Plant,  PTD Also completed Unplanned GT-12 Outage in ALDUR-1 for AEOM",
    },
    {
      id: 7,
      year: "April 15, 2022",
      Desc: "Power Tech recently completed GPIC Turnaround 2022 in Bahrain, providing close to 100 resources from Instrumentation, Electrical and Mechanical Stream",
    },

  ];

  // const serviceSlider = {
  //   dots: false,
  //   arrows: false,
  //   infinite: true,
  //   autoplay: true,
  //   autoplaySpeed: 3000,
  //   slidesToShow: 4,
  //   slidesToScroll: 4,
  //   lazyLoad: false,
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 1,
  //         infinite: true,
  //         dots: false,
  //       },
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 1,
  //         centerPadding: "0px",
  //         centerMode: false,
  //       },
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 1,
  //         centerPadding: "0px",
  //         centerMode: false,
  //       },
  //     },
  //   ],
  // };


  const clientlogoSlider = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 9,
    slidesToScroll: 1,
    lazyLoad: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          centerPadding: "0px",
          centerMode: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          centerPadding: "0px",
          centerMode: false,
        },
      },
    ],
  };

  // const testimonialSlider = {
  //   dots: false,
  //   arrows: false,
  //   infinite: true,
  //   autoplay: true,
  //   autoplaySpeed: 3000,
  //   slidesToShow: 3,
  //   slidesToScroll: 3,
  //   lazyLoad: false,
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 1,
  //         infinite: true,
  //         dots: false,
  //       },
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 1,
  //         centerPadding: "0px",
  //         centerMode: false,
  //       },
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 1,
  //         centerPadding: "0px",
  //         centerMode: false,
  //       },
  //     },
  //   ],
  // };


  const mainBnr = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    fade: true, // smooth fade transition

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,

        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };
  const banners = [
    { id: 1, img: "/assets/img/operation_and_maintainance_service_provider.jpg", title: "Operations and Maintenance Service Provider ", },
    { id: 2, img: "/assets/img/electro_mechanical.png", title: "Electro Mechanical and Instrumentation Project Experts", },
    { id: 3, img: "/assets/img/hottapping.jpg", title: "Hot Tapping ", },
    { id: 4, img: "/assets/img/gas_turbine_steam_turbine_works.jpg", title: "Gas Turbine and Steam Turbine Works ", },
    { id: 5, img: "/assets/img/valve_servicing_testing.png", title: "	Valve Servicing , Testing and Calibration Works", },
    { id: 6, img: "/assets/img/welding_fabrication_work.jfif", title: "Welding and Fabrication Works", },
  ];


  const companyPhoto = {
    dots: false,
    infinite: true,
    // speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    fade: true, // smooth fade transition
  };


  const itemsRef = useRef([]);
  const sectionRef = useRef(null);


  const addToRefs = (el) => {
    if (el && !itemsRef.current.includes(el)) {
      itemsRef.current.push(el);
    }
  };
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const ctx = gsap.context(() => {
      itemsRef.current.forEach((el) => {
        const finalValue = Number(el.dataset.value);

        gsap.fromTo(
          el,
          { textContent: 0 },
          {
            textContent: finalValue,
            duration: 2,
            ease: "power1.out",
            snap: { textContent: 1 },
            onUpdate() {
              el.innerHTML = Number(el.textContent).toLocaleString() + "+";
            },
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
              // markers: true,   // <--- TEST THIS
              toggleActions: "play none none none",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);
  return (
    <>
      <section className='herobnr'>
        {/* <div className='row'>
            <div className='col-lg-7'>
              <div className='bnrContent'>
                <span>--- A unit of Powertech Group Companies ---</span>
                <h1>Operations and Maintenance Service Provider </h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,   </p>
                <button className='mainbtn'>Learn More</button>
              </div>
            </div>
            <div className='col-lg-5'>

            </div>
          </div> */}



        <Slider {...mainBnr}>

          {banners.map((banner) => (
            <div key={banner.id} className="banner-slide">
              <img
                src={banner.img}
                alt={banner.title}
              // priority
              />
              <div className="bnrContent">
                <div className='container-fluid'>
                  <div className='row'>
                    <div className='col-lg-8'>
                      <h1>{banner.title}</h1>
                      {/* <p>{banner.description}</p> */}
                      {/* <button className='mainbtn'>Learn More</button> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

        </Slider>

      </section>

      <section className='testmonials_sec'>
        <div className='container-fluid'>

          {/* <div className="site-heading">
             <span className="site-title-tagline textalign_center">--- Testmonials ---</span> 
            <h2 className="site-title textalign_center"> What Our <span>Client Say&apos;s</span></h2>
          </div> */}

          {/* <Slider {...testimonialSlider}> */}
          <div className='testimonialGrid'>
            {clientSay.map((item) => (
              <div className="testimonialItem" key={item.id}>
                <div>
                  {/* <div className='quoteRightImg'>
                    <img src="/assets/img/quote.svg" alt='quote' />
                  </div> */}
                  <h3>{item.year}</h3>
                  <p>{item.Desc}</p>
                </div>
                {/* <div className='displayFlex alignItem_center justifyContent_spacebetween'>
                  <div className='displayFlex alignItem_center gap12 dpProfile'>
                    <div className=''>
                      <img src="/assets/img/dp.jpg" alt='sdd' />
                    </div>
                    <div>
                      <h5>Raj kumar</h5>
                      <span>UI / UX</span>
                    </div>
                  </div>
                  <div>
                    <ul className='displayFlex alignItem_center gap12 emptyList'>
                      <li>
                        <img src="/assets/img/star_fill.svg" alt='star' />
                      </li>
                      <li>
                        <img src="/assets/img/star_fill.svg" alt='star' />
                      </li>
                      <li>
                        <img src="/assets/img/star_empty.svg" alt='star' />
                      </li>
                      <li>
                        <img src="/assets/img/star_empty.svg" alt='star' />
                      </li>
                    </ul>
                  </div>
                </div> */}
              </div>
            ))}
          </div>
          {/* </Slider> */}

        </div>
      </section>





      <section className='companyPhotoSec'>
        <Slider {...companyPhoto}>


          <div className="companyphoto-item">
            <img src="/assets/img/company-photo/slider1.jpg" alt="companyphoto" />
          </div>


          <div className="companyphoto-item">
            <img src="/assets/img/company-photo/sl2.jpg" alt="companyphoto" />
          </div>
          <div className="companyphoto-item">
            <img src="/assets/img/company-photo/sl3.jpg" alt="companyphoto" />
          </div>
          <div className="companyphoto-item">
            <img src="/assets/img/company-photo/sl4.jpg" alt="companyphoto" />
          </div>
          <div className="companyphoto-item">
            <img src="/assets/img/company-photo/sl5.jpg" alt="companyphoto" />
          </div>
          <div className="companyphoto-item">
            <img src="/assets/img/company-photo/sl6.jpg" alt="companyphoto" />
          </div>
        </Slider>
      </section>

      <LeaderShipTeam />


      <section className='weServeGlobally_sec' ref={sectionRef}>
        <div className='container'>
          {/* <div className="site-heading"> */}
          {/* <span className="site-title-tagline">--- WE SERVE GLOBALLY ---</span> */}
          <h2>WE SERVE <span>GLOBALLY</span></h2>
          {/* </div> */}


          <div className='row'>

            <div className='col-lg-7 mobspaceMb_34'>
              {/* <div className='mb_40'>
                <p className='tranquilPondText_Clr fontSize16 fontWeight400 fontStyleItalic'>Owing to the unmatched quality and reliability of our products, our line of Leak Sealing Products and Services is in significant demand globally.</p>
              </div> */}

              <div className='mb_16'>

                <h5 className='blackText_Clr fontSize24 fontWeight600 mb_12'>Our Global Presence</h5>

                <p className='blackText_Clr fontSize16 fontWeight400'>Power Tech Group Companies an ISO 9001 and ISO 45001 company is Unique in Indian sub-continent and GCC countries, as ONE-STOP-SHOP for total power plant services in the areas of Repairs & Retrofits, EPC contracts, O&M contracts, Re-Engineering and Relocation of Power Plants, Spares & Services for a decade. We offer Qualitative and Economical Alternative to various OEMS around the World in the areas of expertise. We offer quality services and expertise in Repairs & Retrofits, Spares & Services, EPC contracts, O&M Contracts, Re-Engineering and Relocation of Power Plants, for a decade.</p>


              </div>
              <div className='ourGlobalPresence'>
                <div>
                  <h5 className="data" ref={addToRefs} data-value="15">0</h5>
                  <p>Years</p>
                </div>
                <div>
                  <h5 className="data" ref={addToRefs} data-value="5">0</h5>
                  <p>Countries</p>
                </div>
                <div>
                  <h5 className="data" ref={addToRefs} data-value="250">0</h5>
                  <p>Customers</p>
                </div>
              </div>

            </div>

            <div className='col-lg-5'>
              <div>
                <img className='width100per borderRadius10' src="/assets/img/operation_and_maintainance_service_provider.jpg" />
              </div>

            </div>

          </div>
        </div>
      </section>


      <section className='service_sec'>
        <div className='container positionRelative zIndex999'>
          <div className="site-heading">
            {/* <span className="site-title-tagline textalign_center">--- Service ---</span> */}
            <h2 className="site-title textalign_center">
              <span>Valve Services</span> - Human Resource <br /> & Manpower Supply
            </h2>
          </div>
          <div className='gear-pattern-layer'></div>




          <div className="desktopTab_mobAccordion">
            {/* Tabs (visible only on wide screens) */}
            {isTabsVisible && (
              <nav>
                <ul>
                  {tabs.map(t => (
                    <li key={t.id}>
                      <button
                        className={`font-bold ${active === t.id ? "activeTab" : "bg-gray-200"}`}
                        onClick={() => setActive(t.id)}
                      >
                        {t.title}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            )}


            {/* Content items */}
            <div>
              {tabs.map(t => (
                <section
                  key={t.id}
                  className={`item ${active === t.id ? "active" : ""}`}
                  onClick={() => {
                    if (!isTabsVisible) {
                      setActive(prev => (prev === t.id ? null : t.id));  // toggle open/close
                    }
                  }}
                >
                  {/* Accordion title (mobile only) */}
                  {!isTabsVisible && (
                    <div className={`${active === t.id ? "bg-gray-700" : "bg-gray-200"}`}>
                      <span>{t.title}</span>
                      <img className='arrowToggle' src="/assets/img/arrowdown_icon.svg" />
                    </div>
                  )}

                  {/* className={`${active === t.id ? "" : ""}`} */}
                  <div className='serciceContentFrame'>
                    <h2> {t.title}</h2>
                    {t.content}
                  </div>
                </section>
              ))}
            </div>
          </div>


          {/* <div className='industriesLeftSpace'> */}

          {/* <Slider {...serviceSlider}> */}

          {/* <div className='row'>
            <div className='col-lg-4'>
              <div className="serviceItem">
                <div className="service-img">
                  <img src="/assets/img/online_safety_valve_testing_img.jpg" alt='Online Safety Valve Testing' />
                  <Link href="/service-page/online_safety_testing">
                    <img src="/assets/img/bx_link.svg" alt='link' />
                  </Link>
                </div>
                <div className="service-caption">
                  <Link href="/service-page/online_safety_testing">
                    <h3> Online Safety Valve Testing (Trevi  Type)</h3></Link>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className="serviceItem">
                <div className="service-img">
                  <img src="/assets/img/offline_valve_testing_home.png" alt='Offline Valve Testing' />

                  <Link href="/service-page/offline_valve_testing">
                    <img src="/assets/img/bx_link.svg" alt='link' />
                  </Link>

                </div>
                <div className="service-caption">
                  <Link href="/service-page/offline_valve_testing"><h3>Offline Valve Testing</h3></Link>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className="serviceItem">
                <div className="service-img">
                  <img src="/assets/img/valve_service_home.jpeg" alt='All Types of Valve Servicing' />
                  <Link href="/service-page/alltype_valve_services">
                    <img src="/assets/img/bx_link.svg" alt='link' />
                  </Link>
                </div>
                <div className="service-caption">
                  <Link href="/service-page/offline_valve_testing">
                    <h3>All Types of Valve Servicing</h3></Link>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className="serviceItem">
                <div className="service-img">
                  <img src="/assets/img/technical_manpower_provisioning_home.jpg" alt='Technical Manpower supply for Power plant refineries and Water plant' />

                  <Link href="/service-page/technical_manpower_supply_for_power_plant_refineries_and_water_plant">
                    <img src="/assets/img/bx_link.svg" alt='link' />
                  </Link>

                </div>
                <div className="service-caption">
                  <Link href="/service-page/technical_manpower_supply_for_power_plant_refineries_and_water_plant">
                    <h3>Technical Manpower supply for Power plant refineries and Water plant</h3></Link>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
              </div>
            </div>
            <div className='col-lg-4'>

              <div className="serviceItem">
                <div className="service-img">
                  <img src="/assets/img/online_leak_sealing_home.png" alt='Online Leak Sealing' />


                  <Link href="/service-page/online_seal">
                    <img src="/assets/img/bx_link.svg" alt='link' />
                  </Link>




                </div>
                <div className="service-caption">
                  <Link href="/service-page/technical_manpower_supply_for_power_plant_refineries_and_water_plant">
                    <h3>Online Leak Sealing – SYLMASATA & Conventional</h3></Link>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className="serviceItem">
                <div className="service-img">
                  <img src="/assets/img/hottapping_home.jpg" alt='Hot Tapping' />

                  <Link href="/service-page/hot_tapping">
                    <img src="/assets/img/bx_link.svg" alt='link' />
                  </Link>


                </div>
                <div className="service-caption">
                  <Link href="/service-page/hot_tapping">
                    <h3>Hot Tapping & Insertion of S-Type( Gate Valve Online)</h3></Link>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className="serviceItem">
                <div className="service-img">
                  <img src="/assets/img/heat_exchanger_maintenance_home.jpg" alt='Heat Exchanger, Maintenance' />

                  <Link href="/service-page/heat_exchanger">
                    <img src="/assets/img/bx_link.svg" alt='link' />
                  </Link>


                </div>
                <div className="service-caption">
                  <Link href="/service-page/heat_exchanger">  <h3>Heat Exchanger, Maintenance & Supply</h3></Link>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className="serviceItem">
                <div className="service-img">
                  <img src="/assets/img/ro_plant_epc_contracts_home.jpg" alt='RO Plant EPC Contracts' />

                  <Link href="/service-page/ro_plant_epc_contracts">
                    <img src="/assets/img/bx_link.svg" alt='link' />
                  </Link>


                </div>
                <div className="service-caption">
                  <Link href="/service-page/ro_plant_epc_contracts"> <h3>RO Plant EPC Contracts Upto 2MIGPDA</h3></Link>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className="serviceItem">
                <div className="service-img">
                  <img src="/assets/img/solar-plant_epc_home.jpeg" alt='Solar Plant EPC' />

                  <Link href="/service-page/solar_plant_epc">
                    <img src="/assets/img/bx_link.svg" alt='link' />
                  </Link>


                </div>
                <div className="service-caption">
                  <Link href="/service-page/solar_plant_epc"> <h3>Solar Plant EPC upto  5MW & Maintenance</h3> </Link>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
              </div>
            </div>
            <div className='col-lg-4'>

              <div className="serviceItem">
                <div className="service-img">
                  <img src="/assets/img/ro-plants-retro-fitting_home.jpg" alt='RO Plants Retro  Fitting' />


                  <Link href="/service-page/ro_membrane">
                    <img src="/assets/img/bx_link.svg" alt='link' />
                  </Link>

                </div>
                <div className="service-caption">
                  <Link href="/service-page/ro_membrane"> <h3>RO Plants Retro  Fitting</h3></Link>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className="serviceItem">
                <div className="service-img">
                  <img src="/assets/img/upvc_home.png" alt='UPVC' />

                  <Link href="/service-page/upvc_aluminiumdoors_windowsfabrication">
                    <img src="/assets/img/bx_link.svg" alt='link' />
                  </Link>



                </div>
                <div className="service-caption">
                  <Link href="/service-page/upvc_aluminiumdoors_windowsfabrication"> <h3>UPVC & Aluminium Doors & Windows Fabrication & Installation</h3></Link>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
              </div>
            </div>


          </div> */}
          {/* </Slider> */}
          {/* </div> */}
        </div>
      </section>


      {/* <section className="about-area">
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
                <p className='tranquilPondText_Clr fontSize16 fontWeight400'>Sam Technical Service Contracting Est an ISO 9001 and ISO 45001 company is Unique in Indian sub-continent and GCC countries, as ONE-STOP-SHOP for total power plant services in the areas of Repairs & Retrofits, EPC contracts.

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
      </section> */}

      {/* <section className='industrySec'>
        <div className='container'>
          <div className="site-heading">
            <h2 className="site-title textalign_center"> Our <span>Infrastructure</span></h2>
          </div>
          <div className="row popup-gallery">
            <div className="col-md-4 wow fadeInUp">
              <div className="gallery-item">
                <div className="gallery-img">
                  <img src="/assets/img/01.jpg" alt="" />
                </div>
                <div className="gallery-content">
                  <a className="popup-img gallery-link" href="/assets/img/01.jpg"><i className="fal fa-plus"></i></a>
                </div>
              </div>
              <div className="gallery-item">
                <div className="gallery-img">
                  <img src="/assets/img/01.jpg" alt="" />
                </div>
                <div className="gallery-content">
                  <a className="popup-img gallery-link" href="/assets/img/01.jpg"><i className="fal fa-plus"></i></a>
                </div>
              </div>
            </div>
            <div className="col-md-4 wow fadeInUp">
              <div className="gallery-item">
                <div className="gallery-img">
                  <img src="/assets/img/02.jpg" alt="" />
                </div>
                <div className="gallery-content">
                  <a className="popup-img gallery-link" href="/assets/img/01.jpg"><i className="fal fa-plus"></i></a>
                </div>
              </div>
              <div className="gallery-item">
                <div className="gallery-img">
                  <img src="/assets/img/03.jpg" alt="" />
                </div>
                <div className="gallery-content">
                  <a className="popup-img gallery-link" href="/assets/img/01.jpg"><i className="fal fa-plus"></i></a>
                </div>
              </div>
            </div>
            <div className="col-md-4 wow fadeInUp">
              <div className="gallery-item">
                <div className="gallery-img">
                  <img src="/assets/img/01.jpg" alt="" />
                </div>
                <div className="gallery-content">
                  <a className="popup-img gallery-link" href="/assets/img/01.jpg"><i className="fal fa-plus"></i></a>
                </div>
              </div>
              <div className="gallery-item">
                <div className="gallery-img">
                  <img src="/assets/img/02.jpg" alt="" />
                </div>
                <div className="gallery-content">
                  <a className="popup-img gallery-link" href="/assets/img/01.jpg">
                    <i className="fal fa-plus"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className='clientlogosec'>
        <div className="site-heading">
          {/* <span className="site-title-tagline textalign_center">--- Client ---</span> */}
          <h2 className="site-title textalign_center">
            We Are <span>Trusted</span> By
          </h2>
        </div>
        <div className="customerLogos">

          <Slider {...clientlogoSlider}>
            <div className='clientLogo_item'>
              <img src="/assets/img/clientlogo/c1.jpg" alt='' />
            </div>
            <div className='clientLogo_item'>
              <img src="/assets/img/clientlogo/c2.png" alt='' />
            </div>
            <div className='clientLogo_item'>
              <img src="/assets/img/clientlogo/c3.jpg" alt='' />
            </div>
            <div className='clientLogo_item'>
              <img src="/assets/img/clientlogo/c4.png" alt='' />
            </div>
            <div className='clientLogo_item'>
              <img src="/assets/img/clientlogo/c5.png" alt='' />
            </div>
            <div className='clientLogo_item'>
              <img src="/assets/img/clientlogo/c6.png" alt='' />
            </div>
            <div className='clientLogo_item'>
              <img src="/assets/img/clientlogo/c7.png" alt='' />
            </div>
            <div className='clientLogo_item'>
              <img src="/assets/img/clientlogo/c8.png" alt='' />
            </div>
            <div className='clientLogo_item'>
              <img src="/assets/img/clientlogo/c9.png" alt='' />
            </div>
            <div className='clientLogo_item'>
              <img src="/assets/img/clientlogo/c10.png" alt='' />
            </div>
            <div className='clientLogo_item'>
              <img src="/assets/img/clientlogo/c11.png" alt='' />
            </div>
            <div className='clientLogo_item'>
              <img src="/assets/img/clientlogo/c12.png" alt='' />
            </div>
            <div className='clientLogo_item'>
              <img src="/assets/img/clientlogo/c13.png" alt='' />
            </div>
            <div className='clientLogo_item'>
              <img src="/assets/img/clientlogo/c14.png" alt='' />
            </div>
            <div className='clientLogo_item'>
              <img src="/assets/img/clientlogo/c15.png" alt='' />
            </div>
            <div className='clientLogo_item'>
              <img src="/assets/img/clientlogo/c16.png" alt='' />
            </div>
            <div className='clientLogo_item'>
              <img src="/assets/img/clientlogo/c17.png" alt='' />
            </div>
            <div className='clientLogo_item'>
              <img src="/assets/img/clientlogo/c18.png" alt='' />
            </div>
            <div className='clientLogo_item'>
              <img src="/assets/img/clientlogo/c19.png" alt='' />
            </div>
            <div className='clientLogo_item'>
              <img src="/assets/img/clientlogo/c20.png" alt='' />
            </div>
            <div className='clientLogo_item'>
              <img src="/assets/img/clientlogo/c21.png" alt='' />
            </div>
            <div className='clientLogo_item'>
              <img src="/assets/img/clientlogo/c22.png" alt='' />
            </div>

          </Slider>


        </div>
      </section>

      {/* <section className="video-area">
        <div className="container">
          <div className="video-content">
            <div className="row align-items-center">
              <div className="col-lg-12">
                <div className="video-wrapper">
                  <a className="play-btn popup-youtube" href="https://www.youtube.com/watch?v=ckHzmP1evNU">
                    <img src="/assets/img/play-icon.svg" alt='play' />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}



    </>

  )
}

export default Mainpage
