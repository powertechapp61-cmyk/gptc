"use client";
import React, {useState} from 'react'
import { Modal } from "react-bootstrap";

const LeaderShipTeam = () => {
  const [showModal, setShowModal] = useState(null); // null or modal id

  const leadershipteamModals = [
    {
      id: 1,
      Img: "/assets/img/director.jpg",
      Name: "Mr. S. A. MOHAMED SULTAN",
      Role: "Managing Director - Power Tech Group Companies",
      content: `
1983 - Bachelor's degree in Mechanical Engineering(B.E.) from Madras University, Tamil Nadu

Chairman - Chennai Power and Desalination Training Institute

A seasoned professional with over 35 years of cross - cultural experience in Operations, Maintenance, Production Planning & Control, Quality Assurance & Manpower Planning in power and desalination plants in India and the Middle East.Experienced with multinational companies such as ABB, Mitsubishi, and Ansaldo.

  Worked in NLC and NTPC - Ramagundam at managerial level. 

Ministry of Electricity and Water, Bahrain - Power and desalination plant.

Dubai Electricity and Water Authority - In charge of water transmission network for Dubai.
    ` },
    {
      id: 2,
      Img: "/assets/img/sheikrajas.jpg",
      Name: "Mr. A. MOHAMMED SHEIK RAJA",
      Role: "General Manager- Power Tech Group Companies",
      content: `B. Tech from Madras University and M.BA (Marketing & Finance) from Delhi
Over 20+ Years of Experience in working with Top Multinational Companies in India & GCC Region
Had worked with Companies like IBM, HPE, DELL and SHARP in leadership roles
Has exposure to various Industries such as Information Technology, Office Automation, Solar, Power Plants and Technical Manpower Provisioning
Driven, Progressive and Team Player with sharp business acumen, who always puts customers first in all his engagement
Won Several Accolades over the years for consistently delivering results and has several Industry certifications under his belt`

    },
    {
      id: 3, Img: "/assets/img/gm1.jpg", Name: "Mr. AHMED IBRAHIM", Role: "General Manager - Global Powertech UAE",
      content: `BE - MBA from Anna University
General Manager - Global Powertech UAE
15+Years’ Experience is Power Transmission and Distribution Engineering, EPC Projects.
Having EPC Experience in 400kV, 132kV, Substation.. Underground Cabling works, OHL line replacement.
Worked in Contractor, Consultant Field such a reputed companies.. Engie, MITSUBISHI ELECTRIC, MOTTMAC DONALD, POYRY SWITZERLAND Executed Ministry Projects in DEWA, Etihad WE, SEWA in UAE` },
    {
      id: 4, Img: "/assets/img/Jasim.jpg", Name: "Mr. J. MOHAMED JASIM", Role: "Manager- Power Tech Group Companies",

      content: `B.E graduate from Anna University with 4+ years of leadership
experience in IT, Data Management, Solar, Power Plants, and Technical Manpower Provisioning. Currently a Manager
at Power Tech Group Companies, previously worked with clients like Reddit and Axis Bank. A results-driven professional with
sharp business acumen, industry certifications, and multiple
accolades for excellence. A proactive team player
committed to innovation and customer success.` },
  ];
  return (
    <>
      <section className='leadershipTeamSec'>
        <div className='container'>

          <div className="site-heading">
            {/* <span className="site-title-tagline textalign_center">--- Team ---</span> */}
            <h2 className="site-title textalign_center">
              Meet our <span>Leadership Team</span>
            </h2>
          </div>



          <div className='row'>
            {leadershipteamModals.map((modal) => (
              <div className='col-lg-3' key={modal.id}>
                <div className='leadershipteamItem mobspaceMb_34' onClick={() => setShowModal(modal.id)}>
                  <div className='leadershipteam-img'>
                    <img src={modal.Img} alt={modal.Name} />
                  </div>
                  <div className='leadershipteam-info'>
                    <h5>{modal.Name}</h5>
                    <p>{modal.Role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {leadershipteamModals.map((modal) => (
            <Modal dialogClassName="leadershipTeamModal-dialog" // styling modal dialog
              contentClassName="leadershipTeamModal-content" // styling modal content
              key={modal.id}
              show={showModal === modal.id}
              onHide={() => setShowModal(null)}
              centered
            >
              <Modal.Header closeButton>
                <Modal.Title>{modal.title}</Modal.Title>
              </Modal.Header>
              <Modal.Body>

                <div className='leadershipteampopUp-info'>
                  <div className="deskFlexMobileBlock alignItem_center gap20 mb_24">
                    <div className='mobspace_mb_16'>
                      <img src={modal.Img} alt={modal.Name} />
                    </div>
                    <div>
                      <h2>{modal.Name}</h2>
                      <h5>{modal.Role}</h5>
                    </div>                      </div>


                  <p>   {modal.content}</p>


                </div>
              </Modal.Body>
            </Modal>
          ))}
        </div>
      </section>
    </>
  )
}

export default LeaderShipTeam;
