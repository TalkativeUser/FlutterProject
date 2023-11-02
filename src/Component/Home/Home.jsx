import React, { useEffect, useState } from 'react'



export default function Home() {


  useEffect( ()=>{  document.body.style.overflow = 'auto';



},[] )

  return <>
  
  <div className='vh-100 text-white  bg-secondary home d-flex justify-content-center align-items-end ' >


<h1 className='animate__animated animate__bounceInDown' > I`M Flutter Developer</h1>


  </div>
  </>

}
