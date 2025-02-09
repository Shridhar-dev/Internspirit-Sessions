"use client"

import { useState } from "react";

export default function Home() {
  const [value, setValue] = useState("")
  const [names, setNames] = useState([])
  const [id, setId] = useState(0)

  const get = async() =>{
    const rawdata =  await fetch("https://internspirit-frontend.vercel.app/api/items"); //GET // CALL OUR API
    const rdata = await rawdata.json() // JSON to OBJECT
    console.log(rdata); // LOGGING TO CONSOLE
    setNames(rdata.data)
  }

  const post = async() =>{
    await fetch("https://internspirit-frontend.vercel.app/api/items",{
      method: "POST",
      headers:{"Content-type":"application/json"},
      body: JSON.stringify({name: value}) 
    });

    get()
  }

  const put = async() =>{
    await fetch("https://internspirit-frontend.vercel.app/api/items",{
      method: "PUT",
      headers:{"Content-type":"application/json"},
      body: JSON.stringify({id:id, name: value}) 
    });

    get()
  }

  const deletereq = async() =>{
    await fetch("https://internspirit-frontend.vercel.app/api/items",{
      method: "DELETE",
      headers:{"Content-type":"application/json"},
      body: JSON.stringify({id: id}) 
    });

    get()
  }

  return (
    <div className="">
      <button onClick={get} className="bg-green-500 h-10 w-32">GET</button>
      <div className="">
        <input onChange={(e)=>setValue(e.target.value)} className="text-black" placeholder="Enter your name"/>
        <button onClick={post} className="bg-red-500 h-10 w-32">POST</button>    
      </div>
      <div className="">
        <input onChange={(e)=>setId(parseInt(e.target.value))} className="text-black" placeholder="Enter your id"/>
        <button onClick={put} className="bg-orange-500 h-10 w-32">PUT</button>    
        <button onClick={deletereq} className="bg-blue-500 h-10 w-32">DELETE</button>    
      </div>
      <div>
        {
          names.map((nameObj,i)=>{
            return(
              <p key={i} className="bg-gray-400 p-10 rounded-xl mx-10 transition-all hover:brightness-125 hover:translate-y-7">{nameObj.id} {nameObj.name}</p>
            )
          })
        }
      </div>
    </div>
  );
}
