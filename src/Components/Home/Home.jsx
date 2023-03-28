import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    return <>
      <div className="container-fluid home min-vh-100 d-flex align-items-center justify-content-center py-5">
        <div className='text-center my-5 py-5 text-white'> 
          <div className=' homeImg  mx-auto pt-5 '>
            <img src="images/images1.svg" className="w-100" alt="" />
          </div>
          <h1 className='fw-bolder'>START REACT</h1>
          <div className='text-center my-3'>
            <div className=' bg-white text-warning pt-1 me-1 w-25 d-inline-block'></div>
            <div className='homeStar d-inline-block mx-2'>
              <svg className="svg-inline--fa fa-star fa-w-18 w-100" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
            </div>
            <div className=' bg-white text-warning pt-1 ms-1 w-25 d-inline-block'></div>
          </div>
          <h4 className='py-3'>Graphic Artist - Web Designer - Illustrator</h4>
        </div>      
      </div>
    </>
  }
}
