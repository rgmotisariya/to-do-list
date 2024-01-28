"use client"
import React,{useState} from 'react'

const page = () => {
  const [title, settitle] = useState("") 
  const [desc, setdesc] = useState("")
  return (
    <>
    <h1 className='bg-slate-800 text-white text-center p-3 font-bold text-3xl '>My ToDo List</h1>
    <form className='p-3 justify-center '>
      
      <input type="text" className=' text-2xl border-2 border-black rounded-3xl mx-4 py-1  px-4'  placeholder='enter the task' value={title} on/>
      <input type="text" className=' text-2xl border-2 border-black rounded-3xl mx-4 py-1  px-4'  placeholder='enter description '/>
      <button className='bg-black text-2xl px-3 py-1 mx-4 rounded-3xl  text-white font-bold'>Add Task</button>
    </form>
    </>
  )
}

export default page
