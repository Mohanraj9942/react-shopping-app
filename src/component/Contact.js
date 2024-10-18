import React from 'react';
import {Link} from "react-router-dom";


function contact(){
    return(<>
  


{/* <!-- ----------------------homg bg img-------------- --> */}
<div className=" w-100">

{/* <!-- ----------------------nav bar-------------- --> */}

<div className="roboto position-fixed   w-100  navz">



  <nav className=" border-bottom navbar navbar-expand-lg navbar-light bg-white p-3">
    <div className="container-fluid">
      <a className="navbar-brand fw-bold carpointtxt" href="#"><span className="fs-4 green1">O</span>rganic 
       
        <i className="green1 fa-solid fa-apple-whole"></i></a>
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
            <Link className="me-lg-3 nav-link active px-2" aria-current="page" to="/Contact">Contact</Link>
          </li>
          <li className="nav-item">
            <Link className="me-lg-3 nav-link active px-2" aria-current="page" to="/About">About</Link>
          </li>
        

        </ul>
        <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn price text-white btnhoverp" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>


</div>





</div>



{/* <!-- ------------------------Contact us-------------- --> */}


<div className="roboto contact d-md-flex p-3 pt-5 bg-light justify-content-center pt-10 ">

  <div className=" conleft col-md-5  d-flex flex-column justify-content-center">
    <h1 className="carpointtxt2"><b>Contact us</b>
    </h1>
    <h6 className="fs-5 lh-base"> For general queries, buy Products and partnerships please
      drop a email anytime and we will reach you.
    </h6>
    <div className="d-none d-md-block">
      <div className="btn btnhoverp rounded-0 bg-black text-white p-2 px-4 mt-3 p-lg-3 px-lg-5">
        <i className="fa-regular fa-envelope"></i> E-Mail Us
      </div>

      <div className="btn btnhoverp rounded-0 bg-black text-white p-2 px-4 mt-3 p-lg-3 px-lg-5 ms-lg-3">
        <i className="fa-brands fa-whatsapp"></i> WhatsApp
      </div>
      <p className="mt-2"> (Sunday to Saturday from 8AM - 10PM )</p>
    </div>
  </div>
  <div className="conright col-md-5">
    <img className="w-100 mt-4 ms-md-5" src="./assets/contactus.png" alt="ll"/>
  </div>

  <div className="d-md-none text-center">
    <div className="btn btnhoverp rounded-0 bg-black text-white p-2 px-4 mt-3">
      <i className=" fa-regular fa-envelope"></i> E-Mail Us
    </div>

    <div className="btn btnhoverp rounded-0 bg-black text-white p-2 px-4 mt-3 ms-2">
      <i className="fa-brands fa-whatsapp"></i> WhatsApp
    </div>


    <p className="mt-2"> (Sunday to Saturday from 8AM - 10PM )</p>
  </div>

</div>



{/* <!-- ---------office location---------- --> */}

<div className="roboto location mt-4  p-xs-3 p-sm-3 ">
  <h2 className="carpointtxt2 text-center"> Organic Store Office Location</h2>
  <div className="d-sm-flex justify-content-center mt-4 ">
    <div className="d-sm-flex align-items-center justify-content-center col-md-10 bg-light">
      <div className="locleft w-50 mt-3 ">
        <iframe className="w-100"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31142.20065869923!2d79.51871830901302!3d12.662747007974666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52d76570ca83f1%3A0x4a607a60b20bcff4!2sCheyyar%2C%20Tamil%20Nadu%20604407!5e0!3m2!1sen!2sin!4v1723365918795!5m2!1sen!2sin"
           allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <div className="locright ms-sm-4 text-center ms-lg-5 ps-lg-5">
        <img src="./assets/india.svg" alt="sssd"/>
        <p> <b className="fs-5">India</b>, Store Address </p>
        <p>225, Pillaiyar Kovil Streer</p>
        <p>Cheyyar - 604407</p>
      </div>
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

export default contact;