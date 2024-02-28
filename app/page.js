'use client'
import React, {useState} from 'react'

const page = () => {

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [task, setTask] = useState("");

    let renderTask = <h2>No Task Available !</h2>

    if(task.length > 0) {
        renderTask = task.map((t,i)=>{
            return (
                <div className='p-8 bg-slate-200 flex items-center justify-between m-2 w-2/3' key={i}>
                    <h2 className='text-xl'>{t.title}</h2>
                    <p className='text-xl'>{t.desc}</p>
                    <button className='bg-red-400 text-white font-bold px-3 py-2 rounded'
                    onClick={()=>deleteHandler(i)}
                    >Delete</button>
                </div>
            )
        })
    }
   
    const deleteHandler = (i) => {
        /* setTask(task.filter((t,j)=>j!==i)) */
        let copytask = [...task]
        copytask.splice(i,1)
        setTask(copytask);
    }

  return (
    <>
    <form onSubmit={(e)=> {
        e.preventDefault()
        console.log(title, desc);
        setTask([...task,{title,desc}])
        console.log(task)
        setTitle('');
        setDesc('');
    }}>
        <input 
        placeholder='enter title here' 
        className='text-2xl border-zinc-800 border-4 m-8 px-4 py-2'
        value={title}
        onChange={(e)=>setTitle(e.target.value)}
        
        />

        <input placeholder='Enter description here '
            className='text-2xl border-zinc-800 border-4 m-8 px-4 py-2'
            value={desc}
            onChange={(e)=>setDesc(e.target.value)}
        />

        <button
        className='bg-black text-white px-4 py-3 m-5 text-2xl fot-bold rounded'
        
        >Add Task</button>
    </form>
    <hr />
    <div className='p-8 bg-slate-200'>
       <ul>
       {renderTask}
       </ul>
    </div>

    </>
  )
}

export default page