import React, { Component } from 'react'
import { ReactDOM } from 'react-dom/client';

export default class Contact extends Component {
    validationEmail(){
        let emailInp = document.querySelector("#emailInput").value ;
        let emailCode = /^[a-z0-9_-]{1,}[@]{1}[a-z]{1,}[.]{1}[a-z]{2,}$/i
        let result = emailCode.test(emailInp);
        if(result == false ){
             document.querySelector(".warning").classList.remove("d-none");
        }
        else{
            document.querySelector(".warning").classList.add("d-none");
        }
    }
  render() {
    return <>
                <div className='py-5 my-5'>
            <div className='dark-head text-center py-2'>
                <h1 className=' fw-bolder pt-5'> CONTACT ME</h1>
                <div className='text-center py-3'>
                    <div className=' line pt-1 me-1 d-inline-block'></div>
                    <div className='darkStar d-inline-block mx-2'>
                        <svg className="svg-inline--fa fa-star fa-w-18 w-100" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                    </div>
                    <div className=' line pt-1 ms-1 d-inline-block'></div>
                </div>
            </div>
            <div className="container  d-flex align-items-center justify-content-center">
                <div className=' contact-holder'>
                    <div className='py-4 my-3  ps-3'>
                        <span className='note'>Name</span>
                        <input type="text" placeholder='Name'  className='z-3 w-100 bg-transparent border-0'/>
                    </div>
                    <div className='py-4 my-3 ps-3'>
                        <span className='note'>Email Address</span>
                        <input type="email" onKeyUp={this.validationEmail} placeholder='Email Address' id="emailInput"  className='w-100 bg-transparent border-0'/>
                        <li  className='warning text-danger fs-6 ps-4 py-2 d-none'>Not a valid email address</li>
                    </div>
                    <div className='py-4 my-3 ps-3'>
                        <span className='note'>Phone Number</span>
                        <input type="number" placeholder='Phone Number' className='w-100 bg-transparent border-0' />
                    </div>
                    <div className='py-4 my-3 ps-3'>
                        <span className='note'>Message</span>
                        <textarea placeholder='Message'rows="5" className='w-100 bg-transparent border-0'></textarea>
                    </div>

                    <button className=' contact-btn btn py-3 px-4 text-white fs-5 '>Send</button>
                </div>
            </div>
        </div>

    </>
  }
}
