import React from 'react';
import {Link} from "react-router-dom";


function about(){
    return(<>
 
 {/* <!------------------------homg bg img-------------- --> */}
  <div className=" w-100">

    {/* <!-- ----------------------nav bar-------------- --> */}

    <div className="roboto position-fixed  w-100 navz">



      <nav className="border-bottom navbar navbar-expand-lg navbar-light bg-white p-3 ">
        <div className="container-fluid">
          <Link className="navbar-brand fw-bold carpointtxt" href="#"><span className="fs-4 green1">O</span>rganic 
           
            <i className="green1 fa-solid fa-apple-whole"></i></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="navli flex-grow-0 collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className=" nav-item mt-3 mt-lg-0">
                <Link className=" me-lg-3 nav-link active px-2" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="me-lg-3  nav-link active px-2" aria-current="page" to="/Products">Products</Link>
              </li>
              <li className="nav-item">
                <Link className="me-lg-3 nav-link active px-2" aria-current="page"  to="/Contact">Contact</Link>
              </li>
              <li className="nav-item">
                <Link className="me-lg-3 nav-link active px-2" aria-current="page"   to="/About">About</Link>
              </li>
         
             
            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btnhoverp btn price text-white" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>


    </div>





  </div>




  {/* <!-- -------------about 1st page--------- --> */}

  <div className="abouttext   container-fluid    d-flex  justify-content-center  w-100">


    <h1 className="carpointtxt2  text-dark">About Us</h1>



  </div>






  {/* <!-- ------------------------service Cars-------------- --> */}

  <div className="newcar d-md-flex  align-items-center p-3 container-fluid overflow-hidden">
    <div className="newcarleft col-md-5 ">

      <img className="object-fit-cover w-100 mt-4 mt-md-0 carjump2" src="./assets/strawberry1.png " alt="imjp"/>


    </div>



    <div className="newcarright col-md-7 ">

      <div className="roboto">

        <p>We started this comapany to make people's Dream come true and Enjoy their life at full potential</p>
        <p>“Organically grown” food is food grown and processed using no synthetic fertilizers or pesticides.

          Instead of relying on chemicals, Organic Farming relies on natural principles like biodiversity and composting to produce healthy, abundant food.
          
          We are following the accumulated wisdom and tens of centuries’ forth of knowledge of “natural” gardeners, stepping back from the control-crazy chemical garden practices that have become “conventional” only very recently, over the course of the last hundred years((Ogden, S. Straight-Ahead Organic, Chelsea Green Publishing Company)).

        </p>
      </div>
    </div>




  </div>



























  {/* <!-- ----------------------footer------------------------- --> */}
  <div className="footer d-md-flex  p-2 py-3 mt-2 bg-secondary">
    <div className="roboto left col-md-6 mt-5 ">
      <h3 className="carpointtxt2">Opening Hours</h3>
      <h6> Monday -- Friday</h6>
      <p>7.00 AM -- 10.00 PM</p>

      <h6>Saturday</h6>
      <p>7.00 AM -- 4.00 PM</p>

      <h6>Sunday</h6>
      <p>7.00 AM -- 1.00 PM</p>


    </div>
    <div className="roboto right  w-100 mt-md-5">
      <h3 className="carpointtxt2">Contact Info</h3>

      <div className="row container-fluid p-0">
        <i className="fs-3 fa-brands fa-whatsapp"></i>
        <p>+91 9942435575</p>
      </div>


      <div className="row container-fluid p-0">
        <i className="fs-4 fa-solid fa-envelope"></i>

        <p>Organic@gmail.com</p>
      </div>


      <div className="row container-fluid p-0">
        <i className="fs-3 fa-solid fa-location-dot"></i>
        <p className="mb-0">225, Pillaiyar Kovil Streer</p>
        <p className="mt-0">Cheyyar, 604407.</p>
      </div>

    </div>


  </div>

  {/* <!-- --------------footer--------------- --> */}

  <div className="roboto p-4 copyright text-center bg-black text-light">
    <p className="mb-0">Organic copyright 2024, All Rights Reserved, Site by Mohanraj T.</p>
  </div>



 
   
    </>)
}

export default about