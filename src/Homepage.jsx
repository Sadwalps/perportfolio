import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Homepage() {
  return (
   <>
   <div id='homepage' className='d-flex justify-content-center align-items-center p-2'>
    <div className='container-fluid'>
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-4">
          <div className='w-100 rounded'><img src="https://th.bing.com/th/id/R.743da4010483966718352b50a77e4875?rik=AuKunWb6vuCbTA&riu=http%3a%2f%2fwww.zastavki.com%2fpictures%2foriginals%2f2017Auto___Lamborghini_Yellow_fast_car_Lamborghini_Aventador_Novitec_Torado_LP_750-4_117619_.jpg&ehk=42rlkbN1o4VYXZGvHslvexX5IDSXY7eCctEzdiIloXc%3d&risl=&pid=ImgRaw&r=0" alt=""  className='w-100 rounded' /></div>
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
       <div className='mt-5  border border-2 border-primary w-75 ' style={{height:"40px", float:"right", borderRadius:"20px 0px 0px 20px"}}>
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
    <div className='mt-lg-5 mt-3'>
      <div className="row">
        <div className="col-3">
          
        </div>
        <div className="col-3"></div>
        <div className="col-3"></div>
        <div className="col-3"></div>
      </div>
    </div>
   </div>
   </>
  )
}

export default Homepage