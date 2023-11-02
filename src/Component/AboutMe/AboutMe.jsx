import React from 'react'
import { useEffect } from 'react';
export default function AboutMe() {

  useEffect( ()=>{  document.body.style.overflow = 'auto'; },[] )


  return (
    <div className=' d-flex justify-content-center align-items-center bg-dark text-white  p-5' >  
    
    <p className='p-5 h5' >

      <h2 className='animate__animated animate__bounceInDown' >ABOUT MY</h2>

<p className='m-5 animate__animated animate__bounceInDown animate__delay-1s ' >    My name is <h2 className='text-success' >Mohamed Mahmoud Atiya</h2> I'm 21 years old, and I study Educational Technology in the Faculty of Education at Al-Azhar University. In 2022, I began studying programming, starting with the basics of the C++ programming language. I then progressed to studying Object-Oriented Programming (OOP) and later delved into data structures and algorithms.
</p>
<p className='m-5 animate__animated animate__bounceInDown animate__delay-2s ' >I have spent a significant amount of time solving programming problems on various platforms such as Codeforces, HackerRank, and LeetCode. 
</p>
<p className='m-5 animate__animated animate__bounceInDown animate__delay-3s '  >Then, I have started studying mobile application development using Flutter.
</p>

<p className='m-5 animate__animated animate__bounceInDown animate__delay-4s ' > I utilize all the concepts and knowledge I have acquired to develop high-quality software that is maintainable, flexibility ,testability  ,modifiable, and written with clean code .
</p>

    </p>
    
    
    </div>
  )
}
