
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  coloring(e){
    document.querySelector(".activation").classList.remove("active");
    e.target.classList.add("active")
  }
  render() {
    return <>
    <nav class="navbar navbar-expand-lg w-100  position-fixed top-0 start-0 end-0">
        <div class="container-fluid  py-2 ">
          <a class="navbar-brand text-white fw-bold fs-3 ps-5 ms-5" href="#">START REACT</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0 me-5 pe-5 fs-5 navUl">
              <li class="nav-item mx-2 py-3 activation " onMouseUp={this.coloring} >
                <Link class="nav-link text-white fw-bold" aria-current="page" to="portfolio">PORTFOLIO</Link>
              </li>
              <li class="nav-item mx-2 py-3 activation " onMouseUp={this.coloring} >
                <Link class="nav-link text-white fw-bold" to="about">ABOUT</Link>
              </li>
              <li class="nav-item mx-2 py-3 activation " onMouseUp={this.coloring} >
                <Link class="nav-link text-white fw-bold" to="contact">CONTACT</Link>
              </li>
            </ul>
          </div>
        </div>
    </nav>

    
    </>
  }
}
