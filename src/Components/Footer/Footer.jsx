import React, { Component } from 'react' ;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Footer extends Component {
  render() {
    return <>
        <div className="footer1">
            <div className="container py-4">
                <div className="row text-white text-center py-4">
                    <div className="col-md-4">
                        <h3>LOCATION</h3>
                        <div className='px-4 d-flex justify-content-center py-3'>
                            <p className='w-75 fs-5' >2215 John Daniel Drive Clark, MO 65243</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <h3>AROUND THE WEB</h3>
                        <div className='d-flex justify-content-center  iconsHolder py-2 '>
                            <div className='rounded-circle overflow-hidden mx-2 border border-2 border-white p-2'>
                                <FontAwesomeIcon icon="fa-brands fa-facebook-f" />
                            </div>
                            <div className='rounded-circle overflow-hidden mx-2 border border-2 border-white p-2'>
                                <FontAwesomeIcon icon="fa-brands fa-twitter" />
                            </div>
                            <div className='rounded-circle overflow-hidden mx-2 border border-2 border-white p-2'>
                                <FontAwesomeIcon icon="fa-brands fa-linkedin-in" />                                 </div>
                            <div className='rounded-circle overflow-hidden mx-2 border border-2 border-white p-2'>
                                <FontAwesomeIcon icon="fa-brands fa-dribbble" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <h3>ABOUT FREELANCER</h3>
                        <div className='px-4 d-flex justify-content-center py-3'>
                            <p className=' fs-5' >Freelance is a free to use, MIT licensed Bootstrap theme created by Route</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <div className="footer2 text-white text-center py-4">
             <span>Copyright © Your Website 2021</span>
        </div>
    </>
  }
}
