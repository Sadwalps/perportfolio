import React from 'react'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import Carousel from 'react-bootstrap/Carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faLink } from '@fortawesome/free-solid-svg-icons'
import restaurant from './assets/Restaurant.png'
import mobileShop from './assets/mobile-shop.png'
import portfolio from './assets/portfolio.png'
import library from './assets/library.png'
import uberEats from './assets/uber-eats-clone.png'
import bmiCalculator from './assets/bmi-calculator.png'
import imgGallery from './assets/img-gallery.png'
import weatherWatch from './assets/weather-watch.png'
import Accordion from 'react-bootstrap/Accordion';

function Mainproject() {
   
    return (
        <>
            <div className='projectpageheader container-fluid'>
                <div className="row">
                    <div className="col-3"></div>
                    <div className="col-3"></div>
                    <div className="col-3"></div>
                    <div className="col-3 pe-3">
                        <a href="/"> <button className='btn m-2 px-3' id='nav' style={{ float: "right" }}><FontAwesomeIcon icon={faArrowLeft} className='fa-2x' /></button></a>
                    </div>
                </div>
            </div>
            <div className='container-fluid pt-4 pb-4' id='mainprojects'>
                <h1 id='nametitle' className='text-center mt-lg-4 mt-3 mb-lg-4 mb-3'>Main Projects</h1>
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8 m-3 ">
                    </div>
                    <div className="col-md-2"></div>
                </div>
                <Carousel data-bs-theme="dark">
                    {/* restaurant */}
                    <Carousel.Item>
                        <div className="row">
                            <div className="col-md-2"></div>
                            <div className="col-md-8 ">
                                <div className="row">
                                    <div className="col-md-2"></div>
                                    <div className="col-md-8">
                                        <div >

                                            {/* Accordion for displaying technologies used */}
                                            <Accordion  >
                                                <Accordion.Item eventKey="0">
                                                    <Accordion.Header >
                                                        Technologies used
                                                    </Accordion.Header>
                                                    <Accordion.Body className='technologiesaccordion'>
                                                        <ol>
                                                            <li>HTML</li>
                                                            <li>CSS</li>
                                                            <li>Responsive using Media queries</li>
                                                        </ol>
                                                    </Accordion.Body>
                                                </Accordion.Item>

                                            </Accordion>

                                        </div>
                                        {/* image */}
                                        <div className='d-flex flex-column  justify-content-center align-items-center'>
                                            <div>
                                                <img src={restaurant} alt="" className='w-100' />
                                            </div>
                                        </div>
                                        {/* buttons */}
                                        <div className=' d-flex justify-content-between '>
                                            <a href="https://startling-griffin-e8c4ad.netlify.app" ><button className='btn btn-primary' >Live Link <FontAwesomeIcon icon={faLink} className='ms-1' /></button></a>
                                            <a href="https://github.com/Sadwalps/restaurant-website"><button className='btn btn-success' >Git Hub <FontAwesomeIcon icon={faGithub} className='ms-1' /></button></a>
                                        </div>
                                    </div>
                                    <div className="col-md-2"></div>
                                </div>
                            </div>
                            <div className="col-md-2"></div>
                        </div>
                    </Carousel.Item>

                    {/* mobile shop */}
                    <Carousel.Item>
                        <div className="row">
                            <div className="col-md-2"></div>
                            <div className="col-md-8 ">
                                <div className="row">
                                    <div className="col-md-2"></div>
                                    <div className="col-md-8">
                                        <div>
                                            {/* Accordion for displaying technologies used */}
                                            <Accordion  >
                                                <Accordion.Item eventKey="0">
                                                    <Accordion.Header >
                                                        Technologies used
                                                    </Accordion.Header>
                                                    <Accordion.Body className='technologiesaccordion'>
                                                        <ol>
                                                            <li>HTML</li>
                                                            <li>CSS</li>
                                                            <li>bootstrap</li>
                                                        </ol>
                                                    </Accordion.Body>
                                                </Accordion.Item>

                                            </Accordion>
                                        </div>
                                        {/* image */}
                                        <div className='d-flex flex-column  justify-content-center align-items-center'>
                                            <div>
                                                <img src={mobileShop} alt="" className='w-100' />
                                            </div>
                                        </div>
                                        {/* buttons */}
                                        <div className=' d-flex justify-content-between '>
                                            <a href="https://darling-axolotl-6566d4.netlify.app/" ><button className='btn btn-primary' >Live Link <FontAwesomeIcon icon={faLink} className='ms-1' /></button></a>
                                            <a href="https://github.com/Sadwalps/Mobile-shop-website"><button className='btn btn-success' >Git Hub <FontAwesomeIcon icon={faGithub} className='ms-1' /></button></a>
                                        </div>
                                    </div>
                                    <div className="col-md-2"></div>
                                </div>
                            </div>
                            <div className="col-md-2"></div>
                        </div>
                    </Carousel.Item>


                    {/* weather */}
                    <Carousel.Item>
                        <div className="row">
                            <div className="col-md-2"></div>
                            <div className="col-md-8 ">
                                <div className="row">
                                    <div className="col-md-2"></div>
                                    <div className="col-md-8">
                                        <div>
                                            {/* Accordion for displaying technologies used */}
                                            <Accordion  >
                                                <Accordion.Item eventKey="0">
                                                    <Accordion.Header >
                                                        Technologies used
                                                    </Accordion.Header>
                                                    <Accordion.Body className='technologiesaccordion'>
                                                        <ol>
                                                            <li>HTML</li>
                                                            <li>CSS</li>
                                                            <li>bootstrap</li>
                                                            <li>javaScript</li>
                                                        </ol>
                                                    </Accordion.Body>
                                                </Accordion.Item>

                                            </Accordion>
                                        </div>
                                        {/* image */}
                                        <div className='d-flex flex-column  justify-content-center align-items-center'>
                                            <div>
                                                <img src={weatherWatch} alt="" className='w-100' />
                                            </div>
                                        </div>
                                        {/* buttons */}
                                        <div className=' d-flex justify-content-between '>
                                            <a href="https://weather-application-smoky-rho.vercel.app/" ><button className='btn btn-primary' >Live Link <FontAwesomeIcon icon={faLink} className='ms-1' /></button></a>
                                            <a href="https://github.com/Sadwalps/weather-application"><button className='btn btn-success' >Git Hub <FontAwesomeIcon icon={faGithub} className='ms-1' /></button></a>
                                        </div>
                                    </div>
                                    <div className="col-md-2"></div>
                                </div>
                            </div>
                            <div className="col-md-2"></div>
                        </div>
                    </Carousel.Item>


                    {/* library */}
                    <Carousel.Item>
                        <div className="row">
                            <div className="col-md-2"></div>
                            <div className="col-md-8 ">
                                <div className="row">
                                    <div className="col-md-2"></div>
                                    <div className="col-md-8">
                                        <div>
                                            {/* Accordion for displaying technologies used */}
                                            <Accordion  >
                                                <Accordion.Item eventKey="0">
                                                    <Accordion.Header >
                                                        Technologies used
                                                    </Accordion.Header>
                                                    <Accordion.Body className='technologiesaccordion'>
                                                        <ol>
                                                            <li>HTML</li>
                                                            <li>CSS</li>
                                                            <li>React.js</li>
                                                            <li>React bootstrap</li>
                                                        </ol>
                                                    </Accordion.Body>
                                                </Accordion.Item>

                                            </Accordion>
                                        </div>
                                        {/* image */}
                                        <div className='d-flex flex-column  justify-content-center align-items-center'>
                                            <div>
                                                <img src={library} alt="" className='w-100' />
                                            </div>
                                        </div>
                                        {/* buttons */}
                                        <div className=' d-flex justify-content-between '>
                                            <a href="https://library-azure-seven.vercel.app/" ><button className='btn btn-primary' >Live Link <FontAwesomeIcon icon={faLink} className='ms-1' /></button></a>
                                            <a href="https://github.com/Sadwalps/library"><button className='btn btn-success' >Git Hub <FontAwesomeIcon icon={faGithub} className='ms-1' /></button></a>
                                        </div>
                                    </div>
                                    <div className="col-md-2"></div>
                                </div>
                            </div>
                            <div className="col-md-2"></div>
                        </div>
                    </Carousel.Item>


                    {/* uber eats clone */}
                    <Carousel.Item>
                        <div className="row">
                            <div className="col-md-2"></div>
                            <div className="col-md-8 ">
                                <div className="row">
                                    <div className="col-md-2"></div>
                                    <div className="col-md-8">
                                        <div>
                                            {/* Accordion for displaying technologies used */}
                                            <Accordion  >
                                                <Accordion.Item eventKey="0">
                                                    <Accordion.Header >
                                                        Technologies used
                                                    </Accordion.Header>
                                                    <Accordion.Body className='technologiesaccordion'>
                                                        <ol>
                                                            <li>HTML</li>
                                                            <li>CSS</li>
                                                            <li>React.js</li>
                                                            <li>React bootstrap</li>
                                                        </ol>
                                                    </Accordion.Body>
                                                </Accordion.Item>

                                            </Accordion>
                                        </div>
                                        {/* image */}
                                        <div className='d-flex flex-column  justify-content-center align-items-center'>
                                            <div>
                                                <img src={uberEats} alt="" className='w-100' />
                                            </div>
                                        </div>
                                        {/* buttons */}
                                        <div className=' d-flex justify-content-between '>
                                            <a href="https://uber-eats-clone-omega.vercel.app/" ><button className='btn btn-primary' >Live Link <FontAwesomeIcon icon={faLink} className='ms-1' /></button></a>
                                            <a href="https://github.com/Sadwalps/uber-eats--clone"><button className='btn btn-success' >Git Hub <FontAwesomeIcon icon={faGithub} className='ms-1' /></button></a>
                                        </div>
                                    </div>
                                    <div className="col-md-2"></div>
                                </div>
                            </div>
                            <div className="col-md-2"></div>
                        </div>
                    </Carousel.Item>


                    {/* bmi calculator */}
                    <Carousel.Item>
                        <div className="row">
                            <div className="col-md-2"></div>
                            <div className="col-md-8 ">
                                <div className="row">
                                    <div className="col-md-2"></div>
                                    <div className="col-md-8">
                                        <div>
                                            {/* Accordion for displaying technologies used */}
                                            <Accordion  >
                                                <Accordion.Item eventKey="0">
                                                    <Accordion.Header >
                                                        Technologies used
                                                    </Accordion.Header>
                                                    <Accordion.Body className='technologiesaccordion'>
                                                        <ol>
                                                            <li>HTML</li>
                                                            <li>CSS</li>
                                                            <li>React.js</li>
                                                            <li>React bootstrap</li>
                                                        </ol>
                                                    </Accordion.Body>
                                                </Accordion.Item>

                                            </Accordion>
                                        </div>
                                        {/* image */}
                                        <div className='d-flex flex-column  justify-content-center align-items-center'>
                                            <div>
                                                <img src={bmiCalculator} alt="" className='w-100' />
                                            </div>
                                        </div>
                                        {/* buttons */}
                                        <div className=' d-flex justify-content-between '>
                                            <a href="https://b-calculator.vercel.app/" ><button className='btn btn-primary' >Live Link <FontAwesomeIcon icon={faLink} className='ms-1' /></button></a>
                                            <a href="https://github.com/Sadwalps/b-calculator"><button className='btn btn-success' >Git Hub <FontAwesomeIcon icon={faGithub} className='ms-1' /></button></a>
                                        </div>
                                    </div>
                                    <div className="col-md-2"></div>
                                </div>
                            </div>
                            <div className="col-md-2"></div>
                        </div>
                    </Carousel.Item>

                    {/* image gallery */}
                    <Carousel.Item>
                        <div className="row">
                            <div className="col-md-2"></div>
                            <div className="col-md-8 ">
                                <div className="row">
                                    <div className="col-md-2"></div>
                                    <div className="col-md-8">
                                        <div>
                                            {/* Accordion for displaying technologies used */}
                                            <Accordion  >
                                                <Accordion.Item eventKey="0">
                                                    <Accordion.Header >
                                                        Technologies used
                                                    </Accordion.Header>
                                                    <Accordion.Body className='technologiesaccordion'>
                                                        <ol>
                                                            <li>HTML</li>
                                                            <li>CSS</li>
                                                            <li>React.js</li>
                                                            <li>React bootstrap</li>
                                                            <li>json-server</li>
                                                        </ol>
                                                    </Accordion.Body>
                                                </Accordion.Item>

                                            </Accordion>
                                        </div>
                                        {/* image */}
                                        <div className='d-flex flex-column  justify-content-center align-items-center'>
                                            <div>
                                                <img src={imgGallery} alt="" className='w-100' />
                                            </div>
                                        </div>
                                        {/* buttons */}
                                        <div className=' d-flex justify-content-between '>
                                            <a href="https://image-gallery-frontend-phi.vercel.app/" ><button className='btn btn-primary' >Live Link <FontAwesomeIcon icon={faLink} className='ms-1' /></button></a>
                                            <a href="https://github.com/Sadwalps/image-gallery-frontend"><button className='btn btn-success' >Git Hub <FontAwesomeIcon icon={faGithub} className='ms-1' /></button></a>
                                        </div>
                                    </div>
                                    <div className="col-md-2"></div>
                                </div>
                            </div>
                            <div className="col-md-2"></div>
                        </div>
                    </Carousel.Item>

                    {/* portfolio demo */}
                    <Carousel.Item>
                        <div className="row">
                            <div className="col-md-2"></div>
                            <div className="col-md-8 ">
                                <div className="row">
                                    <div className="col-md-2"></div>
                                    <div className="col-md-8">
                                        <div>
                                            {/* Accordion for displaying technologies used */}
                                            <Accordion  >
                                                <Accordion.Item eventKey="0">
                                                    <Accordion.Header >
                                                        Technologies used
                                                    </Accordion.Header>
                                                    <Accordion.Body className='technologiesaccordion'>
                                                        <ol>
                                                            <li>HTML</li>
                                                            <li>CSS</li>
                                                            <li>React.js</li>
                                                            <li>React bootstrap</li>
                                                        </ol>
                                                    </Accordion.Body>
                                                </Accordion.Item>

                                            </Accordion>
                                        </div>
                                        {/* image */}
                                        <div className='d-flex flex-column  justify-content-center align-items-center'>
                                            <div>
                                                <img src={portfolio} alt="" className='w-100' />
                                            </div>
                                        </div>
                                        {/* buttons */}
                                        <div className=' d-flex justify-content-between '>
                                            <a href="https://react-portfolio-one-bice.vercel.app/" ><button className='btn btn-primary' >Live Link <FontAwesomeIcon icon={faLink} className='ms-1' /></button></a>
                                            <a href="https://github.com/Sadwalps/react-portfolio"><button className='btn btn-success' >Git Hub <FontAwesomeIcon icon={faGithub} className='ms-1' /></button></a>
                                        </div>
                                    </div>
                                    <div className="col-md-2"></div>
                                </div>
                            </div>
                            <div className="col-md-2"></div>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
        </>
    )
}

export default Mainproject