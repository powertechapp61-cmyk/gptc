'use client'
import { usePathname, useParams } from 'next/navigation'
import Service from "../../Components/Layout/Sevice";
import Link from 'next/link';



const ServicePage = () => {
    const pathname = usePathname()
    const params = useParams()
    const pagename = params.type;
    //  const tabs = [
    // {
    //   id: "side_tab1", title: "Online Safety Valve Testing (Trevi Type)", content: (
    //     <>
    //       <div className='mb_24'>
    //         <img src="/assets/img/treviType.webp" alt="Online Safety Valve Testing (Trevi Type)" />
    //       </div>
    //       <p className='spitsbergenBlueText_clr fontSize16 fontWeight400 mb_16'>THE ONLY THING MORE IMPORTANT THAN A SAFETY VALVE IS HOW YOU TEST IT</p>
    //       <h5>AccuTEST Safety Valve Test System & L – PLAN LEGA TEST System- Online Safety Valve Testing Test Online</h5>
    //       <p className='spitsbergenBlueText_clr fontSize16 fontWeight400 mb_16'>Safety valves are essential to the protection of lives and property, so regular testing is crucial to ensure that valves are functioning properly. But can you really be sure of the results if the test is not conducted under the stress of everyday conditions?</p>
    //       <Link href="/service-page/online_safety_testing">To know more Click Here</Link>


    //     </>
    //   )
    // },]
    const pageData = {
        online_safety_testing: {
            title: "Online Safety Valve Testing (Trevi Type)",
            subTitle: "SERVICES",
            bannerImg: "/assets/img/online_safety_valve_bnr.png",
            bannerparagraph: "Safety valves are essential to the protection of lives and property, so regular testing is crucial to ensure that valves are functioning properly.",
            content: (
                <>
                    <h5 className='fontSize18 fontWeight600 blackText_Clr mb_12'>Testing Procedure</h5>

                    <ul className='mb_40'>
                        <li className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_12'>Online testing of steam relief safety valves is an accepted method of Relief Valve testing for all type of safety relief valves.</li>
                        <li className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_12'>A load cell is mounted with electronic DC moter puller on the valve's stem top.</li>
                        <li className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_12'>This pulls the stem thereby trying to lift the disc.</li>
                        <li className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_12'>The net result is that the valve pops at a pressure set pressure less electronic pressure calculated on the basis of disc area.</li>
                        <li className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_12'>We do not have to actually raise system pressure to the set point of the Relief Valve.</li>
                        <li className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_12'>But , Electronic Test puller can be apply more than 100 kg/cm2 pressure on the valve disc depending on disc area.</li>
                        <li className='fontSize16 fontWeight400 shearwaterBlackText_clr'>Still, since the system pressure remains very less than set pressure when the valave pops, it is safer. This method is normally used for stem safety relief valves.</li>

                    </ul>
                    <div className='row alignItem_center'>
                        <div className='col-lg-6 mobspaceMb_24'>
                            {[
                                "/assets/img/onlineSafety_detail.png"
                            ].map((img, index) => (
                                <div key={index}>
                                    <div className='serviceContentImg'>
                                        <img src={img} alt={`service-img-${index}`} />
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className='col-lg-6'>





                            <h5 className='fontSize16 fontWeight600 blackText_Clr'>Valve Types</h5>
                            <p className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_16'>All Type of safety valves, Safety Relief Valves, Pressure Relief Valves can be test.</p>

                            <h5 className='fontSize16 fontWeight600 blackText_Clr'>Certification</h5>
                            <p className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_16'>Our machine is already Tested in USA and certified with TUV SUD, also we are ISO 9001 : 2008 Certified and OSHAS 18001:2007 certified company</p>

                            <h5 className='fontSize16 fontWeight600 blackText_Clr'>Calibration Certificate</h5>
                            <p className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_16'>Our machine is already Tested on Honeywell in USA and certified with TUV SUD.</p>

                            <h5 className='fontSize16 fontWeight600 blackText_Clr'> Reference List</h5>
                            <p className='fontSize16 fontWeight400 shearwaterBlackText_clr'>TANGEDCO, TNPL, ALSTOM, LANCO, GMR, WARTSILA, STERLITE, ADHUNIK, CEGAS-EGYPT,TNPL</p>


                        </div>
                    </div>
                </>
            ),

        },
        offline_valve_testing: {
            title: "Offline Valve Testing",
            subTitle: "SERVICES",
            bannerImg: "/assets/img/offlineValve_testing_bnr.png",
            bannerparagraph: "Safety valves are essential to the protection of lives and property, so regular testing is crucial to ensure that valves are functioning properly.",
            content: (
                <>
                    <h5 className='fontSize18 fontWeight600 blackText_Clr mb_12'>Testing Procedure</h5>
                    <p className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_34'>Power Tech is a complete valve repair facility.  We have the capability of repairing any type of valve from safety valves to control valves to gate valves to large butterfly valves.  We have factory trained technicians and work very closely with many valve and actuator manufacturers.</p>
                    <div className='row '>
                        <div className='col-lg-6 mobspaceMb_24'>
                            {[
                                "/assets/img/offline_valve_testing_detail.png"
                            ].map((img, index) => (
                                <div key={index}>
                                    <div className='serviceContentImg'>
                                        <img src={img} alt={`service-img-${index}`} />
                                    </div>
                                </div>
                            ))}


                        </div>
                        <div className='col-lg-6'>





                            <h5 className='fontSize16 fontWeight600 blackText_Clr'>Valve Types</h5>
                            <p className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_16'>We are doing servicing of all types of Industrial Valves. Being the company with well-equipped set up and outstanding team of expert work force, the unit provides both onsite and offsite servicing activities whether the requirement is for one valve or for a complete plant. It has a wealth of multi-skilled engineers who provide complete valve management services for valves of Any Size / Age / Type / Make / Rating / MOC / Temp</p>

                            <div className='valvetypesGrid'>
                                <span>Gate Valves</span>
                                <span>Check Valves (NRV)</span>
                                <span>Sluice Valves,</span>
                                <span>Control Valves service & Calibration</span>
                                <span>Plug Valves,</span>
                                <span>Wafer type butterfly Valves</span>
                                <span> Non-slam check Valves</span>
                                <span> Knife Edge Gate Valves (EPDM Rubber Seat Rings)</span>
                                <span>  Globe Valves</span>
                                <span>Ball Valves</span>
                                <span> Hydrant Valves</span>
                                <span>Safety Valves</span>
                                <span> Wafer check Valves</span>
                            </div>

                            <h5 className='fontSize16 fontWeight600 blackText_Clr'>Certification</h5>
                            <p className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_16'>Our machine is already Tested in USA and certified with TUV SUD, also we are ISO 9001 : 2008 Certified and OSHAS 18001:2007 certified company</p>






                        </div>
                    </div>
                </>
            ),


        },

        alltype_valve_services: {
            title: "All Types of Valve Servicing",
            subTitle: "SERVICES",
            bannerImg: "/assets/img/allType_valveServicing_bnr.png",
            bannerparagraph: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            content: (
                <>
                    <h5 className='fontSize18 fontWeight600 blackText_Clr mb_12'>Workshop Facility</h5>
                    <p className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_34'>Power Tech is a complete valve repair facility. We have the capability of repairing any type of valve from safety valves to control valves to gate valves to large butterfly valves. We have factory trained technicians and work very closely with many valve and actuator manufacturers.</p>
                    <div className='row alignItem_center'>
                        <div className='col-lg-6 mobspaceMb_24'>
                            {[
                                "/assets/img/allType_valveServicing_detail.png"
                            ].map((img, index) => (
                                <div key={index}>
                                    <div className='serviceContentImg'>
                                        <img src={img} alt={`service-img-${index}`} />
                                    </div>
                                </div>
                            ))}


                        </div>
                        <div className='col-lg-6'>

                            <h2 className='fontSize18 fontWeight600 bainganiText_Clr'>Portable Machines for Valve Services</h2>

                            <h5 className='fontSize16 fontWeight600 blackText_Clr'>Type of Valve Services</h5>
                            <p className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_16'>We are doing servicing of all types of Industrial Valves. Being the company with well-equipped set up and outstanding team of expert work force, the unit provides both onsite and offsite servicing activities whether the requirement is for one valve or for a complete plant. It has a wealth of multi-skilled engineers who provide complete valve management services for valves of Any Size / Age / Type / Make / Rating / MOC / Temp</p>

                            <div className='valvetypesGrid'>
                                <span>Gate Valves</span>
                                <span>Check Valves (NRV)</span>
                                <span>Sluice Valves,</span>
                                <span>Control Valves service & Calibration</span>
                                <span>Plug Valves,</span>
                                <span>Wafer type butterfly Valves</span>
                                <span> Non-slam check Valves</span>
                                <span> Knife Edge Gate Valves (EPDM Rubber Seat Rings)</span>
                                <span>  Globe Valves</span>
                                <span>Ball Valves</span>
                                <span> Hydrant Valves</span>
                                <span>Safety Valves</span>
                                <span> Wafer check Valves</span>
                            </div>

                            <h5 className='fontSize16 fontWeight600 blackText_Clr mb_12'>Key Clients</h5>

                            <div className='valvetypesGrid'>
                                <span>ENERFLEX</span>
                                <span>Gulf Petrochemical Industries.co(GPIC)</span>
                                <span>Aldur Power and Maintenance Company W.L.L</span>
                                <span>Ahmadi Industries B.S.C</span>
                                <span>eNGie STOMO</span>
                                <span>Pepsico</span>
                            </div>


                        </div>
                    </div>
                </>
            ),
        },
        online_seal_leaking: {
            title: "ONLINE SEAL LEAKING",
            subTitle: "SERVICES",
            bannerImg: "/assets/img/seal_leaking.jpg",
            bannerparagraph: "Online leak sealing today is the leak-sealing solutions of choice as it saves energy, prevents and expensive and unwanted shutdown and can address a wide variety of leaks. With the combination of engineering solutions support from global experts, we have leak sealing compounds that can address a wide variety of steam, chemical, hydrocarbon and gas leaks at temperature up to 700° C. ",
            content: (
                <>
                    <h5 className='fontSize18 fontWeight600 blackText_Clr mb_12'>​POWER TECH – INNOVATIVE AND INVOLVED</h5>
                    <p className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_24'>Power tech specializes in minimizing asset downtime by providing innovative on-line leak sealing services. We currently supply our services to the power, oil &amp; gas industries. Our extensive engineering support, widespread international leak sealing experience, 100% injury free service record satisfy the specific needs of the individual customer.</p>

                    <div className='mb_16'>
                        <img className='width150px' src="/assets/img/sylmasta.png" />
                    </div>


                    <p className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_34'>
                        We are pleased to say that we have partnered up with Sylmasta UK, a world-leader in providing online leak sealing solutions to provide Polymer-based Innovative Online Leak Sealing Services to India. We are the sole distributor of <Link class="fontWeight500 bainganiText_Clr" target="_blank" href="https://www.sylmasta.com/">Sylmasta</Link> Leak sealing products and, therefore, this makes Power tech the leak sealing company of choice.  This Polymer based “On-line sealing” is an innovation of tremendous benefit to industry. A variety of leaks on various systems can be sealed on-site in a safe, efficient, non-destructive and cost-efficient manner without isolation and without loss in production thus minimizing noise and emission levels, erosion damage and improves plant safety whilst maintaining equipment integrity.
                    </p>

                    <div className='row alignItem_center'>
                        <div className='col-lg-6 mobspaceMb_24'>
                            {[
                                "/assets/img/sealLeaking_detail.png"
                            ].map((img, index) => (
                                <div key={index}>
                                    <div className='serviceContentImg'>
                                        <img src={img} alt={`service-img-${index}`} />
                                    </div>
                                </div>
                            ))}


                        </div>
                        <div className='col-lg-6'>


                            <h5 className='fontSize16 fontWeight600 blackText_Clr mb_16'>REPAIR EXAMPLES</h5>

                            <div className='valvetypesGrid'>
                                <span>Valve Gland Leak</span>

                                <span>Valve Body Leaks</span>

                                <span>Valve Bonnet Leaks</span>

                                <span>Heat Exchanger Leaks</span>

                                <span>Pressure Vessel Repairs</span>

                                <span>Expansion Joint Repairs</span>

                                <span>Flange Connection Leak Repairs</span>

                                <span>Pipeline Leak Repairs</span>

                                <span>Riser Repairs</span>

                                <span>Valve Gland Leaks</span>

                                <span>Line Crimping</span>

                                <span>Composite Repairs</span>

                                <span>Strong Back Systems</span>
                            </div>

                            <h5 className='fontSize16 fontWeight600 blackText_Clr mb_12'>ADVANTAGES</h5>

                            <ul className='mb_40'>
                                <li className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_12'>Save millions in operational down time, your leaks are repaired while your facilities stay on-line</li>
                                <li className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_12'>Quality approved products</li>
                                <li className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_12'> Minimize production loss</li>
                                <li className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_12'> Massive energy saving</li>
                                <li className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_12'>Minimize harmful emissions to the atmosphere</li>
                                <li className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_12'>Minimize noise pollution</li>
                                <li className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_12'>Create safer working conditions</li>
                                <li className='fontSize16 fontWeight400 shearwaterBlackText_clr'>  Prevent spillages and pollution</li>
                            </ul>

                        </div>
                    </div>
                </>
            ),


        },

        hot_tapping: {
            title: "Hot Tapping & Insertion of S-Type (Gate Valve Online)",
            subTitle: "SERVICES",
            bannerImg: "/assets/img/hotTapping_bnr.png",
            bannerparagraph: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            content: (
                <>
                    <h5 className='fontSize18 fontWeight600 blackText_Clr mb_12'>When Hot Tapping Makes the Difference: Minimizing Disruption and Maximizing Efficiency</h5>


                    <p className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_16'>In the world of pipeline management, efficiency and minimal disruption are key. That's where hot tapping comes in, a specialized technique that allows you to connect to existing pipelines without interrupting the flow. This blog post dives into the benefits of hot tapping and the scenarios where it shines.</p>

                    <p className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_16'><span className='fontWeight600'>Uninterrupted Operations:</span> Imagine needing to upgrade your pipeline system. Traditionally, this would mean shutting down the entire operation, resulting in lost production, frustrated customers, and significant financial losses. Enter hot tapping. This innovative method lets you seamlessly add new branches or isolate sections for maintenance all while the pipeline remains active. It's like performing surgery on a running engine – a feat of engineering brilliance.</p>

                    <p className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_16'><span className='fontWeight600'>Safety and Environmental Benefits:</span> Beyond avoiding costly downtime, hot tapping also prioritizes safety and environmental responsibility. By eliminating the need for depressurization, the risks associated with handling highly pressurized systems are significantly reduced. Additionally, hot tapping minimizes product loss and prevents harmful gas emissions, making it a sustainable choice for your business and the planet.</p>

                    <p className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_34'><span className='fontWeight600'>Cost-Effective Efficiency:</span> Let's talk numbers. By eliminating the need for lengthy shutdowns and complex rewelding procedures, hot tapping offers tangible cost savings. Less planning, reduced manpower requirements, and faster project completion times all add up to a more efficient and financially advantageous solution.</p>



                    <div className='row alignItem_center'>
                        <div className='col-lg-4 mobspaceMb_24'>
                            {[
                                "/assets/img/hot_tapping_detail.png"
                            ].map((img, index) => (
                                <div key={index}>
                                    <div className='serviceContentImg'>
                                        <img src={img} alt={`service-img-${index}`} />
                                    </div>
                                </div>
                            ))}


                        </div>
                        <div className='col-lg-8'>


                            <h5 className='fontSize16 fontWeight600 blackText_Clr mb_12'>But Is Hot Tapping Always the Answer?</h5>

                            <p className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_16'>While hot tapping boasts impressive advantages, it's crucial to acknowledge that it's not a one-size-fits-all solution. This complex procedure requires extensive expertise and specialized equipment. Therefore, it's essential to carefully evaluate your specific needs and consider alternative methods before making a decision. Hot tapping thrives when:</p>

                            <ul className='mb_40'>
                                <li className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_12'>Shutting down the pipeline is impractical or financially detrimental.</li>
                                <li className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_12'>Minimizing downtime and maintaining operations is paramount.</li>
                                <li className='fontSize16 fontWeight400 shearwaterBlackText_clr'>Safety and environmental considerations are high priorities.</li>
                            </ul>

                            <h5 className='fontSize16 fontWeight600 blackText_Clr mb_12'>Conclusion</h5>

                            <p className='fontSize16 fontWeight400 shearwaterBlackText_clr'>Hot tapping is more than just a fancy technique; it's a game-changer in the world of pipeline management. By prioritizing efficiency, safety, and sustainability, it offers a clear advantage for maintaining and upgrading your system with minimal disruption. If you're looking for a way to keep your operations flowing while optimizing your pipeline network, hot tapping might just be the answer you've been searching for</p>


                        </div>
                    </div>
                </>
            ),
        },
        heat_exchanger: {
            title: "Heat Exchanger, Maintenance & Supply",
            subTitle: "SERVICES",
            bannerImg: "/assets/img/heatExchanger_bnr.png",
            bannerparagraph: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            content: (
                <>
                    <h5 className='fontSize16 fontWeight600 blackText_Clr mb_12'>HEAT EXCHANGER MAINTENANCE</h5>
                    <ul className='mb_40'>
                        <li className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_12'>Heat Exchangers are Important Heat transfer Equipment in Power & Process Industry.</li>
                        <li className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_12'>Trouble free Performance of the Heat exchanger is critical for Plant Operations and reliability.</li>
                        <li className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_12'>PTD offers complete end to end services including Retubing and repair of Heat exchanger tubes as per customer needs.</li>
                        <li className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_12'>Scope of service includes complete disassembly, Inspection, Manual Cleaning, Hydro jetting and hydro testing of heat exchanger.</li>
                        <li className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_12'>Rectification of Leaking tubes and final assembly.</li>

                        <li className='fontSize16 fontWeight400 shearwaterBlackText_clr'>Testing and Handover to Customer site.</li>
                    </ul>


                    <div className='row alignItem_center'>
                        <div className='col-lg-6 mobspaceMb_24'>
                            {[
                                "/assets/img/heatExchanger_detail.png"
                            ].map((img, index) => (
                                <div key={index}>
                                    <div className='serviceContentImg'>
                                        <img src={img} alt={`service-img-${index}`} />
                                    </div>
                                </div>
                            ))}


                        </div>
                        <div className='col-lg-6'>
                            <h5 className='fontSize16 fontWeight600 blackText_Clr mb_8'>Tube Extraction</h5>
                            <p className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_16'>Old tubes are removed if found any damages along with the tube ends .Any minor tube sheet cracks are then repaired to the ASME code specifications.</p>

                            <h5 className='fontSize16 fontWeight600 blackText_Clr mb_8'>Safely Tube transport</h5>

                            <p className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_16'>We followed standard procedure and executed tube transport.</p>

                            <h5 className='fontSize16 fontWeight600 blackText_Clr mb_8'>Bundle cleaning</h5>
                            <p className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_12'>Tube bundle cleaning carry sufficient manner and removing</p>

                            <ul className='mb_16'>
                                <li className='fontSize16 fontWeight400 shearwaterBlackText_clr'>Heater shell repairing work will carry as per standard procedure (ASME code)</li>
                                <li className='fontSize16 fontWeight400 shearwaterBlackText_clr'>Tube inserts in a proper method.</li>
                            </ul>


                            <h5 className='fontSize16 fontWeight600 blackText_Clr mb_8'>New tubes (Manufacture to meet or exceed specifications) are installed</h5>

                            <ul className='mb_16'>
                                <li className='fontSize16 fontWeight400 shearwaterBlackText_clr'>Baffle plates replaced.</li>
                                <li className='fontSize16 fontWeight400 shearwaterBlackText_clr'>Hydro test of heat exchanger</li>
                            </ul>

                            <p className='fontSize16 fontWeight400 shearwaterBlackText_clr'>Also, we are supply Heat exchanger according to ASME sex-8 and specialized in fabrication of heater shell.</p>
              
                                     </div>
                    </div>
                </>
            ),

        },

    // content not confirm

            ro_membrane: {
                title: "RO Plants Retro Fitting",
                subTitle: "REPLACEMENT SERVICES",
                bannerImg: "/assets/img/roplants_retro_detail.png",
                bannerparagraph: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",

                content: [
                    "PTD specializes in providing professional RO membrane replacement services",
                    "Maintaining the highest standards of quality and performance.",
                    "With our extensive experience and commitment to excellence, we help our clients achieve optimal operation and longevity of their RO systems."
                ],
                imgs: [
                    "/assets/img/roplants_retro_detail.png"
                ],
                clients: []

            },







            ro_plant_epc_contracts: {
                title: "RO Plant EPC Contracts Upto 2MIGPDA",
                subTitle: "SERVICES",
                bannerImg: "/assets/img/heatExchanger_bnr.png",
                bannerparagraph: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                content: [
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                ],
                imgs: [
                    "/assets/img/heatExchanger_detail.png",
                ],
                clients: [
                    {
                        name: "BAHRAIN",
                        companines: [
                            "FOULATH HOLDING B.S.C ",
                            "BAHRAIN STEELS BSCC (E.C)"
                        ]
                    },
                    {
                        name: "DUBAI",
                        companines: [
                            "SHOMCO"
                        ]
                    }
                ]
            },

            solar_plant_epc: {
                title: "Solar Plant EPC upto  5MW & Maintenance",
                subTitle: "SERVICES",
                bannerImg: "/assets/img/heatExchanger_bnr.png",
                bannerparagraph: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                content: [
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                ],
                imgs: [
                    "/assets/img/heatExchanger_detail.png",
                ],
                clients: [
                    {
                        name: "BAHRAIN",
                        companines: [
                            "FOULATH HOLDING B.S.C ",
                            "BAHRAIN STEELS BSCC (E.C)"
                        ]
                    },
                    {
                        name: "DUBAI",
                        companines: [
                            "SHOMCO"
                        ]
                    }
                ]
            },

            upvc_aluminiumdoors_windowsfabrication: {
                title: "UPVC & Aluminium Doors & Windows Fabrication & Installation",
                subTitle: "SERVICES",
                bannerImg: "/assets/img/upvc_bnr.png",
                bannerparagraph: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                content: [
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                ],
                imgs: [
                    "/assets/img/upvc_bnr.png",
                ],
                clients: [
                    {
                        name: "BAHRAIN",
                        companines: [
                            "FOULATH HOLDING B.S.C ",
                            "BAHRAIN STEELS BSCC (E.C)"
                        ]
                    },
                    {
                        name: "DUBAI",
                        companines: [
                            "SHOMCO"
                        ]
                    }
                ]
            },

            technical_manpower_supply_for_power_plant_refineries_and_water_plant: {
                title: "Technical Manpower supply for Power plant refineries and Water plant",
                subTitle: "SERVICES",
                bannerImg: "/assets/img/upvc_bnr.png",
                bannerparagraph: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                content: [
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                ],
                imgs: [
                    "/assets/img/upvc_bnr.png",
                ],
                clients: [
                    {
                        name: "BAHRAIN",
                        companines: [
                            "FOULATH HOLDING B.S.C ",
                            "BAHRAIN STEELS BSCC (E.C)"
                        ]
                    },
                    {
                        name: "DUBAI",
                        companines: [
                            "SHOMCO"
                        ]
                    }
                ]
            },
    }

    return (
        <>

            <Service pageData={pageData[`${pagename}`]} pagename={pagename} />


            <section className='leadsGeneration_sec' id="to-know-more-contact-us">
                <div className='container'>

                    <div className='leadsGen-wrapper'>
                        <div className='row'>
                            <div className='col-lg-5'>
                                <div className='leadsGen-img'>
                                    <img src="/assets/img/leadsGen_img.png" alt='lead gen' />
                                </div>
                            </div>
                            <div className='col-lg-7'>
                                <div className='leadGenFrame'>
                                    <h2>To Know More Contact Us</h2>

                                    <p className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_24'>It is a long established fact that a reader will be distracted by the readable content of a page randomised words which don&apos;t look even slightly when looking at its layout.</p>
                                    <form>

                                        <div className='row'>
                                            <div className='col-lg-6'>
                                                <div className="mb_24">
                                                    {/* <label className="labeltext">First Name</label> */}
                                                    <input placeholder='First name'
                                                        type="text"
                                                        name="name"
                                                        className="mainInput"
                                                    />
                                                </div>
                                            </div>
                                            <div className='col-lg-6'>
                                                <div className="mb_24">
                                                    {/* <label className="labeltext">Last Name</label> */}
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
                                                    {/* <label className="labeltext">Phone number</label> */}
                                                    <input placeholder='Company Name'
                                                        type="text"
                                                        name="name"
                                                        className="mainInput"
                                                    />
                                                </div>
                                            </div>



                                            <div className='col-lg-6'>
                                                <div className="mb_24">
                                                    {/* <label className="labeltext">Email Address</label> */}
                                                    <input placeholder='Company Email Address'
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
                                                    {/* <label className="labeltext">Company Name</label> */}
                                                    <input placeholder='Primary Phone Number'
                                                        type="text"
                                                        name="name"
                                                        className="mainInput"
                                                    />
                                                </div>
                                            </div>
                                            <div className='col-lg-6'>
                                                <div className="mb_24">
                                                    {/* <label className="labeltext">Job Title</label> */}
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
                                                    {/* <label className="labeltext">Job Title</label> */}

                                                    <select className="mainInput">
                                                        <option>Select Category </option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className='col-lg-6'>
                                                <div className="mb_24">
                                                    {/* <label className="labeltext">Country</label> */}
                                                    <input placeholder='Country'
                                                        type="text"
                                                        name="name"
                                                        className="mainInput"
                                                    />
                                                </div>
                                            </div>

                                        </div>







                                        <button
                                            type="submit"
                                            className="mainbtn">
                                            SUBMIT FORM
                                        </button>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default ServicePage;