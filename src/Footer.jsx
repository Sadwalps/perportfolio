import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
    <div className='container-fluid' id='footermaindiv' >
        <div className="row p-3 pt-lg-4 pt-3 ">
            <div className="col-md-1"></div>
            <div className="col-md-4 pt-lg-4 pt-3">
              <h3 id='footername' className='text-center'>SADWAL PS</h3>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-5 d-flex justify-content-around align-items-center pt-lg-4 pt-3 pb-lg-4 pb-3">
              
                <a href="#about" id='nav' style={{textDecoration:"none"}}>About</a>
               <a href="#skills" id='nav' style={{textDecoration:"none"}}>Skills</a>
                <a href="#projects" id='nav' style={{textDecoration:"none"}}>Projects</a>
            </div>
            <div className="col-md-1"></div>
        </div>
    </div>
    </>
  )
}

export default Footer