import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

function Miniproject() {

    return (
        <>
            <div className='projectpageheader container-fluid'>
                <div className="row">
                    <div className="col-3"></div>
                    <div className="col-3"></div>
                    <div className="col-3"></div>
                    <div className="col-3 pe-3">
                        <Link to={'/'} > <button className='btn m-2 px-3' id='nav' style={{ float: "right" }}><FontAwesomeIcon icon={faArrowLeft} className='fa-2x' /></button></Link>
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