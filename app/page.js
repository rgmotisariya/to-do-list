"use client"
import { useSearchParams } from 'next/navigation'
import { list } from 'postcss'
import React,{useState} from 'react'

const page = () => {
  const [title, settitle] = useState("") 
  const [desc, setdesc] = useState("")
  const [mainTask, setMainTask] = useState([])
 
  const submitHendeler = (e) => { 
    e.preventDefault()
    setMainTask([...mainTask, { title , desc }])
    settitle("")
    setdesc("")
    console.log(mainTask)
     };
    const deleteHendeler=(i)=>{
      let copyTask=[...mainTask]
      copyTask.splice(i,1)
      setMainTask(copyTask)
    }
   let renderTask =<h2> No Task Available </h2>;
  if(mainTask.length > 0){
   renderTask= mainTask.map((t,i)=>{
    return (
      <li key={i} className='flex items-center justify-between className="p-4 bg-gray-100 rounded-md shadow-md">'>
      <div className='flex justify-between  w-full'>
      <h5 className='text-xl  font-semibold'> {t.title}</h5>
      <h6  className='text-md  font-semibold'> {t.desc}</h6>
    </div>
    <button onClick={()=>{deleteHendeler(i)}} className='bg-red-400 rounded px-4 py-2 font-bold'>Delete</button>
    </li>
    );
  });
}
  return (
    <>
    <h1 className='bg-slate-800 text-white text-center p-3 font-bold text-3xl '>My ToDo List</h1>
    <form className='flex justify-center items-center my-4'
          onSubmit={submitHendeler}>
      
      <input type="text" className=' text-2xl border-2 border-black rounded-md mx-4 py-1  px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full md:w-1/2 lg:w-1/3'  placeholder='enter the task' 
          value={title} 
          onChange={(e)=>{settitle(e.target.value)}} 
          />
      <input type="text" className='text-2xl border-2 border-black rounded-md mx-4 py-1  px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full md:w-1/2 lg:w-1/3'  placeholder='enter description '
        value={desc} 
        onChange={(e)=>{setdesc(e.target.value)}} 
      />
      <button className='bg-blue-500  text-xl mx-4 py-1  px-4 rounded-md text-white font-bold focus:outline-none hover:bg-blue-700'>Add Task</button>
    </form>
    <hr/>
    <div className='bg-slate-200 p-8'>
     <ul>
      {renderTask}
     </ul>
    </div>
    </>
  )
}

export default page
