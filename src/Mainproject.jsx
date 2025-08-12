import React from 'react'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import Carousel from 'react-bootstrap/Carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'

import { useState } from 'react';
import restaurant from './assets/Restaurant.png'
import mobileShop from './assets/mobile-shop.png'
import portfolio from './assets/portfolio.png'
import library from './assets/library.png'
import uberEats from './assets/uber-eats-clone.png'
import Accordion from 'react-bootstrap/Accordion';

function Mainproject() {
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    return (
        <>
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
                                            <button className='btn btn-primary' >Live Link <FontAwesomeIcon icon={faLink} className='ms-1' /></button>
                                            <button className='btn btn-success' >Git Hub <FontAwesomeIcon icon={faGithub} className='ms-1' /></button>
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
                                            <button className='btn btn-primary' >Live Link <FontAwesomeIcon icon={faLink} className='ms-1' /></button>
                                            <button className='btn btn-success' >Git Hub <FontAwesomeIcon icon={faGithub} className='ms-1' /></button>
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
                                                            <li>sdas</li>
                                                            <li>asd</li>
                                                            <li>asd</li>
                                                            <li>sada</li>
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
                                            <button className='btn btn-primary' >Live Link <FontAwesomeIcon icon={faLink} className='ms-1' /></button>
                                            <button className='btn btn-success' >Git Hub <FontAwesomeIcon icon={faGithub} className='ms-1' /></button>
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
                                                            <li>sdas</li>
                                                            <li>asd</li>
                                                            <li>asd</li>
                                                            <li>sada</li>
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
                                            <button className='btn btn-primary' >Live Link <FontAwesomeIcon icon={faLink} className='ms-1' /></button>
                                            <button className='btn btn-success' >Git Hub <FontAwesomeIcon icon={faGithub} className='ms-1' /></button>
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
                                            <button className='btn btn-primary' >Live Link <FontAwesomeIcon icon={faLink} className='ms-1' /></button>
                                            <button className='btn btn-success' >Git Hub <FontAwesomeIcon icon={faGithub} className='ms-1' /></button>
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
                                            <button className='btn btn-primary' >Live Link <FontAwesomeIcon icon={faLink} className='ms-1' /></button>
                                            <button className='btn btn-success' >Git Hub <FontAwesomeIcon icon={faGithub} className='ms-1' /></button>
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
                                            <button className='btn btn-primary' >Live Link <FontAwesomeIcon icon={faLink} className='ms-1' /></button>
                                            <button className='btn btn-success' >Git Hub <FontAwesomeIcon icon={faGithub} className='ms-1' /></button>
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