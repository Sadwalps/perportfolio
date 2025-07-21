import { faBootstrap, faCss3Alt, faGithub, faHtml5, faJs, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faLink, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

function Homepage() {


  return (
    <>
      <div id='homepage' className='d-flex justify-content-center align-items-center p-2'>
        <div className='container-fluid'>
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-4">
              <div className='w-100 rounded'><img src="https://th.bing.com/th/id/R.743da4010483966718352b50a77e4875?rik=AuKunWb6vuCbTA&riu=http%3a%2f%2fwww.zastavki.com%2fpictures%2foriginals%2f2017Auto___Lamborghini_Yellow_fast_car_Lamborghini_Aventador_Novitec_Torado_LP_750-4_117619_.jpg&ehk=42rlkbN1o4VYXZGvHslvexX5IDSXY7eCctEzdiIloXc%3d&risl=&pid=ImgRaw&r=0" alt="" className='w-100 rounded' /></div>
            </div>
            <div className="col-md-4 ps-5">
              <h2>My Portfolio</h2>
              <h1 id='nametitle'>SADWAL P.S</h1>
              <div><FontAwesomeIcon icon={faPhone} className='me-2' />9207281049</div>
              <div className='mt-2'><FontAwesomeIcon icon={faEnvelope} className='me-2' />9207281049</div>
              <div className='mt-2'><FontAwesomeIcon icon={faGithub} className='me-2' />9207281049</div>
            </div>
            <div className="col-md-2"></div>
          </div>
        </div>


      </div>

      {/* about section */}
      <div className='container-fluid'>
        <div className="row">
          <div id='aboutimg' className="col-4">

          </div>
          <div className='col-1'>

          </div>
          <div className="col-7 d-flex flex-column">
            <div className='mt-5  border border-2 border-primary w-75 ' style={{ height: "40px", float: "right", borderRadius: "20px 0px 0px 20px" }}>
            </div>
            <div>
              <p className='mt-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, delectus excepturi quisquam repellat ut dolorum nostrum quae illum repellendus odit, error voluptatem minus voluptatibus ex quas accusamus facilis dolores. Sequi corporis deleniti aspernatur consectetur officiis facere asperiores voluptate maiores ea?</p>
            </div>

          </div>
        </div>

      </div>

      {/* Education section */}

      <div className='container-fluid pt-4'>
        <div className="row p-3">
          <div className="col-md-5 d-flex  justify-content-center align-items-center">
            <h1 id='nametitle'>Education</h1>


          </div>
          <div className="col-md-7 d-flex flex-column justify-content-center align-items-center">
            <div><h3 className='mt-2'>jshdjhajsjda</h3>
              <h4>shdjas</h4>
              <h3>sjdaksjkdak</h3></div>
            <div><h3 className='mt-2'>jshdjhajsjda</h3>
              <h4>shdjas</h4>
              <h3>sjdaksjkdak</h3></div>


          </div>
        </div>
      </div>

      {/* skills */}
      <div>
        <h1 id='nametitle' className='text-center'> Skills</h1>
        <div className='mt-lg-5 mt-3 container-fluid'>
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
          shjdjahsdas
        </div>
      </div>

      {/* Projects */}
      <div className='container-fluid pt-4'>
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8 m-3">
            <Carousel data-bs-theme="dark">
              <Carousel.Item>
               <div>
                <div className="row">
                  <div className="col-md-2"></div>
                  <div className="col-md-8">
                    <div><img src="https://tse2.mm.bing.net/th/id/OIP.miHtRry8du7aaQACz9U3mwHaE8?r=0&w=3699&h=2466&rs=1&pid=ImgDetMain&o=7&rm=3" className='w-100' alt="" /></div>
                    <div className='d-flex justify-content-between '>
                      <button className='btn btn-primary'>Live Link <FontAwesomeIcon icon={faLink} className='ms-2' /></button>
                      <button className='btn btn-primary'>Git Hub <FontAwesomeIcon icon={faGithub} className='ms-2' /></button>
                    </div>
                  </div>
                  <div className="col-md-2"></div>
                </div>
               </div>
                
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="holder.js/800x400?text=Second slide&bg=eee"
                  alt="Second slide"
                />
                <Carousel.Caption>
                  <h5>Second slide label</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="holder.js/800x400?text=Third slide&bg=e5e5e5"
                  alt="Third slide"
                />
                <Carousel.Caption>
                  <h5>Third slide label</h5>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>



          </div>
          <div className="col-md-2"></div>
        </div>
      </div>


    </>
  )
}

export default Homepage