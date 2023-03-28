import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react'; 
import item1 from '../../images/images2.png' ;
import item2 from '../../images/images3.png' ;
import item3 from '../../images/images4.png' ;
import item4 from '../../images/images5.png' ;
import item5 from '../../images/images6.png' ;
import item6 from '../../images/images7.png' ;


export default class Portfolio extends Component {

  closeDisplay = ()=>{
        document.querySelector(".portLayer").classList.add('d-none');
  }

  displayModal(e){
        document.querySelector(".portLayer").classList.remove('d-none');
        let source = e.target.previousSibling.getAttribute("src");
        document.querySelector("#imageSourceDisplay").setAttribute("src" , source);
        let text = e.target.previousSibling.getAttribute("clickName");
        document.querySelector("#cardText").innerHTML = text 
  }
  
  render() {
    return <>
        <div className='py-5 position-relative'>
            <div className='dark-head text-center py-5'>
                <h1 className=' fw-bolder pt-5'>PORTFOLIO</h1>
                <div className='text-center py-3'>
                    <div className=' line pt-1 me-1 d-inline-block'></div>
                    <div className='darkStar d-inline-block mx-2'>
                        <svg className="svg-inline--fa fa-star fa-w-18 w-100" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                    </div>
                    <div className=' line pt-1 ms-1 d-inline-block'></div>
                </div>
            </div>
            <div className="container">
                <div className="row py-1 gy-5">
                    <div className="col-md-4 px-4">
                        <div className='port-div position-relative rounded-3 overflow-hidden'>
                            <img src={item1} className='w-100' alt="" id="imageSource" clickName="LOG CABIN" />
                            <div onClick={ this.displayModal}  className="layer position-absolute top-0 w-100 h-100 d-flex justify-content-center align-items-center">
                                <svg class="svg-inline--fa fa-plus fa-w-14 fa-3x text-white " aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path></svg>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 px-4">
                        <div className='port-div position-relative rounded-3 overflow-hidden'>
                            <img src={item2} className='w-100' alt="" id="imageSource" clickName="TASTY CAKE" />
                            <div onClick={ this.displayModal }  className="layer position-absolute top-0 w-100 h-100 d-flex justify-content-center align-items-center">
                                <svg class="svg-inline--fa fa-plus fa-w-14 fa-3x text-white " aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path></svg>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 px-4">
                        <div className='port-div position-relative rounded-3 overflow-hidden'>
                            <img src={item3} className='w-100' alt="" id="imageSource" clickName="CIRCUS TENT" />
                            <div onClick={ this.displayModal }  className="layer position-absolute top-0 w-100 h-100 d-flex justify-content-center align-items-center">
                                <svg class="svg-inline--fa fa-plus fa-w-14 fa-3x text-white " aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path></svg>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 px-4">
                        <div className='port-div position-relative rounded-3 overflow-hidden'>
                            <img src={item4} className='w-100' alt="" id="imageSource" clickName="CONTROLLER" />
                            <div onClick={ this.displayModal }  className="layer position-absolute top-0 w-100 h-100 d-flex justify-content-center align-items-center">
                                <svg class="svg-inline--fa fa-plus fa-w-14 fa-3x text-white " aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path></svg>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 px-4">
                        <div className='port-div position-relative rounded-3 overflow-hidden'>
                            <img src={item5} className='w-100' alt="" id="imageSource" clickName="LOCKED SAFE" />
                            <div onClick={ this.displayModal }   className="layer position-absolute top-0 w-100 h-100 d-flex justify-content-center align-items-center">
                                <svg class="svg-inline--fa fa-plus fa-w-14 fa-3x text-white " aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path></svg>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 px-4">
                        <div className='port-div position-relative rounded-3 overflow-hidden'>
                            <img src={item6} className='w-100' alt="" id="imageSource" clickName="SUBMARINE" />
                            <div onClick={ this.displayModal }   className="layer position-absolute top-0 w-100 h-100 d-flex justify-content-center align-items-center">
                                <svg class="svg-inline--fa fa-plus fa-w-14 fa-3x text-white " aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path></svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-100 d-none portLayer d-flex align-items-center justify-content-center portLayer position-absolute top-0  start-0 end-0'>
                <div className="container h-75 portLayerInside d-inline-block my-5 py-5 rounded-3  text-center bg-white border border-1 border-secondary ">
                    <div className=' w-100 position-relative '>
                        <button onClick={()=>{this.closeDisplay()}} className=' btn px-2 position-absolute closeIcon'> 
                            <FontAwesomeIcon icon="fa-solid fa-xmark" />
                        </button> 
                    </div>
                    <div className='dark-head text-center py-4'>
                        <h1 className=' fw-bolder' id="cardText"></h1>
                        <div className='text-center pt-3'>
                            <div className=' line pt-1 me-1 d-inline-block'></div>
                            <div className='darkStar d-inline-block mx-2'>
                                <svg className="svg-inline--fa fa-star fa-w-18 w-100" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                            </div>
                            <div className=' line pt-1 ms-1 d-inline-block'></div>
                        </div>
                    </div>
                    <div className='portImage mx-auto py-5 '>
                        <img  className='w-100 rounded-3' id="imageSourceDisplay" alt="" />
                    </div>
                    <div  className='w-75 mx-auto'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                    </div>
                    <button onClick={()=>{this.closeDisplay()}} className='btn text-white fs-6 rounded-2 btnIcon'>
                        <FontAwesomeIcon icon="fa-solid fa-xmark " />
                        <span className='ps-2'>Close Window</span>
                    </button>
                </div> 
            </div>
  
        </div>
    </>
  }
}





