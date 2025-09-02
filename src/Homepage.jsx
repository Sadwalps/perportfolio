import { faBootstrap, faCss3Alt, faGithub, faHtml5, faJs, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faLink, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import profilePhoto from './assets/profile pic.jpg'
import tailwindlogo from './assets/tailwindlogo.png'
import Header from './Header';
import Footer from './Footer';

function Homepage() {

  return (
    <>
      <Header />
      <div id='homepage' className='d-flex justify-content-center align-items-center p-2'>
        <div className='container-fluid'>
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-4">
              <div className='w-100  rounded'><img src={profilePhoto} alt="" className='w-100 rounded profileimg' /></div>
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
              <h1 id='nametitle'>ABOUT</h1>
            </div>
            <div className='col-md-1'>
            </div>
            <div className="col-md-7 d-flex flex-column">
              <div className='mt-4  border border-2 border-warning w-100' style={{ height: "40px", float: "right", borderRadius: "20px 20px 20px 20px" }}>
              </div>
              <div>
                <p className='mt-4 text-light px-2' style={{ textAlign: "justify" }} >I’m a passionate and dedicated web developer with a strong foundation in computer science, holding a BSc in Computer Science. To further sharpen my skills and specialize in full-stack development, I completed an intensive MERN Stack course at Luminar Technolab, where I gained hands-on experience in building modern, responsive web applications.

                  I'm now actively seeking opportunities to contribute to innovative development teams, grow professionally,

                  I’m always eager to learn, collaborate, and take on new challenges in the world of web development.</p>

                {/* <span>and create impactful digital experiences using technologies like MongoDB, Express.js, React.js, and Node.js.</span>  */}
              </div>
              <div className='mt-5  border border-2 border-warning w-100' style={{ height: "40px", float: "right", borderRadius: "20px 20px 20px 20px" }}>
              </div>

              {/* Education section */}

              <div className='container-fluid pt-4 d-flex flex-column justify-content-center align-items-center '>
                <h1 id='nametitle'>Education</h1>
                <div className='text-center text-light'>
                  <h4 className='text-warning'>COMPUTER SCIENCE</h4>
                  <div ></div>
                  <p >2019-2021</p>
                  <p >ST. THOMAS HIGHER SECONDARY SCHOOL THOPE, THRISSUR</p></div>
                <div className='text-center text-light mb-3'>
                  <h4 className='text-warning mt-2'>BSC COMPUTER SCIENCE</h4>
                  <div ></div>
                  <p >2021-2024</p>
                  <p >SRI C ACHUTHA MENON GOVERNMENT COLLEGE, THRISSUR</p>
                </div>
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
                      <img src={tailwindlogo} alt="" className='w-100' />
                      <div className='skillhoverbox'>
                        Tailwind CSS
                      </div>
                    </div>
                    <div className='smallscreendiv'>
                      <h6 style={{ fontWeight: "bold" }}>Tailwind CSS</h6>
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
      <div className='container-fluid pb-5 ' id='projects'>
        <h1 id='nametitle' className='text-center pt-lg-5 pt-5 pb-lg-5 pb-4'> Projects</h1>
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8 ">
            <div className="row">
              <div className="col-md-5 px-lg-1 px-5">
                <Link to={'mainprojects'} className='text-dark' style={{ textDecoration: "none" }}>
                  <div className='projectcategorydiv' >
                    Main Projects
                  </div>
                </Link>
              </div>

              <div className="col-md-2"></div>
              <div className="col-md-5 px-lg-1 px-5 mb-lg-5 mb-3">
                <Link to={'miniprojects'} className='text-dark' style={{ textDecoration: "none" }}>
                  <div className='projectcategorydiv'>
                    Other Projects
                  </div>
                </Link>
              </div>
            </div>

          </div>
          <div className="col-md-2 "></div>
        </div>
      </div>

      <Footer />





    </>
  )
}

export default Homepage