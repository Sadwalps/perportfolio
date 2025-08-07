import { faBootstrap, faCss3Alt, faGithub, faHtml5, faJs, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faLink, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';

function Homepage() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div id='homepage' className='d-flex justify-content-center align-items-center p-2'>
        <div className='container-fluid'>
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-4">
              <div className='w-100  rounded'><img src="https://th.bing.com/th/id/R.743da4010483966718352b50a77e4875?rik=AuKunWb6vuCbTA&riu=http%3a%2f%2fwww.zastavki.com%2fpictures%2foriginals%2f2017Auto___Lamborghini_Yellow_fast_car_Lamborghini_Aventador_Novitec_Torado_LP_750-4_117619_.jpg&ehk=42rlkbN1o4VYXZGvHslvexX5IDSXY7eCctEzdiIloXc%3d&risl=&pid=ImgRaw&r=0" alt="" className='w-100 rounded' /></div>
            </div>
            <div className="col-md-4 ps-5">
              <h2 className='text-light mt-lg-1 mt-4'>My Portfolio</h2>
              <h1 id='nametitle'>SADWAL P.S</h1>
              <div className='text-light'><FontAwesomeIcon icon={faPhone} className='me-2' />9207281049</div>
              <div className='mt-2 text-light'><FontAwesomeIcon icon={faEnvelope} className='me-2' />sadwalps2255@gmail.com</div>
            </div>
            <div className="col-md-2"></div>
          </div>
        </div>


      </div>

      {/* about section */}
      <div id='about'>
        <div className='container-fluid'>
          <div className="row">
            <div className="col-md-4" id='aboutleftdiv'>
              <h1 id='nametitle'>SADWAL P.S</h1>
            </div>
            <div className='col-md-1'>
            </div>
            <div className="col-md-7 d-flex flex-column">
              <div className='mt-5  border border-2 border-primary w-75 ' style={{ height: "40px", float: "right", borderRadius: "20px 0px 0px 20px" }}>
              </div>
              <div>
                <p className='mt-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, delectus excepturi quisquam repellat ut dolorum nostrum quae illum repellendus odit, error voluptatem minus voluptatibus ex quas accusamus facilis dolores. Sequi corporis deleniti aspernatur consectetur officiis facere asperiores voluptate maiores ea?</p>
              </div>

              {/* Education section */}

              <div className='container-fluid pt-4 d-flex flex-column justify-content-center align-items-center '>
                <h1 id='nametitle'>Education</h1>
                <div><h3 className='mt-2'>jshdjhajsjda</h3>
                  <h4>shdjas</h4>
                  <h3>sjdaksjkdak</h3></div>
                <div><h3 className='mt-2'>jshdjhajsjda</h3>
                  <h4>shdjas</h4>
                  <h3>sjdaksjkdak</h3></div>
              </div>
            </div>
          </div>

        </div>


      </div>

      {/* skills */}
      <div id='skills'>
        <h1 id='nametitle' className='text-center pt-lg-5 pt-4 pb-lg-4 pb-3'> Skills</h1>
        <div className='mt-lg-5 mt-3 pb-lg-5 pb-3 container-fluid'>
          <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-10">
              <div className='container-fluid'>
                <div className="row" >

                  <div className="col-lg-3  col-6 d-flex flex-column justify-content-center align-items-center">
                    {/* box */}
                    <div className='skillsbox'>
                      <FontAwesomeIcon icon={faHtml5} />
                      <div className='skillhoverbox'>
                        HTML
                      </div>
                    </div>
                    <div className='smallscreendiv'>
                      <h6 style={{ fontWeight: "bold" }}>HTML</h6>
                    </div>
                  </div>
                  {/* next col */}
                  <div className="col-lg-3 col-6 d-flex flex-column justify-content-center align-items-center">
                    {/* box */}
                    <div className='skillsbox'>
                      <FontAwesomeIcon icon={faCss3Alt} />
                      <div className='skillhoverbox'>
                        CSS
                      </div>
                    </div>
                    <div className='smallscreendiv'>
                      <h6 style={{ fontWeight: "bold" }}>CSS</h6>
                    </div>
                  </div>
                  {/* next col */}
                  <div className="col-lg-3  col-6 d-flex flex-column justify-content-center align-items-center">
                    {/* box */}
                    <div className='skillsbox'>
                      <FontAwesomeIcon icon={faBootstrap} />
                      <div className='skillhoverbox'>
                        Bootstrap
                      </div>
                    </div>
                    <div className='smallscreendiv'>
                      <h6 style={{ fontWeight: "bold" }}> Bootstrap</h6>
                    </div>
                  </div>
                  {/* next col */}
                  <div className="col-lg-3  col-6 d-flex flex-column justify-content-center align-items-center">
                    {/* box */}
                    <div className='skillsbox'>
                      <FontAwesomeIcon icon={faJs} />
                      <div className='skillhoverbox'>
                        JavaScript
                      </div>
                    </div>
                    <div className='smallscreendiv'>
                      <h6 style={{ fontWeight: "bold" }}>JavaScript</h6>
                    </div>
                  </div>



                </div>


                {/* next row */}
                <div className="row mt-lg-4 mt-2" >

                  <div className="col-lg-3  col-6 d-flex flex-column justify-content-center align-items-center">
                    {/* box */}
                    <div className='skillsbox'>
                      <FontAwesomeIcon icon={faNodeJs} />
                      <div className='skillhoverbox'>
                        node.js
                      </div>
                    </div>
                    <div className='smallscreendiv'>
                      <h6 style={{ fontWeight: "bold" }}>node.js</h6>
                    </div>
                  </div>
                  {/* next col */}
                  <div className="col-lg-3 col-6 d-flex flex-column justify-content-center align-items-center">
                    {/* box */}
                    <div className='skillsbox'>
                      <FontAwesomeIcon icon={faReact} />
                      <div className='skillhoverbox'>
                        react.js
                      </div>
                    </div>
                    <div className='smallscreendiv'>
                      <h6 style={{ fontWeight: "bold" }}> react.js</h6>
                    </div>
                  </div>
                  {/* next col */}
                  <div className="col-lg-3  col-6 d-flex flex-column justify-content-center align-items-center">
                    {/* box */}
                    <div className='skillsbox'>
                      <FontAwesomeIcon icon={faGithub} />
                      <div className='skillhoverbox'>
                        Github
                      </div>
                    </div>
                    <div className='smallscreendiv'>
                      <h6 style={{ fontWeight: "bold" }}>Github</h6>
                    </div>
                  </div>
                  {/* next col */}
                  <div className="col-lg-3  col-6 d-flex flex-column justify-content-center align-items-center">
                    {/* box */}
                    <div className='skillsbox'>
                      <FontAwesomeIcon icon={faHtml5} />
                      <div className='skillhoverbox'>
                        html
                      </div>
                    </div>
                    <div className='smallscreendiv'>
                      <h6 style={{ fontWeight: "bold" }}>html</h6>
                    </div>
                  </div>


                </div>
              </div>
            </div>
            <div className="col-md-1"></div>
          </div>

        </div>
      </div>


      {/* projects */}
      <div className='container-fluid pb-5' id='projects'>
        <h1 id='nametitle' className='text-center pt-lg-5 pt-4 pb-lg-5 pb-4'> Projects</h1>
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8 ">
            <div className="row">
              <div className="col-md-5 px-lg-1 px-5 ">
                <Link to={'miniprojects'} className='text-dark' style={{ textDecoration: "none" }}>
                  <div className='projectcategorydiv'>
                    Mini Projects
                  </div>
                </Link>
              </div>
              <div className="col-md-2"></div>
              <div className="col-md-5 px-lg-1 px-5">
                <Link to={'mainprojects'} className='text-dark' style={{ textDecoration: "none" }}>
                  <div className='projectcategorydiv' >
                    Main Projects
                  </div>
                </Link>
              </div>
            </div>

          </div>
          <div className="col-md-2"></div>
        </div>
      </div>





    </>
  )
}

export default Homepage