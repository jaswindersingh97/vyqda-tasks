import React, { useState } from 'react'
import Task from './component/Task/Task'

function App() {
  const [notes,setNotes] = useState([
      {
        "heading": "Introduction to React",
        "paragraph": "React is a JavaScript library for building user interfaces. It allows developers to create reusable UI components.",
        "timestamp": "1640995200"
      },
      {
        "heading": "Understanding JavaScript Closures",
        "paragraph": "A closure is a function that retains access to its lexical scope, even when the function is executed outside that scope.",
        "timestamp": "1641081600"
      },
      { 
        "heading": "Node.js Basics",
        "paragraph": "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It's designed to build scalable network applications.",
        "timestamp": "1641168000"
      },        
  ]);
  const [note,setNote] = useState({
    id:"",
    heading :"",
    paragraph:"",
    timestamp:"",
  })
  const onsubmit = (e) =>{
    e.preventDefault();
    setNote((note)=>({...note , timestamp:Date.now()}));
    setNotes((prevdata)=>([...prevdata,note]));
    setNote({
      heading :"",
      paragraph:"",
      timestamp:"",  
    })
  }
  return (
    <div>
      <div className='heading'>
        <span>three lines</span>
        <span>Notes</span>
      </div>
      <div className='body'>
        <div className='upper'>
          <form onSubmit={onsubmit}>
          <input type='text' placeholder='Take a note...' value={note.heading} onChange={(e)=>setNote((note)=>({...note, heading:e.target.value}))}/>
          <input type='text' placeholder='enter the content' value={note.paragraph} onChange={(e)=>setNote((note)=>({...note, paragraph:e.target.value}))}/ >
          <button type='submit'/>
          </form>
        </div>
        <div className='lower'>
        {notes.map((item) =>(
          <Task data={item} key={item.timestamp}/>
        ))}
          {/* <Task data={}/> */}
        </div>
      </div>
      
    </div>
  )
}

export default App
