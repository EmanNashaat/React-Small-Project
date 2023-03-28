import React, { Component } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'

export default class Layer extends Component {
  render() {
    return <>
        <Navbar />

        <Outlet />

        <Footer />
    </>
  }
}
