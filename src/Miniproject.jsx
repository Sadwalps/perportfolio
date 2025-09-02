import React from 'react'
// import { faGithub } from '@fortawesome/free-brands-svg-icons'
// import Carousel from 'react-bootstrap/Carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
// import restaurant from './assets/Restaurant.png'
// import mobileShop from './assets/mobile-shop.png'
// import portfolio from './assets/portfolio.png'
// import library from './assets/library.png'
// import uberEats from './assets/uber-eats-clone.png'
// import bmiCalculator from './assets/bmi-calculator.png'
// import imgGallery from './assets/img-gallery.png'
// import weatherWatch from './assets/weather-watch.png'
// import Accordion from 'react-bootstrap/Accordion';

function Miniproject() {
    
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
                <h1 id='nametitle' className='text-center mt-lg-4 mt-3 mb-lg-4 mb-3'>Mini Projects</h1>
               
                
            </div>
        </>
    )
}

export default Miniproject