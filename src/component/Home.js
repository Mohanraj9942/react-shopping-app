import React from 'react';
import {Outlet,Link} from "react-router-dom";

function home(){

   
    return( 
        <>
  

  {/* <!-- ----------------------homg bg img-------------- --> */}
  <div className="roboto homebg min-vh-100 w-100">

    {/* <!-- ----------------------nav bar-------------- --> */}

    <div className="position-fixed  w-100  navz pt-0">



      <nav className="border-bottom navbar navbar-expand-lg navbar-light bg-white p-3 ">
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
                <Link className=" me-lg-3 nav-link active px-2" aria-current="page" to ="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="me-lg-3  nav-link active px-2 " aria-current="page" to="/Products">Products</Link>
              </li>
              <li className="nav-item">
                <li><Link className="me-lg-3  nav-link active px-2" to="/Contact">Contact</Link></li>
              </li>

              <li className="nav-item">
                <li><Link className="me-lg-3  nav-link active px-2" to="/About">About</Link></li>
              </li>
             

            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn  text-white price btnhoverp" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>


    </div>



    {/* <!-- -------------home 1st page--------- --> */}

    <div
      className="pt-5 ps-5 carpointtxt2 position-relative homecontent text-white d-flex flex-column justify-content-center  w-100">

      <h2 className="slani homefont homefonttsha ptop-10 fw-bold fs-1">Nature Has Always</h2>

      <h3 className="slani homefont homefonttsha fw-bold fs-1 ">Cared For Us !</h3>


      <div className="d-flex gap-3 gap-lg-4 mt-4">
        <div className=" "><a className="btn btnhoverp text-white fs-5 bg-black  px-md-5  py-md-3 p-2 px-3" href="./products.html">
            View Products  <i className="green1 fa-solid fa-apple-whole"></i></a></div>

       
      </div>

   
    </div>



  </div>



  {/* <!-- ---------------branch--- --> */}


  <div className="bran ">
    <h2 className="carpointtxt2 slani text-center p-1 py-5">Fresh Organic</h2>
    <div className="roboto container-fluid d-flex flex-wrap justify-content-center align-items-center gap-4 ">


      <div className="py-3 slani branch1 d-flex justify-content-center align-items-center  rounded">
        <div className="left p-2 px-3">
          <i className="icon fa-solid fa-apple-whole"></i>
        </div>
        <div className="right p-2 px-3">
          <h5 className="">NATURAL</h5>
        </div>
      </div>


      <div className="py-3 slani branch1 d-flex justify-content-center align-items-center  rounded">
        <div className="left p-2 px-3">
          <i className="icon fa-solid fa-seedling"></i>
        </div>
        <div className="right p-2 px-3">
          <h5>ORGANIC</h5>
        </div>
      </div>




      <div className="py-3 slani branch1 d-flex justify-content-center align-items-center  rounded">
        <div className="left p-2 px-3">
          <i className="icon fa-solid fa-leaf"></i>
        </div>
        <div className="right p-2 px-3">
          <h5>HEALTH</h5>
        </div>
      </div>



     


    </div>

  </div>





  {/* <!-- -------------------new cars------------- --> */}


  <div className="p-2 py-5 newcarbox1 w-100  overflow-hidden">
    <h2 className="carpointtxt2 slani text-center mb-4">Our Best Products</h2>
    <div className="roboto newcarbox2 w-100 d-flex gap-4 gap-lg-5 flex-wrap align-items-center justify-content-center">




      <div className="slani car1  newcarbox3  bg-white rounded">
        <div className="topbox heartp">
          <img className="hover w-100 rounded-top" src="./assets/orange.jpg" alt="img1" />
          <div className="heartc">
            <i className="fa-solid fa-heart"></i>
          </div>

        </div>
        <div className="botbox text-center px-2  pb-3">
          <h5>Organic Fruit Orange</h5>
          <i className="c1 fa-solid fa-star"></i>
          <i className="c1 fa-solid fa-star"></i>
          <i className="c1 fa-solid fa-star"></i>
          <i className="c1 fa-solid fa-star"></i>
          <i className="c1 fa-solid fa-star-half-stroke"></i>
          <div className="text-start text-secondary">
          

            <p className="text-center mt-1 mb-1 ">Fruits are a good source of vitamins and minerals, including folate, vitamin C, and potassium.</p>
           
          </div>

          <a className="btnhoverp btn price fw-bold text-white px-5 mt-1 ">Rs. 150 - 1 Kg 
             </a>



        </div>

      </div>









      <div className="slani car1  newcarbox3  bg-white rounded">
        <div className="topbox heartp">
          <img className="hover w-100 rounded-top" src="./assets/Pom.jpg" alt="img2"/>
          <div className="heartc">
            <i className="fa-solid fa-heart"></i>
          </div>

        </div>
        <div className="botbox text-center px-2  pb-3">
          <h5>Organic Fruit Red Anar</h5>
          <i className="c1 fa-solid fa-star"></i>
          <i className="c1 fa-solid fa-star"></i>
          <i className="c1 fa-solid fa-star"></i>
          <i className="c1 fa-solid fa-star"></i>
          <i className="c1 fa-solid fa-star-half-stroke"></i>
          <div className="text-start text-secondary">
          

            <p className="text-center mt-1 mb-1 ">Fruits are a good source of vitamins and minerals, including folate, vitamin C, and potassium.</p>
           
          </div>

          <a className="btnhoverp btn price fw-bold text-white px-5 mt-1 ">Rs. 200 - 1 Kg 
             </a>
        </div>

      </div>



      <div className="slani car1  newcarbox3  bg-white rounded">
        <div className="topbox heartp">
          <img className="hover pro-2 rounded-top" src="./assets/produ_2.png" alt="img3"/>
          <div className="heartc">
            <i className="fa-solid fa-heart"></i>
          </div>

        </div>
        <div className="botbox text-center px-2  pb-3">
          <h5>Organic Fruit Red PineApple</h5>
          <i className="c1 fa-solid fa-star"></i>
          <i className="c1 fa-solid fa-star"></i>
          <i className="c1 fa-solid fa-star"></i>
          <i className="c1 fa-solid fa-star"></i>
          <i className="c1 fa-solid fa-star-half-stroke"></i>
          <div className="text-start text-secondary">
           

            
                <p className="text-center mt-1 mb-1 ">Fruits are a good source of vitamins and minerals, including folate, vitamin C, and potassium.</p>
           
          </div>

          <a className="btnhoverp btn price fw-bold text-white px-5 mt-1 ">Rs. 100 - 1 Kg 
             </a>

        </div>

      </div>



    </div>
    <div className=" allcars d-flex justify-content-center mt-5">
      <Link className="btnhoverp roboto fw-bold btn bg-black p-2 px-5 text-white"  to="/Products">View all Products</Link>

    </div>
  </div>








  {/* <!-- -------------------Great Car Services------------- --> */}


  <div className="py-3 d-flex  justify-content-center align-items-center flex-column">
    <h3 className="carpointtxt2 slani text-center mb-3">Organic Fruits Images</h3>
    <h3 className="carpointtxt2 slani text-center mb-3">Fresh Products </h3>
    <div className="roboto serviceimg w-100  row gap-1 gap-md-3 g-0 container-fluid justify-content-center">
      {/* <!-- -------------------------row 1--------------------- --> */}
      <div className=" slani row gap-1 gap-md-3">
        <div className="fimgonly p-1 p-sm-3 col litecol3   d-flex justify-content-center rounded">
          <img className="bg-white w-100 " src="./assets/grapes.png" alt="img5"/>
        </div>
        <div className="p-1 p-sm-3 col litecol3 d-flex justify-content-center rounded">
          <img className="w-100" src="./assets/strawnb.jpg" alt="img6"/>
        </div>
        <div className="p-1 p-sm-3 col litecol3  d-flex justify-content-center rounded">
          <img className="w-100" src="./assets/papaya.jpg" alt="img7"/>
        </div>

      </div>
      {/* <!-- -------------------------row 2-------------------- --> */}

      <div className="slani row gap-3 overflow-hidden">

        <div className="col gap-1 gap-md-3 d-flex flex-column ">
          <div className="p-1 p-sm-3 row litecol3 d-flex justify-content-center rounded">
            <img className="w-100" src="./assets/kiwi.png" alt="img8"/>

          </div>
          <div className="sha p-1 p-sm-3 row  d-flex justify-content-center rounded">
            <img className="mango-f w-100" src="./assets/orange1.png" alt="img9"/>

          </div>
        </div>
        <div className=" col-5 d-flex justify-content-center align-items-center rounded">

          <div className="row bg-white">
            <img className="w-100 carjump" src="./assets/produ_1.png" alt="img10"/>
          </div>
        </div>
        <div className="col gap-1  gap-md-3 d-flex flex-column ">
          <div className="p-1 p-sm-3 row litecol3 d-flex justify-content-center rounded">
            <img className=" w-100" src="./assets/cherry.png" alt="img11"/>

          </div>

          <div className="sha p-1 p-sm-3 row row  d-flex justify-content-center rounded">
            <img className="water-f" src="./assets/watermelon.png" alt="img12"/>

          </div>
        </div>


      </div>



      {/* <!-- -----------row 3------------------ --> */}
      <div className=" allservi row gap-3 ">
        <div className=" col-md-4 litecol3 p-1 py-2 align-items-center d-flex flex-column rounded">
          <p className="text-center fs-5 text-dark fw-bold">Fresh Organic Fruit</p>
          <img className="w-100 bg-white" src="./assets/strawberry1.png" alt="img13"/>
        </div>
        <div className=" col-md litecol3 p-1 py-2 align-items-center d-flex flex-column rounded">
          <p className="text-center fs-5 fw-bold">Fresh Organic Fruit</p>
          <img className="w-100 bg-white" src="./assets/peach.png" alt="img14"/>

        </div>

        <div className=" col-md-4 litecol3 p-1 py-2 align-items-center d-flex flex-column rounded">
          <p className="text-center fs-5 fw-bold">Fresh Organic Fruit</p>
          <img className="w-100" src="./assets/lemon.jpg" alt="img14"/>


        </div>
      </div>

      {/* <!-- -----------------------------row 4--------- --> */}

      <div className="row w-50 mt-3">
        <Link className="roboto btnhoverp btn price text-white p-3 mb-4 fw-bold fs-5"  to="/Products" >View all Fruits
        </Link>
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

   {/* --------------footer--------------- -- */}

  <div className="roboto p-4 copyright text-center bg-black text-light">
    <p className="mb-0">Organic copyright 2024, All Rights Reserved, Site by Mohanraj T.</p>
  </div>





  

 
   <Outlet/>
    
    </>)
}

export default home;


