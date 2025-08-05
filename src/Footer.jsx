import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
    <div className='container-fluid' id='footermaindiv'>
        <div className="row p-3 mt-lg-4 mt-3 ">
            <div className="col-md-1"></div>
            <div className="col-md-4 pt-lg-4 pt-3">
              <h3 id='footername' className='text-center'>SADWAL PS</h3>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-5 d-flex justify-content-around align-items-center pt-lg-4 pt-3 pb-lg-4 pb-3">
                <Link href="#about" id='nav' style={{textDecoration:"none"}}>About</Link>
                <Link href="#skills" id='nav' style={{textDecoration:"none"}}>Skills</Link>
                <Link href="#projects" id='nav' style={{textDecoration:"none"}}>Projects</Link>
            </div>
            <div className="col-md-1"></div>
        </div>
    </div>
    </>
  )
}

export default Footer