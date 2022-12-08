//https://code.visualstudio.com/docs/nodejs/reactjs-tutorial

import logo from '../assets/pictures/logo1.png';
import Myimage1 from '../assets/pictures/home (1).jpg';
import Myimage2 from '../assets/pictures/home (2).jpg';
import Myimage3 from '../assets/pictures/home (3).jpg';
import Myimage4 from '../assets/pictures/home (4).jpg';
import Myimage5 from '../assets/pictures/home (5).jpg';
import Icone1 from '../assets/pictures/icon1.png';
import Icone2 from '../assets/pictures/icon2.png';
import Icone3 from '../assets/pictures/icon3.png';
import Map from './map.js';
import ImageSlider, { Slide } from "react-auto-image-slider";
import { View, StyleSheet, Image } from "react-native";
import App from '../App.css';



const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "right",
    alignItems: "right",
  },

})

export default function Home() {
  return (
    <div>


      <div className='first'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-lg-5'>
              <div className='slides'>
                <img src={Myimage1} className="img-fluid active" />
                <img src={Myimage4} className="img-fluid" />
              </div>
            </div>
            <div className='formbox'>
              
                <h1 className='text-center text-dark franimate'>
                  <span className='franimate'>
                    Welcome <span className='franimate'>to <span className='franimate'>the
                      <span className='franimate'>Lab <span className='franimate'> Assigmnet:<span className='franimate'> Travel
                        <span className='franimate'>Agency. <span className='franimate'>Tahere <span className='franimate'>Roshanzade<span className='franimate'>

                        </span>
                        </span>
                        </span>
                        </span>
                      </span>
                      </span>
                      </span>
                    </span>
                    </span>
                  </span>
                </h1>
              
            </div>
            <div className='col-lg-3 bg-whitecol bg-white'>
            </div>
          </div>
        </div>
      </div>

      {/* Middle-Part */}

      <div className='second'>
        <p className='fbody'>Our Service</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          condimentum tincidunt elit, vitae aliquam erat viverra non. Donec nec
          accumsan eros, in finibus velit. Aenean nunc risus, tincidunt ut felis quis,
          condimentum convallis mi. In ac elit eget eros luctus mollis id eu sapien.</p>
      </div>


      <div className='box'>
        <div className='box1 col col-3'>
          <img src={Myimage2} className='myimg pict1' />
          <p className='p-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus condimentum tincidunt elit,
            vitae aliquam erat viverra non.</p>
        </div>
        <div className='box1 col col-3'>
          <img src={Myimage2} className='myimg pict1' />
          <p className='p-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus condimentum tincidunt elit,
            vitae aliquam erat viverra non.</p>
        </div>
        <div className=' box1 col col-3'>
          <img src={Myimage2} className='myimg pict1' />
          <p className='p-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus condimentum tincidunt elit,
            vitae aliquam erat viverra non.</p>
        </div>
      </div>
      {/* Spam-Body--Empty */}
      <div className='spam'></div>
      <div className='spam'></div>

      {/* Footer-Part */}
      <div className='navbar navbar-expand-lg bg-success p-2 text-dark bg-opacity-50'>
        <div className='container-fluid'>
          <div className='collapse navbar-collapse footer'>
            <div className='box'>
              <div className='box1 col'>
                <p>Travel Agency</p>
                <div className='favicon'>
                  <img src={Icone1} /> <a className='link-dark' href='#'>Instagram</a>
                </div>
                <div className='favicon'>
                  <img src={Icone2} /> <a className='link-dark' href='#'>Telegram</a>
                </div>
                <div className='favicon'>
                  <img src={Icone3} /> <a className='link-dark' href='#'>Linkdin</a>
                </div>
              </div>
              <div className=' box1 col'> </div>
              <div className=' box1 col mapcol'>
                <iframe className='mapcol' src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d16785.04161461035!2d12.281633!3d58.27309530000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sse!4v1670141608951!5m2!1sen!2sse" />

              </div>

            </div>
          </div>
        </div>
      </div>




    </div>



  )
}