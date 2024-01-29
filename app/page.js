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
      <li key={i} className='flex items-center justify-between'>
      <div className='flex justify-between mb-5 w-2/3'>
      <h5 className='text-2xl  font-semibold'> {t.title}</h5>
      <h6  className='text-xl  font-semibold'> {t.desc}</h6>
    </div>
    <button onClick={()=>{deleteHendeler(i)}} className='bg-red-400 rounded px-4 py-2 font-bold'>Delete</button>
    </li>
    );
  });
}
  return (
    <>
    <h1 className='bg-slate-800 text-white text-center p-3 font-bold text-3xl '>My ToDo List</h1>
    <form className='p-3'
          onSubmit={submitHendeler}>
      
      <input type="text" className=' text-2xl border-2 border-black rounded-3xl mx-4 py-1  px-4'  placeholder='enter the task' 
          value={title} 
          onChange={(e)=>{settitle(e.target.value)}} 
          />
      <input type="text" className=' text-2xl border-2 border-black rounded-3xl mx-4 py-1  px-4'  placeholder='enter description '
        value={desc} 
        onChange={(e)=>{setdesc(e.target.value)}} 
      />
      <button className='bg-black text-2xl px-3 py-1 mx-4 rounded-3xl  text-white font-bold'>Add Task</button>
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
