import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from './../Footer/Footer';
import { Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ColorRing } from 'react-loader-spinner';



export default function Layour() {



  

    const [showLoader, setShowLoader] = useState(true);
  
          useEffect(() => {

            const timer = setTimeout(() => {
              setShowLoader(false);
            }, 1400);
        
            return () => clearTimeout(timer);
          }, []);


  
    return (
      <>
        {showLoader ? (
          <div className="loader"> <div className="vh-100  d-flex justify-content-center align-items-center">

                    <ColorRing
                    visible={true}
                    height="80"
                    width="80"
                    ariaLabel="blocks-loading"
                    wrapperStyle={{}}
                    wrapperclassName="blocks-wrapper"
                    colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
                  />

                </div>
            {}
          </div>
        ) : <>    <Navbar/>
                  <Outlet/>
                   <Footer/>
                                   </>
        
      
        
        }
      </>
    );
 






















  




}
