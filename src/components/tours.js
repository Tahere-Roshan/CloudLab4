import React, { useEffect, useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import Cart from './cart'
import Header from './header'
import Product from "./product"
import Map from "./map"
import myImage1 from "../assets/pictures/home (5).jpg"
import uuid from 'react-uuid'
import { Link } from "react-router-dom"
import { DeleteTours } from "./deletetours"





export default function Tours() {


  const [tourList, settourList] = useState([])
  useEffect(() => {

    fetch('https://storefront20221206151127.azurewebsites.net/Tours')
      .then((Response) => Response.json())
      .then((data) => {
        settourList(data)
      })
      .catch((error) => {
        console.log(error.message);
      });

  }, []);



  const [cart, setCart] = useState([]);
 const addToCart = (el) => setCart((currentCart) => [...currentCart, el]);



  return (

    <div>

      <div className='row align-items-center bg-success p-2 text-dark bg-opacity-10'>
        <ul className="navabr-nav">
          <li className="nav-item"><Link to="/Add" className="nav-link"> Add</Link></li>
          <li className="nav-item"> <Link to="/DeleteTours" className="nav-link"> DeleteTours</Link></li>
          <li className="nav-item"> <Link to="/UpdateTours" className="nav-link"> UpdateTours</Link></li>
          <li className="nav-item"> <Link to="/Post" className="nav-link"> PostTour</Link></li>
        </ul>
       
      
     
      


      </div>
      <div className="container text-start"KEY={uuid()}>
        <div className="row"KEY={uuid()}>
          {tourList.map((tour) =>
            <div className="col"KEY={uuid()}>
              <div className="card mycard"KEY={uuid()}>
                <div className=" g-col-6 g-col-md-4"KEY={uuid()}>
                  <img src={myImage1} KEY={uuid()} className="tourimg" alt="..." />
                  <div className="card-body"KEY={uuid()}>

                    <h5 className="card-title text-center" KEY={uuid()}> {tour.description} </h5>
                    <p className="card-text text-center" KEY={uuid()}>ID:  {tour.id}</p>
                    <p className="card-text text-center" KEY={uuid()}>Date:  {tour.date}</p>
                    <p className="card-text text-center" KEY={uuid()}>Price:  {tour.price}</p>
                    <p className="card-text text-center"KEY={uuid()}>Reservation: {tour.reservations}</p>
                    <span KEY={uuid()}><button type="submit" className="btn bg-success p-2 text-dark bg-opacity-50" KEY={uuid()} onClick={() => addToCart(tour.id, "Tour")} >Add to Card</button></span>

                  </div>
                  <div className="card-footer"KEY={uuid()}>
                    <small className="text-muted"KEY={uuid()}>Last updated 3 mins ago</small>
                  </div>
                </div>
              </div>

            </div>
          )}



        </div>
      </div>
    </div>







  )
}