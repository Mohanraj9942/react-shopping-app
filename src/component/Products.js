import React from 'react';
import {Link} from "react-router-dom";
import Cart from "./Cart";
function Products(){
    
  
    return(<>



  {/* <!-- ----------------------homg bg img-------------- --> */}
  <div className="roboto   w-100">

    {/* <!-- ----------------------nav bar-------------- --> */}

    <div className="position-fixed  w-100  navz pt-0">



      <nav className="border-bottom navbar navbar-expand-lg navbar-light bg-white p-lg-1 p-3">
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
                <Link className="me-lg-3  nav-link active px-2 " aria-current="page" to="/Products">Products</Link>
              </li>
             
              <li className="nav-item dropdown">
                <Link className="me-lg-3 nav-link active px-2  dropdown-toggle" href="#" id="navbarDropdown" role="button"
                  data-bs-toggle="dropdown" aria-expanded="false">
                  More
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><Link className="dropdown-item" to="/Contact">Contact</Link></li>
                  <li><Link className="dropdown-item" to="/About">About</Link></li>


                </ul>
              </li>

            </ul>


            <div className="cart-block"> 

                <div><p className="">Cart <i className="carttopicon green1 fa-solid fa-cart-shopping"></i></p></div>
                <div className="cart-count ps-1 ">0</div>
                
                    </div>

            <div className="mycart  p-2">
                <h4 className="text-center m-3">Cart items</h4>
                <div className="cart-content">
                
            
            
            </div>
               <div className="d-flex justify-content-end total">
                <p className="total-title">Total</p>
                <p className="ms-2 total-price">Rs.0</p>
               </div>
            <div>
                <Link href="" className="btn btn-primary">Place Order</Link>
            </div>
            
            <div className="close">
                  <i className="fa-solid fa-rectangle-xmark"></i>
                
            </div>
            
            </div>
            
            


            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn  text-white bg-black price fw-none btnhoverp" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>


    </div>

  </div>























    
    {/* <!-- ---------------nonveg food content----------- --> */}

    <div className="orderoveralll nonveg">

        <h2 className="font mb-5 pt-5"> <i className="green1 fa-solid fa-apple-whole"></i> FRESH ORGANIC FRUITS  <i className="green1 fa-solid fa-apple-whole"></i></h2>
        <div className="orderoverall">


            <div className="orderbox1">




                <div className="items1 dish">
                    <img className="imgfood" src="./assets/strawberry1.png" alt="items1"/>
                    <h3 className="font title">Fresh Organic Fruit - 1</h3>
                    <h5 className=""> <span className="price pri">Rs. 110.0</span> Item Code: 002</h5>

                    <p>Fruits are a good source of vitamins and minerals, including folate, vitamin C, and potassium.</p>
                <div className=" cart"><p className="carc">Add To Cart  <i className="carticon fa-solid fa-cart-shopping"></i></p></div>
               
                </div>


                <div className="items1 dish">
                    <img className="imgfood" src="./assets/Apple.jpg" alt="items1"/>
                    <h3 className="font title"> Fresh Organic Fruit - 2</h3>
                    <h5 className=""> <span className="price pri">Rs. 100.0</span> Item Code: 002</h5>

                    <p>Fruits are a good source of vitamins and minerals, including folate, vitamin C, and potassium.</p>
                <div className=" cart"><p className="carc">Add To Cart  <i className="carticon fa-solid fa-cart-shopping"></i></p></div>
               
                </div>

               
                <div className="items1 dish">
                    <img className="imgfood" src="./assets/cherry.png" alt="items1"/>
                    <h3 className="font title"> Fresh Organic Fruit - 3</h3>
                    <h5 className=""> <span className="price pri">Rs. 180.0</span> Item Code: 002</h5>

                    <p>Fruits are a good source of vitamins and minerals, including folate, vitamin C, and potassium.</p>
                <div className=" cart"><p className="carc">Add To Cart  <i className="carticon fa-solid fa-cart-shopping"></i></p></div>
               
                </div>


                <div className="items1 dish">
                    <img className="imgfood" src="./assets/produ_4.png" alt="items1"/>
                    <h3 className="font title"> Fresh Organic Fruit - 4</h3>
                    <h5 className=""> <span className="price pri">Rs. 100.0</span> Item Code: 002</h5>

                    <p>Fruits are a good source of vitamins and minerals, including folate, vitamin C, and potassium.</p>
                <div className=" cart"><p className="carc">Add To Cart  <i className="carticon fa-solid fa-cart-shopping"></i></p></div>
               
                </div>

                <div className="items1 dish">
                    <img className="imgfood" src="./assets/grapes.png" alt="items1"/>
                    <h3 className="font title"> Fresh Organic Fruit - 5</h3>
                    <h5 className=""> <span className="price pri">Rs. 300.0</span> Item Code: 002</h5>

                    <p>Fruits are a good source of vitamins and minerals, including folate, vitamin C, and potassium.</p>
                <div className=" cart"><p className="carc">Add To Cart  <i className="carticon fa-solid fa-cart-shopping"></i></p></div>
               
                </div>


                <div className="items1 dish">
                    <img className="imgfood" src="./assets/lemon.jpg" alt="items1"/>
                    <h3 className="font title"> Fresh Organic Fruit - 6</h3>
                    <h5 className=""> <span className="price pri">Rs. 240.0</span> Item Code: 002</h5>

                    <p>Fruits are a good source of vitamins and minerals, including folate, vitamin C, and potassium.</p>
                <div className=" cart"><p className="carc">Add To Cart  <i className="carticon fa-solid fa-cart-shopping"></i></p></div>
               
                </div>


                <div className="items1 dish">
                    <img className="imgfood" src="./assets/kiwi.png" alt="items1"/>
                    <h3 className="font title"> Fresh Organic Fruit - 7</h3>
                    <h5 className=""> <span className="price pri">Rs. 210.0</span> Item Code: 002</h5>

                    <p>Fruits are a good source of vitamins and minerals, including folate, vitamin C, and potassium.</p>
                <div className=" cart"><p className="carc">Add To Cart  <i className="carticon fa-solid fa-cart-shopping"></i></p></div>
               
                </div>
               

                <div className="items1 dish">
                    <img className="imgfood" src="./assets/orange1.png" alt="items1"/>
                    <h3 className="font title"> Fresh Organic Fruit - 8</h3>
                    <h5 className=""> <span className="price pri">Rs. 320.0</span> Item Code: 002</h5>

                    <p>Fruits are a good source of vitamins and minerals, including folate, vitamin C, and potassium.</p>
                <div className=" cart"><p className="carc">Add To Cart  <i className="carticon fa-solid fa-cart-shopping"></i></p></div>
               
                </div>


                <div className="items1 dish">
                    <img className="imgfood" src="./assets/mango.png" alt="items1"/>
                    <h3 className="font title"> Fresh Organic Fruit - 9</h3>
                    <h5 className=""> <span className="price pri">Rs. 300.0</span> Item Code: 002</h5>

                    <p>Fruits are a good source of vitamins and minerals, including folate, vitamin C, and potassium.</p>
                <div className=" cart"><p className="carc">Add To Cart  <i className="carticon fa-solid fa-cart-shopping"></i></p></div>
               
                </div>

                <div className="items1 dish">
                    <img className="imgfood" src="./assets/peach.png" alt="items1"/>
                    <h3 className="font title"> Fresh Organic Fruit - 10</h3>
                    <h5 className=""> <span className="price pri">Rs. 500.0</span> Item Code: 002</h5>

                    <p>Fruits are a good source of vitamins and minerals, including folate, vitamin C, and potassium.</p>
                <div className=" cart"><p className="carc">Add To Cart  <i className="carticon fa-solid fa-cart-shopping"></i></p></div>
               
                </div>


                <div className="items1 dish">
                    <img className="imgfood" src="./assets/papaya.jpg" alt="items1"/>
                    <h3 className="font title"> Fresh Organic Fruit - 11</h3>
                    <h5 className=""> <span className="price pri">Rs. 240.0</span> Item Code: 002</h5>

                    <p>Fruits are a good source of vitamins and minerals, including folate, vitamin C, and potassium.</p>
                <div className=" cart"><p className="carc">Add To Cart  <i className="carticon fa-solid fa-cart-shopping"></i></p></div>
               
                </div>

                <div className="items1 dish">
                    <img className="imgfood" src="./assets/produ_2.png" alt="items1"/>
                    <h3 className="font title"> Fresh Organic Fruit - 12</h3>
                    <h5 className=""> <span className="price pri">Rs. 100.0</span> Item Code: 002</h5>

                    <p>Fruits are a good source of vitamins and minerals, including folate, vitamin C, and potassium.</p>
                <div className=" cart"><p className="carc">Add To Cart  <i className="carticon fa-solid fa-cart-shopping"></i></p></div>
               
                </div>


                <div className="items1 dish">
                    <img className="imgfood" src="./assets/orange.jpg" alt="items1"/>
                    <h3 className="font title"> Fresh Organic Fruit - 13</h3>
                    <h5 className=""> <span className="price pri">Rs. 170.0</span> Item Code: 002</h5>

                    <p>Fruits are a good source of vitamins and minerals, including folate, vitamin C, and potassium.</p>
                <div className=" cart"><p className="carc">Add To Cart  <i className="carticon fa-solid fa-cart-shopping"></i></p></div>
               
                </div>

                <div className="items1 dish">
                    <img className="imgfood" src="./assets/red-apple.jpg" alt="items1"/>
                    <h3 className="font title"> Fresh Organic Fruit - 14</h3>
                    <h5 className=""> <span className="price pri">Rs. 170.0</span> Item Code: 002</h5>

                    <p>Fruits are a good source of vitamins and minerals, including folate, vitamin C, and potassium.</p>
                <div className=" cart"><p className="carc">Add To Cart  <i className="carticon fa-solid fa-cart-shopping"></i></p></div>
               
                </div>

                <div className="items1 dish">
                    <img className="imgfood" src="./assets/watermelon.png" alt="items1"/>
                    <h3 className="font title"> Fresh Organic Fruit - 15</h3>
                    <h5 className=""> <span className="price pri">Rs. 500.0</span> Item Code: 002</h5>

                    <p>Fruits are a good source of vitamins and minerals, including folate, vitamin C, and potassium.</p>
                <div className=" cart"><p className="carc">Add To Cart  <i className="carticon fa-solid fa-cart-shopping"></i></p></div>
               
                </div>

                <div className="items1 dish">
                    <img className="imgfood" src="./assets/pic3.jpg" alt="items1"/>
                    <h3 className="font title"> Fresh Organic Fruit - 16</h3>
                    <h5 className=""> <span className="price pri">Rs. 180.0</span> Item Code: 002</h5>

                    <p>Fruits are a good source of vitamins and minerals, including folate, vitamin C, and potassium.</p>
                <div className=" cart"><p className="carc">Add To Cart  <i className="carticon fa-solid fa-cart-shopping"></i></p></div>
               
                </div>


                <div className="items1 dish">
                    <img className="imgfood" src="./assets/grapes.png" alt="items1"/>
                    <h3 className="font title"> Fresh Organic Fruit - 17</h3>
                    <h5 className=""> <span className="price pri">Rs. 450.0</span> Item Code: 002</h5>

                    <p>Fruits are a good source of vitamins and minerals, including folate, vitamin C, and potassium.</p>
                <div className=" cart"><p className="carc">Add To Cart  <i className="carticon fa-solid fa-cart-shopping"></i></p></div>
               
                </div>

                <div className="items1 dish">
                    <img className="imgfood" src="./assets/gApple.jpg" alt="items1"/>
                    <h3 className="font title"> Fresh Organic Fruit - 18</h3>
                    <h5 className=""> <span className="price pri">Rs. 550.0</span> Item Code: 002</h5>

                    <p>Fruits are a good source of vitamins and minerals, including folate, vitamin C, and potassium.</p>
                <div className=" cart"><p className="carc">Add To Cart  <i className="carticon fa-solid fa-cart-shopping"></i></p></div>
               
                </div>

                <div className="items1 dish">
                    <img className="imgfood" src="./assets/Green Grapes.jpg" alt="items1"/>
                    <h3 className="font title"> Fresh Organic Fruit - 19</h3>
                    <h5 className=""> <span className="price pri">Rs. 500.0</span> Item Code: 002</h5>

                    <p>Fruits are a good source of vitamins and minerals, including folate, vitamin C, and potassium.</p>
                <div className=" cart"><p className="carc">Add To Cart  <i className="carticon fa-solid fa-cart-shopping"></i></p></div>
               
                </div>

                <div className="items1 dish">
                    <img className="imgfood" src="./assets/strawnb.jpg" alt="items1"/>
                    <h3 className="font title"> Fresh Organic Fruit - 20</h3>
                    <h5 className=""> <span className="price pri">Rs. 150.0</span> Item Code: 002</h5>

                    <p>Fruits are a good source of vitamins and minerals, including folate, vitamin C, and potassium.</p>
                <div className=" cart"><p className="carc">Add To Cart  <i className="carticon fa-solid fa-cart-shopping"></i></p></div>
               
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





 


<Cart />
</>
    )
   
}


export default Products;