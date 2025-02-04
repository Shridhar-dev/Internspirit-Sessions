// src/app/page.js

'use client'  // used to tell next js that this is a client side file

import React,{useState} from 'react' //import statement

function Home() {

  let [count, setCount] = useState(1); //useState is a hook that allows you to have state variables in functional components


  function increment(){
  
    setCount(count+1)   //setCount is a function that allows you to change the value of the state variable
    
  }

  function decrement(){
    setCount(count-1)  //setCount is a function that allows you to change the value of the state variable
  }
  


  return (


    <div className='h-screen flex gap-3 justify-center items-center'>

      <p className='text-3xl'>Likes: {count} </p>

      <button onClick={increment} className='border bg-green-400 p-5 mr-5'>Up</button>

      <button onClick={decrement} className='border bg-red-400 p-5 mr-5'>Down</button>
      
    </div>
  )
}



export default Home //exporting the component