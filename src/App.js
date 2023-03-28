import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react' ;
import Home from './Components/Home/Home' ;
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Layer from './Components/Layer/Layer';
import Portfolio from './Components/Portfolio/Portfolio';
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom';



let route = createBrowserRouter([
  {path:"" , element: <Layer />  , children: [
    {path:"/" , element:<Home />},
    {path:"/home" , element: <Home />},
    {path:"/portfolio" , element : <Portfolio />},
    {path:"/about" , element : <About />},
    {path:"/contact" , element : <Contact />},
    {path:" * " , element : "<div  className='d-flex align-items-center justify-content-center text-danger'> <h1>There is a wrong</h1></div>"}
  ]}
])

export default class App extends Component {
  render() {
    return <>
      <RouterProvider router={route} />
    </>
  }
}
